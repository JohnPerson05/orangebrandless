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
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-12 px-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back Button */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-all duration-300 font-medium group"
            >
              <motion.div
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
              <span className="relative">
                Back to home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Terms of Service
          </span>
        </motion.h1>

        {/* Content */}
        <motion.div 
          className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm space-y-8"
          variants={itemVariants}
        >
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">About This Website</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              This website is created and maintained for the <strong className="text-orange-500">Orange Brandless Clan</strong>, a community within the Sign Protocol ecosystem. This site serves as an informational hub for our clan members and those interested in learning about our community.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Disclaimer</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed text-lg">
              <p>
                By accessing and using this website, you acknowledge and agree to the following:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>This website is provided "as is" for informational purposes only.</li>
                <li>We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information provided.</li>
                <li>Your use of this website is at your own risk.</li>
                <li>We are not responsible for any losses or damages arising from your use of this website.</li>
              </ul>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Community Guidelines</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed text-lg">
              <p>
                Orange Brandless Clan is built on principles of respect, authenticity, and collaboration:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Treat all community members with respect and courtesy.</li>
                <li>Contribute authentically and with good intentions.</li>
                <li>Do not engage in spam, harassment, or malicious activities.</li>
                <li>Respect intellectual property and give credit where due.</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              This website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or content.
            </p>
          </section>

          {/* Security Notice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Security Notice</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <p className="text-yellow-400 font-semibold mb-3">⚠️ Important Security Reminder</p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Orange Brandless will <strong className="text-white">NEVER</strong> ask you for private keys, seed phrases, or passwords. We will <strong className="text-white">NEVER</strong> send you direct messages with links asking you to connect your wallet or claim rewards. Always verify the authenticity of any communications claiming to be from Orange Brandless.
              </p>
            </div>
          </section>

          {/* No Financial Advice */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">No Financial Advice</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Nothing on this website should be construed as financial, investment, legal, or tax advice. Always do your own research and consult with appropriate professionals before making any decisions involving cryptocurrencies or digital assets.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              We reserve the right to modify these terms at any time. Continued use of this website following any changes constitutes acceptance of those changes.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 pt-6 border-t border-orange-500/20">
            <h2 className="text-2xl font-bold text-orange-400">Contact</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              For questions or concerns about these terms, please reach out through our official community channels on Orange Brandless Clan or Telegram.
            </p>
            <p className="text-orange-400 italic">
              Last Updated: November 2025
            </p>
          </section>
        </motion.div>

        {/* Back to Home Link */}
        
        {/* Footer */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-orange-500/20"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Orange Brandless Clan. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with 🧡 by the Orange Dynasty
              </p>
            </div>
            <div className="flex gap-6">
              <Link 
                href="/terms" 
                className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/" 
                className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </motion.footer>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: showScrollTop ? 'block' : 'none' }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
        <motion.div className="mt-8 text-center" variants={itemVariants}>
          <Link
            href="/"
            className="inline-block text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium"
          >
            ← Back to Homepage
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

