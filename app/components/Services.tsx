import GridBackground from "./GridBackground";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[960px] px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services
          </h2>
          <p className="max-w-[600px] text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Backend-focused services designed for reliability, scalability, and real-world production use.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-primary/50 dark:border-[#2a3447] dark:bg-[#151c2b] dark:hover:border-primary/50">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[32px]">
                rocket_launch
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Launch Setup
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Backend setup and live deployment for MVPs that need a real server,
              database, and authentication.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-primary/50 dark:border-[#2a3447] dark:bg-[#151c2b] dark:hover:border-primary/50">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[32px]">
                settings
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Production Backend
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Secure, scalable backend systems with clean architecture, CI/CD,
              and production-grade deployment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-primary/50 dark:border-[#2a3447] dark:bg-[#151c2b] dark:hover:border-primary/50">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[32px]">
                trending_up
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold">
              Scale & Stability
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Performance optimization, infrastructure hardening, and reliability
              improvements for growing products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
