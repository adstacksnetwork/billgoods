import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Logos } from '@/components/logos'
import { Features } from '@/components/features'
import { Workflow } from '@/components/workflow'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'BillGoods — Fast invoices. Faster payments.',
  description:
    'Create professional invoices, send them in minutes, and automate reminders so you get paid on time. Built for freelancers, agencies, and growing teams.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Logos />
      <Features />
      <Workflow />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
