// src/components/Noticias.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowRight, FaFilePdf, FaVideo, FaRegClock } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Noticias = () => {
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
            {/* Fondo con textura sutil de cubos */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            {/* Nueva textura sutil de puntos alineados, acorde con finanzas y contabilidad */}
            <div className="absolute inset-0 opacity-2">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dots.png')]"></div>
            </div>
            {/* Brillo animado sutil en el fondo - Mejorado y coherente */}
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
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent)'
                }}
            />
            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>
                {/* Patrón geométrico sutil mejorado con degradado coherente */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#newsGradient)" />
                    <defs>
                        <linearGradient id="newsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 25 + 5 + 'px',
                            height: Math.random() * 25 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 300 - 150) + 'px'],
                            x: [null, (Math.random() * 200 - 100) + 'px'],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.3, 1]
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

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado mejorado con estilo moderno y colores coherentes */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        Actualidad Financiera
                    </motion.h2>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6">
                        Noticias Recientes
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Mantente informado sobre las últimas tendencias, cambios normativos y consejos financieros para tu negocio.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Grid de noticias */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {noticiasData.map((noticia, index) => (
                        <motion.div
                            key={noticia.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            custom={index}
                            className="group"
                        >
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    rotateX: 5,
                                    rotateY: 5,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(20, 184, 166, 0.2)"
                                }}
                                className="h-full bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col transform"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Imagen con overlay mejorado */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={noticia.imagen}
                                        alt={noticia.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay con degradado más suave y oscuro en la parte inferior */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        {/* Etiqueta de fecha con estilo mejorado */}
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-600/90 to-emerald-600/90 text-white border border-teal-500/30 shadow-md">
                                            <FaRegClock className="mr-1.5 text-xs" />
                                            {noticia.fecha}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors leading-tight">
                                            {noticia.titulo}
                                        </h3>
                                        <p className="text-gray-300 mb-6 text-base leading-relaxed">
                                            {noticia.resumen}
                                        </p>
                                    </div>

                                    {/* Botón según tipo con efecto shine mejorado */}
                                    <div className="relative overflow-hidden rounded-lg group/btn">
                                        {noticia.pdf ? (
                                            <motion.a
                                                whileHover={{ x: 8 }}
                                                href={noticia.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2.5 text-teal-300 hover:text-white font-semibold transition-colors py-2 px-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 relative z-10"
                                            >
                                                <FaFilePdf className="flex-shrink-0 text-lg" />
                                                Ver documento
                                                <FiExternalLink className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            </motion.a>
                                        ) : noticia.link ? (
                                            <motion.div whileHover={{ x: 8 }}>
                                                <Link
                                                    to={noticia.link}
                                                    className="inline-flex items-center gap-2.5 text-teal-300 hover:text-white font-semibold transition-colors py-2 px-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 relative z-10"
                                                >
                                                    <FaArrowRight className="flex-shrink-0 text-lg" />
                                                    Leer más
                                                    <FiExternalLink className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                                </Link>
                                            </motion.div>
                                        ) : noticia.video ? (
                                            <motion.a
                                                whileHover={{ x: 8 }}
                                                href={noticia.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2.5 text-teal-300 hover:text-white font-semibold transition-colors py-2 px-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 relative z-10"
                                            >
                                                <FaVideo className="flex-shrink-0 text-lg" />
                                                Ver video
                                                <FiExternalLink className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            </motion.a>
                                        ) : null}
                                        {/* Efecto Shine en el botón */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out opacity-0 group-hover/btn:opacity-100 rounded-lg"></span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Animaciones CSS personalizadas */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.2; transform: scale(1.05); }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% { opacity: 0.1; transform: scale(1.05); }
                    50% { opacity: 0.2; transform: scale(1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-pulse-slow-reverse {
                    animation: pulse-slow-reverse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    );
};

export default Noticias;