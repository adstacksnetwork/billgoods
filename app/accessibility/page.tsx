'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Accessibility</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Our commitment</h2>
              <p className="text-muted-foreground">
                We are committed to making BillGoods accessible for everyone. We continuously improve usability and aim to
                support assistive technologies across devices and browsers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">What we do</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keyboard navigable UI and visible focus states</li>
                <li>Text that meets readable contrast targets in light and dark mode</li>
                <li>Semantic HTML for screen reader compatibility</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Need help?</h2>
              <p className="text-muted-foreground">
                If you encounter an accessibility issue, contact us at support@billgoods.com and we will work with you to
                resolve it.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
