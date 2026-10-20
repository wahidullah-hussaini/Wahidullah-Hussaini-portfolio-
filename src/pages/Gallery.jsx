import PagePlaceholder from "../components/common/PagePlaceholder";

export default function Gallery() {
  return (
    <PagePlaceholder
      title="Gallery"
      phase="Phase 6 · coming soon"
      description="A visual journal of places and moments."
      planned={[
        "Editorial layout with hover reveal (title and description)",
        "Full-screen viewer with next, previous and Escape",
      ]}
    />
  );
}
