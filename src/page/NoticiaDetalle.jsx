import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowLeft, FaFilePdf, FaRegClock, FaQuoteLeft, FaTag } from 'react-icons/fa';
import { FiExternalLink, FiShare2, FiHeart } from 'react-icons/fi';

const NoticiaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData.find(n => n.id === parseInt(id));

    if (!noticia) {
        return (
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600/20 to-teal-600/20 mb-6">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400 mb-3">
                        Noticia no encontrada
                    </h2>
                    <p className="text-blue-200/80 max-w-md mx-auto">
                        Lo sentimos, no pudimos encontrar la noticia que estás buscando.
                    </p>
                    <Link to="/noticias">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaArrowLeft />
                            Volver a noticias
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white min-h-screen">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>

                {/* Patrón geométrico sutil */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#geomGradient1)"
                    />
                    <defs>
                        <linearGradient id="geomGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                            <stop offset="100%" stopColor="rgb(124, 58, 237)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Botón volver con estilo mejorado */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <Link
                        to="/noticias"
                        className="group inline-flex items-center gap-3 text-blue-300 hover:text-white transition-colors"
                    >
                        <motion.div
                            whileHover={{ x: -5 }}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <FaArrowLeft className="text-blue-400" />
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
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-blue-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-blue-500/30">
                            <FaTag className="text-blue-400" />
                            {noticia.categoria || 'Noticias'}
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-green-500/30">
                            <FaRegClock className="text-green-400" />
                            <span>{noticia.fecha}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-blue-100">
                            {noticia.titulo?.split(' ').slice(0, -2).join(' ') || noticia.titulo}
                        </span>
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            {noticia.titulo?.split(' ').slice(-2).join(' ')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl leading-relaxed">
                        {noticia.descripcion || 'Explorando las últimas tendencias y novedades en el mundo de las finanzas y contabilidad.'}
                    </p>
                </motion.div>

                {/* Barra de acciones */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-between py-5 border-y border-white/10 mb-10"
                >
                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-all"
                        >
                            <FiHeart className="text-blue-400" />
                            <span className="text-sm font-medium">24</span>
                        </motion.button>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-blue-300/80">Compartir:</span>
                        <div className="flex gap-2">
                            {['twitter', 'facebook', 'linkedin'].map((social, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                                    aria-label={`Compartir en ${social}`}
                                >
                                    <FiShare2 className="text-blue-400" />
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Imagen principal con efecto parallax */}
                {noticia.imagen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                        <img
                            src={noticia.imagen}
                            alt={noticia.titulo}
                            className="w-full h-auto max-h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="bg-gradient-to-r from-blue-600/80 to-teal-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span className="text-white font-semibold text-sm">Destacado</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Contenido dinámico con mejor tipografía */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="prose prose-invert max-w-none"
                >
                    {Array.isArray(noticia.contenido) && noticia.contenido.map((bloque, index) => {
                        switch (bloque.tipo) {
                            case 'subtitulo':
                                return (
                                    <motion.h2
                                        key={index}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="text-2xl md:text-3xl font-extrabold text-white mb-6 mt-12 relative"
                                    >
                                        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
                                            {bloque.texto}
                                        </span>
                                        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                                    </motion.h2>
                                );
                            case 'parrafo':
                                return (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="text-lg text-blue-100 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-2 first-letter:float-left"
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
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="space-y-4 mb-8"
                                    >
                                        {bloque.items.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start group"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex-shrink-0 mt-2 mr-4">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 group-hover:scale-125 transition-transform"></div>
                                                </div>
                                                <span className="text-lg text-blue-100 leading-relaxed">{item}</span>
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
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="relative border-l-4 border-gradient-to-b from-blue-500 to-teal-500 pl-8 py-6 my-10 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-r-2xl border border-white/10"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full opacity-5">
                                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <path
                                                    d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                                                    fill="url(#quoteGradient)"
                                                />
                                                <defs>
                                                    <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                                                        <stop offset="100%" stopColor="rgb(124, 58, 237)" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <FaQuoteLeft className="absolute top-6 left-8 text-blue-400/20 text-5xl" />
                                        <p className="text-xl md:text-2xl italic text-blue-200 relative z-10 leading-relaxed">
                                            {bloque.texto}
                                        </p>
                                        {bloque.autor && (
                                            <cite className="block mt-4 text-blue-300/80 not-italic relative z-10">
                                                — {bloque.autor}
                                            </cite>
                                        )}
                                    </motion.blockquote>
                                );
                            default:
                                return null;
                        }
                    })}
                </motion.div>

                {/* Documento PDF con estilo mejorado */}
                {noticia.pdf && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-0.5 border border-white/10">
                            <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/20 rounded-2xl p-6">
                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30">
                                        <FaFilePdf className="text-2xl text-red-400" />
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-white mb-1">Documento completo</h3>
                                        <p className="text-blue-200/80 mb-3">Descarga el informe detallado en formato PDF</p>
                                        <a
                                            href={noticia.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                        >
                                            <span>Descargar PDF</span>
                                            <FiExternalLink className="ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Video embebido con estilo mejorado */}
                {noticia.video && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 z-10"></div>
                        <div className="relative z-20 bg-gradient-to-r from-blue-600/10 to-teal-600/10 p-5">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
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

                {/* Sección de interacción final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">¿Te resultó útil esta información?</h3>
                            <p className="text-blue-200/80">Ayúdanos compartiendo este artículo con tu red</p>
                        </div>
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                            >
                                <FiHeart className="text-white" />
                                <span>Me gusta</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 py-2.5 rounded-lg font-semibold border border-white/20 transition-all"
                            >
                                <FiShare2 className="text-white" />
                                <span>Compartir</span>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NoticiaDetalle;