import { LuArrowLeft } from "react-icons/lu";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");

  return (
    <Container className="flex min-h-svh flex-col justify-center pb-16 pt-28">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-7xl tracking-tight sm:text-9xl">
        Off the <span className="italic text-accent">map</span>
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        This path doesn&apos;t lead anywhere. The page may have moved, or the address may have a
        typo.
      </p>
      <Button to="/" icon={LuArrowLeft} className="mt-10 self-start">
        Back to home
      </Button>
    </Container>
  );
}
