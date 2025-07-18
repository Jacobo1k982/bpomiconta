import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaMoneyBillWave, FaChartLine, FaPiggyBank, FaHandHoldingUsd
} from 'react-icons/fa';
import { FaColonSign, FaPercent } from 'react-icons/fa6';

const FinanceHorizontalDivider = () => {
    const financialTerms = [
        { text: "Inversión", icon: <FaChartLine className="text-sky-300 drop-shadow-sm" /> },
        { text: "Finanzas", icon: <FaMoneyBillWave className="text-sky-300 drop-shadow-sm" /> },
        { text: "Contabilidad", icon: <FaColonSign className="text-sky-300 drop-shadow-sm" /> },
        { text: "Ahorro", icon: <FaPiggyBank className="text-sky-300 drop-shadow-sm" /> },
        { text: "Crédito", icon: <FaHandHoldingUsd className="text-sky-300 drop-shadow-sm" /> },
        { text: "ROI", icon: <FaPercent className="text-sky-300 drop-shadow-sm" /> },
        { text: "Global", icon: <FaGlobe className="text-sky-300 drop-shadow-sm" /> }
    ];

    return (
        <div className="relative h-20 md:h-24 w-full overflow-hidden bg-[#233789] backdrop-blur-sm rounded-md shadow-md">
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

            {/* Franja horizontal única con texto centrado */}
            <motion.div
                className="absolute top-0 left-0 w-[200%] h-full"
                style={{
                    background: 'linear-gradient(90deg, rgba(56,189,248,0.15), rgba(96,165,250,0.4), rgba(56,189,248,0.15))'
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                <div className="flex h-full items-center justify-center">
                    <div className="flex gap-10 items-center px-6">
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                {financialTerms.map((term, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 text-sky-100 font-medium text-sm md:text-base whitespace-nowrap"
                                    >
                                        <span>{term.text}</span>
                                        <span className="text-xl">{term.icon}</span>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FinanceHorizontalDivider;