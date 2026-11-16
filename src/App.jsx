import { useEffect, useState } from "react";
import {
  FiMenu, FiX, FiMail, FiGithub, FiLinkedin, FiDownload,
  FiArrowUpRight, FiCode, FiCheck,
} from "react-icons/fi";
import {
  person, navItems, stack, about, projects, process,
} from "./data.js";
import LogoStrip from "./Logos.jsx";
import ContactForm from "./ContactForm.jsx";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Main">
        <a className="nav-brand" href="#home" aria-label="Back to top">SK</a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <ul id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={`mailto:${person.email}`} aria-label="Email Surya">
          <FiMail />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="badge">Available for 2027 internships</span>
        <h1>
          <span className="hero-line">{person.headlineTop} <em>{person.headlineName}</em></span>
          <span className="hero-line"><em>{person.headlineRest}</em></span>
          <span className="hero-line">{person.headlineSub}</span>
        </h1>
        <div className="hero-actions">
          <a className="btn btn-dark" href="#contact"><FiMail /> Contact me</a>
          <a className="btn btn-light" href="#projects"><FiCode /> View projects</a>
        </div>
      </div>
      <div className="hero-photo-wrap" aria-hidden="true">
        <img className="hero-photo" src="/hero-cutout.png" alt="" width="765" height="1024" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <span className="eyebrow">About me</span>
      <h2>I turn ideas into <em>working software.</em></h2>
      <p className="lead">{about.intro}</p>

      <div className="facts">
        {about.facts.map((f) => (
          <div className="fact" key={f.label}>
            <div className="fact-value">{f.value}</div>
            <div className="fact-label">{f.label}</div>
          </div>
        ))}
      </div>

      <div className="two-col">
        <div>
          <h3>Experience</h3>
          <ul className="timeline">
            {about.experience.map((e) => (
              <li key={e.role}>
                <div className="timeline-head">
                  <strong>{e.role}</strong>
                  <span>{e.when}</span>
                </div>
                <div className="timeline-org">{e.org}</div>
                <p>{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Recognition</h3>
          <ul className="check-list">
            {about.achievements.map((a) => (
              <li key={a}><FiCheck aria-hidden="true" /><span>{a}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <h3>{project.title}</h3>
        <span className="project-tagline">{project.tagline}</span>
      </div>
      <p>{project.summary}</p>
      <ul className="chips" aria-label="Stack">
        {project.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <div className="project-links">
        <button className="btn btn-dark btn-sm" onClick={() => onOpen(project)}>
          Case study
        </button>
        <a className="btn btn-light btn-sm" href={project.repo} target="_blank" rel="noreferrer">
          <FiGithub /> Code
        </a>
        {project.demo && (
          <a className="btn btn-light btn-sm" href={project.demo} target="_blank" rel="noreferrer">
            Live demo <FiArrowUpRight />
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close case study">
          <FiX />
        </button>
        <span className="eyebrow">Case study</span>
        <h3 id="modal-title">{project.title}</h3>
        <p className="modal-tagline">{project.tagline}</p>

        <h4>The problem</h4>
        <p>{project.problem}</p>

        <h4>What I built</h4>
        <ul className="check-list">
          {project.built.map((b) => <li key={b}><FiCheck aria-hidden="true" /><span>{b}</span></li>)}
        </ul>

        <h4>Result</h4>
        <p>{project.outcome}</p>

        <ul className="chips">
          {project.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="project-links">
          <a className="btn btn-dark btn-sm" href={project.repo} target="_blank" rel="noreferrer">
            <FiGithub /> View code
          </a>
          {project.demo && (
            <a className="btn btn-light btn-sm" href={project.demo} target="_blank" rel="noreferrer">
              Live demo <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section className="section section-tint" id="projects">
      <span className="eyebrow">Selected work</span>
      <h2>Projects I've <em>built.</em></h2>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <span className="eyebrow">How I work</span>
      <h2>From idea to <em>shipped.</em></h2>
      <div className="process-grid">
        {process.map((p) => (
          <div className="process-card" key={p.step}>
            <span className="process-step">{p.step}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-tint" id="contact">
      <span className="eyebrow">Contact</span>
      <h2>Let's <em>talk.</em></h2>
      <p className="lead">
        I'm looking for 2027 internships and open to freelance projects. Send a message and I'll reply.
      </p>
      <div className="contact-grid">
        <ContactForm />
        <div className="contact-side">
          <a className="contact-link" href={`mailto:${person.email}`}><FiMail /> {person.email}</a>
          <a className="contact-link" href={person.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          <a className="contact-link" href={person.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          <a className="btn btn-dark" href={person.resumeUrl} download><FiDownload /> Download resume</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip items={stack} />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {person.name}. Built with React and Vite.
      </footer>
    </>
  );
}
