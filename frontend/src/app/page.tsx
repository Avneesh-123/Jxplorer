import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />

      <div className="relative z-10 grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-in opacity-0 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live Full-Stack Demo
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Fill in your details below. On submit, your data is sent via a
            REST API and stored in{' '}
            <span className="font-medium text-indigo-300">Strapi CMS</span> —
            built with{' '}
            <span className="font-medium text-sky-300">Next.js</span>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {['Next.js', 'React', 'Strapi', 'TypeScript', 'REST API'].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-1 text-xs font-medium text-slate-400"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="animate-in delay-1 opacity-0">
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white">Contact Form</h2>
              <p className="mt-1 text-sm text-slate-500">
                Name &middot; Email &middot; Phone
              </p>
            </div>
            <ContactForm />
          </div>

          <p className="animate-in delay-2 mt-4 text-center text-xs text-slate-600 opacity-0">
            POST &rarr; /api/contacts
          </p>
        </div>
      </div>
    </div>
  );
}
