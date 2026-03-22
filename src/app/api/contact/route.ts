import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// 🔁 CORS para solicitudes preflight
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://www.coralboatsmallorca.com',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Translations for confirmation emails
const emailTranslations: Record<string, Record<string, string>> = {
  en: {
    subject: 'Your Charter Booking Request - Coral Boats Mallorca',
    greeting: 'Hello',
    intro: 'Thank you for your private charter booking request with Coral Boats Mallorca. We have received your request successfully.',
    summaryTitle: 'Your Request Summary',
    date: 'Date',
    duration: 'Duration',
    guests: 'Guests',
    extras: 'Extras',
    extrasNone: 'None',
    message: 'Your Message',
    nextSteps: 'Our team will review your request and we will contact you within a few hours to confirm availability and finalize the details.',
    contact: 'If you have any questions in the meantime, feel free to contact us at',
    thanks: 'Thank you for choosing Coral Boats Mallorca!',
    team: 'The Coral Boats Team',
  },
  es: {
    subject: 'Tu Solicitud de Charter - Coral Boats Mallorca',
    greeting: 'Hola',
    intro: 'Gracias por tu solicitud de reserva de charter privado con Coral Boats Mallorca. Hemos recibido tu solicitud correctamente.',
    summaryTitle: 'Resumen de tu Solicitud',
    date: 'Fecha',
    duration: 'Duración',
    guests: 'Pasajeros',
    extras: 'Extras',
    extrasNone: 'Ninguno',
    message: 'Tu Mensaje',
    nextSteps: 'Nuestro equipo revisará tu solicitud y te contactaremos en pocas horas para confirmar la disponibilidad y finalizar los detalles.',
    contact: 'Si tienes alguna pregunta mientras tanto, no dudes en contactarnos en',
    thanks: '¡Gracias por elegir Coral Boats Mallorca!',
    team: 'El Equipo de Coral Boats',
  },
  de: {
    subject: 'Ihre Charter-Buchungsanfrage - Coral Boats Mallorca',
    greeting: 'Hallo',
    intro: 'Vielen Dank für Ihre Buchungsanfrage für einen privaten Charter bei Coral Boats Mallorca. Wir haben Ihre Anfrage erfolgreich erhalten.',
    summaryTitle: 'Zusammenfassung Ihrer Anfrage',
    date: 'Datum',
    duration: 'Dauer',
    guests: 'Gäste',
    extras: 'Extras',
    extrasNone: 'Keine',
    message: 'Ihre Nachricht',
    nextSteps: 'Unser Team wird Ihre Anfrage prüfen und wir werden Sie innerhalb weniger Stunden kontaktieren, um die Verfügbarkeit zu bestätigen und die Details abzuschließen.',
    contact: 'Wenn Sie in der Zwischenzeit Fragen haben, kontaktieren Sie uns gerne unter',
    thanks: 'Vielen Dank, dass Sie sich für Coral Boats Mallorca entschieden haben!',
    team: 'Das Coral Boats Team',
  },
  fr: {
    subject: 'Votre Demande de Charter - Coral Boats Mallorca',
    greeting: 'Bonjour',
    intro: 'Merci pour votre demande de réservation de charter privé avec Coral Boats Mallorca. Nous avons bien reçu votre demande.',
    summaryTitle: 'Résumé de Votre Demande',
    date: 'Date',
    duration: 'Durée',
    guests: 'Passagers',
    extras: 'Extras',
    extrasNone: 'Aucun',
    message: 'Votre Message',
    nextSteps: 'Notre équipe examinera votre demande et nous vous contacterons dans quelques heures pour confirmer la disponibilité et finaliser les détails.',
    contact: "Si vous avez des questions entre-temps, n'hésitez pas à nous contacter à",
    thanks: "Merci d'avoir choisi Coral Boats Mallorca !",
    team: "L'Équipe Coral Boats",
  },
  it: {
    subject: 'La Tua Richiesta di Charter - Coral Boats Mallorca',
    greeting: 'Ciao',
    intro: 'Grazie per la tua richiesta di prenotazione charter privato con Coral Boats Mallorca. Abbiamo ricevuto la tua richiesta con successo.',
    summaryTitle: 'Riepilogo della Tua Richiesta',
    date: 'Data',
    duration: 'Durata',
    guests: 'Ospiti',
    extras: 'Extra',
    extrasNone: 'Nessuno',
    message: 'Il Tuo Messaggio',
    nextSteps: 'Il nostro team esaminerà la tua richiesta e ti contatteremo entro poche ore per confermare la disponibilità e finalizzare i dettagli.',
    contact: 'Se hai domande nel frattempo, non esitare a contattarci a',
    thanks: 'Grazie per aver scelto Coral Boats Mallorca!',
    team: 'Il Team Coral Boats',
  },
  ca: {
    subject: 'La Teva Sol·licitud de Charter - Coral Boats Mallorca',
    greeting: 'Hola',
    intro: 'Gràcies per la teva sol·licitud de reserva de charter privat amb Coral Boats Mallorca. Hem rebut la teva sol·licitud correctament.',
    summaryTitle: 'Resum de la Teva Sol·licitud',
    date: 'Data',
    duration: 'Durada',
    guests: 'Passatgers',
    extras: 'Extres',
    extrasNone: 'Cap',
    message: 'El Teu Missatge',
    nextSteps: 'El nostre equip revisarà la teva sol·licitud i et contactarem en poques hores per confirmar la disponibilitat i finalitzar els detalls.',
    contact: 'Si tens alguna pregunta mentrestant, no dubtis a contactar-nos a',
    thanks: 'Gràcies per triar Coral Boats Mallorca!',
    team: "L'Equip de Coral Boats",
  },
};

function buildNotificationEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  charterDate?: string;
  charterDuration?: string;
  charterGuests?: string;
  charterExtras?: string;
  charterMessage?: string;
}): string {
  const extrasDisplay = data.charterExtras || 'None';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 640px; margin: 0 auto; padding: 30px 20px;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); border-radius: 12px 12px 0 0; padding: 25px 30px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 5px; font-weight: 700;">⚓ Private Charter Request</h1>
      <p style="color: #ffffff; font-size: 14px; margin: 0; font-weight: 500;">${data.charterDate || 'Date TBD'} · ${data.charterGuests || '?'} guests · ${data.charterDuration || 'TBD'}</p>
    </div>

    <!-- Main Card -->
    <div style="background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">

      <!-- Client Info Section -->
      <h2 style="color: #0891b2; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Client Details</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
          <td style="padding: 6px 0; color: #64748b; font-size: 13px; width: 100px;">Name</td>
          <td style="padding: 6px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Email</td>
          <td style="padding: 6px 0; color: #0f172a; font-size: 15px;"><a href="mailto:${data.email}" style="color: #0891b2; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Phone</td>
          <td style="padding: 6px 0; color: #0f172a; font-size: 15px;"><a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #0891b2; text-decoration: none;">${data.phone}</a></td>
        </tr>
      </table>

      <!-- Charter Details Section -->
      <h2 style="color: #0891b2; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Charter Details</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        ${data.charterDate ? `<tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 100px;">📅 Date</td>
          <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${data.charterDate}</td>
        </tr>` : ''}
        ${data.charterDuration ? `<tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px;">⏱ Duration</td>
          <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${data.charterDuration}</td>
        </tr>` : ''}
        ${data.charterGuests ? `<tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px;">👥 Guests</td>
          <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${data.charterGuests}</td>
        </tr>` : ''}
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">🍽 Extras</td>
          <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${extrasDisplay}</td>
        </tr>
      </table>

      <!-- Message Section -->
      ${data.charterMessage ? `
      <h2 style="color: #0891b2; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Client Message</h2>
      <div style="background: #f8fafc; border-radius: 8px; padding: 15px; margin-bottom: 25px; border-left: 3px solid #0891b2;">
        <p style="color: #334155; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.charterMessage}</p>
      </div>
      ` : ''}

      <!-- Quick Actions -->
      <div style="background: #f0fdfa; border-radius: 8px; padding: 15px; text-align: center;">
        <p style="color: #64748b; font-size: 12px; margin: 0 0 8px;">Quick actions</p>
        <a href="mailto:${data.email}?subject=Re: Your Private Charter on ${data.charterDate || 'TBD'} - Coral Boats Mallorca" style="display: inline-block; background: #0891b2; color: #ffffff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; margin: 0 5px;">✉️ Reply to Client</a>
        <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25d366; color: #ffffff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; margin: 0 5px;">💬 WhatsApp</a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #94a3b8; font-size: 11px; margin: 0;">Coral Boats Mallorca · Internal notification · Reply goes to client</p>
    </div>
  </div>
</body>
</html>`;
}

function buildConfirmationEmail(
  t: Record<string, string>,
  data: { firstName: string; charterDate?: string; charterDuration?: string; charterGuests?: string; charterExtras?: string; charterMessage?: string }
): string {
  const extrasDisplay = data.charterExtras || t.extrasNone;
  const messageDisplay = data.charterMessage || '-';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f0fdfa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #0891b2; font-size: 24px; margin: 0 0 15px;">Coral Boats Mallorca</h1>
      <img src="https://www.coralboatsmallorca.com/assets/img/logo/logo%20transparente%20sobre%20claro.png" alt="Coral Boats Mallorca" width="180" style="display: inline-block; max-width: 180px; height: auto;" />
    </div>

    <!-- Main Card -->
    <div style="background: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
      <!-- Check Icon -->
      <div style="text-align: center; margin-bottom: 25px;">
        <div style="display: inline-block; width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #059669); line-height: 60px; text-align: center;">
          <span style="color: #ffffff; font-size: 28px;">&#10003;</span>
        </div>
      </div>

      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">
        ${t.greeting} ${data.firstName},
      </p>
      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
        ${t.intro}
      </p>

      <!-- Summary Box -->
      <div style="background: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #0891b2;">
        <h3 style="color: #0f172a; font-size: 18px; margin: 0 0 15px;">${t.summaryTitle}</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${data.charterDate ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">${t.date}</td><td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.charterDate}</td></tr>` : ''}
          ${data.charterDuration ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">${t.duration}</td><td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.charterDuration}</td></tr>` : ''}
          ${data.charterGuests ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">${t.guests}</td><td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${data.charterGuests}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">${t.extras}</td><td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${extrasDisplay}</td></tr>
          ${messageDisplay !== '-' ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">${t.message}</td><td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${messageDisplay}</td></tr>` : ''}
        </table>
      </div>

      <!-- Next Steps -->
      <p style="color: #334155; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
        ${t.nextSteps}
      </p>

      <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 0 0 25px;">
        ${t.contact} <a href="mailto:info@coralboatsmallorca.com" style="color: #0891b2; text-decoration: none;">info@coralboatsmallorca.com</a>
        <br/>
        WhatsApp / Tel: <a href="https://wa.me/34651992329" style="color: #0891b2; text-decoration: none;">(+34) 651 992 329</a>
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 25px 0;">

      <p style="color: #0891b2; font-size: 16px; font-weight: 600; margin: 0 0 5px;">
        ${t.thanks}
      </p>
      <p style="color: #64748b; font-size: 14px; margin: 0;">
        ${t.team}
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px;">
      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
        Coral Boats Mallorca &bull; Puerto de Alcudia, Mallorca
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message, locale, charterDate, charterDuration, charterGuests, charterExtras } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Send notification email to the business
    const isCharterRequest = subject && subject.includes('Charter Booking Request');
    const notificationSubject = isCharterRequest
      ? `Private Charter Request on ${charterDate || 'TBD'} from ${firstName} ${lastName}`
      : `Nuevo mensaje de contacto: ${subject}`;

    const notificationHtml = isCharterRequest
      ? buildNotificationEmail({
          firstName,
          lastName,
          email,
          phone,
          charterDate,
          charterDuration,
          charterGuests,
          charterExtras,
          charterMessage: body.charterMessage || '',
        })
      : `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `;

    await transporter.sendMail({
      from: `"Coral Boats" <${process.env.SMTP_USER}>`,
      to: 'info@coralboatsmallorca.com',
      replyTo: email,
      subject: notificationSubject,
      html: notificationHtml,
    });

    // 2. Send confirmation email to the client (only for charter bookings)
    const isCharterBooking = isCharterRequest;
    if (isCharterBooking && email) {
      const lang = locale && emailTranslations[locale] ? locale : 'en';
      const t = emailTranslations[lang];

      // Extract the user's additional message from the formatted message
      const userMessage = body.charterMessage || '';

      const confirmationHtml = buildConfirmationEmail(t, {
        firstName,
        charterDate,
        charterDuration,
        charterGuests,
        charterExtras,
        charterMessage: userMessage,
      });

      await transporter.sendMail({
        from: `"Coral Boats Mallorca" <${process.env.SMTP_USER}>`,
        to: email,
        subject: t.subject,
        html: confirmationHtml,
      });
    }

    return NextResponse.json(
      { message: 'Mensaje enviado con éxito' },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': 'https://www.coralboatsmallorca.com',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    return NextResponse.json(
      { error: 'Error enviando mensaje. Inténtalo de nuevo o escribe a info@coralboatsmallorca.com' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
