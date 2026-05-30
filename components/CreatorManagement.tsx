'use client'

import { motion } from 'framer-motion'
import { Users, BarChart3, Zap, Shield } from 'lucide-react'
import { fadeInUpVariants, staggerContainerVariants, slideInLeftVariants } from '@/lib/animations'

export function CreatorManagement() {
  const services = [
    {
      icon: Users,
      title: 'Team Management',
      description: 'Collaborate seamlessly with your team',
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Track every important metric in real-time',
    },
    {
      icon: Zap,
      title: 'Content Calendar',
      description: 'Plan and schedule content across platforms',
    },
    {
      icon: Shield,
      title: 'Brand Safety',
      description: 'Protect your brand reputation automatically',
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInLeftVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
              <span className="text-sm font-medium text-yellow-400">MANAGEMENT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Complete <span className="text-gradient">Creator Management</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              From content strategy to monetization, we handle the operations while
              you focus on creating extraordinary content.
            </p>

            {/* Services List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainerVariants}
              className="space-y-4"
            >
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUpVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{service.title}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-2xl border border-yellow-500/20 overflow-hidden">
              <motion.div
                animate={{
                  x: [-50, 50, -50],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"
              />
            </div>

            {/* Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8 w-40 h-24 bg-black/60 border border-yellow-500/30 rounded-xl p-4 backdrop-blur"
            >
              <div className="text-xs text-gray-400 mb-2">GROWTH METRICS</div>
              <div className="text-2xl font-black text-yellow-400">+145%</div>
              <div className="text-xs text-gray-500">This Month</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-8 right-8 w-40 h-24 bg-black/60 border border-yellow-500/30 rounded-xl p-4 backdrop-blur"
            >
              <div className="text-xs text-gray-400 mb-2">ENGAGEMENT</div>
              <div className="text-2xl font-black text-yellow-400">2.3M</div>
              <div className="text-xs text-gray-500">Total Reach</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
