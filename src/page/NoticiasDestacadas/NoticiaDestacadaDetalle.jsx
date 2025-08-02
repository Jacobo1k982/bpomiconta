// src/components/NoticiaDestacadaDetalle.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiArrowLeft,
    FiCalendar,
    FiTag,
    FiClock,
    FiCheckCircle,
    FiExternalLink,
    FiShare2,
    FiHeart,
    FiBookmark,
    FiChevronDown,
    FiPlay,
    FiUser
} from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import noticiasData2 from '../../data/NoticiasDestacadas/noticiasDestacadas.json';
import ReactPlayer from 'react-player';

const NoticiaDestacadaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData2.noticias.find(n => n.id === id);

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showFullContent, setShowFullContent] = useState(false);

    if (!noticia) {
        return (
            <div className="flex items-center justify-center min-h-screen text-whit bg-gradient-to-br from-slate-950 via-black to-teal-950">
                {/* Textura sutil */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="text-center p-8 relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-600/20 to-emerald-600/20 mb-6">
                        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400 mb-3">
                        Noticia no encontrada
                    </h2>
                    <p className="text-gray-300 max-w-md mx-auto mb-6">
                        Lo sentimos, no pudimos encontrar la noticia destacada que estás buscando.
                    </p>
                    <Link to="/noticias">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-teal-500/20 transition-all"
                        >
                            <FiArrowLeft />
                            Volver a noticias
                        </motion.button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: noticia.titulo,
                    text: noticia.descripcion,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error al compartir:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Enlace copiado al portapapeles');
        }
    };

    const truncatedContent = noticia.contenido?.split(' ').slice(0, 50).join(' ') + '...';

    return (
        <motion.section
            className="relative overflow-hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* === FONDO UNIFICADO CON EL HERO === */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

            {/* Textura sutil (igual que en Hero) */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Partículas flotantes sutiles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
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
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-500/3 rounded-full blur-4xl"></div>

            {/* Contenido principal */}
            <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 py-20 text-justify">
                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Botón volver */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/noticias"
                            className="group inline-flex items-center gap-3 text-gray-300 hover:text-teal-300 transition-colors"
                        >
                            <motion.div
                                whileHover={{ x: -5 }}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/30 border border-slate-700/40 hover:bg-slate-700/40 transition-all"
                            >
                                <FiArrowLeft className="text-teal-400" />
                            </motion.div>
                            <span className="font-medium">Volver a noticias</span>
                        </Link>
                    </motion.div>

                    {/* Encabezado */}
                    <div className="space-y-6">
                        {/* Imagen o video */}
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            {noticia.videoUrl ? (
                                <ReactPlayer
                                    url={noticia.videoUrl}
                                    width="100%"
                                    height="100%"
                                    controls
                                    light={true}
                                    className="absolute inset-0"
                                />
                            ) : (
                                <img
                                    src={noticia.portada}
                                    alt={`Portada: ${noticia.titulo}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            )}
                            {noticia.destacada && (
                                <div className="absolute top-5 right-5 bg-gradient-to-r from-green-600/80 to-teal-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30 z-20">
                                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        Destacado
                                    </span>
                                </div>
                            )}
                            <div className="absolute bottom-5 left-5 z-20">
                                <div className="bg-gradient-to-r from-teal-600/80 to-emerald-600/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-500/30">
                                    <span className="text-white font-semibold text-sm">{noticia.categoria}</span>
                                </div>
                            </div>
                        </div>

                        {/* Etiquetas */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2 bg-gradient-to-r from-teal-600/15 to-emerald-600/15 text-teal-300 px-3.5 py-1.5 rounded-full text-sm font-medium border border-teal-500/30 backdrop-blur-sm">
                                <FiTag className="text-teal-400" size={16} />
                                {noticia.categoria}
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-600/15 to-teal-600/15 text-emerald-300 px-3.5 py-1.5 rounded-full text-sm font-medium border border-emerald-500/30 backdrop-blur-sm">
                                <FiCalendar className="text-emerald-400" size={16} />
                                <span>
                                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-600/15 to-orange-600/15 text-amber-300 px-3.5 py-1.5 rounded-full text-sm font-medium border border-amber-500/30 backdrop-blur-sm">
                                <FiCheckCircle className="text-amber-400" size={16} />
                                <span>Prioridad: {noticia.prioridad}</span>
                            </div>
                        </div>

                        {/* Título */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
                                {noticia.titulo?.split(' ').slice(0, -2).join(' ') || noticia.titulo}
                            </span>
                            <span className="block mt-2 font-semibold text-white">
                                {noticia.titulo?.split(' ').slice(-2).join(' ')}
                            </span>
                        </h1>

                        {/* Autor y acciones */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-700/30">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                                    <FiUser className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Equipo Tribu-CR</p>
                                    <p className="text-gray-400 text-sm">Publicado hace 2 días</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setLiked(!liked)}
                                    className={`p-2 rounded-full ${liked ? 'bg-red-500/20 text-red-400' : 'bg-slate-800/30 text-gray-400'} hover:bg-red-500/30 transition-colors`}
                                >
                                    <FiHeart className={liked ? 'fill-current' : ''} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setBookmarked(!bookmarked)}
                                    className={`p-2 rounded-full ${bookmarked ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800/30 text-gray-400'} hover:bg-blue-500/30 transition-colors`}
                                >
                                    <FiBookmark className={bookmarked ? 'fill-current' : ''} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleShare}
                                    className="p-2 rounded-full bg-slate-800/30 text-gray-400 hover:bg-teal-500/30 hover:text-teal-400 transition-colors"
                                >
                                    <FiShare2 />
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Contenido principal */}
                    <div className="space-y-8">
                        {noticia.contenido && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                            >
                                {showFullContent ? noticia.contenido : truncatedContent}
                                {!showFullContent && noticia.contenido.split(' ').length > 50 && (
                                    <button
                                        onClick={() => setShowFullContent(true)}
                                        className="ml-2 text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1 inline-flex"
                                    >
                                        Leer más
                                        <FiChevronDown className="animate-bounce" />
                                    </button>
                                )}
                            </motion.p>
                        )}

                        {/* Video explicativo */}
                        {noticia.videoUrl && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="my-12"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <FiPlay className="text-teal-400" />
                                    Video Explicativo
                                </h3>
                                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/40">
                                    <ReactPlayer
                                        url={noticia.videoUrl}
                                        width="100%"
                                        height="100%"
                                        controls
                                        light={false}
                                        className="absolute inset-0"
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Pasos */}
                        {Array.isArray(noticia.pasos) && noticia.pasos.map((paso, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                viewport={{ once: true }}
                                className={`grid grid-cols-1 ${paso.imagen ? 'lg:grid-cols-2' : ''} gap-8 md:gap-10 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {paso.imagen && (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="w-full"
                                    >
                                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-700/40 group">
                                            <img
                                                src={paso.imagen}
                                                alt={paso.subtitulo}
                                                className="w-full h-auto object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                                                Paso {index + 1}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div className={paso.imagen ? '' : 'lg:col-span-2'}>
                                    {paso.titulo && (
                                        <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400">
                                                {paso.titulo}
                                            </span>
                                        </h2>
                                    )}
                                    {paso.subtitulo && (
                                        <h3 className="text-xl font-medium text-gray-200 mb-4">{paso.subtitulo}</h3>
                                    )}
                                    {Array.isArray(paso.lista) && (
                                        <ul className="space-y-4">
                                            {paso.lista.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 mt-2 mr-4">
                                                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                                    </div>
                                                    <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Acción final */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-12 pt-8 border-t border-slate-700/50 text-center"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                                <FiCheckCircle className="text-teal-400" />
                                ¿Qué debes hacer ahora?
                            </h3>
                            <Link to="/contacto">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-teal-500/20 transition-all"
                                >
                                    Solicitar Consultoría
                                    <FiExternalLink />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default NoticiaDestacadaDetalle;