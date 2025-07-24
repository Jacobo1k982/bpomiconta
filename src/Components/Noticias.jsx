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
        <section className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 py-40">
            {/* Efecto de fondo */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400 mb-6">
                        Noticias Recientes
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
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
                            <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-2">
                                {/* Imagen con overlay */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={noticia.imagen}
                                        alt={noticia.titulo}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white">
                                            <FaRegClock className="mr-1" />
                                            {noticia.fecha}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold text-white mb-3">{noticia.titulo}</h3>
                                        <p className="text-blue-100 mb-6">{noticia.resumen}</p>
                                    </div>

                                    {/* Botón según tipo */}
                                    <motion.div whileHover={{ x: 5 }}>
                                        {noticia.pdf ? (
                                            <a
                                                href={noticia.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium transition-colors"
                                            >
                                                <FaFilePdf className="flex-shrink-0" />
                                                Ver documento
                                                <FiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ) : noticia.link ? (
                                            <Link
                                                to={noticia.link}
                                                className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium transition-colors"
                                            >
                                                <FaArrowRight className="flex-shrink-0" />
                                                Leer más
                                                <FiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        ) : noticia.video ? (
                                            <a
                                                href={noticia.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium transition-colors"
                                            >
                                                <FaVideo className="flex-shrink-0" />
                                                Ver video
                                                <FiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ) : null}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Noticias;