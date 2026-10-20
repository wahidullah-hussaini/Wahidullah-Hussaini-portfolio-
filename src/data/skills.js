// ============================================================================
// SKILLS — your self-reported levels, exactly as you gave them.
// ----------------------------------------------------------------------------
// `level` is a percentage you chose yourself. It is NOT a test result, and the
// site says so. To update a skill, change its number here: every page that
// shows skills updates automatically.
// `id` must match an id in components/skills/techIcons.js (that is how the
// right logo is found).
// ============================================================================

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend development",
    skills: [
      { id: "html", label: "HTML", level: 95 },
      { id: "css", label: "CSS", level: 93 },
      { id: "javascript", label: "JavaScript", level: 45 },
      { id: "react", label: "React", level: 75 },
      { id: "bootstrap", label: "Bootstrap", level: 50 },
      { id: "tailwind", label: "Tailwind CSS", level: 65 },
    ],
  },
  {
    id: "design",
    title: "UI/UX design",
    skills: [{ id: "figma", label: "Figma", level: 45 }],
  },
  {
    id: "tools",
    title: "Development tools and deployment",
    skills: [
      { id: "git", label: "Git and GitHub", level: 60 },
      { id: "vercel", label: "Vercel", level: 90 },
      { id: "netlify", label: "Netlify", level: 80 },
    ],
  },
  {
    id: "languages",
    title: "Programming languages",
    skills: [
      { id: "python", label: "Python", level: 30 },
      { id: "java", label: "Java", level: 35 },
      { id: "go", label: "Go", level: 20 },
      { id: "php", label: "PHP", level: 25 },
      { id: "cpp", label: "C++", level: 30 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [{ id: "mysql", label: "MySQL", level: 40 }],
  },
];

// Subjects you have studied. Shown as areas of knowledge, not as expertise.
export const csKnowledge = [
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence",
  "Computer Architecture",
  "Database Management Systems",
  "Other foundational computer science subjects",
];
