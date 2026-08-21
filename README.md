# ICCK Business Awards & Diwali Ball 2026

![ICCK Business Excellence](https://github.com/marvelpokemaster/pixel-perfect-canvas-155/blob/main/src/assets/Background_hero.png?raw=true)

The official event landing page and awards nomination portal for the **Indian Chamber of Commerce in Korea (ICCK)**. This premium web experience showcases the upcoming 2026 Diwali Ball & Business Excellence Awards, providing attendees with event details, ticket purchasing, and an awards nomination interface.

**Live Application**: [https://diwali.indochamkorea.org](https://diwali.indochamkorea.org)

---

## 🌟 Key Features

- **Premium Design System**: A luxurious aesthetic utilizing deep midnight navy, rich indigo, and warm metallic gold, perfectly suited for a high-end gala.
- **Initial Asset Preloader**: A bespoke initial loading screen that halts rendering until critical visual assets (like hero background images and typography) are fully loaded, ensuring a perfectly assembled first frame with zero layout shifting.
- **Glassmorphism UI**: Beautiful, subtly blurred sticky headers and transparent interaction panels allowing background art to peek through naturally.
- **Responsive Landscape Event Cards**: Premium horizontal event showcase panels designed to maximize screen real estate and legibility on desktop while gracefully collapsing into elegant portrait cards on mobile.
- **Dual-Route Architecture**: Contains a landing page (`/`) for the primary Diwali Ball event details, and a dedicated awards portal (`/awards`) for business excellence nominations, built on a unified set of shared React components.

## 🛠️ Technology Stack

- **Framework**: React via [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router/latest)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS custom properties and dynamic arbitrary values
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
## 🚀 Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository**
   ```sh
   git clone https://github.com/marvelpokemaster/pixel-perfect-canvas-155.git
   cd pixel-perfect-canvas-155
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Build for production**
   ```sh
   npm run build
   ```

## 📐 Project Structure

- `src/assets/` - Contains all static visual assets, event photography, logos, and custom web fonts (Pretendard).
- `src/components/shared/` - Houses reusable UI blocks like `InitialLoader`, `SharedSiteHeader`, `SharedSiteFooter`, and `ICCKEventShowcase`.
- `src/components/awards/` - Route-specific sections and UI for the Business Awards portal.
- `src/routes/` - Defines the application routes (`__root.tsx`, `index.tsx`, `awards.tsx`).
