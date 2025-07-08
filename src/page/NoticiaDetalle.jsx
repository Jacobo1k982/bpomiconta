import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import { FaArrowLeft, FaFilePdf, FaRegClock, FaQuoteLeft } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const NoticiaDetalle = () => {
    const { id } = useParams();
    const noticia = noticiasData.find(n => n.id === parseInt(id));

    if (!noticia) {
        return (
            <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white h-screen flex items-center justify-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl text-blue-300"
                >
                    Noticia no encontrada
                </motion.p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-gray-900 to-blue-900 text-white min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Botón volver */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        to="/noticias"
                        className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 group"
                    >
                        <motion.div
                            whileHover={{ x: -3 }}
                            transition={{ type: 'spring', stiffness: 500 }}
                        >
                            <FaArrowLeft className="text-blue-400" />
                        </motion.div>
                        <span className="group-hover:underline">Volver a noticias</span>
                    </Link>
                </motion.div>

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaRegClock className="text-blue-400" />
                        <span className="text-blue-300 text-sm md:text-base">{noticia.fecha}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400 leading-tight">
                        {noticia.titulo}
                    </h1>
                </motion.div>

                {/* Imagen principal */}
                {noticia.imagen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl mb-10 group"
                    >
                        <img
                            src={noticia.imagen}
                            alt={noticia.titulo}
                            className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    </motion.div>
                )}

                {/* Contenido dinámico */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="prose prose-invert max-w-none"
                >
                    {Array.isArray(noticia.contenido) && noticia.contenido.map((bloque, index) => {
                        switch (bloque.tipo) {
                            case 'subtitulo':
                                return (
                                    <motion.h3
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="text-2xl md:text-3xl font-semibold text-blue-300 mb-6 mt-12"
                                    >
                                        {bloque.texto}
                                    </motion.h3>
                                );
                            case 'parrafo':
                                return (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="text-lg text-blue-100 leading-relaxed mb-6"
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
                                        className="space-y-3 mb-6"
                                    >
                                        {bloque.items.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1.5 mr-3">
                                                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                                </div>
                                                <span className="text-lg text-blue-100">{item}</span>
                                            </li>
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
                                        className="border-l-4 border-blue-400 pl-6 py-4 my-6 bg-white/5 backdrop-blur-sm rounded-r-lg"
                                    >
                                        <FaQuoteLeft className="text-blue-400 text-xl mb-4" />
                                        <p className="text-xl italic text-blue-200">{bloque.texto}</p>
                                    </motion.blockquote>
                                );
                            default:
                                return null;
                        }
                    })}
                </motion.div>

                {/* Documento PDF */}
                {noticia.pdf && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <a
                            href={noticia.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            <FaFilePdf className="text-xl" />
                            <span>Ver documento completo</span>
                            <FiExternalLink className="ml-2" />
                        </a>
                    </motion.div>
                )}

                {/* Video embebido */}
                {noticia.video && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-12 rounded-2xl overflow-hidden shadow-2xl relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 z-10"></div>
                        <iframe
                            src={noticia.video}
                            title="Video relacionado"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full aspect-video"
                        ></iframe>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default NoticiaDetalle;