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
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
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
                            className="group bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                        >
                            Ver todos
                            <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-gray-900 max-w-4xl leading-tight"
                >
                    {titulo}
                </motion.h2>

                {/* Carrusel móvil */}
                <div className="md:hidden relative">
                    <div
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-4"
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
                                className="min-w-[85vw] snap-start bg-white p-6 rounded-2xl shadow-lg flex-shrink-0 border border-gray-100"
                            >
                                <div className="rounded-xl overflow-hidden mb-6 relative">
                                    <img
                                        src={item.imagen}
                                        alt={item.titulo}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.titulo}</h3>
                                <p className="text-gray-600 mb-6">{item.descripcion}</p>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                        aria-label={`Ir a ${item.titulo}`}
                                    >
                                        Saber más
                                        <FaArrowUpRightFromSquare className="w-3 h-3" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Indicadores carrusel móvil */}
                    <div className="flex justify-center mt-8 gap-2">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={clsx(
                                    'w-3 h-3 rounded-full transition-all',
                                    current === index ? 'bg-blue-600' : 'bg-gray-300'
                                )}
                                aria-label={`Ir a la tarjeta ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Rejilla escritorio */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300"></div>

                            <div className="relative h-full bg-white p-6 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                                <div className="rounded-xl overflow-hidden mb-6 relative">
                                    <img
                                        src={item.imagen}
                                        alt={item.titulo}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.titulo}</h3>
                                <p className="text-gray-600 mb-6">{item.descripcion}</p>

                                <AnimatePresence>
                                    {hoveredCard === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute bottom-6 right-6"
                                        >
                                            <Link
                                                to={item.link}
                                                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg"
                                                aria-label={`Ir a ${item.titulo}`}
                                            >
                                                <FaArrowUpRightFromSquare className="w-4 h-4" />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.div
                                    className={clsx(
                                        "absolute bottom-6 right-6 transition-opacity",
                                        hoveredCard === index ? "opacity-0" : "opacity-100"
                                    )}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <FaArrowUpRightFromSquare className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselServicios;