import { LuMail, LuSend } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";
import Container from "../common/Container";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import Reveal from "../animation/Reveal";
import { site } from "../../data/site";
import { buildContactLinks } from "../../lib/links";

// Direct links show up only once real details are set in src/data/site.js.
const directIcons = { email: LuMail, whatsapp: SiWhatsapp };

export default function ContactCTA() {
  const direct = buildContactLinks(site.contact).filter((link) => directIcons[link.id]);

  return (
    <section aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-36">
      <Container className="text-center">
        <Reveal>
          <p className="eyebrow">07 — Contact</p>
          <h2
            id="contact-title"
            className="mx-auto mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Let&apos;s build something <span className="italic text-accent">useful</span> together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            If you are hiring, collaborating, or have a project in mind, I would be glad to hear
            from you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" icon={LuSend}>
              Get in touch
            </Button>
            {direct.map((link) => (
              <Button key={link.id} href={link.href} variant="ghost" icon={directIcons[link.id]}>
                {link.id === "email" ? "Email me" : "WhatsApp"}
              </Button>
            ))}
          </div>

          <SocialLinks className="mt-8 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
