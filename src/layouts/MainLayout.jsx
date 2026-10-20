import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";
import StarField from "../components/animation/StarField";
import BackToTop from "../components/common/BackToTop";

// The frame around every page: sky background, navbar, page content, footer.
// `children` is whatever page the router is currently showing.
export default function MainLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <StarField />

      {/* Lets keyboard users jump past the navbar */}
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="relative z-10 flex-1 outline-none">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
