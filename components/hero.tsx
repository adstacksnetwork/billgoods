'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, BadgeCheck, CreditCard, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">New: smart payment links + automated late fees</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground text-balance">
                Send invoices that clients actually pay—fast
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
                Create polished invoices in minutes, share a secure payment link, and track every payment in one place. Built for freelancers, agencies, and modern finance teams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 h-12 px-8 text-base" asChild>
                <Link href="https://app.billgood.net/">
                  Create your first invoice
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                <Link href="/#workflow">See the workflow</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Security-first by design
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                Accept cards + bank transfer
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Avg time to send</p>
                <p className="text-2xl font-semibold text-foreground">6 min</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Faster payments</p>
                <p className="text-2xl font-semibold text-foreground">2.3x</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/70 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Templates</p>
                <p className="text-2xl font-semibold text-foreground">4+</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[32px] blur-2xl" />
            <div className="relative rounded-[32px] border border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Invoice</p>
                  <h3 className="text-2xl font-semibold text-foreground">BG-00241</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                  Due in 7 days
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Client</p>
                  <p className="text-base font-semibold text-foreground">Northwind Studio</p>
                  <p className="text-xs text-muted-foreground">hello@northwind.co</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Amount</p>
                  <p className="text-2xl font-semibold text-foreground">$4,860.00</p>
                  <p className="text-xs text-muted-foreground">USD</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {['Product design sprint', 'Brand refresh', 'Invoice automation setup'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-border/50 bg-background/70 px-4 py-3">
                    <span className="text-sm text-foreground">{item}</span>
                    <span className="text-sm font-semibold text-foreground">$1,620</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Total due</p>
                  <p className="text-3xl font-semibold text-foreground">$4,860.00</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/15 text-accent px-4 py-2 text-sm font-semibold">
                  Pay online in 1 click
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/10 to-accent/10 p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Next action</p>
                <p className="text-sm text-foreground">Automatic reminder scheduled in 2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
