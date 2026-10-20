import { LuMail } from "react-icons/lu";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { site } from "../../data/site";
import { buildContactLinks } from "../../lib/links";

// Which icon belongs to which link id (ids come from lib/links.js)
const icons = {
  email: LuMail,
  whatsapp: SiWhatsapp,
  github: SiGithub,
  linkedin: FaLinkedinIn,
};

/**
 * Shows an icon button for every contact link that is REALLY set up in
 * src/data/site.js. If nothing is set up yet, it renders nothing at all,
 * so the site never shows a fake or empty link.
 */
export default function SocialLinks({ className = "" }) {
  const links = buildContactLinks(site.contact);
  if (links.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ id, label, href }) => {
        const Icon = icons[id];
        const external = !href.startsWith("mailto:");
        return (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition duration-300 hover:border-accent hover:text-accent"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
