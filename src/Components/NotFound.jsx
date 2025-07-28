// src/components/NotFound.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950/30 to-purple-950/30 text-white overflow-hidden py-12 px-4 sm:px-6 pt-28">
            {/* Brillo animado sutil en el fondo - Mejorado */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.15), transparent)'
                }}
            />
            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN y SIN TEXTURA DE FONDO */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-indigo-400/15 to-purple-400/15"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 20 + 5 + 'px',
                            height: Math.random() * 20 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 200 - 100) + 'px'],
                            x: [null, (Math.random() * 150 - 75) + 'px'],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 25 + 15, // Duraciones más lentas y variadas: 15-40s
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>
            {/* Elementos decorativos flotantes adicionales - Más elegantes y sutiles */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-40 h-40 rounded-[3rem] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 filter blur-3xl animate-float-slow"
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-52 h-28 rounded-[5rem] bg-gradient-to-r from-purple-600/5 to-indigo-600/5 filter blur-3xl animate-float-slow-reverse"
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400/5 to-purple-400/5 filter blur-2xl animate-float-slow"
                style={{ rotate: '30deg' }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/3 w-24 h-48 rounded-[4rem] bg-gradient-to-r from-purple-500/5 to-indigo-500/5 filter blur-2xl animate-float-slow-reverse"
                style={{ rotate: '-15deg' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-4xl mx-auto relative z-10"
            >
                {/* Icono principal con efecto de pulso mejorado y más sutil */}
                <motion.div
                    className="inline-flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 mb-8 backdrop-blur-md border border-indigo-500/20 shadow-xl"
                    animate={{
                        scale: [1, 1.03, 1],
                        boxShadow: [
                            "0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)",
                            "0 0 30px rgba(139, 92, 246, 0.3), 0 0 50px rgba(139, 92, 246, 0.15)",
                            "0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-2xl shadow-inner">
                        <FaExclamationTriangle className="text-white text-5xl drop-shadow-md" />
                    </div>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200">
                    404
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-indigo-100">
                    Página No Encontrada
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-indigo-100/90 mb-14 leading-relaxed max-w-2xl mx-auto px-4 font-light"
                >
                    Oops! Parece que te has adentrado en territorio desconocido.<br className="hidden sm:block" />
                    <span className="text-purple-200 font-medium">No te preocupes, te ayudaremos a regresar</span>
                </motion.p>

                {/* Botones con estilo mejorado y efecto shine */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    {/* Botón Ir al Inicio */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 12px 25px -5px rgba(99, 102, 241, 0.3), 0 8px 15px -6px rgba(99, 102, 241, 0.2)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden rounded-2xl group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 backdrop-blur-md border border-indigo-500/30 text-base z-10 relative"
                        >
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
                                <FaHome className="mr-2" />
                            </motion.div>
                            Ir al Inicio
                        </Link>
                        {/* Efecto Shine */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.div>

                    {/* Botón Contacto */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 12px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 15px -6px rgba(255, 255, 255, 0.05)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden rounded-2xl group"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Link
                            to="/contacto"
                            className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold backdrop-blur-md transition-all duration-300 text-base z-10 relative"
                        >
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
                                <FaEnvelope className="mr-2" />
                            </motion.div>
                            Contacto
                        </Link>
                        {/* Efecto Shine */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.div>
                </div>

                {/* Sección de búsqueda con estilo mejorado y efecto hover */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ y: -5 }}
                    className="mt-20 pt-8 border-t border-white/10 backdrop-blur-lg bg-white/5 rounded-3xl p-6 mx-auto max-w-md shadow-lg relative overflow-hidden"
                >
                    <p className="text-indigo-200 mb-4 text-lg font-semibold">
                        ¿Quizás estabas buscando algo?
                    </p>
                    <form className="flex rounded-xl overflow-hidden shadow-md backdrop-blur-sm border border-white/15">
                        <input
                            type="text"
                            placeholder="Buscar en el sitio..."
                            className="px-4 py-3 w-full bg-indigo-950/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 transition-all duration-300 font-medium flex items-center text-sm"
                        >
                            <FaSearch className="mr-1" />
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
            {/* Animaciones CSS personalizadas para flotar */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes float-slow-reverse {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(20px) translateX(-10px); }
                }
                .animate-float-slow {
                    animation: float-slow 15s ease-in-out infinite;
                }
                .animate-float-slow-reverse {
                    animation: float-slow-reverse 18s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;