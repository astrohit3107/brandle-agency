'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'
import { staggerContainerVariants, fadeInUpVariants } from '@/lib/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-yellow-500/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeInUpVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-bold text-black text-sm">
                B
              </div>
              <span className="font-bold text-lg">BRANDLE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering creators with intelligent automation and elite strategy.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Features', 'Pricing', 'Security', 'Roadmap'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['About', 'Blog', 'Careers', 'Press'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Privacy', 'Terms', 'Cookies', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Copyright */}
          <motion.p variants={fadeInUpVariants} className="text-gray-400 text-sm">
            © {currentYear} BRANDLE. All rights reserved. Crafted with elite
            precision.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex gap-4"
          >
            {[
              { icon: Mail, label: 'Email' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Github, label: 'GitHub' },
            ].map(({ icon: Icon, label }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -4, color: '#FFC700' }}
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                title={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </footer>
  )
}
