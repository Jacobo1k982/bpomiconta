// src/components/NoticiaDestacada.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight, FiClock, FiTag, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import noticiasData from '../data/NoticiasDestacadas/noticiasDestacadas.json';

const NoticiaDestacada = () => {
    const noticiasDestacadas = noticiasData.noticias.filter(noticia => noticia.destacada);
    const noticiaPrincipal = noticiasDestacadas[0] || {};

    return (
        <motion.section
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
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

            {/* Partículas flotantes sutiles (coherentes con Hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
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

            {/* Glows decorativos (mismo estilo que Hero) */}
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-emerald-500/3 rounded-full blur-4xl"></div>

            {/* Contenido principal */}
            <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-20 text-justify">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
                    {/* Contenido textual */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-600/10 to-emerald-600/10 backdrop-blur-sm border border-teal-500/30"
                            whileHover={{ scale: 1.03 }}
                        >
                            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2.5 animate-pulse"></span>
                            <span className="text-sm font-medium text-teal-300 tracking-wide uppercase">
                                Noticia Destacada
                            </span>
                        </motion.div>

                        {/* Título */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
                                {noticiaPrincipal.titulo?.split(' ').slice(0, -3).join(' ') || '¿Cómo pasar de ATV a'}
                            </span>
                            <span className="block mt-1 font-semibold text-white">
                                {noticiaPrincipal.titulo?.split(' ').slice(-3).join(' ') || 'Tribu-CR'}
                            </span>
                        </h2>

                        {/* Descripción */}
                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                            {noticiaPrincipal.descripcion || 'Descubre cómo Tribu-CR puede transformar tu gestión contable con precisión, cumplimiento y tecnología de vanguardia.'}
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="flex items-center text-gray-400">
                                <FiCalendar className="mr-2.5 text-teal-400" size={16} />
                                <span className="text-sm">{noticiaPrincipal.fecha || '15 Julio, 2025'}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <FiClock className="mr-2.5 text-emerald-400" size={16} />
                                <span className="text-sm">Lectura 5 min</span>
                            </div>
                            <div className="flex items-center">
                                <span className="px-3 py-1.5 bg-gradient-to-r from-teal-600/15 to-emerald-600/15 text-teal-300 rounded-full text-xs font-medium border border-teal-500/30">
                                    <FiTag className="inline mr-1.5" size={10} />
                                    Transformación Digital
                                </span>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Link to={noticiaPrincipal.link || "/noticias"}>
                                <motion.button
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-teal-500/20 transition-all duration-300 flex items-center"
                                >
                                    <span>Leer Análisis Completo en noticias</span>
                                    <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Sección de video y artículos */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {/* Video */}
                        <motion.div
                            className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-md rounded-2xl border border-slate-700/40 shadow-lg overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-5">
                                <div className="flex items-center mb-4">
                                    <FiPlay className="text-teal-400 mr-2" size={18} />
                                    <h3 className="text-base font-semibold text-white">Video Explicativo</h3>
                                </div>
                                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/NoticiasDestacadas/videoplayback.mp4" type="video/mp4" />
                                        Tu navegador no soporta el video.
                                    </video>
                                </div>
                                <Link to="/playlist">
                                    <motion.button
                                        whileHover={{ scale: 1.02, backgroundColor: "rgba(20, 184, 166, 0.08)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="mt-4 w-full py-2.5 text-center text-teal-300 font-medium rounded-lg border border-teal-500/30 hover:border-teal-400 transition-all duration-300 text-sm"
                                    >
                                        Ver Playlist Completa
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Artículos relacionados */}
                        <motion.div
                            className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-md rounded-2xl border border-slate-700/40 shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-5">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-base font-semibold text-white">Artículos Relacionados</h3>
                                    <div className="flex items-center bg-gradient-to-r from-green-500/15 to-teal-500/15 text-green-300 px-2.5 py-1 rounded-full border border-green-500/30 text-xs font-medium">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                        Actualizado
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {noticiasDestacadas.slice(0, 3).map((noticia, index) => (
                                        <motion.li
                                            key={noticia.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.02, y: -1 }}
                                            className="group"
                                        >
                                            <Link to={`/noticias-destacadas/${noticia.id}`}>
                                                <div className="flex items-start p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-teal-400/30 transition-all duration-300 cursor-pointer">
                                                    <div className="flex-shrink-0 mt-1 mr-3">
                                                        <div className={`w-2 h-2 rounded-full ${noticia.destacada ? 'bg-teal-400' : 'bg-gray-400'}`}></div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors line-clamp-2 mb-1">
                                                            {noticia.titulo}
                                                        </h4>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-xs text-teal-300 flex items-center transition-transform group-hover:translate-x-1">
                                                                Leer más
                                                                <FiArrowRight className="ml-1 w-3 h-3" />
                                                            </span>
                                                            <span className="text-xs text-gray-500">
                                                                {noticia.fecha?.split(',')[0] || '15 Jul'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mini gráfico */}
                                <motion.div className="mt-6 pt-5 border-t border-slate-700/30">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-xs font-medium text-teal-300">Impacto Fiscal Estimado</h4>
                                        <span className="text-xs font-medium text-green-400">+78%</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-700/40 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "78%" }}
                                            transition={{ duration: 1.8, delay: 1.1, type: "spring", stiffness: 50 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 mt-1.5">
                                        <span>0%</span>
                                        <span>78%</span>
                                        <span>100%</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default NoticiaDestacada;