'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void // Set theme directly
    toggleTheme: () => void // Toggle between light and dark
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ThemeProvider component to wrap around your application
export function ThemeProvider({ children }: { children: ReactNode }) {
    // Default to dark theme, but will be updated based on localStorage or system preference
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        // On first mount, check localStorage or system preference
        const storedTheme = localStorage.getItem('theme') as Theme | null

        if (storedTheme) {
            setTheme(storedTheme)
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        // When theme changes, update document class and localStorage
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}