'use client'

import { Globe, Receipt, Repeat, ShieldCheck, Sparkles, Wallet } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Receipt,
      title: 'Branded templates',
      description: 'Send invoices that look premium with your logo, custom fields, and clean layouts.'
    },
    {
      icon: Wallet,
      title: 'Faster payments',
      description: 'Accept cards and bank transfer with secure payment links on every invoice.'
    },
    {
      icon: Repeat,
      title: 'Automations built-in',
      description: 'Schedule recurring invoices, automate reminders, and add late fees—no chasing required.'
    },
    {
      icon: Globe,
      title: 'Global ready',
      description: 'Multi-currency support and localized formatting for clients anywhere.'
    },
    {
      icon: ShieldCheck,
      title: 'Audit friendly',
      description: 'Track changes and payments with a clear history and exportable records.'
    },
    {
      icon: Sparkles,
      title: 'Actionable insights',
      description: 'Spot overdue accounts, forecast cash flow, and understand revenue at a glance.'
    }
  ]

  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Built to move faster
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Everything you need to invoice with confidence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Go from draft to paid without switching tools. BillGoods keeps invoices, payments, and reporting in one flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
