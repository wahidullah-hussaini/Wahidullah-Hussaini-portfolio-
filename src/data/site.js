// ============================================================================
// SITE CONFIG — the one file you edit to change your personal details.
// ----------------------------------------------------------------------------
// Anything that still starts with "YOUR_" is a placeholder. Placeholders are
// never shown as real links: components check isConfigured() first.
// ============================================================================

export const site = {
  name: "Wahidullah Hussaini",
  initials: "WH",
  role: "Frontend Developer",

  tagline:
    "Building digital experiences. Growing through code. Creating possibilities for my people.",

  headline: "Frontend developer, growing toward full-stack.",

  intro:
    "I'm a student at Kabul Education University and a frontend developer in progress. I build clean interfaces with HTML, CSS, React and Tailwind, and I'm learning my way toward backend, databases and software architecture.",

  education: {
    school: "Kabul Education University",
    faculty: "Faculty of Computer Education",
  },

  // Replace each YOUR_... value with your real details.
  contact: {
    email: "YOUR_EMAIL", // e.g. name@example.com
    whatsapp: "YOUR_WHATSAPP_NUMBER", // digits with country code, e.g. 93700000000
    github: "YOUR_GITHUB_URL", // e.g. https://github.com/yourname
    linkedin: "YOUR_LINKEDIN_URL", // e.g. https://www.linkedin.com/in/yourname
  },

  // Put your PDF in /public/documents/ and set e.g. "/documents/resume.pdf"
  resumePath: "YOUR_RESUME_PDF",

  // Your photos. Put the files in these folders (see public/images/README.md).
  // Until a file exists, the site shows a clearly marked placeholder instead.
  images: {
    profile: "/images/profile/profile.jpg",
    about: "/images/profile/about.jpg",
  },
};

// True only when a value has really been filled in.
export const isConfigured = (value) =>
  typeof value === "string" &&
  value.trim() !== "" &&
  !value.trim().startsWith("YOUR_");

// The pages shown in the navbar and footer, in order.
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/learning", label: "Learning" },
  { to: "/books", label: "Books" },
  { to: "/certificates", label: "Certificates" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];
