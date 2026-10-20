import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scrolling by itself. This puts every new page
// back at the top. It renders nothing: it only runs the effect.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
