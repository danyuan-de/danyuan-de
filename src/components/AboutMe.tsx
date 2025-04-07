'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#0f172a] text-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                // viewport={{ once: true }}
                className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed"
            >
                I&#39;m currently pursuing my Master&#39;s in Information Technology at the University of Stuttgart.
                I&#39;m deeply curious about AI, LLMs, and blockchain. I&#39;m always eager to learn more.
                When I&#39;m not in front of my laptop, you&#39;ll probably find me on the basketball or tennis court.

            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                // viewport={{ once: true }}
                className="text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed mt-4"
            >
                Oh, and I&#39;m a huge dog lover 🐶
                Even though I don&#39;t have one yet.
            </motion.p>
        </section>
    )
}
