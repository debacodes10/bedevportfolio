export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-[960px] px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Selected backend and deployment work focused on production reliability,
            scalability, and real-world systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project 1 */}
          <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white transition-colors hover:border-primary/50 dark:border-[#232f48] dark:bg-[#1a2332] dark:hover:border-primary/50">
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[14px]">
                  dns
                </span>
                Backend & Deployment
              </div>

              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Live SaaS
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight">
                Video-to-Text SaaS Platform
              </h3>

              <a
                href="https://videointext.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline w-fit"
              >
                Live Product →
              </a>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                A live SaaS product that generates video-in-text effects for travel
                vlog intros and blogger content, engineered for reliable media
                processing and production deployment.
              </p>

              <div className="h-px w-full bg-slate-200 dark:bg-[#232f48]" />

              {/* Tech Highlights */}
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-primary text-lg">
                    code
                  </span>
                  Tech Highlights
                </span>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>Node.js & Express backend architecture</li>
                  <li>FFmpeg-based automated video processing pipeline</li>
                  <li>DigitalOcean Ubuntu droplet deployment</li>
                  <li>Nginx reverse proxy & SSL configuration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white transition-colors hover:border-primary/50 dark:border-[#232f48] dark:bg-[#1a2332] dark:hover:border-primary/50">
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[14px]">
                  settings_system_daydream
                </span>
                Backend & DevOps
              </div>

              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Production Deployment
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight">
                Multi-Platform Web Deployment
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                Managed production deployments for a client-facing web application
                during an internship, focusing on uptime, security, and environment
                stability.
              </p>

              <div className="h-px w-full bg-slate-200 dark:bg-[#232f48]" />

              {/* Tech Highlights */}
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-primary text-lg">
                    code
                  </span>
                  Tech Highlights
                </span>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>React frontend deployed on DigitalOcean using PM2 and Nginx</li>
                  <li>Django backend deployed on AWS EC2 with production configuration</li>
                  <li>CI/CD pipeline setup and deployment automation</li>
                  <li>Kubernetes-based deployment and environment orchestration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
