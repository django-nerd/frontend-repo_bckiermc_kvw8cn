import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 shadow-inner" />
              <span className="text-white/90 group-hover:text-white text-lg font-semibold tracking-tight">
                [Insert Your Name/Brand]
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-full bg-white text-gray-900 text-sm font-semibold px-4 py-2 shadow hover:shadow-md transition-shadow">
                Get Started
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:text-white hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center rounded-xl bg-white text-gray-900 text-sm font-semibold px-4 py-2 shadow">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
