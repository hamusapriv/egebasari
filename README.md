# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Development

1. Install dependencies with `npm ci`.
2. Start the local dev server via `npm run dev`.
3. Edit the source in VS Code and commit your changes.

## Continuous Deployment

This repository is configured with GitHub Actions and Firebase Hosting. When changes
are pushed to the `main` branch the **Deploy to Firebase Hosting on merge** workflow
builds the Vite project and deploys the contents of the `dist/` directory to
Firebase Hosting. Pull requests run a separate workflow that builds your app and
creates a preview channel.
