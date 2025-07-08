import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans relative overflow-hidden">
            {/* Efecto de partículas decorativas */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            opacity: 0
                        }}
                        animate={{
                            y: [null, (Math.random() * 200 - 100) + 'px'],
                            x: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0, 0.8, 0]
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

            {/* Efecto de brillo animado */}
            <motion.div
                className="absolute inset-0 opacity-5 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transform: 'rotate(15deg)'
                }}
            />

            <Navbar />

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-grow relative z-10"
            >
                {children}
            </motion.main>

            <Footer />

            {/* Efecto de borde luminoso inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        </div>
    );
};

export default Layout;