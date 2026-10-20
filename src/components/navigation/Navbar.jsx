import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";
import { navLinks, site } from "../../data/site";
import Monogram from "../common/Monogram";
import Button from "../common/Button";
import ThemeToggle from "./ThemeToggle";

// NavLink gives us `isActive`, so the current page is highlighted.
const desktopLinkClass = ({ isActive }) =>
  `relative px-3 py-2 text-sm transition-colors duration-300 ${
    isActive ? "text-fg" : "text-muted hover:text-fg"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block rounded-lg px-4 py-3 text-lg transition-colors ${
    isActive ? "bg-surface text-accent" : "text-fg hover:bg-surface"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false); // is the mobile menu open?
  const [scrolled, setScrolled] = useState(false); // has the page scrolled?
  const { pathname } = useLocation();

  // 1) Become more defined after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2) Close the mobile menu when the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 3) While the menu is open: Escape closes it and the page behind can't scroll
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // 4) If the window grows to desktop size, close the mobile menu
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label={`${site.name} — home`} className="flex items-center gap-3">
          <Monogram />
          <span className="hidden font-display text-lg tracking-tight sm:block">{site.name}</span>
        </Link>

        {/* Desktop navigation (hidden below the xl breakpoint) */}
        <nav aria-label="Main" className="hidden items-center xl:flex">
          <ul className="flex items-center">
            {/* Contact is left out of this row on desktop: it has its own button on the right */}
            {navLinks
              .filter(({ to }) => to !== "/contact")
              .map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={desktopLinkClass}>
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden sm:inline-flex">
            Contact
          </Button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition duration-300 hover:border-accent hover:text-accent xl:hidden"
          >
            {open ? (
              <LuX aria-hidden="true" className="h-4 w-4" />
            ) : (
              <LuMenu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu: slides down, fades out */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-6 pt-3 xl:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end={to === "/"} className={mobileLinkClass}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
