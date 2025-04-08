'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'

export default function Hero() {
    const { t } = useLanguage() // Translation function
    const { theme } = useTheme() // Get current theme from context
    // const [descriptionText, setDescriptionText] = useState('') // Text for description (not used currently)
    const [showTitleCursor, setShowTitleCursor] = useState(true) // Cursor for title (blinking)
    // const [showDescriptionCursor, setShowDescriptionCursor] = useState(false) // Cursor for description (not blinking, not used currently)

    const fullText = `${t('hero.hello')} ${t('hero.name')}`
    const nameStartIndex = fullText.indexOf(t('hero.name'))
    const [typedLength, setTypedLength] = useState(0)

    // const fullDescriptionText = t('hero.description')

    useEffect(() => {
        setTypedLength(0) // Reset typed length when language changes
        // setDescriptionText('') // Reset description text which is not used currently
        setShowTitleCursor(true) // Show title cursor (blinking)
        // setShowDescriptionCursor(false) // show description cursor (not blinking) but not used currently

        // Type out title
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setTypedLength(currentIndex + 1)
                currentIndex++
            } else {
                clearInterval(interval) // Stop typing title
                setShowTitleCursor(true) // Keep cursor blinking after text is complete

                // // Start typing description after title is complete
                // let descriptionIndex = 0
                // const descriptionTypingInterval = setInterval(() => {
                //     if (descriptionIndex < fullDescriptionText.length) {
                //         setDescriptionText(fullDescriptionText.substring(0, descriptionIndex + 1))
                //         descriptionIndex++
                //     } else {
                //         clearInterval(descriptionTypingInterval)
                //         setShowDescriptionCursor(true) // Keep cursor blinking after text is complete
                //     }
                // }, 40) // Slightly faster typing for description
            }
        }, 120) // Speed for title typing

        return () => {
            clearInterval(interval) // Cleanup typing interval
        }
    }, [fullText]) // Dependencies for useEffect

    return (
        <section
            id="home"
            className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-center md:text-left gap-12 pt-20 ${theme === 'dark'
                ? 'bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#1e293b] text-white'
                : 'bg-gradient-to-b from-[#e5e7eb] via-[#f3f4f6] to-[#f3f4f6] text-gray-800'
                }`}
        >
            {/* Left: Text */}
            <div className="md:w-1/2 space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} // Initial state for animation
                    whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                    transition={{ duration: 1 }} // Animation duration
                    className="text-5xl md:text-6xl font-bold tracking-tight terminal-text"
                >
                    <span className="terminal-text">
                        {fullText.split('').slice(0, typedLength).map((char, idx) => (
                            <span
                                key={idx}
                                className={
                                    idx >= nameStartIndex
                                        ? 'text-blue-500 font-semibold'
                                        : theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-800'
                                }
                            >
                                {char}
                            </span>
                        ))}
                        {showTitleCursor && <span className="text-blue-400 cursor-blink">_</span>}
                    </span>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl max-w-xl text-gray-300 mx-auto md:mx-0 terminal-text"
                >
                    <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                        {descriptionText}
                    </span>
                    {showDescriptionCursor && (
                        <span className="text-blue-400 cursor-blink">_</span>
                    )}
                </motion.div> */}
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