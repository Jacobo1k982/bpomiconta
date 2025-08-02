// src/components/FinanceHorizontalDivider.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe,
    FaMoneyBillWave,
    FaChartLine,
    FaPiggyBank,
    FaHandHoldingUsd,
} from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceHorizontalDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-teal-400" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-emerald-400" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-cyan-400" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-teal-300" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-emerald-300" /> },
        { text: "ROI", icon: <FaPercent className="text-cyan-300" /> },
        { text: "Global", icon: <FaGlobe className="text-teal-400" /> },
    ];

    return (
        <div className="relative h-24 md:h-28 w-full overflow-hidden">
            {/* === FONDO TRANSPARENTE PARA CONTINUIDAD VISUAL === */}
            {/* No hay fondo aquí, solo transparencia para que el gradiente del Hero siga visible */}

            {/* Textura sutil como fondo (igual que en Hero) */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Brillo lateral animado - sutil y elegante */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.4), transparent)',
                }}
            />

            {/* Carrusel animado de términos */}
            <motion.div
                className="absolute top-0 left-0 w-[300%] h-full"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{
                    duration: 60,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="flex gap-12 items-center px-8">
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                {financialTerms.map((term, idx) => (
                                    <motion.div
                                        key={`${i}-${idx}`}
                                        className="flex items-center gap-3 text-gray-300 font-medium text-sm md:text-base whitespace-nowrap backdrop-blur-sm px-4 py-2.5 rounded-xl bg-slate-800/20 border border-slate-700/40 hover:bg-slate-700/30 transition-all duration-300"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.15)',
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 15,
                                        }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        <span className="tracking-wide">{term.text}</span>
                                        <div className="text-xl p-1.5 rounded-full bg-black/20 border border-slate-600/40 text-teal-300 group-hover:text-teal-200 transition-colors">
                                            {term.icon}
                                        </div>
                                    </motion.div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Partículas flotantes sutiles y lentas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            opacity: 0.05,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            x: [0, 5, 0],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: Math.random() * 30 + 40,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Glows decorativos en esquinas (coherentes con el Hero) */}
            <div className="absolute top-4 left-1/4 w-32 h-32 bg-teal-500/3 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-1/4 w-36 h-36 bg-emerald-500/3 rounded-full blur-2xl"></div>
        </div>
    );
};

export default FinanceHorizontalDivider;