'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Security() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Security</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How we protect your data</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Encryption in transit and at rest for sensitive data</li>
                <li>Principle-of-least-privilege access controls</li>
                <li>Ongoing monitoring and regular security reviews</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Report a vulnerability</h2>
              <p className="text-muted-foreground">
                If you believe you found a security issue, please email security@billgoods.com with steps to reproduce. We
                will respond as quickly as possible.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
