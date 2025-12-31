export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-[960px] px-4">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Open to Work
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s Work Together
          </h2>

          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Specializing in scalable backend systems, automated CI/CD pipelines,
            and reliable production deployments. Available for freelance and
            consulting work.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:mdebadyuti10@gmail.com"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-[#232f48] dark:bg-[#151c2b] dark:hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-400">
              <span className="material-symbols-outlined text-[28px]">
                mail
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold">Email Me</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                mdebadyuti10@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/debadyuti-mukherjee-08077b20a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-[#232f48] dark:bg-[#151c2b] dark:hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-400">
              <span className="material-symbols-outlined text-[28px]">
                contact_page
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold">LinkedIn</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                What I do
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/debacodes10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-[#232f48] dark:bg-[#151c2b] dark:hover:border-primary/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-400">
              <span className="material-symbols-outlined text-[28px]">
                terminal
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold">GitHub</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Geek stuff
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
