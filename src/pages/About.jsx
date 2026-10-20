import PagePlaceholder from "../components/common/PagePlaceholder";

export default function About() {
  return (
    <PagePlaceholder
      title="About"
      phase="Phase 4 · coming soon"
      description="My story, my studies at Kabul Education University, and the way I learn."
      planned={[
        "Personal story and approach to learning",
        "Milestone timeline (only dates you confirm)",
        "Portrait section with a replaceable image",
      ]}
    />
  );
}
