'use client'

import { motion } from 'framer-motion'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function Analytics() {
  const metrics = [
    { label: 'Real-time Analytics', value: '100+' },
    { label: 'Data Points Analyzed', value: 'Millions' },
    { label: 'Processing Speed', value: '<100ms' },
    { label: 'Accuracy Rate', value: '99.8%' },
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
            <span className="text-sm font-medium text-yellow-400">INSIGHTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Advanced <span className="text-gradient">Analytics & Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep, actionable insights powered by machine learning and AI to drive
            informed decisions at every step of your creator journey.
          </p>
        </motion.div>

        {/* Main Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          <div className="bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl p-8 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFC700" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 h-64 flex items-end justify-around gap-4">
              {[65, 80, 45, 90, 60, 85, 55, 75].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                  className="flex-1 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              whileHover={{ y: -8 }}
              className="p-6 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl text-center hover:border-yellow-500/40 transition-colors"
            >
              <div className="text-3xl font-black text-yellow-400 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
