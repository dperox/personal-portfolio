# Personal Portfolio

A modern, animated personal portfolio website built with Next.js 16, featuring smooth scroll animations, dark/light theme support, and static site generation for optimal performance.

🌐 **Live Site:** [danielpiro.com](https://danielpiro.com)

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Theme** - Automatic theme switching with system preference detection
- **Scroll Animations** - Engaging scroll-based animations using Framer Motion
- **Responsive Design** - Fully responsive across all devices
- **Static Site Generation** - Optimized for performance with Next.js static export
- **Code Grid Background** - Animated background with code-like visual effects
- **Component Sections:**
  - Hero section with introduction
  - About section with personal background
  - Expertise showcase with skills and technologies
  - Timeline of experience and education
  - Contact section for reaching out

## 🚀 Tech Stack

### Core
- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with static export
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[Three.js](https://threejs.org/)** - 3D graphics (via @react-three/fiber)

## 📦 Installation

### Prerequisites
- Node.js 20 or higher
- pnpm 10 or higher

### Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:dperox/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the static site for production
- `pnpm start` - Start the production server (after build)
- `pnpm lint` - Run ESLint to check code quality

### Project Structure

```
personal-portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page with all sections
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── hero-section.tsx     # Hero/landing section
│   ├── about-section.tsx    # About section
│   ├── expertise-section.tsx # Skills & expertise
│   ├── timeline-section.tsx # Experience timeline
│   ├── contact-section.tsx  # Contact form
│   ├── code-grid-background.tsx # Animated background
│   ├── scroll-section.tsx   # Scroll animation wrapper
│   └── theme-toggle.tsx     # Theme switcher
├── lib/                     # Utility functions
│   └── utils.ts            # Helper utilities
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
└── .github/
    └── workflows/
        └── nextjs.yml      # GitHub Actions deployment
```

## 🚢 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Configuration

- **Platform:** GitHub Pages
- **Domain:** danielpiro.com (custom domain)
- **Build Output:** Static HTML/CSS/JS (via Next.js `output: 'export'`)
- **CI/CD:** GitHub Actions workflow

### Deployment Process

Every push to the `main` branch triggers:
1. Install dependencies with pnpm
2. Build the Next.js static site
3. Deploy to `gh-pages` branch
4. Serve at the custom domain

### Manual Deployment

To deploy manually:

```bash
# Build the static site
pnpm build

# The output will be in the ./out directory
```

## 🎨 Customization

### Update Content

Edit the component files in the `components/` directory to update:
- Personal information in `hero-section.tsx`
- About text in `about-section.tsx`
- Skills in `expertise-section.tsx`
- Timeline events in `timeline-section.tsx`
- Contact information in `contact-section.tsx`

### Theme Colors

Theme colors are managed via CSS variables in `app/globals.css`. Both light and dark themes are supported.

### Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

## 📄 License

© 2025 Daniel Piro. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork it and customize it for your own use!

---

**Built with ❤️ using Next.js and modern web technologies**

