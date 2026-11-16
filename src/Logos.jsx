import {
  SiPython, SiTypescript, SiReact, SiPytorch, SiFastapi, SiDocker,
  SiPostgresql, SiMongodb, SiRedis, SiNextdotjs, SiVite, SiGithubactions,
} from "react-icons/si";

// Maps the names in data.js `stack` to brand icons.
const logoMap = {
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "PyTorch": SiPytorch,
  "FastAPI": SiFastapi,
  "Docker": SiDocker,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "Next.js": SiNextdotjs,
  "Vite": SiVite,
  "GitHub Actions": SiGithubactions,
};

export default function LogoStrip({ items }) {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="logo-strip" aria-label="Tools I use">
      <div className="logo-track">
        {loop.map((name, i) => {
          const Icon = logoMap[name];
          return (
            <span className="logo-item" key={`${name}-${i}`} aria-hidden={i >= items.length}>
              {Icon && <Icon className="logo-icon" aria-hidden="true" />}
              <span>{name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
