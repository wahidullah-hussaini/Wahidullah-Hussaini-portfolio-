import { isConfigured } from "../data/site";

const isHttpUrl = (value) => /^https?:\/\/\S+$/i.test(value.trim());
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Turn "+93 700 000 000" into "93700000000" (WhatsApp wants digits only).
const toDigits = (value) => value.replace(/\D/g, "");

/**
 * Builds the list of contact links from the `contact` object in site.js.
 * A link is only returned when its value is real and valid, so a placeholder
 * like "YOUR_EMAIL" can never become a broken or fake link.
 */
export function buildContactLinks(contact) {
  const links = [];

  if (isConfigured(contact.email) && isEmail(contact.email)) {
    links.push({
      id: "email",
      label: "Email",
      href: `mailto:${contact.email.trim()}`,
    });
  }

  if (isConfigured(contact.whatsapp)) {
    const digits = toDigits(contact.whatsapp);
    if (digits.length >= 8) {
      const text = encodeURIComponent(
        "Hello Wahidullah, I found your portfolio and would like to talk.",
      );
      links.push({
        id: "whatsapp",
        label: "WhatsApp",
        href: `https://wa.me/${digits}?text=${text}`,
      });
    }
  }

  if (isConfigured(contact.github) && isHttpUrl(contact.github)) {
    links.push({ id: "github", label: "GitHub", href: contact.github.trim() });
  }

  if (isConfigured(contact.linkedin) && isHttpUrl(contact.linkedin)) {
    links.push({
      id: "linkedin",
      label: "LinkedIn",
      href: contact.linkedin.trim(),
    });
  }

  return links;
}
