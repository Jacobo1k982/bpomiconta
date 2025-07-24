import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaEnvelope, FaSearch } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
            {/* Fondo con partículas animadas mejoradas */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 25 + 5 + 'px',
                            height: Math.random() * 25 + 5 + 'px',
                            backgroundColor: i % 3 === 0
                                ? 'rgba(139, 92, 246, 0.3)'
                                : i % 3 === 1
                                    ? 'rgba(59, 130, 246, 0.3)'
                                    : 'rgba(168, 85, 247, 0.3)'
                        }}
                        animate={{
                            y: [null, (Math.random() * 300 - 150) + 'px'],
                            x: [null, (Math.random() * 200 - 100) + 'px'],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, Math.random() * 1.5 + 0.5, 1]
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            {/* Efecto de brillo sutil */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)'
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-4xl mx-auto relative z-10 mt-10"
            >
                {/* Icono principal con efecto de pulso */}
                <motion.div
                    className="inline-flex items-center justify-center mb-8 p-8 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-md shadow-2xl"
                    animate={{
                        scale: [1, 1.08, 1],
                        boxShadow: [
                            "0 0 30px rgba(139, 92, 246, 0.3)",
                            "0 0 60px rgba(139, 92, 246, 0.5)",
                            "0 0 30px rgba(139, 92, 246, 0.3)"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <FaExclamationTriangle className="text-purple-400 text-6xl drop-shadow-xl" />
                </motion.div>

                {/* Título 404 con gradiente mejorado */}
                <h1 className="text-7xl md:text-9xl font-black mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                        404
                    </span>
                </h1>

                {/* Subtítulo con mejor tipografía */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300"
                >
                    Página Extraviada
                </motion.h2>

                {/* Mensaje descriptivo con mejor estilo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-indigo-100 mb-14 leading-relaxed max-w-2xl mx-auto px-4 font-light"
                >
                    Oops! Parece que te has adentrado en territorio desconocido.
                    <br className="hidden sm:block" />
                    <span className="text-purple-200/90 font-medium">No te preocupes, te ayudaremos a regresar</span>
                </motion.p>

                {/* Botones con estilo mejorado */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 15px 30px -5px rgba(99, 102, 241, 0.4), 0 10px 15px -6px rgba(99, 102, 241, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-2xl"
                    >
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all duration-300 backdrop-blur-md border border-indigo-500/40 text-lg"
                        >
                            <FaHome className="text-xl" />
                            Ir al Inicio
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 15px 30px -5px rgba(255, 255, 255, 0.15), 0 10px 15px -6px rgba(255, 255, 255, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-2xl"
                    >
                        <Link
                            to="/contacto"
                            className="flex items-center justify-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-10 py-5 rounded-2xl font-bold backdrop-blur-md transition-all duration-300 text-lg"
                        >
                            <FaEnvelope className="text-xl" />
                            Contacto
                        </Link>
                    </motion.div>
                </div>

                {/* Sección de búsqueda con estilo mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 pt-10 border-t border-white/15 backdrop-blur-md bg-white/10 rounded-3xl p-8 mx-auto max-w-2xl shadow-xl"
                >
                    <p className="text-indigo-200 mb-6 text-xl font-medium">
                        ¿Buscas algo específico?
                    </p>
                    <motion.div
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block rounded-2xl overflow-hidden"
                    >
                        <Link
                            to="/busqueda"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600/40 to-indigo-600/40 hover:from-cyan-600/50 hover:to-indigo-600/50 border border-cyan-400/40 text-cyan-200 px-8 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-md text-lg shadow-lg"
                        >
                            <FaSearch className="text-xl" />
                            Buscar en el sitio
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Elemento decorativo flotante */}
                <motion.div
                    className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl -z-10"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-52 h-52 rounded-full bg-indigo-500/10 blur-3xl -z-10"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.div>
        </div>
    );
};

export default NotFound;