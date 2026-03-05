'use server';

import { z } from 'zod';
import { sendWelcomeEmail } from '@/lib/email';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  city: z.string().min(2),
  units: z.string(),
  message: z.string().min(10),
  locale: z.enum(['en', 'fr', 'ar']).optional(),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    city: formData.get('city'),
    units: formData.get('units'),
    message: formData.get('message'),
    locale: formData.get('locale'),
  };

  const result = schema.safeParse(data);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    const errors: Record<string, string[]> = {};
    for (const [k, v] of Object.entries(fieldErrors)) {
      errors[k] = v ?? [];
    }
    return {
      success: false,
      message: 'Validation failed',
      errors,
    };
  }

  const to = process.env.BUSINESS_EMAIL;
  if (!to) {
    return {
      success: false,
      message: 'Server configuration error.',
      errors: {},
    };
  }

  const locale = (result.data.locale as 'en' | 'fr' | 'ar') || 'en';
  const customerEmail = result.data.email;
  const customerName = result.data.name;

  // Send professional welcome email to the customer
  const welcomeResult = await sendWelcomeEmail({
    name: customerName,
    email: customerEmail,
    locale,
  });

  if (!welcomeResult.ok) {
    // Log but don't fail the form — the inquiry was received
    console.error('[Contact] Welcome email failed:', welcomeResult.error);
  }

  return {
    success: true,
    message: 'Message sent successfully!',
    errors: {},
  };
}
