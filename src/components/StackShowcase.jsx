import { useState } from 'react';
import {
  ArrowDown,
  Check,
  CheckCircle2,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
} from 'lucide-react';
import { Reveal, SectionHeader } from './MotionPrimitives';
import {
  API_ENDPOINTS,
  BACKEND_COMPONENTS,
  FRONTEND_CAPABILITIES,
} from '../data/projectData';

function MethodBadge({ method }) {
  const styles = {
    GET: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30',
    POST: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30',
    DELETE: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30',
  };
  return (
    <span
      className={`inline-flex items-center justify-center min-w-[60px] px-2.5 py-0.5 rounded-md border font-mono text-xs font-semibold ${
        styles[method] || styles.GET
      }`}
    >
      {method}
    </span>
  );
}

export default function StackShowcase() {
  const [frontendTab, setFrontendTab] = useState('form');
  const [selectedEndpointId, setSelectedEndpointId] = useState(API_ENDPOINTS[0].id);

  const selectedEndpoint =
    API_ENDPOINTS.find((ep) => ep.id === selectedEndpointId) || API_ENDPOINTS[0];

  return (
    <section className="py-20 sm:py-24 bg-subtle-light/50 dark:bg-subtle-dark/30 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. FRONTEND SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-3">
              <Layout className="h-3.5 w-3.5" aria-hidden="true" />
              Client Application
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Frontend — React
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              The frontend is built using React to provide a responsive and interactive user interface for submitting and managing startup ideas.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {FRONTEND_CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-400">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Representative Frontend UI Mockup */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-700/75 bg-surface-light dark:bg-surface-dark shadow-soft dark:shadow-soft-dark overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 bg-subtle-light/75 dark:bg-subtle-dark/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                    Representative UI Mockup
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 p-0.5">
                  <button
                    type="button"
                    onClick={() => setFrontendTab('form')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      frontendTab === 'form'
                        ? 'bg-white dark:bg-surface-dark text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Submission Form
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrontendTab('list')}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      frontendTab === 'list'
                        ? 'bg-white dark:bg-surface-dark text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Idea Listing
                  </button>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {frontendTab === 'form' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Submit New Startup Concept
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Structured React form connected to POST /api/ideas
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-subtle-dark text-slate-500 dark:text-slate-400">
                        IdeaForm.jsx
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700/80 px-3 py-2 bg-slate-50/70 dark:bg-subtle-dark/50">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                          Idea Title
                        </span>
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          Campus Surplus Meal Connector
                        </span>
                      </div>
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700/80 px-3 py-2 bg-slate-50/70 dark:bg-subtle-dark/50">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                          Category
                        </span>
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          Sustainability &amp; Operations
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-slate-200 dark:border-slate-700/80 px-3 py-2.5 bg-slate-50/70 dark:bg-subtle-dark/50">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                        Problem &amp; Concept Summary
                      </span>
                      <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        Connects campus dining halls with student organizations to coordinate end-of-day surplus meal redistribution.
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Initial Status: <strong className="text-slate-700 dark:text-slate-200">Submitted</strong>
                      </span>
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white">
                        Submit Startup Idea
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          Submitted Ideas Directory
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Organized listing rendered from GET /api/ideas
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-subtle-dark text-slate-500 dark:text-slate-400">
                        IdeaList.jsx
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                      {[
                        { title: 'Campus Surplus Meal Connector', status: 'Validated' },
                        { title: 'Neighborhood Clinic Queue Sync', status: 'Validated' },
                        { title: 'Modular Lab Equipment Share', status: 'Under Review' },
                      ].map((row) => (
                        <div key={row.title} className="px-3.5 py-2.5 flex items-center justify-between gap-3">
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">
                            {row.title}
                          </span>
                          <span
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                              row.status === 'Validated'
                                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                                : 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
                            }`}
                          >
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. BACKEND SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Backend Architecture Visual */}
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-700/75 bg-surface-light dark:bg-surface-dark p-6 shadow-soft dark:shadow-soft-dark">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Spring Boot Layered Structure
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  Java + Maven
                </span>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    layer: 'REST Controller Layer',
                    sub: '@RestController • /api/ideas endpoints',
                    accent: 'border-blue-500/30 bg-blue-50/60 dark:bg-blue-500/10',
                  },
                  {
                    layer: 'Service Layer',
                    sub: '@Service • Idea validation & business logic',
                    accent: 'border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-500/10',
                  },
                  {
                    layer: 'Data Access / Repository Layer',
                    sub: 'Repository • Persistence & query methods',
                    accent: 'border-slate-300/80 dark:border-slate-700 bg-slate-50 dark:bg-subtle-dark/70',
                  },
                ].map((tier, index) => (
                  <div key={tier.layer}>
                    <div className={`rounded-xl border px-4 py-3 ${tier.accent}`}>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {tier.layer}
                      </p>
                      <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        {tier.sub}
                      </p>
                    </div>
                    {index < 2 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex justify-center py-1">
                  <ArrowDown className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                </div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-500/10 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      MySQL Database
                    </p>
                    <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Relational storage for idea records
                    </p>
                  </div>
                  <Database className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-3">
              <Server className="h-3.5 w-3.5" aria-hidden="true" />
              Server &amp; Data Tier
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Backend — Spring Boot
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              The backend is developed using Spring Boot and provides REST API endpoints for managing startup ideas and supporting the application&apos;s core functionality.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {BACKEND_COMPONENTS.map((comp) => (
                <div
                  key={comp.title}
                  className="theme-surface rounded-xl border border-slate-200/80 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {comp.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {comp.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 3. API SHOWCASE */}
        <div>
          <SectionHeader
            eyebrow="REST API Surface"
            title="API Endpoints Reference"
            description="Clean RESTful endpoints linking the React client to Spring Boot controllers and MySQL persistence."
          />

          <Reveal>
            <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-700/75 bg-surface-light dark:bg-surface-dark shadow-soft dark:shadow-soft-dark overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Endpoint List */}
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                {API_ENDPOINTS.map((endpoint) => {
                  const active = endpoint.id === selectedEndpoint.id;
                  return (
                    <button
                      key={endpoint.id}
                      type="button"
                      onClick={() => setSelectedEndpointId(endpoint.id)}
                      className={`w-full text-left px-5 py-4 transition-colors flex items-start gap-3 ${
                        active
                          ? 'bg-blue-600/[0.06] dark:bg-blue-400/10'
                          : 'hover:bg-slate-50 dark:hover:bg-subtle-dark/50'
                      }`}
                    >
                      <MethodBadge method={endpoint.method} />
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                          {endpoint.path}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {endpoint.title} — {endpoint.purpose}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Endpoint Detail Inspector */}
              <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-50/50 dark:bg-canvas-dark/40">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <MethodBadge method={selectedEndpoint.method} />
                    <code className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {selectedEndpoint.path}
                    </code>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                    Representative JSON Schema
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {selectedEndpoint.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {selectedEndpoint.purpose}
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  {selectedEndpoint.requestExample && (
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                        Request Body (JSON)
                      </span>
                      <pre className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-surface-dark p-3.5 text-xs font-mono text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed">
                        {selectedEndpoint.requestExample}
                      </pre>
                    </div>
                  )}

                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Response Payload (JSON)
                    </span>
                    <pre className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-surface-dark p-3.5 text-xs font-mono text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed">
                      {selectedEndpoint.responseExample}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
