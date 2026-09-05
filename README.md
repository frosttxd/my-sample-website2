<div align="center">

# ✦ AUREA Development
### Contemporary Architectural Living & Estate Showcase

A bespoke, high-performance showcase website designed for contemporary architectural living, private estates, and curated villa collections. Engineered from scratch with zero framework bloat, featuring an autonomous liquid fusion background canvas, soothing alabaster frosted glass elements, and refined minimal typography.

[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Pure%20Vanilla)-00E5FF?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Canvas 2D 60FPS](https://img.shields.io/badge/Rendering-60%20FPS%20Canvas-60A5FA?style=for-the-badge)](#)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](#)

</div>

---

## ⚖️ Legal Disclaimer & Concept Notice

> [!NOTE]
> **This project is a non-commercial, conceptual showcase created solely for portfolio demonstration, educational purposes, and UI/UX design exploration.**
>
> - All brand names (including *"AUREA"*), property identifiers, sample client testimonials, and addresses depicted within this project are **100% fictional**.
> - Any resemblance to actual persons, living or dead, or real-world entities, property developments, or registered trademarks is **purely coincidental**.
> - This website **does not offer real estate brokerage or commercial investment services** and has no affiliation with, endorsement from, or connection to any existing corporation or real-estate group.

---

## ✨ Key Features

- 🌊 **Autonomous Liquid Fusion Canvas:** GPU-accelerated procedural wave canvas engine seamlessly blending warm alabaster white with deep rich espresso in a hypnotic, fluid undulating motion.
- 📐 **Sleek Architectural Minimalism:** Pure typographic branding, subtle alabaster frosted cards (`backdrop-filter`), and zero-glare design calibrated for eye comfort.
- 🏰 **Curated Collection Showcase:** Streamlined property presentation (Villa 1, Villa 2, Villa 3) with location badges and comprehensive modal dossiers.
- 🏛️ **Contemporary Philosophy & Process:** Crisp, unpretentious feature highlights and structured 4-step architectural execution roadmap.
- 🖼️ **Interactive Tabbed Navigation & Gliding Transitions:** Hardware-accelerated smooth transitions between *Home*, *Collection*, *Architecture*, *Gallery*, and *Contact & Inquiries*.
- 📞 **Direct Floating Action Trigger:** Quick-access "Hemen Ara" trigger and modal for private inquiries.
- ⚡ **Zero-Bloat Architecture:** Pure HTML5, Tailwind CSS, and lightweight Vanilla JavaScript. Zero build steps, instant load times, and 100% GitHub Pages compatibility.

---

## 📁 Modular Project Architecture

The codebase adheres strictly to separation-of-concerns and modern modular architecture:

```
aurea-development/
├── .gitignore                  # Git ignore rules (logs, cache, OS files, .env)
├── package.json                # Project metadata & npm start scripts
├── LICENSE                     # MIT License
├── README.md                   # Project documentation
├── index.html                  # Clean semantic HTML entry point
├── serve.js                    # Hardened ESM zero-dependency local dev server
└── src/
    ├── styles/                 # Modular CSS architecture
    │   ├── tokens.css          # Color palette (cream, blush, espresso) & typography tokens
    │   ├── animations.css      # Keyframe animations (tabGlideIn, ticker)
    │   ├── components.css      # Custom UI components (cards, buttons, nav-pills, scrollbars)
    │   └── main.css            # Master stylesheet bundle importer
    └── scripts/                # ES6 JavaScript Modules
        ├── config.js           # Estate collections (estateData) & preview definitions
        ├── main.js             # Application orchestrator & global event dispatchers
        └── modules/
            ├── waveCanvas.js   # Multi-layered espresso-cream liquid wave canvas engine
            ├── navigation.js   # SPA tab switching, mobile drawer & scroll-to-top
            ├── estates.js      # Location filtering & estate detail modal dossier
            ├── gallery.js      # Visual gallery category filter
            ├── sliders.js      # Hero slide carousel & split-screen interactive preview
            └── modals.js       # Phone dial modal, legal modal, FAQ accordion & form handling
```

---

## 🚀 Quick Start

No build step or bundler compilation required!

### Method 1: Built-in Node HTTP Server
```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Launch the hardened native server
npm start
# or: node serve.js
```
Open **`http://127.0.0.1:8080/`** in your browser.

### Method 2: Python Simple Server
```bash
python -m http.server 8080
```

### Method 3: Direct Browser Open
Simply double-click or drag **`index.html`** into any modern web browser.

---

## 📱 Browser Compatibility

- Chrome / Edge 90+
- Safari 15+
- Firefox 90+
- Mobile Chrome / Mobile Safari

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
