# Daniel Piro - Portfolio

A modern, futuristic portfolio website built with Vite, React 19, TypeScript, and Tailwind CSS v4, featuring a Catppuccin Mocha color theme.

## 🚀 Features

- ⚡️ **Vite** - Lightning-fast build tool
- ⚛️ **React 19** - Latest React with concurrent features
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🌙 **Catppuccin Theme** - Beautiful, soothing pastel theme
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **Responsive Design** - Mobile-first approach
- ♿️ **Accessible** - Built with accessibility in mind

## 📁 Project Structure

```
.
├── app/
│   └── globals.css          # Global styles with Catppuccin theme
├── components/              # React components
│   ├── about-section.tsx
│   ├── code-grid-background.tsx
│   ├── contact-section.tsx
│   ├── expertise-section.tsx
│   ├── hero-section.tsx
│   ├── scroll-section.tsx
│   ├── theme-provider.tsx
│   └── timeline-section.tsx
├── public/                  # Static assets
│   └── placeholder.svg
├── src/
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── index.html              # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── postcss.config.mjs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:

```typescript
export default defineConfig({
  base: "/your-repo-name/",
  // ... rest of config
})
```

2. Build the project:

```bash
npm run build
```

3. Deploy the `dist/` folder to GitHub Pages using a GitHub Action or manually to the `gh-pages` branch.

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS variables based on Catppuccin Mocha:

- `--bg`: Background color
- `--fg`: Foreground/text color
- `--accent-blue`: Primary accent
- `--accent-mauve`: Secondary accent
- `--accent-green`: Tertiary accent

### Content

Update the following files to customize content:

- `components/about-section.tsx` - About information
- `components/timeline-section.tsx` - Career timeline
- `components/expertise-section.tsx` - Skills and expertise
- `components/contact-section.tsx` - Contact information

## 📝 License

© 2025 Daniel Piro. All rights reserved.
