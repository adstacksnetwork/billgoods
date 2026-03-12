'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Cta() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-10 lg:p-14 text-center shadow-2xl">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Ready to get paid faster?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, send polished invoices, and automate reminders so you spend less time chasing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="https://app.billgood.net/">Get started free</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <Link href="/pricing">Compare plans</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
