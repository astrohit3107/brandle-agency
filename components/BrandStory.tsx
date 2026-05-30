'use client'

import { motion } from 'framer-motion'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function BrandStory() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-sm font-medium text-yellow-400">OUR STORY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Built for the
            <br />
            <span className="text-gradient">Creator Economy</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainerVariants}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              We witnessed the explosion of creator talent—thousands of brilliant
              minds building audiences, creating culture, and driving billions in
              value. Yet most operated in chaos.
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              No unified platform. No intelligent tools. No data strategy. Just
              creators doing everything themselves while competitors scaled
              exponentially.
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              BRANDLE was born to change this. We brought together AI, automation,
              and elite strategy to create the operating system for creators.
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              className="pt-6 space-y-3"
            >
              {['AI-Powered Growth', '24/7 Automation', 'Elite Strategy'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl border border-yellow-500/20 overflow-hidden"
          >
            <motion.div
              animate={{
                y: [-50, 50, -50],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-t from-yellow-600/10 to-transparent"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-48 h-48 border-2 border-yellow-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
