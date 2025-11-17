import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to make it real?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Book a discovery call and get a tailored concept, timeline and investment options.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-2xl bg-white text-gray-900 font-semibold px-6 py-3 shadow-lg shadow-white/10 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Book a Call
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-2xl border border-white/20 text-white/90 hover:text-white hover:border-white/40 px-6 py-3">
              hello@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
