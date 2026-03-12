'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navLinks = useMemo(
    () => [
      { label: 'Features', href: '/#features' },
      { label: 'Workflow', href: '/#workflow' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
    ],
    []
  )

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              BG
            </div>
            BillGoods
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
            <Link href="/pricing" className="text-foreground hover:text-primary transition">
              Plans
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5 transition-transform duration-300" /> : <Moon className="w-5 h-5 transition-transform duration-300" />}
            </button>

            <Button className="hidden md:flex" asChild>
              <Link href="https://app.billgood.net/">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded transition"
                >
                  {link.label}
                </a>
              ))}
              <Link href="/pricing" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition">
                Pricing
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded transition">
                Contact
              </Link>
              <Button className="w-full mt-2" asChild>
                <Link href="https://app.billgood.net/">Get Started</Link>
              </Button>
            </div>
        )}
      </div>
    </nav>
  )
}
