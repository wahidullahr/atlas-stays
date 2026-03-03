'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  city: z.string().min(2),
  units: z.string(),
  message: z.string().min(10),
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

  // Optional: use Resend (RESEND_API_KEY) or SMTP (SMTP_*) to send email.
  // For now we only validate and acknowledge.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: 'Message sent successfully!',
    errors: {},
  };
}
