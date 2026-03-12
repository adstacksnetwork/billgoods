'use client'

import Link from 'next/link'

const quickLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Pricing', href: '/#pricing' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' },
]

const resourceLinks = [
  { label: 'Contact Support', href: '/contact' },
  { label: 'Status', href: '/status' },
  { label: 'Security', href: '/security' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 text-foreground shadow-[0_25px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="pointer-events-none absolute -top-16 left-8 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-semibold text-foreground text-lg">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold tracking-tight">
                BG
              </div>
              BillGoods
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern invoicing for creators, teams, and agencies. Send branded invoices and get paid faster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 w-full">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Product</p>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Resources</p>
              <ul className="space-y-3 text-sm">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Legal</p>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">Start</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Moving from spreadsheets or scaling billing volume? We can help.
              </p>
              <Link
                href="https://app.billgood.net/"
                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>(c) {currentYear} BillGoods. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/status" className="hover:text-foreground transition">
              Status
            </Link>
            <Link href="/contact" className="hover:text-foreground transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
