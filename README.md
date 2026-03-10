# AtlasStays

A Next.js 15 application for AtlasStays, a short-term rental operations company in Morocco.

## Features

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- TailwindCSS (v4)
- next-intl for i18n (EN, FR, AR)
- RTL support for Arabic
- Server Actions for form submission

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Configuration

Copy `.env.example` to `.env.local` and set:

- `SITE_URL` – Base URL for SEO and links.
- `BUSINESS_EMAIL` – Inbox for contact form submissions (required for form to succeed).
- `NEXT_PUBLIC_WHATSAPP_NUMBER` – E.164 number for WhatsApp CTAs (e.g. `4741351547`).
- `RESEND_API_KEY` (optional) – For sending welcome emails to customers via Resend. When set, the contact form sends a professional welcome/confirmation email to each customer.
- `EMAIL_FROM` (optional) – Sender address for welcome emails (e.g. `AtlasStays <hello@yourdomain.com>`). Defaults to Resend's onboarding address if unset.
- `SMTP_*` (optional) – Alternative to Resend for sending email.

Design tokens and the custom breakpoint `framer` (810px) are in `src/app/globals.css`. Messages live in `src/messages/`; locales: `en`, `fr`, `ar` (Arabic uses RTL).

## Deployment

Deploy on Vercel:

1. Push to GitHub.
2. Import project in Vercel.
3. Add environment variables.
4. Deploy.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/i18n`: Internationalization configuration.
- `src/messages`: JSON translation files.
- `src/lib`: Utility functions.
- `src/data`: Mock data and type definitions.
- `src/actions`: Server actions.

## Replacing images

Hero and city images use Unsplash URLs. To use your own assets, place files in `public/images/` and update references in `src/components/hero/Hero.tsx` and `src/components/cities/CityGrid.tsx` (e.g. `/images/hero.jpg`, `/images/marrakech.jpg`).
