export function AboutContact() {
  return (
    <>
      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr]">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-charleston sm:text-4xl">
            About
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-charleston/70">
            <p>
              Nowak Editing Services is the personal editing practice of Elizabeth Nowak, offering
              manuscript review and beta reading for writers at any stage.
            </p>
            <p>
              Every project gets direct, considered feedback aimed at making your writing the
              strongest version of itself.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-charleston/10 bg-charleston">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/70">
            Connect with me on LinkedIn to discuss your manuscript and get started.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/enowak25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-cream px-7 py-3 text-sm font-medium text-charleston transition-opacity hover:opacity-90"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/enowak25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-cream/40 px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Now on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
