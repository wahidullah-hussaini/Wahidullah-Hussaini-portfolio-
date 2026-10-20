import { useParams } from "react-router-dom";
import PagePlaceholder from "../components/common/PagePlaceholder";

export default function ProjectDetail() {
  // useParams reads the :slug part of the URL, e.g. /projects/my-first-site
  const { slug } = useParams();

  return (
    <PagePlaceholder
      title="Project case study"
      phase="Phase 4 · coming soon"
      description={`This route works. The page for "${slug}" will be built together with the projects data file.`}
    />
  );
}
