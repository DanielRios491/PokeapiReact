# PokeAPI React

A simple React application bootstrapped with Vite that fetches and displays data from the PokeAPI.

## Prerequisites

* Node.js (version 14 or higher)
* npm (comes with Node.js) or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokeapireact.git
   ```
2. Change into the project directory:

   ```bash
   cd pokeapireact
   ```
3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

* **`npm run dev`**

  Starts the development server with hot module replacement.

  ```bash
  npm run dev
  ```

  The app will be available at `http://localhost:5173` by default.

* **`npm run build`**

  Bundles the app for production into the `dist` folder.

  ```bash
  npm run build
  ```

* **`npm run preview`**

  Serves the production build locally for testing.

  ```bash
  npm run preview
  ```

* **`npm run lint`**

  Runs ESLint to check for code quality and formatting issues.

  ```bash
  npm run lint
  ```

## Project Structure

```
├── public             # Static assets
├── src                # Source files
│   ├── assets         # Images, icons, etc.
│   ├── components     # Reusable React components
│   └── main.jsx       # App entry point
├── .eslintrc.js       # ESLint configuration
├── index.html         # HTML template
├── package.json       # Project metadata and scripts
└── vite.config.js     # Vite configuration
```

## Deployment

After running `npm run build`, deploy the contents of the `dist` folder to your preferred static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## License

This project is licensed under the MIT License. Feel free to use and modify it as you like.
