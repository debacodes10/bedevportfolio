'use client';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-24">
      <div className="relative z-10 w-full max-w-[960px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Name Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Debadyuti Mukherjee
          </div>

          {/* Heading */}
          <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Backend &amp; Deployment Engineer for Production-Ready Web Apps
          </h1>

          {/* Subheading */}
          <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-slate-600 dark:text-[#92a4c9] sm:text-xl">
            I help startups and founders turn unstable or unfinished apps into
            secure, scalable, production systems.
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-white transition hover:bg-blue-600 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              Get in Touch
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
            </a>

            <a
              href="#projects"
              className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-transparent px-8 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-[#232f48] dark:text-white dark:hover:bg-[#1a2333]"
            >
              View Projects
              <span className="material-symbols-outlined text-[20px]">
                arrow_downward
              </span>
            </a>
          </div>

          {/* Expertise Row */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4 opacity-70 transition hover:opacity-100 sm:flex-row sm:gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Core Expertise
            </span>

            <div className="hidden h-px w-8 bg-slate-300 dark:bg-slate-700 sm:block" />

            <div className="flex gap-6 text-slate-500 dark:text-slate-400">
              <span
                className="material-symbols-outlined cursor-help text-2xl transition-colors hover:text-primary"
                title="Database Architecture"
              >
                database
              </span>
              <span
                className="material-symbols-outlined cursor-help text-2xl transition-colors hover:text-primary"
                title="Cloud Infrastructure"
              >
                cloud
              </span>
              <span
                className="material-symbols-outlined cursor-help text-2xl transition-colors hover:text-primary"
                title="System Security"
              >
                security
              </span>
              <span
                className="material-symbols-outlined cursor-help text-2xl transition-colors hover:text-primary"
                title="API Development"
              >
                api
              </span>
              <span
                className="material-symbols-outlined cursor-help text-2xl transition-colors hover:text-primary"
                title="DevOps"
              >
                deployed_code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
