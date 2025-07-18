import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const CarouselServicios = ({
    data = [],
    titulo = 'Desbloquee la libertad financiera con decisiones inteligentes',
    etiqueta = 'Nuestros servicios',
    linkGeneral = '/servicios',
}) => {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: current * containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [current]);

    if (!data.length) return null;

    return (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-blue-700 shadow-sm border border-gray-200"
                    >
                        {etiqueta}
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to={linkGeneral}
                            className="group bg-blue-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                        >
                            Ver todos
                            <FaArrowUpRightFromSquare className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-800 max-w-4xl leading-tight"
                >
                    {titulo}
                </motion.h2>

                {/* Carrusel móvil */}
                <div className="md:hidden relative">
                    <div
                        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-4"
                        ref={containerRef}
                        role="region"
                        aria-label="Carrusel de servicios"
                    >
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                className="min-w-[85vw] snap-start bg-white rounded-xl shadow-md flex-shrink-0 border border-gray-100 overflow-hidden"
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={item.imagen}
                                        alt={item.titulo}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-2 text-gray-800">{item.titulo}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">{item.descripcion}</p>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link
                                            to={item.link}
                                            className="inline-flex items-center gap-1.5 text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
                                            aria-label={`Ir a ${item.titulo}`}
                                        >
                                            Saber más
                                            <FaArrowUpRightFromSquare className="w-3 h-3" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Indicadores carrusel móvil */}
                    <div className="flex justify-center mt-6 gap-2">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={clsx(
                                    'w-2.5 h-2.5 rounded-full transition-all',
                                    current === index ? 'bg-blue-600' : 'bg-gray-300'
                                )}
                                aria-label={`Ir a la tarjeta ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Rejilla escritorio */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={item.imagen}
                                    alt={item.titulo}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{item.titulo}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-4">{item.descripcion}</p>
                                <Link
                                    to={item.link}
                                    className="inline-flex items-center gap-1.5 text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
                                    aria-label={`Ir a ${item.titulo}`}
                                >
                                    Saber más
                                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselServicios;
