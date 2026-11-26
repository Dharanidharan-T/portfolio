import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OverviewAndProblem from './components/OverviewAndProblem';
import FeaturesSection from './components/FeaturesSection';
import StackShowcase from './components/StackShowcase';
import ArchitectureAndTech from './components/ArchitectureAndTech';
import WorkflowAndGallery from './components/WorkflowAndGallery';
import HighlightsAndFooter from './components/HighlightsAndFooter';
import { NAV_LINKS } from './data/projectData';

const THEME_STORAGE_KEY = 'sivp-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (e) {
    // Fallback cleanly if storage is unavailable
  }
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors
    }
  }, [theme]);

  // Track active navigation section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-canvas-light text-slate-900 dark:bg-canvas-dark dark:text-slate-100 theme-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
        />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <OverviewAndProblem />
          <FeaturesSection />
          <StackShowcase />
          <ArchitectureAndTech />
          <WorkflowAndGallery />
          <HighlightsAndFooter theme={theme} onToggleTheme={toggleTheme} />
        </main>
      </div>
    </MotionConfig>
  );
}
