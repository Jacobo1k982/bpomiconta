import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaEnvelope } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl mx-auto"
            >
                <div className="inline-flex items-center justify-center mb-6 p-4 rounded-full bg-red-500/20 border border-red-400/30">
                    <FaExclamationTriangle className="text-red-400 text-4xl" />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                        404
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Página no encontrada</h2>

                <p className="text-lg text-blue-200 mb-10">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    <br />
                    Por favor, verifica la URL o navega usando los siguientes enlaces:
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <FaHome />
                            Volver al Inicio
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contacto"
                            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg transition-colors"
                        >
                            <FaEnvelope />
                            Contactar Soporte
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10">
                    <p className="text-blue-300">
                        ¿Buscas algo específico? Prueba con nuestro{' '}
                        <Link to="/busqueda" className="text-blue-400 hover:underline">buscador</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;