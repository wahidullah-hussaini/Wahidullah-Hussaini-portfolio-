import { LuArrowLeft } from "react-icons/lu";
import Container from "./Container";
import Button from "./Button";
import useDocumentTitle from "../../hooks/useDocumentTitle";

/**
 * Honest stand-in for pages that are not built yet.
 * The route, layout, navbar and theme already work; the real content
 * arrives in the phase named by the `phase` prop.
 */
export default function PagePlaceholder({ title, phase, description, planned = [] }) {
  useDocumentTitle(title);

  return (
    <Container className="pb-24 pt-36">
      <p className="eyebrow">{phase}</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{description}</p>

      {planned.length > 0 && (
        <div className="mt-10 max-w-xl rounded-xl border border-dashed border-line p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Planned for this page
          </p>
          <ul className="mt-4 space-y-2 text-sm text-fg">
            {planned.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button to="/" variant="ghost" icon={LuArrowLeft} className="mt-10">
        Back to home
      </Button>
    </Container>
  );
}
