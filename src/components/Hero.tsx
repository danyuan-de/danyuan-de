'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#1e293b] text-white text-center md:text-left gap-12">

            {/* Left: Text */}
            <div className="md:w-1/2 space-y-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight"
                >
                    Hello, I&#39;m <span className="text-blue-400">Daniel</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-3xl max-w-xl text-gray-300 mx-auto md:mx-0"
                >
                    To me, programming is not just a job; it&#39;s a passion.
                    I enjoy the challenge of learning new technologies and
                    finding innovative solutions to complex problems.
                </motion.p>
            </div>

            {/* Right: Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="md:w-1/3"
            >
                <Image
                    src="/og-image.png"
                    alt="Daniel Yuan"
                    width={400}
                    height={400}
                    className="rounded-full border-4 border-blue-400 shadow-lg mx-auto"
                />
            </motion.div>
        </section>
    )
}
