import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Rocket, Clock } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Minimal & Bold',
    points: [
      'Large typography & clean layouts',
      'Premium spacing & soft shadows',
      'Rounded sections with glow accents',
    ],
  },
  {
    icon: Rocket,
    title: 'High Performance',
    points: [
      'Mobile-first & responsive',
      'Optimized assets & lazy loading',
      'Smooth micro-interactions',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy',
    points: [
      'Modern, professional aesthetic',
      'Consistent 2–3 color theme',
      'Clear value communication',
    ],
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    points: [
      'Streamlined build process',
      'Reusable components',
      'Clear timelines',
    ],
  },
]

export default function Features() {
  return (
    <section id="benefits" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Benefits that convert
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-white/70">
            Designed for [Describe audience] in [Insert Industry].
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/20">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="text-sm text-white/70">• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
