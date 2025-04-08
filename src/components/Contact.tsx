'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

export default function Contact() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    return (
        <section
            id="contact"
            className={`min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 ${theme === 'dark'
                ? 'bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617] text-white'
                : 'bg-gradient-to-b from-[#e5e7eb] via-[#d1d5db] to-[#9ca3af] text-gray-800'
                }`}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
            >
                {t('contact.title')}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`text-lg md:text-0.5xl max-w-xl leading-relaxed mb-12 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
            >
                {t('contact.description')}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-8 text-3xl"
            >
                <a href="https://github.com/danyuan-de" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={`hover:text-blue-400 transition duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`} />
                </a>
                <a href="https://linkedin.com/in/lyyuan-daniel-is-me" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={`hover:text-blue-400 transition duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`} />
                </a>
                <a href="mailto:nadal3815@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className={`hover:text-blue-400 transition duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                        }`} />
                </a>
            </motion.div>
        </section>
    )
}