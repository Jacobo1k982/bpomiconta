import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaHandHoldingUsd
} from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceHorizontalDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-cyan-300 drop-shadow-sm" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-cyan-300 drop-shadow-sm" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-cyan-300 drop-shadow-sm" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-cyan-300 drop-shadow-sm" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-cyan-300 drop-shadow-sm" /> },
        { text: "ROI", icon: <FaPercent className="text-cyan-300 drop-shadow-sm" /> },
        { text: "Global", icon: <FaGlobe className="text-cyan-300 drop-shadow-sm" /> }
    ];

    return (
        <div className="relative h-20 md:h-24 w-full overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50">
            {/* Efecto de brillo moderno */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.6), transparent)'
                }}
            />

            {/* Degradado de fondo animado */}
            <motion.div
                className="absolute top-0 left-0 w-[200%] h-full"
                style={{
                    background: 'linear-gradient(90deg, rgba(6, 78, 130, 0.3), rgba(12, 117, 194, 0.5), rgba(6, 78, 130, 0.3))'
                }}
                initial={{ x: '0%' }}
                animate={{ x: '-50%' }}
                transition={{
                    duration: 30,
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
                                        className="flex items-center gap-3 text-slate-100 font-semibold text-sm md:text-base whitespace-nowrap backdrop-blur-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }}
                                    >
                                        <span className="tracking-wide">{term.text}</span>
                                        <div className="text-2xl p-1 rounded-full bg-slate-800/50">
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