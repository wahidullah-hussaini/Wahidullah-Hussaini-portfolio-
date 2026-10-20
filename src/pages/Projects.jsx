import PagePlaceholder from "../components/common/PagePlaceholder";

export default function Projects() {
  return (
    <PagePlaceholder
      title="Projects"
      phase="Phase 4 · coming soon"
      description="The things I have built, with case studies you can open one by one."
      planned={[
        "Central projects data file (easy to add and edit)",
        "Search plus category and technology filters",
        "Project detail pages with problem, solution and lessons",
      ]}
    />
  );
}
