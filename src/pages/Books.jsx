import PagePlaceholder from "../components/common/PagePlaceholder";

export default function Books() {
  return (
    <PagePlaceholder
      title="Books"
      phase="Phase 6 · coming soon"
      description="A small library of what I read and what it teaches me."
      planned={[
        "Search, category and reading-status filters",
        "Key lessons and personal notes (sample entries clearly labelled until you add real books)",
      ]}
    />
  );
}
