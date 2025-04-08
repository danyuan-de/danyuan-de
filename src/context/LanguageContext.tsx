'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'de' | 'zh-TW'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations: Record<string, string> = {

    // generic
    'inProgress': 'Under construction, stay tuned',

    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.hello': 'Hello, This is',
    'hero.name': 'Daniel',
    'hero.description': 'AI Engineer/Software Engineer/Blockchain Engineer',

    // About
    'about.title': 'About Me',
    'about.intro':
        'Currently pursuing a Master\'s degree in Information Technology at Universität Stuttgart,\
        with a specialization in AI and Large Language Model (LLM) fine-tuning. Passionate about Web3 and blockchain technologies.\
        Research focuses on exploring and evaluating different fine-tuning techniques of LLMs within specialized domains to assess their effectiveness.\
        Participated in the European research project Deterministic6G, which explores deterministic communication in 6G networks.\
        Contributed to the development of a simulation environment for evaluating time-sensitive network scenarios.',
    'about.resume': 'See my full resume',
    'about.portfolio': 'See my portfolio',


    // Contact
    'contact.title': 'Contact',
    'contact.description': 'I\'m currently focusing on learning and building. You can find me here:',
}

// German translations
const deTranslations: Record<string, string> = {

    // generic
    'inProgress': 'Dieser Bereich befindet sich im Aufbau, bleiben Sie dran',

    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.hello': 'Hallo, Das ist',
    'hero.name': 'Daniel',
    'hero.description': 'KI-Ingenieur/Software-Ingenieur/Blockchain-Ingenieur',

    // About
    'about.title': 'Über mich',
    'about.intro':
        'Derzeit im Masterstudium der Informationstechnologie an der Universität Stuttgart,\
        mit Schwerpunkt auf Künstlicher Intelligenz und dem Fine-Tuning großer Sprachmodelle (LLMs). Begeistert von Web3- und Blockchain-Technologien.\
        Der Forschungsschwerpunkt liegt auf der Untersuchung und Bewertung verschiedener Fine-Tuning-Methoden für LLMs in spezifischen Anwendungsdomänen, um deren Wirksamkeit zu analysieren.\
        Teilnahme am europäischen Forschungsprojekt Deterministic6G, das sich mit deterministischer Kommunikation in 6G-Netzen beschäftigt.\
        Mitwirkung an der Entwicklung einer Simulationsumgebung zur Bewertung zeitkritischer Netzwerkszenarien.',
    'about.resume': 'Vollständigen Lebenslauf ansehen',
    'about.portfolio': 'Portfolio ansehen',
    'about.underdevelopment': 'Dieser Bereich befindet sich im Aufbau',

    // Contact
    'contact.title': 'Kontakt',
    'contact.description': 'Zurzeit konzentriere ich mich auf Lernen und Projekte. Du kannst mich hier erreichen:',
}

// Traditional Chinese translations
const zhTWTranslations: Record<string, string> = {

    // generic
    'inProgress': '正在施工中，敬請期待',

    // Navbar
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.contact': '聯絡方式',

    // Hero
    'hero.hello': '嗨，這是',
    'hero.name': '袁倫御 Daniel',
    'hero.description': 'AI 工程師/軟體工程師/區塊鏈工程師',

    // About
    'about.title': '關於我',
    'about.intro':
        '目前就讀斯圖加特大學資訊科技碩士，專注於人工智慧與大型語言模型（LLM）的微調，對 Web3 和區塊鏈技術充滿熱情。\
        研究重點聚焦於特定領域中探索與評估不同的大型語言模型微調方法，檢測其效果與表現差異。\
        曾參與歐洲研究計畫 Deterministic6G，該計畫致力於 6G 網路中的確定性通訊技術，模擬環境的開發，用以評估時間敏感型網路場景。',
    'about.resume': '查看完整履歷',
    'about.portfolio': '查看我的作品集',


    // Contact
    'contact.title': '聯絡我',
    'contact.description': '最近專心在學習和做一些作品，有興趣的話可以在這些地方找到我：',
}

const translations: Record<Language, Record<string, string>> = {
    'en': enTranslations,
    'de': deTranslations,
    'zh-TW': zhTWTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')

    // Initialize language from localStorage if available
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        const supportedLanguages: Language[] = ['en', 'zh-TW', 'de']

        if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
            setLanguageState(savedLanguage)
        } else {
            const browserLang = navigator.language
            if (browserLang.startsWith('zh')) {
                setLanguageState('zh-TW')
            } else if (browserLang.startsWith('de')) {
                setLanguageState('de')
            } else {
                setLanguageState('en')
            }
        }
    }, [])


    // Save language preference to localStorage
    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    // Translation function
    const t = (key: string): string => {
        return translations[language][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}