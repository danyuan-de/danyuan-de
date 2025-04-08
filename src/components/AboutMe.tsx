'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutMe() {
    const { t } = useLanguage()

    return (
        <section id="about" className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#1e293b] via-[#1e2330] to-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-6xl font-bold mb-6">{t('about.title')}</h2>
                    <p className="text-2xl text-gray-300">
                        {t('about.intro')}
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-4xl font-semibold mb-2">🎓 {t('about.education')}</h3>
                    <ul className="text-2xl list-disc pl-6 text-gray-200 font-medium tracking-wide leading-relaxed">
                        {t('about.master')}
                    </ul>
                    <ul className="text-2xl list-disc pl-6 text-gray-200 font-medium tracking-wide leading-relaxed">
                        {t('about.bachelor')}
                    </ul>
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-4xl font-semibold mb-2">💼 {t('about.work')}</h3>
                    <ul className="text-2xl list-disc pl-6 text-gray-200 font-medium tracking-wide leading-relaxed">
                        {t('about.work.research')}
                    </ul>
                </motion.div>

                {/* Skills section with fixed column widths and equal underlines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-200 text-lg pt-6"
                >
                    {/* Specializations */}
                    <div className="flex flex-col items-start">
                        <div className="w-full border-b-2 border-gray-600 mb-4">
                            <h3 className="text-2xl font-semibold pb-2">
                                {t('about.specializations')}
                            </h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>{t('about.specializations.ai')}</li>
                            <li>{t('about.specializations.finetune')}</li>
                            <li>{t('about.specializations.tsn')}</li>
                        </ul>
                    </div>

                    {/* Programming Languages */}
                    <div className="flex flex-col items-start">
                        <div className="w-full border-b-2 border-gray-600 mb-4">
                            <h3 className="text-2xl font-semibold pb-2">
                                {t('about.programminglanguages')}
                            </h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Shell Script</li>
                            <li>Rust</li>
                            <li>Solidity</li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col items-start">
                        <div className="w-full border-b-2 border-gray-600 mb-4">
                            <h3 className="text-2xl font-semibold pb-2">
                                {t('about.tools')}
                            </h3>
                        </div>
                        <ul className=" list-disc pl-5 space-y-2">
                            <li>PyTorch</li>
                            <li>Git</li>
                            <li>OpenCL</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col items-start">
                        <div className="w-full border-b-2 border-gray-600 mb-4">
                            <h3 className="text-2xl font-semibold pb-2">
                                {t('about.languages')}
                            </h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 flex flex-col">
                            <li>{t('about.languages.english')}</li>
                            <li>{t('about.languages.chinese')}</li>
                            <li>{t('about.languages.german')}</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.a
                    href="/Resume_Lun-Yu_Yuan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block mt-6 hover:opacity-80 transition duration-300"
                >
                    <Image
                        src="/resume-preview.png"
                        alt="Resume Preview"
                        width={400}
                        height={400}
                        className="rounded-xl border-4 border-blue-400 shadow-lg mx-auto"
                    />
                    <p className="mt-2 text-center text-sm text-gray-400">{t('about.resume')}</p>
                </motion.a>

            </div>
        </section>
    )
}