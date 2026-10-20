import { Link } from "react-router-dom";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import SmartImage from "../common/SmartImage";
import Reveal from "../animation/Reveal";
import { techIcons } from "../skills/techIcons";
import { projects } from "../../data/projects";

// Shows the projects marked `featured: true` in src/data/projects.js.
// With no real projects yet, it shows an honest "on the way" panel instead.
// (Stage 3 builds the full Projects page, filters and case studies.)

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/60">
      <SmartImage
        src={project.coverImage}
        alt={`Screenshot of ${project.title}`}
        fileLabel={project.coverImage?.split("/").pop()}
        className="aspect-[16/10]"
        imgClassName="transition duration-700 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {project.category} · {project.status}
        </p>
        <h3 className="mt-3 font-display text-2xl tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-3" aria-label="Technologies used">
          {project.technologies?.map((id) => {
            const Icon = techIcons[id];
            return Icon ? (
              <li key={id} title={id}>
                <Icon aria-hidden="true" className="h-5 w-5 text-muted" />
                <span className="sr-only">{id}</span>
              </li>
            ) : null;
          })}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-accent"
          >
            View Case Study <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
              <LuExternalLink aria-hidden="true" className="h-4 w-4" /> Live demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-accent">
              <SiGithub aria-hidden="true" className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section aria-labelledby="projects-title" className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="projects-title" number="02" label="Selected work" title="Projects">
            Real work only. Each project will have its own case study: the problem, the solution
            and what I learned.
          </SectionHeading>
        </Reveal>

        {featured.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={0.1 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-14">
            <div className="blueprint-grid-static rounded-xl border border-dashed border-line p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">Work in preparation</p>
              <p className="mt-4 max-w-xl font-display text-2xl leading-snug sm:text-3xl">
                Case studies are on the way.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                I am preparing my first projects for this page, with real screenshots, code and
                honest notes about what went well and what I would change.
              </p>
              <Button to="/projects" variant="ghost" icon={LuArrowUpRight} className="mt-8">
                Visit the projects page
              </Button>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
