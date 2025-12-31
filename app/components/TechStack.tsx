import GridBackground from "./GridBackground";

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[960px] px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <p className="max-w-[600px] text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Tools and technologies I use to build reliable, production-ready systems.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Backend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#2a3447] dark:bg-[#151c2b]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>Node.js (Express)</li>
              <li>Django</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#2a3447] dark:bg-[#151c2b]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Databases
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Deployment */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#2a3447] dark:bg-[#151c2b]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              Deployment
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>DigitalOcean</li>
              <li>AWS EC2</li>
              <li>Nginx</li>
              <li>Ubuntu Linux</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-[#2a3447] dark:bg-[#151c2b]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
              DevOps
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>GitHub Actions</li>
              <li>PM2</li>
              <li>Gunicorn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
