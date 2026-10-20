import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";

// App only wires the big pieces together:
// theme -> layout (navbar, footer) -> routes (the pages).
export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ThemeProvider>
  );
}
