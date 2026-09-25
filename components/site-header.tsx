export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-charleston/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight text-charleston">
          Nowak Editing Services
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
          <a href="#services" className="hidden text-charleston/70 transition-colors hover:text-charleston sm:inline">
            Services
          </a>
          <a href="#about" className="hidden text-charleston/70 transition-colors hover:text-charleston sm:inline">
            About
          </a>
          <a
            href="#contact"
            className="rounded-full bg-charleston px-4 py-2 font-medium text-cream transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
