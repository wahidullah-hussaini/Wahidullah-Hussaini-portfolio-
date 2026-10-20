import PagePlaceholder from "../components/common/PagePlaceholder";

export default function Contact() {
  return (
    <PagePlaceholder
      title="Contact"
      phase="Phase 7 · coming soon"
      description="The best way to reach me for work, collaboration or a conversation."
      planned={[
        "Validated contact form (honest demo mode until a backend is connected)",
        "WhatsApp, email and GitHub links from your real details",
      ]}
    />
  );
}
