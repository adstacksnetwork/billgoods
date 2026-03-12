'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">1. What are cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device that help websites remember preferences and understand how
                the site is used.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">2. How we use cookies</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To keep you signed in and secure your session</li>
                <li>To remember preferences like theme and basic settings</li>
                <li>To measure performance and improve product experiences</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">3. Managing cookies</h2>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Blocking some cookies may impact functionality (like
                staying signed in).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">4. Contact</h2>
              <p className="text-muted-foreground">Questions? Email us at privacy@billgoods.com.</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
