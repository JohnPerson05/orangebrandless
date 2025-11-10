"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const pulseGlowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(249, 115, 22, 0.3)",
      "0 0 40px rgba(249, 115, 22, 0.5)",
      "0 0 20px rgba(249, 115, 22, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  }),
}

const wordRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    },
  }),
}

export default function About() {
  const prefersReducedMotion = useReducedMotion()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-12 px-4 overflow-hidden">
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
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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

        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div 
            className="inline-block mb-6 relative"
            variants={floatingVariants}
            animate="animate"
            whileHover={{ scale: 1.03, rotate: [0, -1, 1, 0] }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-2xl animate-pulse" />
            <Image
              src="/images/about/hero.jpg"
              alt="Orange Brandless"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Section 1: What Are We Building */}
        <motion.section className="mb-20" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              What Are We Building on{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Orange Brandless
            </span>
          </h2>
          <motion.div 
            className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 animate-shimmer" />
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              In the vast world of the <span className="text-orange-400 font-semibold">Orange Dynasty</span>, one clan stands out not by name, but by <em className="text-orange-300">meaning</em>—a movement that doesn't seek to brand itself, but to <strong className="text-white">embody belief itself</strong>.
            </motion.p>
            <motion.p 
              className="text-xl text-center font-semibold mb-4 relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-bold text-2xl">
                Welcome to Orange Brandless 🔸
              </span>
            </motion.p>
            <motion.p 
              className="text-gray-300 text-center italic relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <strong className="text-orange-400">Builder</strong> of the Orange Brandless Clan | <strong className="text-orange-400">Believer</strong> in the Sign Ecosystem | <strong className="text-orange-400">Builder</strong> of the Orange Dynasty by...
            </motion.p>
            <motion.p 
              className="text-center text-orange-500 font-bold mt-2 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              signInnervibe & signMotionguy
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 2: What is Orange Brandless */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.div 
            className="mb-8 relative group"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/about/what-is.jpg"
              alt="What is Orange Brandless"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 w-full relative z-10"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What is{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Orange Brandless
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <strong className="text-orange-400">Orange Brandless</strong> is more than a clan; it's a <em className="text-orange-300">philosophy of freedom, authenticity, and unity</em>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We are the believers who don't chase validation; <strong className="text-white">we stake it</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We represent a new wave of the <strong className="text-orange-400">Sign SuperApp community</strong>, where belonging isn't defined by a logo, a title, or a tag—but by <em className="text-orange-300">action</em>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              To be Orange Brandless means to <strong className="text-white">show up daily, contribute with heart, and wear belief as your armor</strong>.
            </motion.p>
            <motion.div
              className="relative py-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent blur-xl" />
              <p className="text-xl font-bold text-center relative z-10">
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Because here, <em>Staking is our dress code</em>.
                </span>
              </p>
            </motion.div>
            <motion.p 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              You don't need a brand—<strong className="text-orange-500">your belief is your identity</strong>. 🧡
            </motion.p>
          </div>
        </motion.section>

        {/* Section 3: About Us */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.div 
            className="mb-8 relative group"
            variants={imageVariants}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/about/about-us.jpg"
              alt="About Us"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 w-full relative z-10"
            />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["About", "Us"].map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordRevealVariants}
                className="inline-block mx-2"
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  {word}
                </span>
              </motion.span>
            ))}
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-2 border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
            variants={pulseGlowVariants}
            animate="animate"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-50 animate-shimmer" />
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              We are <strong className="text-orange-400">creators, stakers, and dreamers</strong> united under one banner: <em className="text-orange-300">belief in the Sign vision</em>.
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              From newcomers exploring their first stake to veterans guiding others in the <strong className="text-orange-400">Orange path</strong>—each member adds their own spark to the <strong className="text-orange-500">orange dynasty</strong>.
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In Orange Brandless, we don't compete—<strong className="text-white">we align in purpose</strong>.
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We lift others up, teach the uninitiated, and build projects that push the movement forward.
            </motion.p>
            <motion.p 
              className="text-orange-400 text-lg font-semibold mb-4 relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Every orange counts, every effort matters, every person belongs.
            </motion.p>
            <motion.p 
              className="text-center text-xl font-bold relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                We are not branded—
              </span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                we are bound by belief
              </span>.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 4: The Concept */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.div 
            className="mb-8 relative group"
            variants={imageVariants}
            whileHover={{ scale: 1.02, rotateZ: [0, -0.5, 0.5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-orange-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/about/concept.jpg"
              alt="The Orange Brandless Concept"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 w-full relative z-10"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Orange Brandless
            </span>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {" "}Concept
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The concept of Orange Brandless began with a simple idea:
            </motion.p>
            <motion.div
              className="relative py-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500/20 to-orange-500/10 rounded-xl blur-xl" />
              <motion.p 
                className="text-center text-2xl font-bold py-4 relative z-10"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                  <em>freedom from labels</em>
                </span>
                <span className="text-white">, and </span>
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent">
                  <strong>power through purpose</strong>
                </span>
                <span className="text-white">.</span>
              </motion.p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              While others define themselves by names, logos, or positions, we choose to define ourselves by <strong className="text-white">consistency and contribution</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              It's about proving that you don't need recognition to create impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              You just need <strong className="text-orange-400">belief, action, and a touch of orange energy</strong>. ⚡
            </motion.p>
            <motion.p 
              className="italic text-orange-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Every post, every gib, every stake—it's a statement.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Not for <em>fame</em>, but for the <strong className="text-orange-500">future we're all building together</strong>.
            </motion.p>
            <motion.p 
              className="text-center text-xl font-semibold pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                We are the faceless builders of faith, the unseen core of conviction.
              </span>
            </motion.p>
          </div>
        </motion.section>

        {/* Section 5: What Are We Aiming For */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.div 
            className="mb-8 relative group"
            variants={imageVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/25 to-amber-500/25 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/about/aiming.jpg"
              alt="What Are We Aiming For"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 w-full relative z-10"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Are We Aiming For on{" "}
            </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Orange Brandless
            </span>
          </h2>
          <motion.div 
            className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 opacity-50" />
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our aim is simple but powerful—to build a <strong className="text-orange-400">community-driven clan</strong> that grows through <em className="text-orange-300">trust, transparency, and teamwork</em>.
            </motion.p>
            <motion.p 
              className="text-white font-bold text-xl mb-4 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We aim to:
            </motion.p>
            <ul className="space-y-3 text-gray-300 text-lg mb-6 relative z-10">
              {[
                "Lead by example through daily engagement and consistent contribution.",
                "Support fellow signees in staking, learning, and building together.",
                "Encourage creativity and authenticity in the Sign ecosystem.",
                "Build apps, content, and initiatives that showcase the power of belief.",
                "Strengthen our role in the upcoming Clan Wars and SuperApp missions."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="flex gap-3 group/item"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-orange-500 text-xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    🔸
                  </motion.span>
                  <span>
                    <strong className="text-white group-hover/item:text-orange-400 transition-colors">
                      {item.split(' ').slice(0, 3).join(' ')}
                    </strong>
                    {' '}
                    {item.split(' ').slice(3).join(' ')}
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.p 
              className="text-orange-400 text-lg italic mb-2 relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Each stake is a promise. Each member is a pillar.
            </motion.p>
            <motion.p 
              className="text-xl font-bold text-center relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Together, we build the foundation of the Orange future.
              </span>
              {" "}🧡
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 6: Goals & Objectives */}
        <motion.section className="mb-20" variants={itemVariants}>
          <motion.div 
            className="mb-8 relative group"
            variants={imageVariants}
            whileHover={{ scale: 1.02, rotateX: 2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/about/goals.jpg"
              alt="Goals and Objectives"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-orange-500/20 w-full relative z-10"
            />
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Goals & Objectives
            </span>
          </motion.h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p 
              className="text-center text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our goals go beyond leaderboards—<strong className="text-white">they're rooted in legacy</strong>.
            </motion.p>
            <motion.p 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <strong className="text-orange-400">Orange Brandless</strong> exists to create a <em className="text-orange-300">culture of belief that lasts</em>.
            </motion.p>
            
            <motion.div 
              className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-50 animate-shimmer" />
              <motion.p 
                className="text-white font-bold text-xl mb-4 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Objectives:
              </motion.p>
              <ul className="space-y-3 mb-6 relative z-10">
                {[
                  { title: "Unite the believers", text: "create a space where stakers feel at home." },
                  { title: "Empower creators", text: "turn ideas into contributions that strengthen the clan." },
                  { title: "Build tools & content", text: "from apps to campaigns that spread Sign's vision." },
                  { title: "Promote consistency", text: "prove that real progress comes from daily discipline." },
                  { title: "Inspire others", text: "to join, stake, and live with purpose." }
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listItemVariants}
                    className="flex gap-3 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="text-orange-500 text-xl"
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      🔸
                    </motion.span>
                    <span>
                      <strong className="text-orange-400 group-hover/item:text-orange-300 transition-colors">
                        {item.title}
                      </strong>
                      —{item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our journey isn't about <em className="line-through text-gray-500">hype</em>—it's about <strong className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-xl">heritage</strong>.
            </motion.p>
            <motion.p 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Every badge earned, every crown achieved, and every sprout grown is proof that <strong className="text-white">we are building something real</strong>.
            </motion.p>
          </div>
        </motion.section>

        {/* Closing Section */}
        <motion.section className="mb-12" variants={itemVariants}>
          <motion.div 
            className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border-2 rounded-2xl p-10 text-center relative overflow-hidden"
            animate={{
              borderColor: [
                "rgba(249, 115, 22, 0.4)",
                "rgba(251, 146, 60, 0.6)",
                "rgba(249, 115, 22, 0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 opacity-50 animate-shimmer" />
            <motion.p 
              className="text-2xl md:text-3xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Orange Brandless isn't just a clan—
              </span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                it's a belief system
              </span>.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 mb-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A belief system disguised as a <em className="text-orange-400">family</em>.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A collective heartbeat echoing through the <strong className="text-orange-500">Orange Dynasty</strong>. 💫
            </motion.p>
            
            <div className="border-t border-orange-500/30 pt-6 mt-6 relative z-10">
              <motion.p 
                className="text-2xl font-bold mb-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  🔸 Orange Brandless—Where belief becomes identity.
                </span>
              </motion.p>
              <motion.p 
                className="text-xl text-white font-semibold mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Stake up. Suit up.{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  You belong
                </span>. 🧡
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 italic mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                🔸 Orange Brandless—A clan without labels, built on belief.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-orange-500/40 rounded-lg blur-xl animate-pulse" />
                  <Link
                    href="/"
                    className="relative inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                    <span className="relative z-10">Become one of us. Stake your faith.</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Safety Notice */}
        <motion.div 
          className="text-center border-t border-orange-500/20 pt-8"
          variants={itemVariants}
        >
          <motion.p 
            className="text-yellow-400 font-semibold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              textShadow: [
                "0 0 10px rgba(250, 204, 21, 0.3)",
                "0 0 20px rgba(250, 204, 21, 0.5)",
                "0 0 10px rgba(250, 204, 21, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⚠️ Remember: Orange Brandless will <strong>NEVER</strong> DM you with links.
          </motion.p>
          <motion.p 
            className="text-orange-400 text-lg font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            🔸 Thank you 🔸 STAY SAFU 🔸
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            🍊 Superapps - Orange Brandless code:{" "}
            <motion.span 
              className="text-orange-500 font-mono font-bold"
              whileHover={{ scale: 1.1, color: "#fb923c" }}
              transition={{ duration: 0.2 }}
            >
              F2NA6LI5FV
            </motion.span>{" "}
            🍊
          </motion.p>
        </motion.div>

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
    </main>
  )
}
