'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'de' | 'zh-TW'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations: Record<string, string> = {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.hello': 'Hello, This is',
    'hero.description': 'Stay curious, enjoy the process and keep building.',

    // About
    'about.title': 'About Me',
    'about.intro':
        'I\'m currently pursuing my Master\'s in Information Technology at Universität Stuttgart.  \
        I specialize in AI and Large Language Model (LLM) fine-tuning, and I\'m passionate about Web3 and blockchain technologies.\
        I conducted research on LLMs, focusing on prompt engineering and fine-tuning techniques to adapt models for specialized domain tasks.\
        During my studies, I participated in a European research project, Deterministic6G, focusing on deterministic communication in 6G networks.\
        I collaborated on the development of a simulation environment for evaluating time-sensitive network scenarios.',
    'about.education': 'Education',
    'about.master': 'M.Sc.: Universität Stuttgart - Information Technology (2022–2025)',
    'about.bachelor': 'B.Sc.: Chung Yuan Christian University - Electrical Engineering (2017–2021)',
    'about.work': 'Work Experience',
    'about.work.research': 'Research Assistant – IPVS, Universität Stuttgart (2023–2025)',
    'about.specializations': 'Specializations',
    'about.specializations.ai': 'AI & Machine Learning',
    'about.specializations.finetune': 'LLM Fine-Tuning',
    'about.specializations.tsn': 'Time Sensitive Network',
    'about.programminglanguages': 'Coding Skills',
    'about.tools': 'Tools',
    'about.languages': 'Languages',
    'about.languages.english': 'English',
    'about.languages.chinese': 'Chinese',
    'about.languages.german': 'German',
    'about.resume': 'See my full resume',

    // Contact
    'contact.title': 'Contact',
    'contact.description': 'I\'m currently focusing on learning and building. You can find me here:',
}

// German translations
const deTranslations: Record<string, string> = {
    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.hello': 'Hallo, Das ist',
    'hero.description': 'Bleib neugierig, genieße den Prozess und entwickle weiter.',

    // About
    'about.title': 'Über mich',
    'about.intro':
        'Ich studiere derzeit Informations­technologie im Master­studium an der Universität Stuttgart.\
        Ich spezialisiere mich auf künstliche Intelligenz und Feinabstimmung großer Sprachmodelle (LLM) und interessiere mich leidenschaftlich für Web3 und Blockchain-Technologien.\
        Ich habe an Forschungsarbeiten zu LLMs teilgenommen, mit Fokus auf Prompt Engineering und Feinabstimmung zur Anpassung an spezialisierte Domänen.\
        Während meines Studiums war ich Teil des europäischen Forschungsprojekts Deterministic6G, das sich mit deterministischer Kommunikation in 6G-Netzen beschäftigt.\
        Ich habe an der Entwicklung einer Simulationsumgebung zur Bewertung zeitkritischer Netzwerkszenarien mitgewirkt.',
    'about.education': 'Ausbildung',
    'about.master': 'M.Sc.: Universität Stuttgart – Informationstechnologie (2022–2025)',
    'about.bachelor': 'B.Sc.: Chung Yuan Christian University – Elektrotechnik (2017–2021)',
    'about.work': 'Berufserfahrung',
    'about.work.research': 'Wissenschaftliche Hilfskraft – IPVS, Universität Stuttgart (2023–2025)',
    'about.specializations': 'Fachgebiete',
    'about.specializations.ai': 'KI & Maschinelles Lernen',
    'about.specializations.finetune': 'LLM Feinabstimmung',
    'about.specializations.tsn': 'Zeitkritisches Netzwerk',
    'about.programminglanguages': 'Programmierkenntnisse',
    'about.tools': 'Tools',
    'about.languages': 'Sprachkenntnisse',
    'about.languages.english': 'Englisch',
    'about.languages.chinese': 'Chinesisch',
    'about.languages.german': 'Deutsch',
    'about.resume': 'Vollständigen Lebenslauf ansehen',

    // Contact
    'contact.title': 'Kontakt',
    'contact.description': 'Zurzeit konzentriere ich mich auf Lernen und Projekte. Du kannst mich hier erreichen:',
}

// Traditional Chinese translations
const zhTWTranslations: Record<string, string> = {
    // Navbar
    'nav.home': '首頁',
    'nav.about': '關於我',
    'nav.contact': '聯絡方式',

    // Hero
    'hero.hello': '嗨，這是',
    'hero.description': '保持好奇，樂在其中，動手做就對了。',

    // About
    'about.title': '關於我',
    'about.intro':
        '我目前在斯圖加特大學攻讀資訊科技碩士，專注於人工智慧與大型語言模型（LLM）的微調，並對 Web3 和區塊鏈技術充滿熱情。\
        我曾進行與 LLM 相關的研究，專注於提示工程（Prompt Engineering）與微調技術，以使模型能應用於特定領域的任務。\
        在學期間，我參與了一項歐洲研究計畫 Deterministic6G，聚焦於第六代通訊中的確定性傳輸。我也參與開發了一個模擬環境，用於評估時間敏感網路的場景。',
    'about.education': '學歷',
    'about.master': '碩士: 斯圖加特大學 - 資訊科技 (2022–2025)',
    'about.bachelor': '學士: 中原大學 - 電機工程學系 (2017–2021)',
    'about.work': '工作經歷',
    'about.work.research': '研究助理 - 斯圖加特大學 IPVS (2023–2025)',
    'about.specializations': '專長領域',
    'about.specializations.ai': '人工智慧與機器學習',
    'about.specializations.finetune': '大語言模型微調',
    'about.specializations.tsn': '時間敏感網路',
    'about.programminglanguages': '程式技能',
    'about.tools': '常用工具',
    'about.languages': '語言能力',
    'about.languages.english': '英文',
    'about.languages.chinese': '中文',
    'about.languages.german': '德文',
    'about.resume': '查看完整履歷',


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