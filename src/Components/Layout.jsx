// src/components/Layout.tsx
import React from 'react';
import { motion } from 'framer-motion';
import FooterFinanzas from './Footer';
import NavbarFinanzas from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col text-white font-sans relative overflow-hidden">
            {/* === FONDO UNIFICADO CON EL HERO === */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

            {/* Textura sutil de fondo (igual que en Hero) */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glows decorativos en esquinas (coherentes con el diseño global) */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-emerald-500/3 rounded-full blur-4xl"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-500/2 rounded-full blur-3xl"></div>

            {/* Brillo animado diagonal (efecto de luz suave que cruza lentamente) */}
            <motion.div
                className="absolute inset-0 opacity-8 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 18,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.1), transparent)',
                    transform: 'skewX(-15deg)',
                }}
            />

            {/* Segundo brillo cruzado (más lento y tenue) */}
            <motion.div
                className="absolute inset-0 opacity-5 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 24,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: 6,
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.08), rgba(20, 184, 166, 0.08), transparent)',
                    transform: 'skewX(15deg)',
                }}
            />

            {/* Partículas flotantes muy sutiles y lentas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
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

            {/* === COMPONENTES PRINCIPALES === */}
            <NavbarFinanzas />

            <motion.main
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: 'easeOut',
                }}
                className="flex-grow relative z-10"
            >
                {children}
            </motion.main>

            <FooterFinanzas />

            {/* Borde luminoso sutil en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"></div>
        </div>
    );
};

export default Layout;