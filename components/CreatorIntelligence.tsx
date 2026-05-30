'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, TrendingUp, Target } from 'lucide-react'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function CreatorIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Deep insights into audience behavior and content performance',
    },
    {
      icon: Zap,
      title: 'Instant Optimization',
      description: 'Real-time recommendations for maximum engagement',
    },
    {
      icon: TrendingUp,
      title: 'Growth Prediction',
      description: 'Predict trends before they happen with AI forecasting',
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'Reach the right audience at the perfect moment',
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
            <span className="text-sm font-medium text-yellow-400">INTELLIGENCE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            AI-Powered <span className="text-gradient">Creator Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced algorithms analyzing millions of data points to unlock your
            full potential and drive exponential growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                whileHover={{ y: -8, boxShadow: '0 0 50px rgba(255, 199, 0, 0.2)' }}
                className="p-6 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl transition-all hover:border-yellow-500/40"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-black" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
