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
    { value: "30+", label: "Public repositories on GitHub" },
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
  {
    id: "grovers",
    title: "Grover's Search in Qiskit",
    tagline: "Quantum search and quantum parallelism",
    summary:
      "Grover's algorithm implemented with Qiskit, with an analysis of how superposition and amplitude amplification find a marked item.",
    stack: ["Python", "Qiskit", "Matplotlib"],
    repo: "https://github.com/Suryakarthik-1/Grover-s-Algorithm-implemented-in-Python-using-Qiskit",
    demo: "",
    problem:
      "Searching an unsorted list of N items takes about N checks on a classical computer. Grover's algorithm needs roughly √N quantum steps, but the reason it works is easy to get wrong.",
    built: [
      "A minimal Grover implementation in Qiskit: an oracle that marks the target, then the diffusion operator (inversion about the mean).",
      "A separate analysis script that visualises superposition and how the amplitude of the target grows with each iteration.",
      "A comprehensive analyser for quantum parallelism, showing where the speed-up comes from and where it stops.",
      "A written walkthrough covering the oracle, phase kickback, the 2D rotation picture, and why running too many iterations hurts accuracy.",
    ],
    outcome:
      "Three runnable scripts and a plot. Written for a course on cryptography and quantum computing. Covers the implications for AES and hash functions.",
  },
  {
    id: "urbannexus",
    title: "Urban Nexus",
    tagline: "AI-powered smart city dashboard",
    summary:
      "An admin dashboard and citizen portal for city sensors, alerts, reports and policy simulations.",
    stack: ["TypeScript", "React", "Express", "Tailwind CSS", "React Query"],
    repo: "https://github.com/Suryakarthik-1/SmartCityIntegrated",
    demo: "",
    problem:
      "City teams deal with air quality, waste, water and traffic across many sensors, but the data sits in separate places, and citizens have no simple way to report problems.",
    built: [
      "An admin dashboard for live sensor readings, district data, time-series charts and an alert queue that can be resolved or deleted.",
      "A citizen portal for submitting reports and seeing their own stats.",
      "REST endpoints for sensors, alerts, route optimisation, predictions, policy simulation and search.",
      "Storage sits behind an interface, so the in-memory demo backend can be swapped for a real database.",
    ],
    outcome:
      "A working full-stack prototype with a schema shared between client and server. Storage is in-memory, so data resets on restart.",
  },
  {
    id: "taskboard",
    title: "TaskBoard",
    tagline: "Java web task manager",
    summary:
      "A task manager built with Java servlets, JSP, Hibernate and Spring, running on Tomcat with an in-memory H2 database.",
    stack: ["Java", "Servlets", "JSP", "Hibernate", "Spring", "H2", "Tomcat"],
    repo: "https://github.com/Suryakarthik-1/TaskBoard",
    demo: "",
    problem:
      "A web app needs a way to remember users between requests, store data, and keep the business logic apart from the page layer. This project shows how those pieces fit together in Java.",
    built: [
      "Add, mark as done, and delete tasks from a single page.",
      "Saves the user's display name in a cookie for 30 days, and counts visits in the HTTP session.",
      "Hibernate maps the Task class to a database table, and Spring injects the data-access object.",
      "Handles GET, POST, PUT, TRACE and OPTIONS requests in one servlet.",
    ],
    outcome:
      "A complete app that runs on Tomcat with no database install. Built for CS602 (Full Stack Web Development with Java).",
  },
  {
    id: "financetracker",
    title: "Finance Tracker",
    tagline: "Desktop income and expense tracker",
    summary:
      "A Java Swing app for tracking income and expenses, with a live balance that turns green or red.",
    stack: ["Java", "Swing", "AWT"],
    repo: "https://github.com/Suryakarthik-1/Finance-Tracker",
    demo: "",
    problem:
      "Keeping track of income and expenses in a spreadsheet is slow, and it's easy to enter a bad amount without noticing.",
    built: [
      "Add income and expense transactions, shown in a table.",
      "A live balance that updates on every change and is green when positive, red when negative.",
      "Input validation with error messages, and a clear-all action that asks for confirmation first.",
    ],
    outcome:
      "A single-file desktop app that runs from Eclipse or the command line. Built for CS 602 (Java GUI assignment).",
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
