# AcdyOn Pathway AI — Premium AI Product Experience

A submission for the **AcdyOn Technologies Frontend Challenge — "Build It Like You Mean It" (Option 2: The Premium Home Page)**.

**AcdyOn Pathway AI** is a premium, light-first interactive pathway discovery prototype designed for executive learning, applied AI capability, and professional advancement.

---

## ✨ Key Features

- **Interactive Hero Pathway Selector**: Real application UI preview allowing users to select target directions (AI & Automation, AI Leadership, Cybersecurity & AI, Executive Growth) with instant reactive recommendations.
- **3-Step Interactive Pathway Generator**: "From ambition to a clearer pathway" multi-step builder (Goal Selection → Experience Context → Tailored Pathway Preview with recommended modules).
- **Executive Principles & Trust Strip**: Honest principles strip (Guided, Practical, Executive-Friendly, AI-Aware) with zero fabricated statistics or fake ratings.
- **Applied AI Capability Grid**: Interactive cards for AI Agents, Automation, Applied AI, and AI Leadership with Lucide iconography and hover elevation.
- **Authentic AcdyOn Program Connection**: Directly connects discovered pathways to real AcdyOn categories (AI & Automation, Executive Certifications, Corporate Training, Doctoral Pathways).
- **Consultation Booking Modal**: High-converting, calm advisory consultation flow with interactive form validation and confirmation.
- **Mobile First & Responsive**: Tested across 390px mobile viewports, 768px tablet, and 1440px desktop containers with 0 horizontal overflow.
- **Restrained Motion & Accessibility**: Framer Motion transitions respecting `prefers-reduced-motion` and keyboard focus rings.
- **Hidden Path Easter Egg**: Click the AcdyOn logo 5 times to unlock a subtle Easter egg toast.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + Custom CSS Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Tooling**: PostCSS, Autoprefixer, ESLint

---

## 📁 Project Structure

```
AcdyOn/
├── DECISIONS.md              # Required 1-page design & architecture decisions
├── README.md                 # Project documentation
├── index.html                # HTML entry point with Google Fonts & SEO metadata
├── package.json              # Dependencies and build scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Design tokens & color system
├── vite.config.ts            # Vite bundler configuration
└── src/
    ├── main.tsx              # Application root mount
    ├── App.tsx               # Primary layout & state orchestration
    ├── index.css             # Base styles, Tailwind directives & custom utilities
    ├── data/
    │   ├── pathways.ts       # Structured deterministic pathway data
    │   ├── programs.ts       # Authentic AcdyOn program categories
    │   └── capabilities.ts   # Core AI capability definitions
    └── components/
        ├── Navbar.tsx        # Sticky glass navigation & mobile menu
        ├── Hero.tsx          # Hero messaging & CTAs
        ├── HeroProductPreview.tsx # Interactive Hero UI preview card
        ├── TrustStrip.tsx    # Principles context bar
        ├── ProductDemo.tsx   # 3-step interactive pathway builder
        ├── PathwayRecommendationCard.tsx # Generated outcome recommendation
        ├── HowItWorks.tsx    # 3-phase narrative steps
        ├── AICapabilities.tsx # Applied AI cards grid
        ├── ProgramGrid.tsx   # Real AcdyOn program tracks
        ├── ConsultationSection.tsx # Executive consultation section
        ├── ConsultationModal.tsx   # Consultation booking modal
        ├── FinalCTA.tsx      # Closing reflection banner
        ├── Footer.tsx        # Corporate footer
        └── EasterEggToast.tsx# Hidden path notification
```

---

## 🚀 Local Development Setup

1. **Clone & Navigate**:
   ```bash
   cd AcdyOn
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📦 Production Build & Verification

To compile the production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## ⚡ Vercel Deployment

This repository is structured for zero-configuration deployment on **Vercel**:
1. Connect this repository to Vercel.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

---

## 📄 Honesty & AI Usage Note

- **Data Integrity**: In strict adherence to challenge instructions, this submission contains **no fake testimonials, fake student counts, fake customer logos, fake ratings, or fake LLM accuracy metrics**.
- **AI Usage**: AI tools were used for brainstorming, implementation assistance, refactoring, and quality assurance. All design decisions, code quality checks, and responsive behaviors were manually tested and refined.
