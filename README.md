<div align="center">
  <h1 align="center">Mohar Gorai - Developer Portfolio</h1>
  <p align="center">
    A premium, highly interactive, and award-winning styled developer portfolio built with modern web technologies.
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>
</div>

---

## 🚀 About The Project

This repository contains my personal developer portfolio. It is designed to act as a visually stunning, highly interactive showcase of my skills, projects, and certifications. 

The site steps away from traditional flat designs and embraces a modern **Dark Glassmorphism** aesthetic, complete with buttery-smooth spring physics, complex staggering animations, and custom cursor lighting effects that interact with the UI.

### ✨ Key Features

- **Extreme Performance:** Bypasses heavy React state updates for animations by utilizing raw `framer-motion` `useMotionValue` and `useSpring` hooks to maintain a solid 60FPS.
- **Custom Lighting Engine:** Features a bespoke background spotlight and a frosted-glass cursor with dynamic color-inverting `mix-blend-mode` logic.
- **Enterprise Architecture:** Structurally sound architecture separating atomic UI components from heavy layout sections and data constants.
- **Interactive Typography:** Awwwards-style staggered typography reveals and buttery smooth image-following hover states.
- **Fully Responsive:** Painstakingly crafted `clamp()` typography and flex layouts that look flawless from 4k monitors down to small mobile screens.

---

## 💻 Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** [Web3Forms API](https://web3forms.com/)

---

## 📂 Project Structure

The codebase is organized following enterprise React patterns to maximize scalability and readability:

```text
/src
├── /components
│   ├── /layout     # Global layout wrappers (FloatingNavbar)
│   ├── /sections   # Heavy, stateful page segments (Hero, About, Projects)
│   └── /ui         # Pure, reusable atomic elements (Buttons, FadeIn, Magnet)
├── /constants      # Centralized data stores (projects, certificates, services)
├── App.tsx         # Root component aggregator
├── index.css       # Tailwind directives and global variables
└── main.tsx        # React DOM mount point
```

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18.0.0 or higher recommended)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MoharXD/Portfolio-Website.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

---

## 📫 Contact

**Mohar Gorai**  
Sophomore at Vellore Institute of Technology, pursuing B.Tech in IT.

- **Email:** [work.mohargorai@gmail.com](mailto:work.mohargorai@gmail.com)
- **LinkedIn:** [linkedin.com/in/mohar-gorai](https://www.linkedin.com/in/mohar-gorai-518123338/)
- **GitHub:** [github.com/MoharXD](https://github.com/MoharXD)

---

<div align="center">
  <p>Built with ❤️ by Mohar Gorai</p>
</div>
