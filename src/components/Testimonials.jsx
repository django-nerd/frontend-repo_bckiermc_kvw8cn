import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Alex Carter',
    role: 'Founder, Nova Labs',
    quote: 'Clean, fast, and beautiful. Our conversions went up within a week.',
    avatar: 'https://i.pravatar.cc/100?img=13'
  },
  {
    name: 'Maya Lee',
    role: 'Head of Growth, Orbit',
    quote: 'It feels premium and effortless. The motion details are top-tier.',
    avatar: 'https://i.pravatar.cc/100?img=32'
  },
  {
    name: 'Jordan Smith',
    role: 'CMO, Vertex',
    quote: 'Minimalist with punch. Exactly the aesthetic we wanted.',
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            What clients say
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-white/70">
            Real feedback from real people.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
