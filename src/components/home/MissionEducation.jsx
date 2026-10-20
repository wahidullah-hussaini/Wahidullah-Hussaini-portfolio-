import { LuGraduationCap } from "react-icons/lu";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../animation/Reveal";
import ConstellationGraphic from "../animation/ConstellationGraphic";
import { csKnowledge } from "../../data/skills";
import { site } from "../../data/site";

export default function MissionEducation() {
  return (
    <section aria-labelledby="mission-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="mission-title" number="05" label="Education and mission" title="Why I am building." />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <Reveal>
            <div className="rounded-xl border border-line bg-surface/60 p-8">
              <LuGraduationCap aria-hidden="true" className="h-6 w-6 text-accent" />
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">Currently studying</p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{site.education.faculty}</h3>
              <p className="mt-1 text-muted">{site.education.school}</p>

              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">Areas of study</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {csKnowledge.map((subject) => (
                  <li key={subject} className="rounded-full border border-line px-3 py-1.5 text-xs">
                    {subject}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">
                Subjects I have studied: areas of knowledge, not professional specialisations.
              </p>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.1}>
            <ConstellationGraphic className="mx-auto w-full max-w-md" />
            <blockquote className="mt-8">
              <p className="font-display text-2xl italic leading-snug sm:text-3xl">
                I love Afghanistan and its people. I believe education, technology and creativity
                can help a community grow.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                I want what I learn to become useful digital products that solve real problems and
                create opportunities for others. I am at the beginning of that road, and I intend
                to walk it patiently.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
