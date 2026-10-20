import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import PageTransition from "../components/animation/PageTransition";

// Each page is loaded only when someone visits it ("code splitting"),
// which keeps the first load small and fast.
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));
const Skills = lazy(() => import("../pages/Skills"));
const Learning = lazy(() => import("../pages/Learning"));
const Books = lazy(() => import("../pages/Books"));
const Certificates = lazy(() => import("../pages/Certificates"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Shown for a moment while a page file is being loaded
function RouteLoading() {
  return (
    <div role="status" className="flex min-h-[60vh] items-center justify-center">
      <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

// Small helper: wraps a page element in the page transition
const page = (element) => <PageTransition>{element}</PageTransition>;

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteLoading />}>
      {/* mode="wait": the old page finishes leaving before the new one enters.
          key={location.pathname}: tells AnimatePresence "this is a new page".
          We do NOT set initial={false}: that would also switch off the hero's
          entrance animation on the very first page load. */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={page(<Home />)} />
          <Route path="/about" element={page(<About />)} />
          <Route path="/projects" element={page(<Projects />)} />
          <Route path="/projects/:slug" element={page(<ProjectDetail />)} />
          <Route path="/skills" element={page(<Skills />)} />
          <Route path="/learning" element={page(<Learning />)} />
          <Route path="/books" element={page(<Books />)} />
          <Route path="/certificates" element={page(<Certificates />)} />
          <Route path="/gallery" element={page(<Gallery />)} />
          <Route path="/contact" element={page(<Contact />)} />
          <Route path="*" element={page(<NotFound />)} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
