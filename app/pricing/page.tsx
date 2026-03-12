'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Pricing } from '@/components/pricing'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes! You can upgrade, downgrade, or cancel your plan at any time from your account settings.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Absolutely! All plans come with a 14-day free trial. No credit card required to start.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
              },
              {
                q: 'Is my data secure?',
                a: 'Yes! We use bank-level encryption and comply with GDPR, CCPA, and other data protection regulations.'
              },
              {
                q: 'Can I export my data?',
                a: 'Yes, you can export all your invoices and data at any time. We believe in your data ownership.'
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
