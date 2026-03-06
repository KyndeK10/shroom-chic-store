# Shroom Chic Creations POD Store

An advanced, immersive print-on-demand ecommerce storefront with unique psychedelic features, a custom product designer, and a seamless shopping experience.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Stripe Checkout
- Polotno SDK (Custom Product Designer)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file based on `.env.example` and add your keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Deployment

This project is configured as a Next.js application. To deploy to Vercel or Netlify:

1. Connect your repository to your preferred hosting provider.
2. Ensure your environment variables are configured in the dashboard.
3. Deploy the application. The build command `npm run build` will automatically be used.

## Features
- **Immersive UI**: Psychedelic mushroom theme, glowing neon accents, floating particle animations using Framer Motion.
- **Shop**: Product grid with dynamic routing, filtering, and lazy loading.
- **Custom Designer**: Integrated Polotno canvas for live personalization, allowing users to add text, upload images, and use custom clipart.
- **Checkout**: Stripe integration for secure payments.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Social Media Integration**: Placeholders for Instagram and TikTok feeds on the home page.
