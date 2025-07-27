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
            <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
                <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-600/20 to-emerald-600/20 mb-6">
                        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400 mb-3">
                        Noticia no encontrada
                    </h2>
                    <p className="text-gray-300 max-w-md mx-auto mb-6">
                        Lo sentimos, no pudimos encontrar la noticia que estás buscando.
                    </p>
                    <Link to="/noticias">
                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3), 0 8px 10px -6px rgba(20, 184, 166, 0.3)",
                                rotateX: 5,
                                rotateY: 5
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <FiArrowLeft />
                            Volver a noticias
                        </motion.button>
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
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-2xl md:text-3xl font-extrabold text-white mb-6 mt-12 relative"
                    >
                        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400">
                            {bloque.texto}
                        </span>
                        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                    </motion.h2>
                );

            case 'parrafo':
                return (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-lg text-gray-300 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-teal-400 first-letter:mr-2 first-letter:float-left"
                    >
                        {bloque.texto}
                    </motion.p>
                );

            case 'lista':
                return (
                    <motion.ul
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-3 mb-6"
                    >
                        {bloque.items.map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start group"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: baseDelay + i * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-shrink-0 mt-2 mr-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:scale-125 transition-transform"></div>
                                </div>
                                <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                );

            case 'cita':
                return (
                    <motion.blockquote
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: baseDelay }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative border-l-4 border-gradient-to-b from-teal-500 to-emerald-500 pl-8 py-6 my-10 bg-gradient-to-br from-slate-800/40 to-teal-900/20 backdrop-blur-sm rounded-r-2xl border border-slate-700/50"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-5">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path
                                    d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                                    fill="url(#quoteGradient)"
                                />
                                <defs>
                                    <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                                        <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <FaQuoteLeft className="absolute top-6 left-8 text-teal-400/20 text-5xl" />
                        <p className="text-xl md:text-2xl italic text-gray-200 relative z-10 leading-relaxed">
                            {bloque.texto}
                        </p>
                        {bloque.autor && (
                            <cite className="block mt-4 text-gray-400 not-italic relative z-10">
                                — {bloque.autor}
                            </cite>
                        )}
                    </motion.blockquote>
                );

            default:
                return null;
        }
    };

    // Función para compartir en redes sociales
    const shareOnSocial = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(noticia.titulo);

        switch (platform) {
            case 'whatsapp':
                window.open(`https://wa.me/?text=${title}%20${url}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <motion.div
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Fondo decorativo con colores coherentes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-10"></div>
                {/* Patrón geométrico sutil con gradientes coherentes */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#geomGradient1)"
                    />
                    <defs>
                        <linearGradient id="geomGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Botón volver con estilo mejorado y coherente */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <Link
                        to="/noticias"
                        className="group inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                        <motion.div
                            whileHover={{ x: -5 }}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 transition-all"
                        >
                            <FiArrowLeft className="text-teal-400" />
                        </motion.div>
                        <span className="font-medium group-hover:underline">Volver a noticias</span>
                    </Link>
                </motion.div>

                {/* Encabezado con etiquetas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 text-teal-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-teal-500/30">
                            <FiTag className="text-teal-400" />
                            {noticia.categoria}
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-green-500/30">
                            <FiClock className="text-green-400" />
                            <span>{noticia.fecha}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                            {noticia.titulo?.split(' ').slice(0, -2).join(' ') || noticia.titulo}
                        </span>
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
                            {noticia.titulo?.split(' ').slice(-2).join(' ')}
                        </span>
                    </h1>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <FiCalendar className="text-teal-400" />
                            <span>{noticia.fecha}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                            >
                                <FiHeart className="text-teal-400" />
                                <span className="text-sm font-medium">24</span>
                            </motion.button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400">Compartir:</span>
                            <div className="flex gap-2">
                                {[
                                    { platform: 'whatsapp', icon: <FaWhatsapp size={16} />, color: 'text-green-400 hover:bg-green-500/20' },
                                    { platform: 'linkedin', icon: <FaLinkedin size={16} />, color: 'text-blue-400 hover:bg-blue-500/20' },
                                    { platform: 'facebook', icon: <FaFacebookF size={16} />, color: 'text-blue-600 hover:bg-blue-600/20' }
                                ].map((social, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => shareOnSocial(social.platform)}
                                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-transparent transition-all ${social.color}`}
                                        aria-label={`Compartir en ${social.platform}`}
                                    >
                                        {social.icon}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                        <img
                            src={noticia.imagen}
                            alt={`Imagen principal: ${noticia.titulo}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="bg-gradient-to-r from-teal-600/80 to-emerald-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-500/30">
                                <span className="text-white font-semibold text-sm">Destacado</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Contenido dinámico con mejor tipografía y colores coherentes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="prose prose-invert max-w-none"
                >
                    {Array.isArray(noticia.contenido) && noticia.contenido.map((bloque, index) =>
                        renderContentBlock(bloque, index)
                    )}
                </motion.div>

                {/* PDF destacado con estilo mejorado y coherente */}
                {noticia.pdf && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-teal-900/20 backdrop-blur-sm border border-slate-700/50 shadow-xl"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Documento relacionado
                                </h3>
                                <p className="text-gray-300">
                                    Descarga el documento completo para obtener información detallada
                                </p>
                            </div>
                            <div>
                                <a
                                    href={noticia.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    <span>Descargar PDF</span>
                                    <FiExternalLink className="ml-1" />
                                </a>
                            </div>
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
                        className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-teal-900/20 z-10"></div>
                        <div className="relative z-20 p-5 bg-gradient-to-r from-slate-800/80 to-slate-900/80">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Video explicativo
                            </h3>
                        </div>
                        <iframe
                            src={noticia.video}
                            title="Video relacionado"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full aspect-video bg-black"
                        ></iframe>
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
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <FiHeart className="text-white" />
                                <span>Me gusta</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white px-5 py-2.5 rounded-lg font-semibold border border-slate-700/50 transition-all"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <FiShare2 className="text-white" />
                                <span>Compartir</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NoticiaDetalle;