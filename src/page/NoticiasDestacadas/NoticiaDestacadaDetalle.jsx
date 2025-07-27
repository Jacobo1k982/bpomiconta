// src/components/NoticiaDestacadaDetalle.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiTag, FiClock, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import noticiasData2 from '../../data/NoticiasDestacadas/noticiasDestacadas.json';

const NoticiaDestacadaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData2.noticias.find(n => n.id === id);

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
                        Lo sentimos, no pudimos encontrar la noticia destacada que estás buscando.
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

    return (
        <motion.section
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 min-h-screen py-16 md:py-24 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Elementos decorativos de fondo con colores coherentes - MÁS LENTAS */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-10"></div>
                {/* Patrón geométrico sutil con gradientes coherentes */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#geomGradient)"
                    />
                    <defs>
                        <linearGradient id="geomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas flotantes con colores coherentes - MÁS LENTAS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            opacity: 0.1
                        }}
                        animate={{
                            y: [0, (Math.random() * 100 - 50)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20, // Más lentas: 20-50 segundos
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 backdrop-blur-2xl rounded-3xl p-0.5 border border-slate-700/50 shadow-2xl overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Imagen de portada con efecto parallax */}
                    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-3xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                        <img
                            src={noticia.portada}
                            alt={`Portada: ${noticia.titulo}`}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                        />
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

                    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/40 rounded-b-3xl p-6 md:p-10 lg:p-12">
                        {/* Encabezado con etiquetas */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <div className="flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 text-teal-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-teal-500/30">
                                    <FiTag className="text-teal-400" />
                                    {noticia.categoria}
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 text-green-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-green-500/30">
                                    <FiClock className="text-green-400" />
                                    <span>
                                        {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 text-amber-300 px-3.5 py-1.5 rounded-full text-sm font-semibold border border-amber-500/30">
                                    <FiCheckCircle className="text-amber-400" />
                                    <span>Prioridad: {noticia.prioridad}</span>
                                </div>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                                    {noticia.titulo?.split(' ').slice(0, -2).join(' ') || noticia.titulo}
                                </span>
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
                                    {noticia.titulo?.split(' ').slice(-2).join(' ')}
                                </span>
                            </h1>
                        </motion.div>

                        {/* Contenido principal */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="prose prose-invert max-w-none"
                        >
                            {noticia.contenido && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 first-letter:text-5xl first-letter:font-bold first-letter:text-teal-400 first-letter:mr-2 first-letter:float-left"
                                >
                                    {noticia.contenido}
                                </motion.p>
                            )}

                            {/* Pasos dinámicos con diseño mejorado y coherente */}
                            {Array.isArray(noticia.pasos) && noticia.pasos.map((paso, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                    className={`grid grid-cols-1 ${paso.imagen ? 'lg:grid-cols-2' : ''} gap-8 md:gap-10 items-center my-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Imagen del paso */}
                                    {paso.imagen && (
                                        <motion.div
                                            whileHover={{
                                                y: -5,
                                                rotateX: 3,
                                                rotateY: 3
                                            }}
                                            className="w-full"
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-teal-900/20 z-10"></div>
                                                <img
                                                    src={paso.imagen}
                                                    alt={paso.subtitulo}
                                                    className="w-full h-auto object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
                                                    Paso {index + 1}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Contenido del paso */}
                                    <div className={paso.imagen ? '' : 'lg:col-span-2'}>
                                        {paso.titulo && (
                                            <motion.h2
                                                initial={{ opacity: 0, x: -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                viewport={{ once: true }}
                                                className="text-2xl md:text-3xl font-extrabold text-white mb-4 relative"
                                            >
                                                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400">
                                                    {paso.titulo}
                                                </span>
                                                <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
                                            </motion.h2>
                                        )}
                                        {paso.subtitulo && (
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                viewport={{ once: true }}
                                                className="text-xl font-bold text-gray-200 mb-4"
                                            >
                                                {paso.subtitulo}
                                            </motion.h3>
                                        )}
                                        {Array.isArray(paso.lista) && (
                                            <motion.ul
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                                className="space-y-4 mb-6"
                                            >
                                                {paso.lista.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="flex items-start group"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * i + 0.4 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <div className="flex-shrink-0 mt-2 mr-4">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:scale-125 transition-transform"></div>
                                                        </div>
                                                        <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Sección adicional con estilo mejorado y coherente */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-12 pt-8 border-t border-slate-700/50"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <FiCheckCircle className="text-teal-400" />
                                ¿Qué debes hacer ahora?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                    {
                                        title: "Revisar requisitos",
                                        description: "Consulta los documentos necesarios para la migración",
                                        icon: "📋"
                                    },
                                    {
                                        title: "Descargar documentación",
                                        description: "Obtén toda la información requerida en formato digital",
                                        icon: "📄"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.02,
                                            rotateX: 3,
                                            rotateY: 3
                                        }}
                                        className="bg-gradient-to-br from-slate-800/50 to-teal-900/30 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 text-2xl">{item.icon}</div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                                <p className="text-gray-300">{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-8 text-center"
                            >
                                <Link to="/contacto">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.03,
                                            boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -5px rgba(20, 184, 166, 0.2)",
                                            rotateX: 5,
                                            rotateY: 5
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        Solicitar Consultoría
                                        <FiExternalLink />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default NoticiaDestacadaDetalle;