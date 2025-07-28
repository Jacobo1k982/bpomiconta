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
        // Se eliminó bg-gradient-to-r y los colores de fondo, manteniendo solo backdrop-blur y border
        <div className="relative h-20 md:h-24 w-full overflow-hidden backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50">
            {/* Fondo con textura sutil de cubos - con opacidad muy baja o eliminada si se quiere completamente transparente */}
            {/* Si quieres textura sutil: */}
            {/* <div className="absolute inset-0 opacity-1">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div> */}
            {/* Si quieres completamente transparente sin textura, elimina este bloque */}

            {/* Efecto de brillo moderno con colores coherentes */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.6), transparent)'
                }}
            />

            {/* Degradado de fondo animado con colores coherentes */}
            <motion.div
                className="absolute top-0 left-0 w-[200%] h-full"
                style={{
                    background: 'linear-gradient(90deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.5), rgba(20, 184, 166, 0.3))'
                }}
                initial={{ x: '0%' }}
                animate={{ x: '-50%' }}
                transition={{
                    duration: 40,
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
                                            rotateY: 5,
                                            boxShadow: "0 10px 20px -5px rgba(20, 184, 166, 0.2), 0 5px 10px -5px rgba(20, 184, 166, 0.1)"
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

            {/* Overlay sutil para profundidad - ajustado para fondo transparente */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"></div>

            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 15 + 3 + 'px',
                            height: Math.random() * 15 + 3 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 100 - 50) + 'px'],
                            x: [null, (Math.random() * 80 - 40) + 'px'],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FinanceHorizontalDivider;