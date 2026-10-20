import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../animation/Reveal";
import { site } from "../../data/site";

// Three short answers to: what do you build, what are you learning, why?
const facts = [
  {
    label: "What I build",
    text: "Responsive, readable interfaces with HTML, CSS, React and Tailwind CSS.",
  },
  {
    label: "What I am learning",
    text: "JavaScript in more depth, then backend development, databases and software architecture.",
  },
  {
    label: "What drives me",
    text: "Using technology and education to open real opportunities for people in my community.",
  },
];

export default function IntroSection() {
  return (
    <section aria-labelledby="intro-title" className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="intro-title" number="01" label="Introduction" title="A developer in progress." />
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed sm:text-xl">
              I study at the {site.education.faculty} at {site.education.school}, and I build
              websites while I learn. I care about interfaces that are clean, quick to
              understand and pleasant to use.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              I try to be honest about where I am: confident with HTML, CSS and React, still
              growing in JavaScript, backend and databases. My goal is to become a full-stack
              developer, one project at a time.
            </p>
          </Reveal>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} delay={0.08 * index} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <dt className="font-mono text-xs uppercase tracking-widest text-accent">{fact.label}</dt>
                <dd className="text-sm leading-relaxed sm:text-base">{fact.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
