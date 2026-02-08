"use client";

import { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from "react";

export interface CartItem {
  playSlug: string;
  variantId: string | null;
  title: string;
  variantName: string | null;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  hydrated: boolean;
}

type CartAction =
  | { type: "ADD"; item: Omit<CartItem, "quantity">; quantity?: number }
  | { type: "REMOVE"; playSlug: string; variantId: string | null }
  | { type: "SET_QUANTITY"; playSlug: string; variantId: string | null; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartKey(playSlug: string, variantId: string | null) {
  return `${playSlug}::${variantId ?? "default"}`;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const key = cartKey(action.item.playSlug, action.item.variantId);
      const existing = state.items.find(
        (i) => cartKey(i.playSlug, i.variantId) === key
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            cartKey(i.playSlug, i.variantId) === key
              ? { ...i, quantity: i.quantity + (action.quantity ?? 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: action.quantity ?? 1 }],
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (i) => cartKey(i.playSlug, i.variantId) !== cartKey(action.playSlug, action.variantId)
        ),
      };
    case "SET_QUANTITY": {
      if (action.quantity <= 0) {
        return cartReducer(state, { type: "REMOVE", playSlug: action.playSlug, variantId: action.variantId });
      }
      return {
        ...state,
        items: state.items.map((i) =>
          cartKey(i.playSlug, i.variantId) === cartKey(action.playSlug, action.variantId)
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return { ...state, items: action.items, hydrated: true };
    default:
      return state;
  }
}

const STORAGE_KEY = "cart";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  total: number;
  hydrated: boolean;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (playSlug: string, variantId: string | null) => void;
  setQuantity: (playSlug: string, variantId: string | null, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], hydrated: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({ type: "HYDRATE", items: JSON.parse(stored) });
      } else {
        dispatch({ type: "HYDRATE", items: [] });
      }
    } catch {
      dispatch({ type: "HYDRATE", items: [] });
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (state.hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items, state.hydrated]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity?: number) =>
      dispatch({ type: "ADD", item, quantity }),
    []
  );
  const removeItem = useCallback(
    (playSlug: string, variantId: string | null) =>
      dispatch({ type: "REMOVE", playSlug, variantId }),
    []
  );
  const setQuantity = useCallback(
    (playSlug: string, variantId: string | null, quantity: number) =>
      dispatch({ type: "SET_QUANTITY", playSlug, variantId, quantity }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, itemCount, total, hydrated: state.hydrated, addItem, removeItem, setQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
