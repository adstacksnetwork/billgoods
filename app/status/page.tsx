'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function Status() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Status</h1>
          <p className="text-muted-foreground mb-10">Live service status and recent incidents.</p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card/70 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">All systems operational</h2>
                  <p className="text-sm text-muted-foreground">No incidents reported.</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                  Operational
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/70 p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Need updates?</h3>
              <p className="text-sm text-muted-foreground">
                If you are experiencing an issue, contact{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  support
                </Link>{' '}
                and we will help right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
