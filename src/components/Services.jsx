import { motion } from 'framer-motion'
import { Brush, Code2, Megaphone, LineChart } from 'lucide-react'

const services = [
  {
    icon: Brush,
    title: 'Brand & Visual Design',
    description: 'Minimalist identity systems, color strategy, and premium UI kits.'
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'High-performance, responsive sites with smooth animations and SEO.'
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description: 'High-converting pages with crisp copy, strong CTAs, and analytics.'
  },
  {
    icon: LineChart,
    title: 'Optimization & Growth',
    description: 'Speed tuning, A/B tests, and UX improvements for conversions.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            What we offer
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-white/70">
            Flexible packages tailored to your goals.
          </motion.p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/20">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
