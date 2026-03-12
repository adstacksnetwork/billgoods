'use client'

import { BadgeDollarSign, FilePlus, Send, Timer } from 'lucide-react'

export function Workflow() {
  const steps = [
    {
      title: 'Create an invoice',
      description: 'Choose a template, add line items, apply taxes, and calculate totals instantly.',
      icon: FilePlus,
    },
    {
      title: 'Send and get paid',
      description: 'Email the invoice, share a secure link, or add a payment button to your site.',
      icon: Send,
    },
    {
      title: 'Track every payment',
      description: 'See who paid, what is overdue, and automate reminders without spreadsheets.',
      icon: BadgeDollarSign,
    },
  ]

  return (
    <section id="workflow" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Simple workflow
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
              From draft to paid in three clear steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              BillGoods keeps invoicing simple for you and frictionless for clients, so you get paid on time.
            </p>

            <div className="space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/70 p-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Step {index + 1}</p>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-6 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Automation</p>
                  <h3 className="text-2xl font-semibold text-foreground">Reminder engine</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Timer className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm font-semibold text-foreground">Upcoming reminders</p>
                  <p className="text-xs text-muted-foreground">3 invoices scheduled this week</p>
                </div>
                <div className="space-y-3">
                  {['Invoice BG-00241', 'Invoice BG-00238', 'Invoice BG-00234'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-border/50 bg-background/70 px-4 py-3">
                      <span className="text-sm text-foreground">{item}</span>
                      <span className="text-xs text-muted-foreground">Auto-send</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4">
                  <p className="text-sm font-semibold text-foreground">Save 4 hours every month</p>
                  <p className="text-xs text-muted-foreground">Automations handle follow-ups and payment nudges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
