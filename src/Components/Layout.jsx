import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans relative overflow-hidden">
            {/* Efecto de fondo mejorado con múltiples capas */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradientes suaves de fondo */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

                {/* Elementos decorativos de fondo */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>

                {/* Patrón geométrico sutil */}
                <svg className="absolute inset-0 w-full h-full opacity-3" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#geomGradient)"
                    />
                    <defs>
                        <linearGradient id="geomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="rgb(124, 58, 237)" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Efecto de partículas decorativas mejoradas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-teal-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            opacity: 0
                        }}
                        animate={{
                            y: [0, (Math.random() * 200 - 100)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0, 0.3, 0],
                            scale: [1, Math.random() * 2 + 1, 1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Efecto de brillo animado mejorado */}
            <motion.div
                className="absolute inset-0 opacity-5 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.15), rgba(59, 130, 246, 0.15), transparent)',
                    transform: 'skewX(-15deg)'
                }}
            />

            {/* Efecto de brillo secundario */}
            <motion.div
                className="absolute inset-0 opacity-3 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 2
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.1), rgba(167, 139, 250, 0.1), transparent)',
                    transform: 'skewX(15deg)'
                }}
            />

            <Navbar />

            <motion.main
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="flex-grow relative z-10"
            >
                {children}
            </motion.main>

            <Footer />

            {/* Efecto de borde luminoso mejorado */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"></div>

            {/* Efecto de esquina luminosa */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-tl-full"></div>
        </div>
    );
};

export default Layout;