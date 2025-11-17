import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop"
                alt="About image placeholder"
                className="rounded-2xl object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About the brand</h2>
            <p className="mt-4 text-white/70">
              We craft modern, clean and high-converting web experiences. Our approach blends strategy, minimalist design and smooth motion to create websites that feel premium yet approachable.
            </p>
            <p className="mt-3 text-white/70">
              Use this space for a short story or mission statement. Share your values, the problem you solve, and what makes your approach unique for your audience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
