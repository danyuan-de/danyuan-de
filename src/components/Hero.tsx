'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()
    const [titleText, setTitleText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    const [showTitleCursor, setShowTitleCursor] = useState(true)
    const [showDescriptionCursor, setShowDescriptionCursor] = useState(false)

    const fullTitleText = `${t('hero.hello')} Daniel`
    const fullDescriptionText = t('hero.description')

    useEffect(() => {
        // Reset texts when language changes
        setTitleText('')
        setDescriptionText('')
        setShowTitleCursor(true)
        setShowDescriptionCursor(false)

        // Type out title
        let titleIndex = 0
        const titleTypingInterval = setInterval(() => {
            if (titleIndex < fullTitleText.length) {
                setTitleText(fullTitleText.substring(0, titleIndex + 1))
                titleIndex++
            } else {
                clearInterval(titleTypingInterval)
                setShowTitleCursor(false)
                setShowDescriptionCursor(true)

                // Start typing description after title is complete
                let descriptionIndex = 0
                const descriptionTypingInterval = setInterval(() => {
                    if (descriptionIndex < fullDescriptionText.length) {
                        setDescriptionText(fullDescriptionText.substring(0, descriptionIndex + 1))
                        descriptionIndex++
                    } else {
                        clearInterval(descriptionTypingInterval)
                        setShowDescriptionCursor(true) // Keep cursor blinking after text is complete
                    }
                }, 40) // Slightly faster typing for description
            }
        }, 80) // Speed for title typing

        return () => {
            clearInterval(titleTypingInterval)
        }
    }, [fullTitleText, fullDescriptionText])

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#1e293b] text-white text-center md:text-left gap-12 pt-20">

            {/* Left: Text */}
            <div className="md:w-1/2 space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight terminal-text"
                >
                    <span className="text-white">
                        {titleText}
                    </span>
                    {showTitleCursor && (
                        <span className="text-blue-400 cursor-blink">_</span>
                    )}
                    {/* keep the cursor after typing */}
                    {/* {!showTitleCursor && titleText.includes('Daniel') && (
                        <span className="text-blue-400">_</span>
                    )} */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl max-w-xl text-gray-300 mx-auto md:mx-0 terminal-text"
                >
                    <span>{descriptionText}</span>
                    {showDescriptionCursor && (
                        <span className="text-blue-400 cursor-blink">_</span>
                    )}
                </motion.div>
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

            {/* Add styling for blinking cursor */}
            <style jsx global>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                .cursor-blink {
                    animation: blink 1s infinite;
                    display: inline-block;
                }
                
                .terminal-text {
                    font-family: var(--font-geist-mono), monospace;
                }
            `}</style>
        </section>
    )
}