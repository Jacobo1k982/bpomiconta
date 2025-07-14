import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaHandHoldingUsd
} from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceXDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-sky-300 drop-shadow-sm" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-sky-300 drop-shadow-sm" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-sky-300 drop-shadow-sm" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-sky-300 drop-shadow-sm" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-sky-300 drop-shadow-sm" /> },
        { text: "ROI", icon: <FaPercent className="text-sky-300 drop-shadow-sm" /> },
        { text: "Global", icon: <FaGlobe className="text-sky-300 drop-shadow-sm" /> }
    ];

    const Banda = ({ rotate, gradient, delay = 0, direction = 'left' }) => (
        <motion.div
            className="absolute top-0 left-0 w-full h-full origin-center pointer-events-none"
            style={{ transform: `rotate(${rotate}deg)`, zIndex: 1 }}
        >
            <motion.div
                className="absolute top-1/2 w-[200%] h-20"
                style={{ background: gradient }}
                initial={{ x: direction === 'left' ? '-100%' : '0%' }}
                animate={{ x: direction === 'left' ? '0%' : '-100%' }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                    delay
                }}
            >
                <div className={`flex gap-10 h-full items-center px-6 ${direction === 'right' ? 'flex-row-reverse' : ''}`}>
                    {[...Array(6)].map((_, i) => (
                        <React.Fragment key={i}>
                            {financialTerms.map((term, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sky-100 font-medium text-sm md:text-base">
                                    <span>{term.text}</span>
                                    <span className="text-xl">{term.icon}</span>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="relative h-32 md:h-40 w-full overflow-hidden bg-[#233789] backdrop-blur-sm rounded-md shadow-md">
            {/* Brillo animado sutil */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                }}
            />

            {/* Bandas cruzadas */}
            <Banda
                rotate={6}
                gradient="linear-gradient(100deg, rgba(56,189,248,0.15), rgba(96,165,250,0.4), rgba(56,189,248,0.15))"
                delay={0}
                direction="left"
            />
            <Banda
                rotate={-6}
                gradient="linear-gradient(100deg, rgba(59,130,246,0.15), rgba(147,197,253,0.3), rgba(59,130,246,0.15))"
                delay={5}
                direction="right"
            />

            {/* Punto central decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-lg z-20"></div>
        </div>
    );
};

export default FinanceXDivider;
