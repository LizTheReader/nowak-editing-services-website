const services = [
  {
    name: 'Manuscript Review',
    price: '$100',
    unit: 'per 1,500 words',
    description:
      'An in-depth read with written feedback on structure, pacing, character, and prose — so you know exactly what is working and what to revise.',
  },
  {
    name: 'Beta Reading',
    price: '$100',
    unit: 'per 10,000 words',
    description:
      "A reader's-eye pass on your full draft, capturing honest impressions of what lands, what confuses, and where the story loses momentum.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-y border-charleston/10 bg-white/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-charleston sm:text-4xl">
          Services &amp; pricing
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.name}
              className="flex flex-col rounded-2xl border border-charleston/12 bg-cream p-8"
            >
              <h3 className="font-serif text-2xl font-semibold text-charleston">{service.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-charleston">{service.price}</span>
                <span className="text-sm text-charleston/60">{service.unit}</span>
              </div>
              <p className="mt-5 leading-relaxed text-charleston/70">{service.description}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-charleston px-5 py-2.5 text-sm font-medium text-cream transition-opacity hover:opacity-90"
              >
                Request this service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
