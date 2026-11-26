import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Plus,
  Search,
  X,
} from 'lucide-react';
import { Reveal, SectionHeader } from './MotionPrimitives';
import { WORKFLOW_STEPS } from '../data/projectData';

const PREVIEW_SCREENS = [
  {
    id: 'dashboard',
    title: 'Main Dashboard',
    caption: 'Central workspace displaying submitted startup concepts, validation badges, and quick navigation.',
    route: '/dashboard',
  },
  {
    id: 'submission',
    title: 'Idea Submission',
    caption: 'Structured form interface for entering startup idea title, domain, and problem overview.',
    route: '/ideas/new',
  },
  {
    id: 'listing',
    title: 'Idea Listing',
    caption: 'Organized directory displaying all submitted startup ideas retrieved via GET /api/ideas.',
    route: '/ideas',
  },
  {
    id: 'validated',
    title: 'Validated Ideas',
    caption: 'Dedicated view surfacing ideas marked as validated via GET /api/ideas/validated.',
    route: '/ideas/validated',
  },
];

function MockupCanvas({ screenId, compact = false }) {
  const pad = compact ? 'p-3.5' : 'p-5 sm:p-6';

  if (screenId === 'dashboard') {
    return (
      <div className={`${pad} space-y-3 text-left`}>
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2.5">
          <div>
            <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              Validation Workspace
            </p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">
              All Concepts &amp; Review Status
            </p>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-medium">
            <Plus className="h-2.5 w-2.5" aria-hidden="true" />
            New Idea
          </span>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Campus Surplus Meal Connector', tag: 'Validated', color: 'emerald' },
            { name: 'Neighborhood Clinic Queue Sync', tag: 'Validated', color: 'emerald' },
            { name: 'Modular Lab Equipment Share', tag: 'Submitted', color: 'blue' },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-canvas-dark/60 px-3 py-2"
            >
              <span className="text-[11px] font-medium text-slate-800 dark:text-slate-200 truncate">
                {row.name}
              </span>
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                  row.color === 'emerald'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                    : 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
                }`}
              >
                {row.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screenId === 'submission') {
    return (
      <div className={`${pad} space-y-2.5 text-left`}>
        <div className="border-b border-slate-200/80 dark:border-slate-800 pb-2">
          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            Submit Startup Idea
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">
            POST /api/ideas
          </p>
        </div>
        <div className="space-y-2">
          <div className="rounded-md border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-canvas-dark/60 px-2.5 py-1.5">
            <span className="block text-[9px] uppercase text-slate-400">Idea Title</span>
            <span className="text-[11px] text-slate-800 dark:text-slate-200">
              Local Artisan Supply Ledger
            </span>
          </div>
          <div className="rounded-md border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-canvas-dark/60 px-2.5 py-1.5">
            <span className="block text-[9px] uppercase text-slate-400">Category</span>
            <span className="text-[11px] text-slate-800 dark:text-slate-200">
              Commerce &amp; Supply Chain
            </span>
          </div>
          <div className="rounded-md border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-canvas-dark/60 px-2.5 py-1.5">
            <span className="block text-[9px] uppercase text-slate-400">Concept Summary</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-300">
              Coordinate regional raw-material group orders for small craft workshops.
            </span>
          </div>
          <div className="flex justify-end pt-0.5">
            <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-[10px] font-medium">
              Save Concept
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (screenId === 'listing') {
    return (
      <div className={`${pad} space-y-2.5 text-left`}>
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            All Startup Ideas
          </p>
          <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700 rounded px-2 py-0.5">
            <Search className="h-2.5 w-2.5" aria-hidden="true" />
            Filter
          </span>
        </div>
        <div className="rounded-lg border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-white dark:bg-canvas-dark/60">
          <div className="grid grid-cols-12 px-3 py-1.5 bg-slate-50 dark:bg-subtle-dark text-[10px] font-semibold text-slate-500">
            <span className="col-span-6">Concept</span>
            <span className="col-span-3">Status</span>
            <span className="col-span-3 text-right">Action</span>
          </div>
          {[
            { name: 'Campus Surplus Meal', status: 'Validated' },
            { name: 'Clinic Queue Sync', status: 'Validated' },
            { name: 'Lab Equipment Share', status: 'Pending' },
          ].map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-12 items-center px-3 py-2 border-t border-slate-100 dark:border-slate-800 text-[11px]"
            >
              <span className="col-span-6 font-medium text-slate-800 dark:text-slate-200 truncate">
                {item.name}
              </span>
              <span className="col-span-3 text-[10px] text-slate-500 dark:text-slate-400">
                {item.status}
              </span>
              <span className="col-span-3 text-right text-[10px] text-rose-600 dark:text-rose-400">
                Delete
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${pad} space-y-2.5 text-left`}>
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
          Validated Startup Ideas
        </p>
        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
          /api/ideas/validated
        </span>
      </div>
      <div className="space-y-2">
        {[
          {
            title: 'Campus Surplus Meal Connector',
            note: 'Validated concept ready for implementation review',
          },
          {
            title: 'Neighborhood Clinic Queue Sync',
            note: 'Validated concept ready for implementation review',
          },
        ].map((idea) => (
          <div
            key={idea.title}
            className="rounded-lg border border-emerald-200/80 dark:border-emerald-500/25 bg-emerald-50/45 dark:bg-emerald-500/[0.08] px-3 py-2.5 flex items-start gap-2.5"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100 truncate">
                {idea.title}
              </p>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mt-0.5">
                {idea.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkflowAndGallery() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % PREVIEW_SCREENS.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + PREVIEW_SCREENS.length) % PREVIEW_SCREENS.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  const activeStep = WORKFLOW_STEPS[activeStepIndex];

  return (
    <>
      {/* PROJECT WORKFLOW SECTION */}
      <section
        id="workflow"
        className="py-20 sm:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Execution Flow"
            title="How the Platform Works"
            description="End-to-end request lifecycle from user input in React through Spring Boot layers to MySQL persistence and UI rendering."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Step Selector Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WORKFLOW_STEPS.map((step, index) => {
                const active = index === activeStepIndex;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className={`theme-surface text-left rounded-xl border p-4 transition-all duration-150 ${
                      active
                        ? 'border-blue-600 dark:border-blue-400 bg-blue-600/[0.06] dark:bg-blue-400/10 shadow-xs'
                        : 'border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          active
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      >
                        Step {step.number}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {step.actor}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail Card */}
            <Reveal className="lg:col-span-5">
              <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-subtle-light/60 dark:bg-surface-dark p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                    STEP {activeStep.number} OF 06
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {activeStep.actor}
                  </span>
                </div>

                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="py-5"
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {activeStep.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {activeStep.description}
                  </p>
                </motion.div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex(
                        (prev) => (prev - 1 + WORKFLOW_STEPS.length) % WORKFLOW_STEPS.length
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-subtle-dark text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors"
                  >
                    Next Step
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UI SCREENSHOTS / VISUAL PREVIEWS GALLERY */}
      <section className="py-20 sm:py-24 bg-subtle-light/50 dark:bg-subtle-dark/30 border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Interface Views"
            title="Inside the Platform"
            description="Representative UI previews illustrating the portal's four primary views. Click any preview to inspect it in an expanded view."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PREVIEW_SCREENS.map((screen, index) => (
              <Reveal key={screen.id} delay={index * 0.05}>
                <div className="theme-surface group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark overflow-hidden shadow-soft dark:shadow-soft-dark transition-transform duration-200 hover:-translate-y-0.5">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Expand ${screen.title} preview`}
                    className="w-full block text-left focus:outline-none"
                  >
                    {/* Browser Chrome */}
                    <div className="px-4 py-2.5 border-b border-slate-200/80 dark:border-slate-800 bg-subtle-light/80 dark:bg-subtle-dark/80 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {screen.route}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                          Visual Preview
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0">
                        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="hidden sm:inline">Expand</span>
                      </span>
                    </div>

                    {/* 16:10 Aspect Ratio Mockup Surface */}
                    <div className="aspect-[16/10] bg-slate-50/70 dark:bg-canvas-dark/40 overflow-hidden flex flex-col justify-center">
                      <MockupCanvas screenId={screen.id} compact />
                    </div>
                  </button>

                  <div className="px-5 py-4 border-t border-slate-200/80 dark:border-slate-800">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {screen.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {screen.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${PREVIEW_SCREENS[lightboxIndex].title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-2xl overflow-hidden"
            >
              <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {PREVIEW_SCREENS[lightboxIndex].title}
                    </h3>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-600/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300">
                      Representative UI Preview
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {PREVIEW_SCREENS[lightboxIndex].caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close preview"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-subtle-dark transition-colors"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="bg-slate-50/70 dark:bg-canvas-dark/50 min-h-[280px] flex flex-col justify-center">
                <MockupCanvas screenId={PREVIEW_SCREENS[lightboxIndex].id} />
              </div>

              <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (prev) => (prev - 1 + PREVIEW_SCREENS.length) % PREVIEW_SCREENS.length
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-subtle-dark"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Previous View
                </button>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {lightboxIndex + 1} / {PREVIEW_SCREENS.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev + 1) % PREVIEW_SCREENS.length)
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-subtle-dark"
                >
                  Next View
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
