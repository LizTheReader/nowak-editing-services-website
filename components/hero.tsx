export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-charleston/60">
        Editorial support for writers
      </p>
      <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-charleston sm:text-6xl">
        Thoughtful manuscript review and beta reading.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charleston/70">
        I help writers strengthen their work with careful, honest feedback — whether you need a
        detailed manuscript review or a reader&apos;s perspective on the full draft.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#services"
          className="rounded-full bg-charleston px-6 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-90"
        >
          View services &amp; pricing
        </a>
        <a
          href="#contact"
          className="rounded-full border border-charleston/25 px-6 py-3 text-sm font-medium text-charleston transition-colors hover:bg-charleston/5"
        >
          Work with me
        </a>
      </div>
    </section>
  )
}
