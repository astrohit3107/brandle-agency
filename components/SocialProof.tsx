'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function SocialProof() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Fashion & Lifestyle',
      avatar: '🌟',
      quote: 'BRANDLE transformed my creator business. In 6 months, I went from struggling to manage everything alone to running a 6-figure operation.',
      rating: 5,
    },
    {
      name: 'Aditya Kumar',
      role: 'Tech & Education',
      avatar: '💡',
      quote: 'The intelligence and insights are unmatched. I finally understand my audience and can create content that converts.',
      rating: 5,
    },
    {
      name: 'Ananya Patel',
      role: 'Wellness & Fitness',
      avatar: '💪',
      quote: 'The automation alone saved me 20 hours a week. Now I can focus on what I do best—creating amazing content.',
      rating: 5,
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black/50 to-black overflow-hidden">
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
            <span className="text-sm font-medium text-yellow-400">SUCCESS STORIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Trusted by Elite <span className="text-gradient">Creators</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              whileHover={{ y: -8, borderColor: 'rgba(255, 199, 0, 0.4)' }}
              className="p-8 bg-gradient-to-br from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-2xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
