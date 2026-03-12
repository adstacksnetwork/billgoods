'use client'

export function Faq() {
  const faqs = [
    {
      question: 'Can I customize invoices with my brand?',
      answer: 'Yes. Add your logo, set your brand colors, customize line items, and include your payment terms.'
    },
    {
      question: 'How do payment links work?',
      answer: 'Each invoice includes a secure payment link. Clients can pay by card or bank transfer without creating an account.'
    },
    {
      question: 'Do you support recurring invoices?',
      answer: 'Yes. Schedule recurring invoices with automatic reminders and optional late fees.'
    },
    {
      question: 'Can I export my data?',
      answer: 'Export invoices, client lists, and reports anytime as CSV or PDF.'
    }
  ]

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">
            Answers to questions you are already asking
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Still have questions? Our team is happy to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border/60 bg-card/70 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.question}</h3>
              <p className="text-sm text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
