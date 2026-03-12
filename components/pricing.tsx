'use client'

import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'For freelancers getting started',
      features: [
        { label: 'Create Unlimited Invoices', included: true },
        { label: 'Manage up to 10 Clients', included: true },
        { label: 'Access 5 Basic Templates', included: true },
        { label: 'Accept Online Payments', included: true },
        { label: 'Basic Dashboard & Stats', included: true },
        { label: '1 User Account', included: true },
        { label: 'Expense & Vendor Tracking', included: false },
        { label: 'Email Support', included: true },
        { label: 'Timesheets', included: false }
      ],
      cta: 'Buy Now',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$59',
      period: 'per month',
      description: 'For small teams that want automation',
      features: [
        { label: 'Everything in Basic, plus:', included: true },
        { label: 'Manage Unlimited Clients', included: true },
        { label: 'Access All Premium Templates', included: true },
        { label: 'Custom Invoice Branding', included: true },
        { label: 'Automated Payment Reminders', included: true },
        { label: 'Expense & Vendor Management', included: true },
        { label: 'Up to 5 User Accounts', included: true },
        { label: 'Email & Chat Support', included: true },
        { label: 'Multi Organization Support', included: true }
      ],
      cta: 'Buy Now',
      highlighted: true
    },
    {
      name: 'Business',
      price: '$99',
      period: 'per month',
      description: 'For growing companies with advanced needs',
      features: [
        { label: 'Everything in Pro, plus:', included: true },
        { label: 'Advanced Analytics & Reports', included: true },
        { label: 'Client Portal Access', included: true },
        { label: 'User Roles & Permissions', included: true },
        { label: 'Project & Timesheet Management', included: true },
        { label: 'Unlimited User Accounts', included: true },
        { label: 'Priority Phone & Chat Support', included: true },
        { label: 'Dedicated Account Manager', included: true },
        { label: 'Timesheets', included: true }
      ],
      cta: 'Buy Now',
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-12 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
            Plans that scale as you grow
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Simple pricing with everything you need to get paid faster. Upgrade or cancel any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlighted
                  ? 'border-primary/60 bg-muted/60 ring-2 ring-primary/15 lg:-translate-y-4'
                  : 'border-border/60 bg-card/70 hover:border-primary/40'
              } p-8`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              {plan.highlighted && (
                <div className="absolute top-5 right-5 flex items-center gap-2 rounded-full border border-primary/25 bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3l2.09 6.26L21 9.27l-5 3.64L17.18 21 12 17.77 6.82 21 8 12.91l-5-3.64 6.91-.01L12 3z"
                      />
                    </svg>
                  </span>
                  Popular Plan
                </div>
              )}

              <div className="mb-8 relative">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 relative">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-semibold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
              </div>

              <Button
                asChild
                className={`w-full mb-8 font-semibold h-12 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/95 hover:shadow-lg'
                    : 'bg-primary text-primary-foreground hover:bg-primary/95'
                }`}
                variant="default"
              >
                <Link href="https://app.billgood.net/" className="flex items-center justify-center gap-2">
                  Start free
                </Link>
              </Button>

              <div className="space-y-4 flex-1 relative">
                {plan.features.map((feature) => (
                  <div key={feature.label} className="flex gap-3">
                    {feature.included ? (
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    ) : (
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <X className="h-3.5 w-3.5" />
                      </span>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-border/60 bg-card/70 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-2">Not sure which plan fits?</h3>
          <p className="text-muted-foreground mb-6">
            We will recommend the right setup for your invoice volume and payment needs.
          </p>
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/contact">
              Talk to sales
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
