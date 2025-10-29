"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const socialLinks = [
  { name: "SuperApps", url: "https://orange.sign.global/app?post=1979820604369859520", icon: "sign" },
  { name: "Telegram", url: "https://t.me/Kimjunngki", icon: "telegram" },
  { name: "Twitter", url: "https://x.com/orangebrandless", icon: "twitter" },
]

const getIcon = (iconType: string) => {
  const iconMap: { [key: string]: string } = {
    telegram: "✈️",
    twitter: "𝕏",
  }
  return iconMap[iconType] || "🔗"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0, 0, 0.2, 1] },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] flex flex-col items-center justify-center p-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md flex-1 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo Section */}
        <motion.div className="flex justify-center mb-8" variants={logoVariants} whileHover="hover">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl" />
            <Image
              src="/images/design-mode/BRANDLESS.jpg"
              alt="Orange Brandless Logo"
              width={200}
              height={200}
              className="relative z-10 rounded-full"
              priority
            />
          </div>
        </motion.div>

        <div>
          {/* Title and Tagline */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              ORANGE <span className="text-orange-500">BRANDLESS</span>
            </h1>
            <p className="text-orange-400 text-lg font-semibold mb-2">Unfiltered. Original. Unstoppable.</p>
            <p className="text-gray-400 text-sm">Join the movement. Be part of the crew.</p>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div className="grid grid-cols-3 gap-3 mb-8" variants={containerVariants}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/60 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-500/10"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                  {link.icon === "sign" ? (
                    <Image src="/images/sign-icon.png" alt="Sign" width={40} height={40} className="rounded" />
                  ) : (
                    <span className="text-2xl">{getIcon(link.icon)}</span>
                  )}
                  <span className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {link.name}
                  </span>
                </div>

                <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-orange-400/0 group-hover:text-orange-400 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}
          </motion.div>

          {/* About Link */}
          <motion.div className="text-center" variants={itemVariants}>
            <Link
              href="/about"
              className="inline-block text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium underline-offset-4 hover:underline"
            >
              Learn more about us →
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        className="relative z-10 w-full text-center py-6 border-t border-orange-500/20 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-gray-500 text-xs">
          © 2025 Orange Brandless. Built by <span className="text-orange-400 font-semibold">jaypeee0x.sign</span>
        </p>
        <p className="text-gray-600 text-xs mt-1">Part of Brandless Clan</p>
      </motion.footer>
    </main>
  )
}
