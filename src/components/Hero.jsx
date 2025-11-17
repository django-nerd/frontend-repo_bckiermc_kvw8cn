import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_40%)] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            >
              [Insert Your Name/Brand]
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
            >
              [Insert Industry] for [Describe audience]. We build premium, minimalist experiences with high impact visuals and seamless performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-2xl bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Get Started
              </a>
              <a href="#benefits" className="inline-flex items-center justify-center rounded-2xl border border-white/20 text-white/90 hover:text-white hover:border-white/40 px-6 py-3">
                Learn More
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-white/60">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm">Fast loading • Responsive • Framer-like motion</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1529336953121-a0ce23b04f46?q=80&w=2400&auto=format&fit=crop"
                  alt="Hero visual placeholder"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-4 text-white/80 text-sm">
                Suggestion: Replace with a brand showcase image or subtle abstract graphic.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
