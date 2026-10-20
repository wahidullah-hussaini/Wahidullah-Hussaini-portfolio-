// The learning roadmap shown on the home page (and later the Learning page).
// status: "done" | "active" | "next" | "goal"
// Edit honestly: this is a plan and a progress marker, not a list of
// achievements. Move a step forward only when it is true.

export const learningSteps = [
  {
    id: "foundations",
    title: "HTML and CSS",
    note: "The foundation: page structure, layout and responsive design.",
    status: "done",
  },
  {
    id: "ui",
    title: "Tailwind CSS and React",
    note: "Building reusable, component-based interfaces.",
    status: "active",
  },
  {
    id: "javascript",
    title: "JavaScript in depth",
    note: "Strengthening the language that sits underneath React.",
    status: "active",
  },
  {
    id: "backend",
    title: "Backend development",
    note: "Servers, APIs and the logic behind an application.",
    status: "next",
  },
  {
    id: "databases",
    title: "Databases",
    note: "Designing and querying data, starting from MySQL.",
    status: "next",
  },
  {
    id: "fullstack",
    title: "Full-stack engineering",
    note: "Software architecture and complete, useful products.",
    status: "goal",
  },
];

// Words shown next to each step, so status never depends on colour alone.
export const statusLabels = {
  done: "Solid foundation",
  active: "In progress",
  next: "Up next",
  goal: "Long-term goal",
};
