'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { fadeInUpVariants } from '@/lib/animations'

export function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-black/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-32 bg-yellow-500/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">LIMITED TIME</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Ready to Transform
            <br />
            Your Creator <span className="text-gradient">Journey?</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join 500+ creators who've already scaled exponentially. Start your free
            trial today—no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(255, 199, 0, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-glow-lg transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#FFC700', backgroundColor: 'rgba(255, 199, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-yellow-500/40 text-white font-bold rounded-lg transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-yellow-500/10"
          >
            <p className="text-gray-400 text-sm mb-4">Trusted by creators from</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-500">
              {['Instagram', 'TikTok', 'YouTube', 'Twitch', 'LinkedIn'].map(
                (platform, i) => (
                  <div key={i} className="text-xs font-medium">
                    {platform}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
