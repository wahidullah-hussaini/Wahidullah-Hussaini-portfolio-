import { useEffect } from "react";
import { site } from "../data/site";

// Sets the browser tab title for a page, e.g. "About — Wahidullah Hussaini".
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;
  }, [title]);
}
