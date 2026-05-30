'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Content Creator',
      image: '👩‍💼',
      quote: 'BRANDLE gave me the tools to finally understand my audience. Now I create content with confidence knowing exactly what resonates.',
      result: '250% Growth in 3 Months',
    },
    {
      name: 'Marcus Chen',
      title: 'Digital Entrepreneur',
      image: '👨‍💼',
      quote: 'The AI insights are incredible. It predicted trends 3 weeks before they happened. This is a game-changer for my business.',
      result: '₹5M+ Additional Revenue',
    },
    {
      name: 'Elena Rodriguez',
      title: 'Brand Influencer',
      image: '👩‍🎨',
      quote: 'Automation saved me hours every day. Now I spend 90% of my time creating and 10% managing. That\'s the dream.',
      result: '15+ Brand Partnerships',
    },
  ]

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-sm font-medium text-yellow-400">VOICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            What Our <span className="text-gradient">Creators Say</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="space-y-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              whileHover={{ borderColor: 'rgba(255, 199, 0, 0.5)' }}
              className="p-8 bg-gradient-to-r from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl transition-all"
            >
              <div className="flex items-start gap-6 mb-6">
                <Quote className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-right"
                >
                  <div className="text-sm font-bold text-yellow-400">
                    {testimonial.result}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
