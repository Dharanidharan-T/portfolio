import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Layers, Plus, Trash2, X } from 'lucide-react';
import { INITIAL_DEMO_IDEAS } from '../data/projectData';

const TECH_TAGS = ['React', 'Spring Boot', 'Java', 'MySQL'];

function StatusBadge({ status }) {
  if (status === 'Validated') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/25">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
        Validated
      </span>
    );
  }
  if (status === 'Pending Review') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/80 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/25">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
        Pending Review
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/25">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
      Submitted
    </span>
  );
}

export default function HeroSection() {
  const [ideas, setIdeas] = useState(INITIAL_DEMO_IDEAS);
  const [filter, setFilter] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDomain, setNewDomain] = useState('SaaS & Productivity');

  const filteredIdeas = ideas.filter((idea) => {
    if (filter === 'Validated') return idea.status === 'Validated';
    if (filter === 'In Progress') return idea.status !== 'Validated';
    return true;
  });

  const handleAddIdea = (e) => {
    e.preventDefault();
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    const item = {
      id: Date.now(),
      title: trimmed,
      domain: newDomain,
      summary: 'Submitted through interactive dashboard preview.',
      status: 'Submitted',
    };
    setIdeas((prev) => [item, ...prev]);
    setNewTitle('');
    setShowAddForm(false);
    setFilter('All');
  };

  const handleDeleteIdea = (id) => {
    setIdeas((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden border-b border-slate-200/70 dark:border-slate-800/70"
    >
      {/* Subtle architectural dot backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Editorial Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300 border border-blue-600/15 dark:border-blue-400/20 mb-5">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Full-Stack Web Application</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400 mb-3">
              Startup Idea Validation Portal
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.08]">
              Turn startup ideas into validated opportunities.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              An interactive platform designed to help organize startup ideas and support a structured validation process through a modern full-stack application.
            </p>

            {/* Technology Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Core Technologies">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="theme-surface inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-sm transition-all duration-150"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#architecture"
                className="theme-surface inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-subtle-dark transition-all duration-150"
              >
                <span>View Architecture</span>
              </a>
            </div>
          </motion.div>

          {/* Representative Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-700/70 bg-surface-light dark:bg-surface-dark shadow-soft dark:shadow-soft-dark overflow-hidden">
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 bg-subtle-light/70 dark:bg-subtle-dark/80">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Interactive UI Preview — Idea Portal
                </span>
                <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                  React + REST
                </span>
              </div>

              {/* Dashboard Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Startup Idea Management Dashboard
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Centralized view of submitted and validated concepts
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAddForm((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors"
                >
                  {showAddForm ? (
                    <>
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Close</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Add Idea</span>
                    </>
                  )}
                </button>
              </div>

              {/* Optional Inline Quick Add Preview */}
              <AnimatePresence initial={false}>
                {showAddForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleAddIdea}
                    className="overflow-hidden border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-subtle-dark/50"
                  >
                    <div className="p-4 flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Enter startup idea title..."
                        aria-label="Startup idea title"
                        className="flex-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark px-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                      />
                      <select
                        value={newDomain}
                        onChange={(e) => setNewDomain(e.target.value)}
                        aria-label="Startup idea category"
                        className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-200"
                      >
                        <option>SaaS &amp; Productivity</option>
                        <option>Sustainability</option>
                        <option>EdTech</option>
                        <option>Healthcare</option>
                      </select>
                      <button
                        type="submit"
                        className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 transition-colors"
                      >
                        Submit
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Filter Tabs */}
              <div className="px-4 sm:px-5 pt-3 pb-2 flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/70">
                <div className="flex items-center gap-1" role="tablist" aria-label="Filter preview ideas">
                  {['All', 'Validated', 'In Progress'].map((tab) => {
                    const active = filter === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setFilter(tab)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          active
                            ? 'bg-blue-600/10 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  {filter === 'Validated' ? 'GET /api/ideas/validated' : 'GET /api/ideas'}
                </span>
              </div>

              {/* Idea Rows */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80 max-h-[300px] overflow-y-auto">
                {filteredIdeas.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400">
                    No ideas in this preview filter. Click &ldquo;Add Idea&rdquo; to submit one.
                  </div>
                ) : (
                  filteredIdeas.map((idea) => (
                    <div
                      key={idea.id}
                      className="px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/80 dark:hover:bg-subtle-dark/40 transition-colors"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {idea.status === 'Validated' ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                          ) : (
                            <Clock className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
                          )}
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                            {idea.title}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 pl-6 truncate">
                          {idea.domain}
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <StatusBadge status={idea.status} />
                        <button
                          type="button"
                          onClick={() => handleDeleteIdea(idea.id)}
                          aria-label={`Remove ${idea.title} from preview`}
                          title="Delete preview item"
                          className="p-1 rounded text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
