'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

export default function AboutMe() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    return (
        <section
            id="about"
            className={`min-h-screen px-6 py-24 ${theme === 'dark'
                ? 'bg-gradient-to-b from-[#1e293b] via-[#1e2330] to-[#0f172a] text-white'
                : 'bg-gradient-to-b from-[#f3f4f6] via-[#e5e7eb] to-[#e5e7eb] text-gray-800'
                }`}
        >
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-6xl font-bold mb-6">{t('about.title')}</h2>
                    <p className={`text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t('about.intro')}
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-start md:space-x-10">
                    {/* Resume on the left side */}
                    <motion.a
                        href="/Resume_Lun-Yu_Yuan.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative md:w-1/3 space-y-10 block mt-6 hover:opacity-80 transition duration-300"
                    >
                        <Image
                            src="/resume-preview.png"
                            alt="Resume Preview"
                            width={400}
                            height={400}
                            className="rounded-xl border-4 border-blue-400 shadow-lg mx-auto transition duration-300 group-hover:brightness-50"
                        />
                        <p className={`mt-2 text-center text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>Resume</p>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                            {t('about.resume')}
                        </span>
                    </motion.a>

                    {/* Portfolio on the right side*/}
                    <motion.a
                        // href="https://your-portfolio-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative md:w-1/3 space-y-37 block mt-6 hover:opacity-80 transition duration-300"
                    >
                        <Image
                            src="/placeholder.png"
                            alt="Portfolio Preview"
                            width={400}
                            height={400}
                            className="bg-white rounded-xl border-4 border-blue-400 shadow-lg mx-auto transition duration-300 group-hover:brightness-50"
                        />
                        <p className={`mt-2 text-center text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>Portfolio</p>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                            {t('inProgress')}
                        </span>

                    </motion.a>
                </div>
            </div>
        </section>
    )
}