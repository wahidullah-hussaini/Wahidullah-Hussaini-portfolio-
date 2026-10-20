import { LuArrowUpRight } from "react-icons/lu";
import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../animation/Reveal";
import SkillBar from "../skills/SkillBar";
import { skillGroups } from "../../data/skills";
import { STRENGTH_THRESHOLD } from "../../lib/skills";

// A compact view of the frontend skills, strongest first.
// The full list (tools, languages, databases...) lives on the Skills page.
export default function SkillsPreview() {
  const frontend = skillGroups.find((group) => group.id === "frontend");
  const sorted = [...frontend.skills].sort((a, b) => b.level - a.level);

  return (
    <section aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="skills-title" number="03" label="Skills" title="What I work with.">
              My frontend toolkit, strongest first. These levels are my own honest estimates,
              not test results.
            </SectionHeading>

            <p className="mt-8 max-w-xs border-l border-accent pl-4 text-sm leading-relaxed text-muted">
              <span className="text-fg">Strength</span> means {STRENGTH_THRESHOLD}% or more.{" "}
              <span className="text-fg">Developing</span> means I am still learning it.
            </p>

            <Button to="/skills" variant="ghost" icon={LuArrowUpRight} className="mt-8">
              See all skills
            </Button>
          </Reveal>

          <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {sorted.map((skill) => (
              <li key={skill.id}>
                <SkillBar id={skill.id} label={skill.label} level={skill.level} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
