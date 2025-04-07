'use client'

import { motion } from 'framer-motion'


export default function Hero() {

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#1e293b] text-white">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
                Hello, I&#39;m <span className="text-blue-400">Daniel</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl max-w-xl text-gray-300"
            >
                To me, programming is not just a job; it&#39;s a passion.
                I enjoy the challenge of learning new technologies and
                finding innovative solutions to complex problems.
            </motion.p>
        </section>
    )
}