"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back Button */}
        <motion.div className="mb-8" variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" variants={itemVariants}>
          About <span className="text-orange-500">Orange Brandless</span>
        </motion.h1>

        {/* Content */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-orange-400 mb-3">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We are <span className="text-orange-400 font-semibold">ORANGE BRANDLESS</span> – a crew that thrives on
              authenticity, creativity, and pure unfiltered energy. We don't follow trends; we create them. We don't
              play it safe; we push boundaries.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-orange-400 mb-3">What We Stand For</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <span>
                  <span className="font-semibold text-orange-400">Unfiltered</span> – No corporate speak, just real talk
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <span>
                  <span className="font-semibold text-orange-400">Original</span> – We create our own path
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">→</span>
                <span>
                  <span className="font-semibold text-orange-400">Unstoppable</span> – Nothing holds us back
                </span>
              </li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-orange-400 mb-3">Join the Crew</h2>
            <p className="text-gray-300 leading-relaxed">
              Whether you're into gaming, content creation, or just vibing with like-minded people, there's a place for
              you here. Connect with us on Discord, follow our socials, and become part of something bigger.
            </p>
          </motion.section>
        </motion.div>

        {/* CTA */}
        <motion.div className="mt-12 pt-8 border-t border-orange-500/20" variants={itemVariants}>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Join Us Now
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
