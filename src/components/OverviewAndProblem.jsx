import { ArrowRight, AlertCircle, CheckCircle2, FolderKanban, GitCommitHorizontal } from 'lucide-react';
import { Reveal, SectionHeader, StaggerContainer, StaggerItem } from './MotionPrimitives';
import { OVERVIEW_SPECS, PROBLEM_POINTS, SOLUTION_FLOW } from '../data/projectData';

export default function OverviewAndProblem() {
  return (
    <>
      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-20 sm:py-24 border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Project Overview"
                title="About the Project"
              />
              <Reveal delay={0.05} className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed -mt-6">
                <p>
                  The Startup Idea Validation Portal is a full-stack web application designed to provide a structured environment for submitting, organizing, and validating startup ideas.
                </p>
                <p>
                  The platform allows users to submit startup concepts, view available ideas, manage idea records, and access validated ideas through a centralized application.
                </p>
                <p>
                  The project demonstrates frontend development, backend API development, database integration, and full-stack application architecture.
                </p>
              </Reveal>
            </div>

            {/* Structured Specification Sheet */}
            <Reveal delay={0.12} className="lg:col-span-5">
              <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-6 shadow-soft dark:shadow-soft-dark">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-200/80 dark:border-slate-800">
                  <FolderKanban className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Application Summary
                  </h3>
                </div>
                <dl className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {OVERVIEW_SPECS.map((spec) => (
                    <div key={spec.label} className="py-3 flex items-center justify-between gap-4">
                      <dt className="text-sm text-slate-500 dark:text-slate-400">{spec.label}</dt>
                      <dd className="text-sm font-medium text-slate-900 dark:text-slate-100 text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM & PROPOSED SOLUTION */}
      <section className="py-20 sm:py-24 bg-subtle-light/55 dark:bg-subtle-dark/35 border-b border-slate-200/70 dark:border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Problem Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <Reveal className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400 mb-3">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Problem Statement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                The Problem
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Startup ideas are often developed without a structured way to organize, review, and evaluate them. Ideas may remain scattered, difficult to manage, or lack a clear validation process.
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                This project addresses the need for a centralized platform where startup ideas can be submitted, managed, and organized according to their validation status.
              </p>
            </Reveal>

            <StaggerContainer className="lg:col-span-7 space-y-3">
              {PROBLEM_POINTS.map((point, index) => (
                <StaggerItem key={point}>
                  <div className="theme-surface flex items-center gap-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-5 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 dark:bg-subtle-dark font-mono text-xs font-semibold text-slate-600 dark:text-slate-300">
                      0{index + 1}
                    </span>
                    <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                      {point}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Proposed Solution */}
          <div>
            <div className="max-w-3xl mb-10">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400 mb-3">
                  <GitCommitHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  Proposed Solution
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  A Structured Approach to Idea Validation
                </h2>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  The portal provides a centralized web platform for managing startup ideas. Users can submit startup concepts, retrieve ideas, manage idea records, and access ideas that have been validated. The system combines a responsive React frontend with a Spring Boot backend and REST APIs to provide an organized application workflow.
                </p>
              </Reveal>
            </div>

            {/* Horizontal Pipeline Flow */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SOLUTION_FLOW.map((item, idx) => (
                <StaggerItem key={item.step} className="relative flex">
                  <div className="theme-surface flex-1 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {item.step}
                        </span>
                        {idx < SOLUTION_FLOW.length - 1 ? (
                          <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
