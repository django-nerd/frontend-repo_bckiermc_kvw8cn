export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} [Insert Your Name/Brand]. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#cta" className="text-white/70 hover:text-white">Contact</a>
            <a href="#" className="text-white/70 hover:text-white">Twitter</a>
            <a href="#" className="text-white/70 hover:text-white">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
