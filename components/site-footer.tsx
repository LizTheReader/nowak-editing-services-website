export function SiteFooter() {
  return (
    <footer className="bg-charleston">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-cream/10 px-6 py-8 text-sm text-cream/60 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Nowak Editing Services · Elizabeth Nowak</p>
        <a
          href="https://www.linkedin.com/in/enowak25"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-cream"
        >
          LinkedIn.com/in/enowak25
        </a>
      </div>
    </footer>
  )
}
