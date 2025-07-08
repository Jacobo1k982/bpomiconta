import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaHandHoldingUsd } from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceXDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-blue-300" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-blue-300" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-blue-300" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-blue-300" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-blue-300" /> },
        { text: "ROI", icon: <FaPercent className="text-blue-300" /> },
        { text: "Global", icon: <FaGlobe className="text-blue-300" /> }
    ];

    const Banda = ({ rotate, gradient, delay = 0, reverse = false }) => (
        <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2"
            style={{
                width: '200vw',
                height: '4rem',
                transform: `rotate(${rotate}deg)`,
                background: gradient,
                zIndex: 1,
            }}
            initial={{ x: reverse ? '100%' : '-100%' }}
            animate={{ x: reverse ? '-100%' : '100%' }}
            transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                delay: delay
            }}
        >
            <div className={`flex gap-8 h-full items-center px-4 ${reverse ? 'flex-row-reverse' : ''}`}>
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        {financialTerms.map((term, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <span className="text-blue-100">{term.text}</span>
                                <span className="text-lg">{term.icon}</span>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    );

    return (
        <div className="relative h-20 md:h-24 overflow-hidden w-full bg-gradient-to-r from-blue-900 to-indigo-900">
            {/* Efecto de brillo animado */}
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
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                }}
            />

            {/* Bandas diagonales */}
            <Banda
                rotate={5}
                gradient="linear-gradient(90deg, rgba(8,47,73,0.8) 0%, rgba(37,99,235,0.6) 50%, rgba(8,47,73,0.8) 100%)"
                delay={0}
            />
            <Banda
                rotate={-5}
                gradient="linear-gradient(90deg, rgba(8,47,73,0.8) 0%, rgba(29,78,216,0.6) 50%, rgba(8,47,73,0.8) 100%)"
                delay={10}
                reverse
            />

            {/* Línea central destacada */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-10"></div>

        </div>
    );
};

export default FinanceXDivider;