import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiClock, FiTag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import noticiasData from '../data/NoticiasDestacadas/noticiasDestacadas.json';

const NoticiaDestacada = () => {
    const noticiasDestacadas = noticiasData.noticias.filter(noticia => noticia.destacada);

    // Encontrar la noticia principal destacada
    const noticiaPrincipal = noticiasDestacadas[0] || {};

    return (
        <motion.section
            className="relative bg-gradient-to-br from-gray-900 via-blue-900/90 to-indigo-900 overflow-hidden rounded-3xl border border-white/10 shadow-2xl mx-4 sm:mx-6 lg:mx-8 my-16 lg:my-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

                {/* Geometric pattern overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#gradient1)"
                    />
                    <path
                        d="M0,0 L100,0 L50,50 L0,100 Z"
                        fill="url(#gradient2)"
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                            <stop offset="100%" stopColor="rgb(99, 102, 241)" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
                            <stop offset="100%" stopColor="rgb(124, 58, 237)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
                    {/* Contenido textual principal */}
                    <motion.div
                        className="order-2 lg:order-1 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-2.5 animate-pulse"></span>
                            <span className="text-sm font-semibold text-blue-300 tracking-wide">NOTICIA DESTACADA</span>
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-blue-100">
                                {noticiaPrincipal.titulo?.split(' ').slice(0, -3).join(' ') || '¿Cómo pasar de ATV a'}
                            </span>
                            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                {noticiaPrincipal.titulo?.split(' ').slice(-3).join(' ') || 'Tribu-CR'}
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                            {noticiaPrincipal.descripcion || 'Le mostramos cómo Tribu-CR puede ayudarte a optimizar tu contabilidad y cumplir con las nuevas normativas fiscales. Descubre los beneficios de migrar de ATV a Tribu-CR.'}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
                            <div className="flex items-center text-blue-200">
                                <FiCalendar className="mr-2.5 text-blue-300" size={18} />
                                <span className="font-semibold">{noticiaPrincipal.fecha || '15 Julio, 2025'}</span>
                            </div>
                            <div className="flex items-center text-blue-200">
                                <FiClock className="mr-2.5 text-blue-300" size={18} />
                                <span className="font-semibold">Lectura 5 min</span>
                            </div>
                            <div className="flex items-center">
                                <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600/30 to-teal-600/30 text-blue-300 rounded-full text-xs font-bold flex items-center border border-blue-500/30">
                                    <FiTag className="mr-1.5" size={12} />
                                    TRANSFORMACIÓN DIGITAL
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <Link to={noticiaPrincipal.link || "/guias/migracion-tribu-cr"}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Leer Análisis Completo
                                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                                    </span>
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />
                                </motion.button>
                            </Link>

                            <Link to="/noticias">
                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        backgroundColor: "rgba(99, 102, 241, 0.15)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="border-2 border-blue-300/50 text-white px-6 py-3.5 rounded-xl font-bold text-base hover:border-blue-300 hover:bg-blue-900/20 transition-all duration-300 flex items-center"
                                >
                                    Ver Todas
                                    <FiArrowRight className="ml-2" size={18} />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Tarjeta de resumen (derecha) */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-2xl rounded-2xl p-0.5 border border-white/10 order-1 lg:order-2 shadow-xl"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/20 rounded-2xl p-5 sm:p-6 h-full">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-lg font-bold text-white">Artículos Relacionados</h3>
                                <div className="flex items-center bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 px-2.5 py-1 rounded-full border border-green-500/30">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                    <span className="text-xs font-bold">ACTUALIZADO</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {noticiasDestacadas.slice(0, 3).map((noticia, index) => (
                                    <motion.li
                                        key={noticia.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -3 }}
                                    >
                                        <Link to={`/noticias-destacadas/${noticia.id}`}>
                                            <div className="group flex items-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-blue-400/30 transition-all duration-300 cursor-pointer">
                                                <div className="flex-shrink-0 mt-1 mr-4">
                                                    <div className={`w-3 h-3 rounded-full ${noticia.destacada ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`}></div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-base font-bold text-blue-100 group-hover:text-white transition-colors line-clamp-2 mb-2">
                                                        {noticia.titulo}
                                                    </h4>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-blue-400/80 group-hover:text-blue-300 transition-colors flex items-center">
                                                            Leer más
                                                            <FiArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                        </span>
                                                        <span className="text-xs text-blue-300/60">
                                                            {noticia.fecha?.split(',')[0] || 'Jul 15'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mini gráfico de impacto */}
                            <motion.div
                                className="mt-6 pt-5 border-t border-white/10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-sm font-bold text-blue-300">Impacto Fiscal Estimado</h4>
                                    <span className="text-sm font-bold text-green-400">+78%</span>
                                </div>
                                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "78%" }}
                                        transition={{
                                            duration: 1.8,
                                            delay: 1,
                                            type: "spring",
                                            stiffness: 50
                                        }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-blue-300/80 mt-2">
                                    <span>0%</span>
                                    <span>Hasta 78% en casos óptimos</span>
                                    <span>100%</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-10 left-10 w-4 h-4 rounded-full bg-blue-400/20"
                animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-indigo-500/20"
                animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </motion.section>
    );
};

export default NoticiaDestacada;