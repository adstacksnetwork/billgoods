'use client'

export function Logos() {
  const logos = ['Brightline', 'Northwind', 'Atlas', 'Studio 24', 'Fieldwork', 'Keystone']

  return (
    <section className="relative py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by teams that invoice every day</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base font-semibold text-foreground/70">
            {logos.map((logo) => (
              <span key={logo} className="px-2">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
