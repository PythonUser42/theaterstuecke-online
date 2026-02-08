import { Resend } from "resend";
import type { Order } from "./orders";
import { generateDownloadToken } from "./orders";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmation(order: Order, baseUrl: string) {
  const itemsHtml = order.items
    .map((item) => {
      const token = generateDownloadToken(order.sessionId, item.playSlug);
      const downloadUrl = `${baseUrl}/api/download?token=${token}`;
      return `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #e6b800;">${item.title}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e6b800; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e6b800; text-align: right;">${(item.price * item.quantity).toFixed(2).replace(".", ",")} €</td>
          <td style="padding: 8px; border-bottom: 1px solid #e6b800; text-align: center;">
            <a href="${downloadUrl}" style="color: #cc3333; text-decoration: underline;">Download</a>
          </td>
        </tr>
      `;
    })
    .join("");

  const html = `
    <div style="font-family: 'Roboto', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdeaa1; padding: 30px; border-radius: 20px;">
      <h1 style="font-family: 'Amatic SC', cursive; color: #cc3333; font-size: 32px; text-align: center; margin-bottom: 20px;">
        Vielen Dank für Ihre Bestellung!
      </h1>

      <p style="color: #424242; font-size: 15px; line-height: 1.65;">
        Ihre Bestellung wurde erfolgreich bezahlt. Hier finden Sie Ihre Downloads:
      </p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 12px; overflow: hidden;">
        <thead>
          <tr style="background: #ffcc00;">
            <th style="padding: 10px 8px; text-align: left; color: #1a1a1a;">Titel</th>
            <th style="padding: 10px 8px; text-align: center; color: #1a1a1a;">Menge</th>
            <th style="padding: 10px 8px; text-align: right; color: #1a1a1a;">Preis</th>
            <th style="padding: 10px 8px; text-align: center; color: #1a1a1a;">Download</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 10px 8px; font-weight: bold;">Gesamt</td>
            <td style="padding: 10px 8px; text-align: right; font-weight: bold; color: #cc3333;">
              ${order.totalAmount.toFixed(2).replace(".", ",")} €
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <p style="color: #424242; font-size: 13px; line-height: 1.65;">
        Die Download-Links sind 72 Stunden gültig. Bei Fragen wenden Sie sich bitte an unser Kontaktformular.
      </p>

      <p style="color: #424242; font-size: 15px; margin-top: 20px; text-align: right;">
        Herzliche Grüße,<br/>
        <strong>Claudia Kumpfe</strong><br/>
        Theaterstücke Online
      </p>
    </div>
  `;

  await resend.emails.send({
    from: "Theaterstücke Online <bestellung@theaterstuecke-online.de>",
    to: order.email,
    subject: `Ihre Bestellung bei Theaterstücke Online`,
    html,
  });
}
