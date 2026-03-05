import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_EMAIL = process.env.EMAIL_FROM || 'AtlasStays <onboarding@resend.dev>';
const REPLY_TO = process.env.BUSINESS_EMAIL;

export type WelcomeEmailParams = {
  name: string;
  email: string;
  locale: 'en' | 'fr' | 'ar';
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '4741351547';

const WELCOME_CONTENT = {
  en: {
    subject: 'Thank you for reaching out — AtlasStays',
    whatsapp_prefill: "Hello AtlasStays, I'm interested in your property services. I'd like a free consultation for selling, renting, or listing my property in Morocco.",
    greeting: 'Dear',
    intro:
      'Thank you for contacting AtlasStays. We have received your inquiry and appreciate your interest in our property management and sales services in Morocco.',
    nextSteps:
      'A member of our team will review your request and respond within 24 hours. We aim to provide a personalized consultation tailored to your needs.',
    whatsapp:
      'For an immediate response, you can also reach us directly on WhatsApp at +47 413 51 547.',
    closing: 'We look forward to assisting you.',
    signature: 'The AtlasStays Team',
  },
  fr: {
    subject: 'Merci de nous avoir contactés — AtlasStays',
    whatsapp_prefill: "Bonjour AtlasStays, je suis intéressé(e) par vos services immobiliers. Je souhaite une consultation gratuite pour vendre, louer ou mettre en location mon bien au Maroc.",
    greeting: 'Madame, Monsieur',
    intro:
      'Nous avons bien reçu votre demande et vous remercions de l\'intérêt que vous portez à nos services de gestion et de vente immobilières au Maroc.',
    nextSteps:
      'Un membre de notre équipe examinera votre demande et vous répondra sous 24 heures. Nous nous engageons à vous proposer une consultation personnalisée adaptée à vos besoins.',
    whatsapp:
      'Pour une réponse immédiate, vous pouvez également nous joindre directement sur WhatsApp au +47 413 51 547.',
    closing: 'Nous nous réjouissons de pouvoir vous accompagner.',
    signature: 'L\'équipe AtlasStays',
  },
  ar: {
    subject: 'شكراً على تواصلكم — AtlasStays',
    whatsapp_prefill: 'السلام عليكم AtlasStays، كنتهتم بالخدمات العقارية ديالكم. بغيت استشارة مجانية باش نبيع، نكري ولا نحط الملك ديالي ف Airbnb ف المغرب.',
    greeting: 'عزيزي/عزيزتي',
    intro:
      'وصلنا طلبكم ونشكركم على اهتمامكم بخدماتنا في إدارة وبيع العقارات بالمغرب.',
    nextSteps:
      'عضو من فريقنا سيراجع طلبكم ويجاوبكم ف أقل من 24 ساعة. هدفنا نقدمو لكم استشارة مخصصة تناسب احتياجاتكم.',
    whatsapp:
      'باش توصلو بجواب فالحين، تقدرون تتصلو بنا مباشرة على واتساب: +47 413 51 547.',
    closing: 'نتطلع لمساعدتكم.',
    signature: 'فريق AtlasStays',
  },
} as const;

function buildWelcomeHtml(params: WelcomeEmailParams): string {
  const { name, locale } = params;
  const content = WELCOME_CONTENT[locale];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.subject}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; color: #1a1a1a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">AtlasStays</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255,255,255,0.9);">Property Management & Sales in Morocco</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #374151;">
                ${content.greeting} ${name},
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #374151;">
                ${content.intro}
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #374151;">
                ${content.nextSteps}
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #374151;">
                ${content.whatsapp}
              </p>
              <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #374151;">
                ${content.closing}
              </p>
              <p style="margin: 0; font-size: 16px; font-weight: 600; color: #059669;">
                ${content.signature}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                AtlasStays · Morocco · <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(content.whatsapp_prefill)}" style="color: #059669; text-decoration: none;">WhatsApp</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

export async function sendWelcomeEmail(params: WelcomeEmailParams): Promise<{ ok: boolean; error?: string }> {
  if (!resend) {
    return { ok: false, error: 'RESEND_API_KEY not configured' };
  }

  const content = WELCOME_CONTENT[params.locale];

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: params.email,
      replyTo: REPLY_TO ?? undefined,
      subject: content.subject,
      html: buildWelcomeHtml(params),
    });

    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send email';
    return { ok: false, error: message };
  }
}
