import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaEnvelope, FaSearch } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Fondo con partículas animadas mejoradas */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 20 + 10 + 'px',
                            height: Math.random() * 20 + 10 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 200 - 100) + 'px'],
                            x: [null, (Math.random() * 100 - 50) + 'px'],
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

            {/* Efecto de brillo sutil */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)'
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto relative z-10"
            >
                {/* Icono principal con efecto de pulso */}
                <motion.div
                    className="inline-flex items-center justify-center mb-8 p-6 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 backdrop-blur-sm"
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            "0 0 20px rgba(239, 68, 68, 0.2)",
                            "0 0 40px rgba(239, 68, 68, 0.4)",
                            "0 0 20px rgba(239, 68, 68, 0.2)"
                        ]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <FaExclamationTriangle className="text-red-400 text-5xl drop-shadow-lg" />
                </motion.div>

                {/* Título 404 con gradiente mejorado */}
                <h1 className="text-6xl md:text-8xl font-black mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                        404
                    </span>
                </h1>

                {/* Subtítulo con mejor tipografía */}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                    Página no encontrada
                </h2>

                {/* Mensaje descriptivo con mejor estilo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto px-4"
                >
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    <br className="hidden sm:block" />
                    <span className="text-blue-200/80">Verifica la URL o navega usando los siguientes enlaces:</span>
                </motion.p>

                {/* Botones con estilo mejorado */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-xl"
                    >
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
                        >
                            <FaHome className="text-lg" />
                            Volver al Inicio
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-xl"
                    >
                        <Link
                            to="/contacto"
                            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
                        >
                            <FaEnvelope className="text-lg" />
                            Contactar Soporte
                        </Link>
                    </motion.div>
                </div>

                {/* Sección de búsqueda con estilo mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-16 pt-8 border-t border-white/10 backdrop-blur-sm bg-white/5 rounded-2xl p-6 mx-4"
                >
                    <p className="text-blue-200 mb-4">
                        ¿Buscas algo específico?
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Link
                            to="/busqueda"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 hover:from-cyan-600/40 hover:to-blue-600/40 border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
                        >
                            <FaSearch />
                            Usar nuestro buscador
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;