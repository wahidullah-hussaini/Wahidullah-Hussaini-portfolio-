import { LuCheck, LuTarget } from "react-icons/lu";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../animation/Reveal";
import { learningSteps, statusLabels } from "../../data/learning";

// The look of each step's round marker, by status.
// (The status is also written out as words next to the title.)
function Marker({ status }) {
  if (status === "done") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-fg">
        <LuCheck aria-hidden="true" className="h-4 w-4" />
      </span>
    );
  }
  if (status === "goal") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent text-accent">
        <LuTarget aria-hidden="true" className="h-4 w-4" />
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent bg-bg">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
    );
  }
  return <span className="block h-7 w-7 rounded-full border border-line bg-bg" />;
}

export default function LearningJourney() {
  return (
    <section aria-labelledby="learning-title" className="border-t border-line bg-surface/40 py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="learning-title" number="04" label="Learning journey" title="From the front toward the full stack.">
            Where I started, where I am, and where I am heading. A plan and an honest progress
            marker, not a list of achievements.
          </SectionHeading>
        </Reveal>

        <ol className="relative space-y-10 border-l border-line pl-10">
          {learningSteps.map((step, index) => (
            <li key={step.id} className="relative">
              {/* The marker sits on the vertical line */}
              <span className="absolute -left-[3.2rem] top-0.5">
                <Marker status={step.status} />
              </span>
              <Reveal delay={0.05 * index}>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {statusLabels[step.status]}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{step.note}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
