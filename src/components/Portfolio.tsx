'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Portfolio() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617] text-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
            >
                Portfolio
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-0.5xl max-w-xl text-gray-300 leading-relaxed mb-12"
            >
                I&#39;m currently focusing on learning and building. You can find me here:
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-8 text-3xl"
            >
                <a href="https://github.com/danyuan-de" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-blue-400 transition duration-300" />
                </a>
                <a href="https://linkedin.com/in/lyyuan-daniel-is-me" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-400 transition duration-300" />
                </a>
            </motion.div>
        </section>
    )
}
