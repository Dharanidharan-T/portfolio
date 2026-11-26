import { useState } from 'react';
import {
  ArrowDown,
  Boxes,
  Code,
  Coffee,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Package,
  Server,
  User,
  Webhook,
} from 'lucide-react';
import { Reveal, SectionHeader, StaggerContainer, StaggerItem } from './MotionPrimitives';
import {
  ARCHITECTURE_BREAKDOWN,
  ARCHITECTURE_NODES,
  TECH_STACK,
} from '../data/projectData';

const TECH_ICONS = {
  React: Boxes,
  JavaScript: FileCode2,
  Java: Coffee,
  'Spring Boot': Server,
  MySQL: Database,
  'REST API': Webhook,
  Maven: Package,
  Git: GitBranch,
};

const NODE_ICONS = {
  user: User,
  react: Globe,
  rest: Webhook,
  springboot: Server,
  controller: Code,
  service: Cpu,
  repository: Layers,
  mysql: Database,
};

export default function ArchitectureAndTech() {
  const [selectedNodeId, setSelectedNodeId] = useState('springboot');

  const selectedNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  return (
    <>
      {/* SYSTEM ARCHITECTURE SECTION */}
      <section
        id="architecture"
        className="py-20 sm:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="System Design"
            title="System Architecture"
            description="A clean layered architecture separating presentation, REST routing, application logic, data access, and persistent MySQL storage."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Interactive Vertical Flow Diagram */}
            <Reveal className="lg:col-span-6">
              <div className="theme-surface rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-subtle-light/50 dark:bg-surface-dark p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Request &amp; Data Flow
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Select any layer to inspect
                  </span>
                </div>

                <div className="space-y-1.5">
                  {ARCHITECTURE_NODES.map((node, index) => {
                    const Icon = NODE_ICONS[node.id] || Layers;
                    const active = node.id === selectedNodeId;
                    return (
                      <div key={node.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`w-full text-left flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 border transition-all duration-150 ${
                            active
                              ? 'border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/15 shadow-xs'
                              : 'border-slate-200/90 dark:border-slate-700/75 bg-white dark:bg-canvas-dark/50 hover:border-slate-300 dark:hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon
                              className={`h-4 w-4 shrink-0 ${
                                active
                                  ? 'text-blue-600 dark:text-blue-400'
                                  : 'text-slate-500 dark:text-slate-400'
                              }`}
                              aria-hidden="true"
                            />
                            <span
                              className={`text-sm font-medium truncate ${
                                active
                                  ? 'text-blue-700 dark:text-blue-300'
                                  : 'text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              {node.label}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 shrink-0">
                            {node.group}
                          </span>
                        </button>
                        {index < ARCHITECTURE_NODES.length - 1 && (
                          <div className="flex justify-center py-0.5">
                            <ArrowDown className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Architecture Details & Layer Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.05}>
                <div className="theme-surface rounded-2xl border border-blue-600/20 dark:border-blue-400/25 bg-blue-50/45 dark:bg-blue-500/[0.07] p-6">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Selected Layer • {selectedNode.group}
                  </span>
                  <h3 className="mt-1.5 text-xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedNode.label}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedNode.summary}
                  </p>
                </div>
              </Reveal>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ARCHITECTURE_BREAKDOWN.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="theme-surface h-full rounded-xl border border-slate-200/80 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-4">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section
        id="technology"
        className="py-20 sm:py-24 bg-subtle-light/50 dark:bg-subtle-dark/30 border-b border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Technology Stack"
            title="Built With"
            description="Core technologies and engineering tools used across the frontend, backend API, database, and development workflow."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_STACK.map((tech) => {
              const Icon = TECH_ICONS[tech.name] || Code;
              return (
                <StaggerItem key={tech.name}>
                  <div className="theme-surface h-full rounded-xl border border-slate-200/90 dark:border-slate-800 bg-surface-light dark:bg-surface-dark p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-subtle-dark text-blue-600 dark:text-blue-400">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {tech.category}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {tech.name}
                    </h3>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {tech.role}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Supporting Web Foundations & Dev Tools Strip */}
          <Reveal delay={0.1}>
            <div className="theme-surface mt-6 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-5 py-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Web Foundations &amp; Environment
              </span>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                {['HTML', 'CSS', 'VS Code'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-md bg-slate-100 dark:bg-subtle-dark border border-slate-200/70 dark:border-slate-700/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
