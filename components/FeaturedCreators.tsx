'use client'

import { motion } from 'framer-motion'
import { fadeInUpVariants, staggerContainerVariants } from '@/lib/animations'

export function FeaturedCreators() {
  const creators = [
    {
      name: 'Fashion Forward',
      growth: '340%',
      platform: 'Instagram',
      icon: '👗',
    },
    {
      name: 'Tech Genius',
      growth: '510%',
      platform: 'YouTube',
      icon: '💻',
    },
    {
      name: 'Wellness Coach',
      growth: '280%',
      platform: 'TikTok',
      icon: '🧘',
    },
    {
      name: 'Music Producer',
      growth: '620%',
      platform: 'Spotify',
      icon: '🎵',
    },
    {
      name: 'Comedy Star',
      growth: '445%',
      platform: 'Instagram',
      icon: '🎭',
    },
    {
      name: 'Fitness Influencer',
      growth: '380%',
      platform: 'TikTok',
      icon: '💪',
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
            <span className="text-sm font-medium text-yellow-400">CREATORS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Meet Featured <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Diverse creators across platforms seeing exponential growth with BRANDLE
          </p>
        </motion.div>

        {/* Creators Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {creators.map((creator, i) => (
            <motion.div
              key={i}
              variants={fadeInUpVariants}
              whileHover={{
                y: -8,
                borderColor: 'rgba(255, 199, 0, 0.5)',
                boxShadow: '0 0 50px rgba(255, 199, 0, 0.2)',
              }}
              className="p-6 bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{creator.icon}</div>
                <div className="text-right">
                  <div className="text-3xl font-black text-yellow-400">
                    {creator.growth}
                  </div>
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
              <h3 className="font-bold mb-1">{creator.name}</h3>
              <div className="text-sm text-gray-400">{creator.platform}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
