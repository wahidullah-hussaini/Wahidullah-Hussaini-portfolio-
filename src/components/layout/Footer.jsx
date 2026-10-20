import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import Container from "../common/Container";
import Monogram from "../common/Monogram";
import SocialLinks from "../common/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg/70">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Monogram />
            <p className="font-display text-xl tracking-tight">{site.name}</p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            A developer on a learning journey, building useful things one project at a time,
            with the hope of creating opportunities for my people in Afghanistan.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-fg transition-colors duration-300 hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {site.role} · {site.education.school}
          </p>
        </Container>
      </div>
    </footer>
  );
}
