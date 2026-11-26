import {
  ArrowUp,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import { Reveal, SectionHeader, StaggerContainer, StaggerItem } from './MotionPrimitives';
import {
  DEVELOPER_INFO,
  DEVELOPMENT_HIGHLIGHTS,
  NAV_LINKS,
  PROJECT_DETAILS,
} from '../data/projectData';

export default function HighlightsAndFooter({ theme, onToggleTheme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* DEVELOPMENT HIGHLIGHTS & PROJECT DETAILS */}
      <section className="py-20 sm:py-24 border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Development Highlights */}
          <div>
            <SectionHeader
              eyebrow="Engineering Takeaways"
              title="What This Project Demonstrates"
              description="Core full-stack software engineering principles applied across the user interface, REST APIs, and relational persistence."
            />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {DEVELOPMENT_HIGHLIGHTS.map((highlight) => (
                <StaggerItem key={highlight}>
                  <div className="theme-surface flex items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-4 py-3.5">
                    <CheckCircle2
                      className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {highlight}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Compact Project Details */}
          <Reveal>
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-subtle-light/60 dark:bg-surface-dark p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200/80 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Project Details
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-600/10 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
                  Completed Academic Project
                </span>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
                {PROJECT_DETAILS.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT / PROJECT DEVELOPER SECTION */}
      <section
        id="contact"
        className="py-16 sm:py-20 bg-subtle-light/50 dark:bg-subtle-dark/30 border-b border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-6 sm:p-10 shadow-soft dark:shadow-soft-dark flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                  Project Inquiries
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  Interested in the Project?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Explore the architecture, implementation, and technologies behind the Startup Idea Validation Portal.
                </p>
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                  Developer: <span className="font-semibold text-slate-900 dark:text-slate-100">{DEVELOPER_INFO.name}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row flex-wrap gap-3 shrink-0">
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{DEVELOPER_INFO.email}</span>
                </a>

                <a
                  href={DEVELOPER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-surface inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-subtle-dark text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                </a>

                <span
                  aria-label="GitHub repository link placeholder"
                  title="Repository link placeholder — no public URL configured"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50/70 dark:bg-canvas-dark/40 cursor-default"
                >
                  <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub (Placeholder)</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MINIMALIST FOOTER */}
      <footer className="py-10 bg-canvas-light dark:bg-canvas-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
            <div>
              <p className="font-display font-semibold text-base text-slate-900 dark:text-slate-100">
                Startup Idea Validation Portal
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Designed and developed as a full-stack application.
              </p>
            </div>

            <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className="theme-surface inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-subtle-dark transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-slate-700" aria-hidden="true" />
                    <span>Dark</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="theme-surface inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-subtle-dark transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Startup Idea Validation Portal. All rights reserved.</p>
            <p>Developed by {DEVELOPER_INFO.name}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
