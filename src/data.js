// All site content lives here. Edit this file to change text, links or projects.

export const person = {
  name: "Surya Karthik",
  headlineTop: "Hey, I'm",
  headlineName: "Surya.",
  headlineRest: "Software & AI Engineer",
  headlineSub: "building in Bengaluru 🇮🇳",
  email: "g.suryakarthik@gmail.com",
  github: "https://github.com/Suryakarthik-1",
  linkedin: "https://www.linkedin.com/in/surya-karthik-/",
  resumeUrl: "/resume.pdf",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// Tool names shown in the logo strip. Each must exist in logoMap in Logos.jsx.
export const stack = [
  "Python", "TypeScript", "React", "PyTorch", "FastAPI",
  "Docker", "PostgreSQL", "MongoDB", "Redis", "Next.js", "Vite", "GitHub Actions",
];

export const about = {
  intro:
    "I'm a B.E. Computer Science (Artificial Intelligence) student at Dayananda Sagar Academy of Technology and Management, Bengaluru, graduating July 2027. I build full-stack web apps and applied machine-learning systems, and I like taking an idea from a prototype to something people can use.",
  facts: [
    { value: "4", label: "Shipped projects on GitHub" },
    { value: "0.94", label: "Validation AUC on DocForensics' CNN" },
    { value: "87", label: "Automated tests in one project" },
    { value: "2027", label: "Graduating, open to internships" },
  ],
  experience: [
    {
      role: "Full Stack Web Developer Intern",
      org: "Fabits",
      when: "Jan 2024 – May 2024",
      detail: "Built features across a React, Node.js and MongoDB app. Cut API response latency by 30%.",
    },
    {
      role: "Freelance Frontend Developer",
      org: "CryptoDigvijay",
      when: "2025",
      detail: "Built a multi-page company website for a YouTube creator with React, Vite and Framer Motion.",
    },
  ],
  achievements: [
    "Co-inventor on an Indian patent application (published Jan 2026): an adaptive therapeutic system for chronic venous insufficiency.",
    "Harvard CS50x: Introduction to Computer Science (edX).",
  ],
};

export const projects = [
  {
    id: "boardflow",
    title: "Boardflow",
    tagline: "Real-time collaborative AI whiteboard",
    summary:
      "A multiplayer whiteboard where edits merge without conflicts and keep working offline.",
    stack: ["TypeScript", "React", "Yjs", "Fastify", "Redis", "MongoDB"],
    repo: "https://github.com/Suryakarthik-1/Boardflow",
    demo: "",
    problem:
      "Most whiteboard tools use last-write-wins, so two people editing the same shape can overwrite each other's work, and they break when the connection drops.",
    built: [
      "Synced edits with Yjs CRDTs over WebSockets, so concurrent edits merge deterministically.",
      "Cached offline edits in IndexedDB and replayed them when the user reconnected.",
      "Scaled the sync server across instances with Redis pub/sub fan-out.",
      "Added five AI features (roadmap, explain, generate, summary, tasks) that read the board's structured shapes, not screenshots. Every AI response is validated with Zod before it reaches the canvas.",
    ],
    outcome: "Vitest unit tests and Playwright end-to-end tests. Deploy config for Render and Railway.",
  },
  {
    id: "docforensics",
    title: "DocForensics",
    tagline: "Tampered and AI-generated document detector",
    summary:
      "Flags forged documents and shows a heatmap of where the edits are.",
    stack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Docker"],
    repo: "https://github.com/Suryakarthik-1/DocForensics",
    demo: "",
    problem:
      "A forged document can look perfect to the eye. Editing leaves traces in compression and noise that a model can learn to find.",
    built: [
      "Designed TamperNet, a two-stream U-Net that takes RGB and SRM noise-residual inputs and outputs a pixel-level tamper heatmap.",
      "Combined the CNN with seven classical forensic detectors (ELA, noise, copy-move, double-JPEG, font, metadata, AI-image) into one verdict: Authentic, Tampered or AI-generated.",
      "Shipped as a single Docker image on Hugging Face Spaces, with an fp16 model that is 5 MB.",
    ],
    outcome: "0.94 validation AUC on a synthetic dataset built from paired clean and forged copies. 87 pytest tests and GitHub Actions CI.",
  },
  {
    id: "insurance",
    title: "InsuranceOrg",
    tagline: "AI policy manager for an insurance agent",
    summary:
      "Replaces WhatsApp groups for policy documents. Gemini reads uploaded policy PDFs into structured data.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Next.js", "Gemini API"],
    repo: "https://github.com/Suryakarthik-1/Insurence_tracker",
    demo: "",
    problem:
      "An insurance agent was keeping policy PDFs and customer records in WhatsApp groups, so finding a customer's policy was slow and error-prone.",
    built: [
      "Uploaded policy PDFs are read by Gemini, which returns structured JSON. The agent reviews and corrects it before saving.",
      "Customers, policies and documents are modelled in PostgreSQL with Alembic migrations.",
      "JWT login, instant search, and expiry reminders, all behind a Next.js frontend.",
    ],
    outcome: "Full PRD written before development. Backend and frontend are separate, with a Docker Compose file for the database.",
  },
  {
    id: "clipman",
    title: "Clipman",
    tagline: "Clipboard history manager for Linux",
    summary:
      "A Win+V-style clipboard history for Fedora, on both X11 and Wayland.",
    stack: ["Python", "PyQt6", "SQLite", "systemd"],
    repo: "https://github.com/Suryakarthik-1/Clipboard-for-Fedora",
    demo: "",
    problem:
      "Linux has no built-in clipboard history, and clipboard tools often store passwords in plain text.",
    built: [
      "A background daemon with persistent SQLite history that survives reboots.",
      "Fuzzy search, pinning, and auto-categories for URLs, code, colours and file paths.",
      "A sanitiser that pauses recording when it sees secret-like text, plus a Unix-socket IPC between the daemon and the UI.",
    ],
    outcome: "Runs as a systemd user service. Works on X11 and Wayland.",
  },
];

// Simple "how I work" steps. Keep these honest: they describe your approach, not claims.
export const process = [
  {
    step: "01",
    title: "Understand the problem",
    text: "I start by asking who the user is and what they are doing now, before choosing any tools.",
  },
  {
    step: "02",
    title: "Build a working version",
    text: "I get a small end-to-end version running first, then add features on top of it.",
  },
  {
    step: "03",
    title: "Test what matters",
    text: "Unit tests for the logic and end-to-end tests for the flows users actually take.",
  },
  {
    step: "04",
    title: "Ship and document",
    text: "A README with setup steps, a live link where possible, and notes on what I would improve next.",
  },
];
