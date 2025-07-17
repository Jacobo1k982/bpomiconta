import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import noticiasData2 from '../data/noticiasDestacadas.json';

const NoticiaDestacadaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData2.noticias.find(n => n.id === id);

    if (!noticia) {
        return (
            <div className="flex items-center justify-center h-screen text-white bg-gray-900">
                Noticia no encontrada
            </div>
        );
    }

    return (
        <motion.section
            className="relative bg-gradient-to-br from-gray-900 to-blue-900/80 min-h-screen py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/">
                    <motion.div
                        whileHover={{ x: -4 }}
                        className="flex items-center text-blue-300 mb-8 group"
                    >
                        <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span>Volver a destacados</span>
                    </motion.div>
                </Link>

                <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-1 border border-white/10 shadow-2xl overflow-hidden">
                    {/* Imagen de portada con efecto de borde degradado */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/30 z-10"></div>
                        <img
                            src={noticia.portada}
                            alt={`Portada: ${noticia.titulo}`}
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Badge destacado superpuesto */}
                        {noticia.destacado && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-900/40 text-green-300 rounded-full text-sm font-medium flex items-center z-20">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                Destacado
                            </div>
                        )}
                    </div>

                    <div className="bg-gray-900/70 rounded-b-2xl p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                                    <span className="text-sm font-medium text-blue-300">{noticia.categoria}</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {noticia.titulo}
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex items-center text-blue-200">
                                <FiCalendar className="mr-2 text-blue-300" />
                                <span className="font-medium">
                                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center text-blue-200">
                                <FiTag className="mr-2 text-blue-300" />
                                <span className="font-medium">Prioridad: {noticia.prioridad}</span>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none mb-12">
                            <p className="text-lg text-blue-100 leading-relaxed mb-6 whitespace-pre-line text-justify">
                                {noticia.contenido}
                            </p>
                        </div>

                        {/* Sección adicional (opcional) */}
                        <div className="mt-8 border-t border-white/10 pt-8">
                            <h3 className="text-xl font-semibold text-blue-200 mb-4">¿Qué debes hacer ahora?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                    <span>Revisar los requisitos para la migración</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                    <span>Descargar documentación necesaria</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default NoticiaDestacadaDetalle;