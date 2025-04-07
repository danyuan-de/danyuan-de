'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <section className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#1e293b] via-[#1e2330] to-[#0f172a] text-white">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-6xl font-bold mb-6">About Me</h2>
                    <p className="text-2xl text-gray-300">
                        I&#39;m currently pursuing my Master&#39;s in Information Technology at Universität Stuttgart.
                        I specialize in AI and Large Language Model (LLM) fine-tuning.
                        Also, I am passionate about Web3 and blockchain. I&#39;m always eager to learn more.
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-4xl font-semibold mb-2">🎓 Education</h3>
                    <ul className="text-xl list-disc pl-6 text-gray-200 font-medium tracking-wide leading-relaxed">
                        <li>M.Sc. in Information Technology – Universität Stuttgart (2022–2025)</li>
                        <li>B.Sc. in Electrical Engineering – Chung Yuan Christian University (2017–2021)</li>
                    </ul>
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-4xl font-semibold mb-2">💼 Work Experience</h3>
                    <ul className="text-xl list-disc pl-6 text-gray-200 font-medium tracking-wide leading-relaxed">
                        <li>Research Assistant – IPVS, Universität Stuttgart (2023–2025)</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-20 text-gray-200 text-lg pt-6"
                >
                    {/* Specializations */}
                    <div className="flex flex-col items-start min-w-[300px]">
                        <h3 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-gray-600 w-full">
                            Specializations
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>AI & Machine Learning</li>
                            <li>LLM Fine-Tuning</li>
                            <li>Time Sensitive Network</li>
                        </ul>
                    </div>

                    {/* Programming Languages */}
                    <div className="flex flex-col items-start min-w-[300px]">
                        <h3 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-gray-600 w-full">
                            Programming Languages
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Shell Script</li>
                            <li>Rust</li>
                            <li>Solidity</li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col items-start min-w-[300px]">
                        <h3 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-gray-600 w-full">
                            Tools
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>PyTorch</li>
                            <li>Git</li>
                            <li>OpenCL</li>
                        </ul>
                    </div>
                </motion.div>

                <a
                    href="/Resume_Lun-Yu_Yuan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 hover:opacity-80 transition duration-300"
                >
                    <img
                        src="/resume-preview.png"
                        alt="Resume Preview"
                        className="rounded-xl shadow-lg border border-gray-700 mx-auto w-full max-w-[400px]"
                    />
                    <p className="mt-2 text-center text-sm text-gray-400">See my full resume 📄</p>
                </a>

            </div>
        </section>
    )
}
