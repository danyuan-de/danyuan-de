'use client'

import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme() // Get theme and toggle function from context
    const [isHovered, setIsHovered] = useState(false) // Add hover state

    // Determine which icon to show based on theme and hover state
    const isThemeIconReversed = theme === (isHovered ? 'dark' : 'light')

    return (
        <motion.button
            whileHover={{ scale: 1.1 }} // When you hover the button, it will scale up
            whileTap={{ scale: 0.9 }} // When you click the button, it will scale down
            onClick={toggleTheme} // Toggle the theme when clicked
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
            className={`rounded-full p-2 transition-colors ${theme === 'dark'
                ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {isThemeIconReversed ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button>
    )
}