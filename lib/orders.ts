import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface OrderItem {
  playSlug: string;
  variantId: string | null;
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  sessionId: string;
  email: string;
  items: OrderItem[];
  paidAt: string;
  totalAmount: number;
}

const ORDERS_DIR = path.join(process.cwd(), "data", "orders");

function ensureDir() {
  if (!fs.existsSync(ORDERS_DIR)) {
    fs.mkdirSync(ORDERS_DIR, { recursive: true });
  }
}

export function saveOrder(order: Order): void {
  ensureDir();
  const filePath = path.join(ORDERS_DIR, `${order.sessionId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(order, null, 2));
}

export function getOrder(sessionId: string): Order | null {
  const filePath = path.join(ORDERS_DIR, `${sessionId}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

/**
 * Generate a signed download token for an order item.
 * Token = base64(sessionId:playSlug:expiry:hmac)
 */
export function generateDownloadToken(
  sessionId: string,
  playSlug: string,
  expiryHours = 72
): string {
  const secret = process.env.STRIPE_SECRET_KEY || "dev-secret";
  const expiry = Date.now() + expiryHours * 60 * 60 * 1000;
  const payload = `${sessionId}:${playSlug}:${expiry}`;
  const hmac = crypto.createHmac("sha256", secret).update(payload).digest("hex").slice(0, 16);
  return Buffer.from(`${payload}:${hmac}`).toString("base64url");
}

export function verifyDownloadToken(
  token: string
): { sessionId: string; playSlug: string } | null {
  try {
    const secret = process.env.STRIPE_SECRET_KEY || "dev-secret";
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length !== 4) return null;

    const [sessionId, playSlug, expiryStr, providedHmac] = parts;
    const expiry = parseInt(expiryStr, 10);

    if (Date.now() > expiry) return null;

    const payload = `${sessionId}:${playSlug}:${expiryStr}`;
    const expectedHmac = crypto.createHmac("sha256", secret).update(payload).digest("hex").slice(0, 16);

    if (providedHmac !== expectedHmac) return null;

    return { sessionId, playSlug };
  } catch {
    return null;
  }
}
