# Robert Jamison CPA Website

A modern, responsive website for Robert Jamison, CPA - providing professional accounting and tax services.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Navigation**: Desktop menu with dropdowns and mobile hamburger menu
- **Search Functionality**: Site-wide search to quickly find services and information
- **Contact Form**: Request free consultations with form validation
- **Service Pages**: Detailed information about Tax Preparation, Tax Advisory, Accounting, and Tax Resolution

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **React Router** for client-side routing
- **Vercel** for hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push to main branch

## Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, etc.)
├── pages/           # Page components
│   ├── what-we-do/  # Service pages
│   └── resources/   # Resource pages
├── types/           # TypeScript type definitions
└── utils/           # Utility functions (navigation, search)
```

## Pages

- **Home**: Landing page with service overview
- **About Us**: Information about Robert Jamison
- **What We Do**: Services menu with 4 sub-pages
  - Tax Preparation
  - Tax Advisory
  - Accounting
  - Tax Resolution
- **Resources**: Three placeholder pages for future content
- **Contact**: Free consultation request form

## License

© 2025 Robert Jamison, CPA. All rights reserved.


      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
