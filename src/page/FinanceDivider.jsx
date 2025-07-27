// src/components/FinanceHorizontalDivider.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaHandHoldingUsd
} from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceHorizontalDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-teal-300 drop-shadow-sm" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-teal-300 drop-shadow-sm" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-teal-300 drop-shadow-sm" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-teal-300 drop-shadow-sm" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-teal-300 drop-shadow-sm" /> },
        { text: "ROI", icon: <FaPercent className="text-teal-300 drop-shadow-sm" /> },
        { text: "Global", icon: <FaGlobe className="text-teal-300 drop-shadow-sm" /> }
    ];

    return (
        <div className="relative h-20 md:h-24 w-full overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50">
            {/* Efecto de brillo moderno con colores coherentes */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12, // Más lento
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.6), transparent)' // teal-500
                }}
            />

            {/* Degradado de fondo animado con colores coherentes */}
            <motion.div
                className="absolute top-0 left-0 w-[200%] h-full"
                style={{
                    background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.5), rgba(20, 184, 166, 0.3))' // teal-500, emerald-500
                }}
                initial={{ x: '0%' }}
                animate={{ x: '-50%' }}
                transition={{
                    duration: 40, // Más lento
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="flex gap-16 items-center px-8">
                        {[...Array(3)].map((_, i) => (
                            <React.Fragment key={i}>
                                {financialTerms.map((term, idx) => (
                                    <motion.div
                                        key={`${i}-${idx}`}
                                        className="flex items-center gap-3 text-gray-200 font-semibold text-sm md:text-base whitespace-nowrap backdrop-blur-sm px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                            rotateX: 5,
                                            rotateY: 5
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <span className="tracking-wide">{term.text}</span>
                                        <div className="text-2xl p-1 rounded-full bg-slate-700/50 border border-slate-600/50">
                                            {term.icon}
                                        </div>
                                    </motion.div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Overlay sutil para profundidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 pointer-events-none"></div>
        </div>
    );
};

export default FinanceHorizontalDivider;