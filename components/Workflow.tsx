'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Workflow() {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Link your accounts and let our AI learn your audience',
    },
    {
      number: '02',
      title: 'Analyze',
      description: 'Get deep insights into your performance and opportunities',
    },
    {
      number: '03',
      title: 'Optimize',
      description: 'Implement AI-powered recommendations for growth',
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Watch your metrics grow exponentially with automation',
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-black/50 overflow-hidden">
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
            <span className="text-sm font-medium text-yellow-400">PROCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Simple, Powerful <span className="text-gradient">Workflow</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-4 gap-6 relative"
        >
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              className="relative"
            >
              {/* Number Circle */}
              <div className="relative z-10 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: '0 0 50px rgba(255, 199, 0, 0.5)' }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-black text-black text-2xl"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>

              {/* Arrow (hidden on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-8 text-yellow-400/30">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
