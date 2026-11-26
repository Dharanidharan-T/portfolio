import {
  CheckCircle2,
  ClipboardList,
  FolderCog,
  Globe,
  Layers,
  PlusCircle,
  Webhook,
} from 'lucide-react';
import { SectionHeader, StaggerContainer, StaggerItem } from './MotionPrimitives';
import { FEATURES } from '../data/projectData';

const FEATURE_ICONS = {
  submission: PlusCircle,
  management: FolderCog,
  listing: ClipboardList,
  validated: CheckCircle2,
  'rest-api': Webhook,
  responsive: Globe,
  integration: Layers,
};

export default function FeaturesSection() {
  const primaryFeatures = FEATURES.slice(0, 4);
  const engineeringFeatures = FEATURES.slice(4);

  return (
    <section id="features" className="py-20 sm:py-24 border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Capabilities"
          title="Core Platform Features"
          description="Focused functionality connecting structured idea capture with organized retrieval and validation visibility."
        />

        {/* Top 2x2 structured capability matrix (reduces repetitive card wall) */}
        <StaggerContainer className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-slate-800">
          {primaryFeatures.map((feature, idx) => {
            const Icon = FEATURE_ICONS[feature.id];
            const borderTop = idx >= 2 ? 'md:border-t md:border-slate-200/80 md:dark:border-slate-800' : '';
            const resetLeftBorder = idx === 2 ? 'md:border-l-0' : '';
            return (
              <StaggerItem
                key={feature.id}
                className={`p-6 sm:p-8 transition-colors hover:bg-slate-50/70 dark:hover:bg-subtle-dark/40 ${borderTop} ${resetLeftBorder}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-subtle-dark text-slate-600 dark:text-slate-400">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom 3 architecture-aligned feature rows */}
        <StaggerContainer className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {engineeringFeatures.map((feature) => {
            const Icon = FEATURE_ICONS[feature.id];
            return (
              <StaggerItem key={feature.id}>
                <div className="theme-surface h-full rounded-xl border border-slate-200/90 dark:border-slate-800 bg-subtle-light/45 dark:bg-surface-dark p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {feature.tag}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
