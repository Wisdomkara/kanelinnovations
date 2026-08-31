# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Resend setup for contact forms

1. Verify `kanelinnovations.com` in Resend.
2. Add Resend's DNS records in the DNS provider that controls the domain.
3. Add `RESEND_API_KEY` to the Vercel project environment variables.
4. Add `SITE_URL=https://kanelinnovations.com` to the Vercel project environment variables.
5. Deploy the app on Vercel so `/api/send-email` can run as a serverless function.

All website forms should use `sendOwnerEmail` from `src/utils/mail.js`. That helper posts to `/api/send-email`, sends the enquiry to `support@kanelinnovations.com`, and sends an automatic confirmation email to the visitor. The emails include the public logo at `/kanelblack.png`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


 use this everytime you make change to your webpage

<!-- git add .
git commit -m "Describe what you changed"
git push origin main -->
