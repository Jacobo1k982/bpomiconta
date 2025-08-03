// src/components/NoticiaDetalle.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiTag, FiClock, FiCheckCircle, FiExternalLink, FiHeart, FiShare2 } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaFacebookF, FaQuoteLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import noticiasData from '../data/noticias.json';

const NoticiaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData.find(n => n.id === id);

    if (!noticia) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Noticia no encontrada</h2>
                    <Link to="/noticias" className="text-teal-400 hover:text-teal-300 underline">
                        Volver a noticias
                    </Link>
                </div>
            </div>
        );
    }

    // Componente para manejar diferentes tipos de contenido
    const renderContentBlock = (bloque, index) => {
        const baseDelay = index * 0.1 + 0.3;
        switch (bloque.tipo) {
            case 'subtitulo':
                return (
                    <motion.h2
                        key={index}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white mt-10 mb-6"
                    >
                        {bloque.texto}
                    </motion.h2>
                );
            case 'parrafo':
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-200 mb-6 leading-relaxed"
                    >
                        {bloque.texto}
                    </motion.p>
                );
            case 'lista':
                return (
                    <motion.ul
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true }}
                        className="list-disc list-inside text-lg text-slate-200 mb-6 space-y-2 ml-4"
                    >
                        {bloque.items.map((item, i) => (
                            <li key={i} className="pl-2">{item}</li>
                        ))}
                    </motion.ul>
                );
            case 'cita':
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true }}
                        className="border-l-4 border-teal-500 pl-6 py-4 my-8 bg-slate-800/30 backdrop-blur-sm rounded-r-xl"
                    >
                        <FaQuoteLeft className="text-teal-400 text-2xl mb-3" />
                        <p className="text-xl italic text-slate-100">{bloque.texto}</p>
                        {bloque.autor && <p className="text-teal-300 mt-3 font-medium">— {bloque.autor}</p>}
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-24">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
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
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#geomGradient1)" />
                    <defs>
                        <linearGradient id="geomGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* Partículas flotantes mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
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

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Botón volver con estilo mejorado y coherente */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Botón Volver a noticias con efecto shine mejorado */}
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 15px 25px -5px rgba(20, 184, 166, 0.3), 0 8px 10px -6px rgba(20, 184, 166, 0.3)" }} // Sombra coherente
                        whileTap={{ scale: 0.98 }}
                        className="inline-block relative overflow-hidden group rounded-xl" // Overflow hidden para el efecto shine y clase de redondeo
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Link
                            to="/noticias"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 z-10 relative"
                        >
                            <FiArrowLeft className="mr-1" />
                            Volver a noticias
                        </Link>
                        {/* Efecto Shine en el botón */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.div>
                </motion.div>

                {/* Metadatos con estilo mejorado y coherente */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center gap-4 mb-6 text-slate-400"
                >
                    <div className="flex items-center">
                        <FiCalendar className="mr-2 text-teal-400" />
                        <span>{noticia.fecha}</span>
                    </div>
                    <div className="flex items-center">
                        <FiClock className="mr-2 text-teal-400" />
                        <span>{noticia.tiempoLectura} min lectura</span>
                    </div>
                    {noticia.etiquetas && (
                        <div className="flex items-center">
                            <FiTag className="mr-2 text-teal-400" />
                            <span>{noticia.etiquetas.join(', ')}</span>
                        </div>
                    )}
                </motion.div>

                {/* Título principal con estilo mejorado y coherente */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
                >
                    {noticia.titulo}
                </motion.h1>

                {/* Imagen principal con estilo mejorado y coherente */}
                {noticia.imagen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative w-full h-64 md:h-96 overflow-hidden rounded-3xl shadow-2xl border border-slate-700/50 group mb-12"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Overlay con degradado más suave y oscuro en la parte superior */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>
                        <img
                            src={noticia.imagen}
                            alt={noticia.titulo}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </motion.div>
                )}

                {/* Contenido de la noticia */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {noticia.contenido.map((bloque, index) => renderContentBlock(bloque, index))}
                </motion.div>

                {/* PDF con estilo mejorado y coherente */}
                {noticia.pdf && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-12 pt-6 border-t border-slate-700/50"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <FiCheckCircle className="inline mr-2 text-teal-400" />
                                <span className="text-lg font-semibold text-white">Documento Adicional</span>
                                <p className="text-slate-400 mt-1">Descarga el PDF con información complementaria</p>
                            </div>
                            {/* Botón Descargar PDF con efecto shine mejorado */}
                            <motion.div
                                whileHover={{ scale: 1.03, boxShadow: "0 15px 25px -5px rgba(20, 184, 166, 0.3), 0 8px 10px -6px rgba(20, 184, 166, 0.3)" }} // Sombra coherente
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden group rounded-lg" // Overflow hidden para el efecto shine
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <a
                                    href={noticia.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all z-10 relative"
                                >
                                    <span>Descargar PDF</span>
                                    <FiExternalLink className="ml-1" />
                                </a>
                                {/* Efecto Shine en el botón */}
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* Video embebido con estilo mejorado y coherente */}
                {noticia.video && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <div className="flex items-center mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600/20 to-emerald-600/20 mr-4">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Video explicativo</h3>
                        </div>
                        <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border border-slate-700/50">
                            <iframe
                                src={noticia.video}
                                title="Video relacionado"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                )}

                {/* Sección de interacción final con estilo mejorado y coherente */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-slate-700/50"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">¿Te resultó útil esta información?</h3>
                            <p className="text-gray-400">Ayúdanos compartiendo este artículo con tu red</p>
                        </div>
                        <div className="flex gap-3">
                            {/* Botones de redes sociales con efecto hover mejorado */}
                            {[{ name: 'WhatsApp', icon: <FaWhatsapp />, color: 'bg-green-500 hover:bg-green-600' },
                            { name: 'LinkedIn', icon: <FaLinkedin />, color: 'bg-blue-600 hover:bg-blue-700' },
                            { name: 'Facebook', icon: <FaFacebookF />, color: 'bg-blue-800 hover:bg-blue-900' }].map((social, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.1 }} // Efecto de escala aumentado
                                    whileTap={{ scale: 0.95 }}
                                    className={`${social.color} text-white p-3 rounded-full shadow-md transition-colors`}
                                    aria-label={`Compartir en ${social.name}`}
                                >
                                    {social.icon}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>
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
        </div>
    );
};

export default NoticiaDetalle;