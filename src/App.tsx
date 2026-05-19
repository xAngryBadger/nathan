import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitPanelLayout from "./components/SplitPanelLayout";
import Nav from "./components/Nav";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Now from "./pages/Now";
import About from "./pages/About";
import Bookshelf from "./pages/Bookshelf";
import Games from "./pages/Games";
import Music from "./pages/Music";
import Setup from "./pages/Setup";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as unknown as Record<string, unknown>).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(refreshTimer);
      delete (window as unknown as Record<string, unknown>).lenis;
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <SplitPanelLayout nav={<Nav />}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="split-right-content"
        >
<Routes location={location}>
          <Route index element={<Navigate to="/now" replace />} />
          <Route path="/now" element={<Now />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/games" element={<Games />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </motion.div>
      </AnimatePresence>
      <ScrollProgress />
      <CustomCursor />
    </SplitPanelLayout>
  );
}

export default function App() {
  return <AppContent />;
}
