'use client'

import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote: 'We cut our average payment time from 21 days to 9 days after switching to BillGoods.',
      name: 'Avery James',
      role: 'Founder, Northwind Studio'
    },
    {
      quote: 'The automated reminders feel human. Clients pay faster and our team spends less time chasing.',
      name: 'Sofia Nunez',
      role: 'Operations Lead, Brightline Media'
    },
    {
      quote: 'The invoice generator is clean, fast, and fits perfectly into our accounting workflow.',
      name: 'Ravi Patel',
      role: 'Finance Director, Atlas Design'
    }
  ]

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Customer love
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
            Teams get paid faster with BillGoods
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            From solo creators to finance leaders, teams use BillGoods to keep revenue flowing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg">
              <div className="flex items-center gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-base text-foreground mb-6">"{item.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
