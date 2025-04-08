'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Navigation items
    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' }
        // Add more items as needed
    ]


    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <Link href="#home" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                            Daniel Yuan
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex space-x-8 items-center"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center ml-4 space-x-2">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'en'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('de')}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'de'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                DE
                            </button>
                            <button
                                onClick={() => setLanguage('zh-TW')}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'zh-TW'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                繁中
                            </button>
                        </div>
                    </motion.nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0f172a]/95 backdrop-blur-sm"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setMobileMenuOpen(false)
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Language Switcher - Mobile */}
                        <div className="flex items-center space-x-2 px-3 py-2">
                            <span className="text-gray-400 text-sm">Language:</span>
                            <button
                                onClick={() => {
                                    setLanguage('en')
                                    setMobileMenuOpen(false)
                                }}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'en'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('de')}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'de'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                DE
                            </button>
                            <button
                                onClick={() => {
                                    setLanguage('zh-TW')
                                    setMobileMenuOpen(false)
                                }}
                                className={`px-2 py-1 text-xs rounded-md transition-colors ${language === 'zh-TW'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                繁中
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    )
}