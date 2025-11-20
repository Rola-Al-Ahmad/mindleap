![mindleap-react-template](/src/assets/github-cover.png)

# 🧠 Mindleap Mental Wellness

A modern, responsive landing experience for a mental wellness and therapy service. Built with React and Vite, it highlights services, success stories, pricing tiers, and a lead-capturing contact form with smooth animations powered by Framer Motion.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Key Features](#-key-features)
- [Components Overview](#-components-overview)
- [Data Structure](#-data-structure)
- [Routing](#-routing)
- [Styling](#-styling)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

### 🎯 Core Functionality

- **One-page Experience**: Hero, services, about, process, pricing, testimonials, contact, and footer sections rendered through `App.jsx`.
- **Responsive Navigation**: Sticky header with smooth scroll highlighting for active anchor sections.
- **Interactive Services Tabs**: `react-tabs` powered view that swaps images, descriptions, and benefit lists.
- **Embedded Media**: About section toggles a fullscreen YouTube modal for richer storytelling.
- **Lead Capture Form**: Contact section validates required fields, persists state, and surfaces a thank-you modal.

### 🎨 User Experience

- **Framer Motion Animations**: Reusable `fadeIn` variants orchestrate staggered entrance effects for each section.
- **Modal Overlays**: Custom video and contact confirmation modals with backdrop locks.
- **Iconography**: `react-icons` packages supply cohesive visual cues for steps, services, CTAs, and footers.
- **Scroll Feedback**: Numbered cards and highlighted nav states guide users through the journey.

### 🔧 Technical Features

- **Stateful Components**: Local `useState` hooks manage UI toggles, form inputs, and modal states without external stores.
- **Utility-driven Animations**: Centralized `src/utils/animation.js` exports easing variants for consistent motion.
- **Tailwind Utility Classes**: Design tokens and gradients applied via Tailwind configuration plus custom CSS.
- **Asset Pipeline**: Optimized `.webp` hero, service, and testimonial imagery co-located in `src/assets`.

## 🛠 Tech Stack

### Frontend

- **React 18.3.1** – Component-driven UI and hooks.
- **Vite 6.3.5** – Lightning-fast dev server and build tooling.
- **Tailwind CSS 3.4.7** – Utility-first styling with custom theme tokens.
- **Framer Motion 11.18.2** – Declarative animation primitives.
- **React Tabs 6.1.0** – Accessible tabbed interfaces for the services carousel.
- **React Icons 5.5.0** – Consistent icon set spanning Hero, Contact, and Footer.

### Tooling & Quality

- **ESLint 8.57.0** – Linting via `eslint-plugin-react`, hooks, and refresh integrations.
- **@vitejs/plugin-react** – Fast JSX transforms with automatic refresh.
- **PostCSS + Autoprefixer** – Cross-browser CSS output.

## 📁 Project Structure

```
mindleap/
├── public/
│   ├── fav-icon.png
│   ├── logo.svg
│   ├── videoPlayer.jsx
│   └── work-proceess.webp
├── src/
│   ├── assets/
│   │   ├── hero.webp
│   │   ├── service*.webp
│   │   ├── review*.webp
│   │   ├── video-thumbnail.webp
│   │   └── github-cover.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── WorkingStep.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── animation.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm (bundled with Node)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindleap
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the dev server**
   ```bash
   npm run dev
   ```
4. **Open the app**
   Visit `http://localhost:5173` in your browser.

## 📜 Available Scripts

| Script            | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Starts the Vite dev server          |
| `npm run build`   | Builds the app for production       |
| `npm run lint`    | Runs ESLint across JSX/JS files     |
| `npm run preview` | Serves the production build locally |

## 🎯 Key Features

### 🏠 Hero & Navigation

- Sticky navbar with scrollspy logic, smooth anchor scrolling, and a mobile drawer driven by `HiOutlineMenuAlt3`.
- Hero section couples bold headlines, persuasive copy, and CTA button linking to the contact form.

### 🧩 Services & About

- Services tabs swap descriptive copy, benefit bullet lists, and imagery without page reloads.
- About section showcases a stylized video thumbnail that toggles a YouTube iframe overlay with dismiss controls.

### 🧭 Working Steps & Pricing

- Numbered “How It Works” cards highlight onboarding steps against a themed background overlay.
- Responsive pricing grid showcases Bronze/Silver/Gold packages plus scroll-to-contact CTA buttons.

### 💬 Social Proof & Contact

- Testimonial cards pair client portraits, names, and locations with quotes.
- Contact form validates required fields, logs submissions, shows modal confirmations, and resets inputs.

## 🧩 Components Overview

- **App**: Composes the single-page flow and enforces typography classes.
- **Navbar**: Handles menu toggling, scroll listening, and CTA anchors.
- **Hero / Services / About**: Storytelling blocks for offerings and differentiation.
- **WorkingStep / Pricing / Testimonial**: Process, plan comparisons, and social proof.
- **Contact**: Form state, validation, modal UX, and appointment highlights.
- **Footer**: Quick links, support info, and social presence with icon buttons.

## 📊 Data Structure

- **Static Arrays** inside components (`Services`, `WorkingStep`, `Pricing`, `Testimonial`, `Contact`) define card content, benefits, and feature lists.
- **Assets** are imported directly to preserve bundler optimizations and cache busting.
- **Animations** rely on the shared `fadeIn(direction, delay)` helper returning Framer Motion variants.

## 🛣 Routing

- Single-page landing layout with **anchor-based navigation** only.
- `window.scrollTo` calls ensure smooth transitions between sections.
- No external router dependency is required for this experience.

## 🎨 Styling

- **Tailwind CSS** provides most layout, spacing, and typography utilities.
- **Custom CSS (`App.css`, `index.css`)** extends Tailwind with gradients, background images (`bg-heroBg`, `bg-working-img`), and font declarations.
- **Responsive Strategy** relies on Tailwind breakpoints (`md`, `lg`) to switch flex/grid layouts, stack cards, and adapt padding.

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m "Add amazing feature"`).
4. Push the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request describing your updates.

### Code Style Guidelines

- Adhere to the configured ESLint rules.
- Favor descriptive component/prop names and small, focused components.
- Group shared helpers under `src/utils`.
- Keep Tailwind utility usage consistent; fall back to CSS only when needed.

## 📝 License

No explicit license has been provided yet. Add one (e.g., MIT) if you intend to share or distribute the project widely.

## 🙏 Acknowledgments

- **React + Vite teams** for the modern DX.
- **Tailwind CSS** for utility-first styling.
- **Framer Motion** for handling animation choreography.
- **React Icons** for the expansive icon library.

---

**Mindleap Mental Wellness** – Helping people find clarity, confidence, and care every step of the way. 🧘‍♀️🌿
