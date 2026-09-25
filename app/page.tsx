import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { AboutContact } from '@/components/about-contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-cream font-sans text-charleston">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <AboutContact />
      </main>
      <SiteFooter />
    </div>
  )
}
