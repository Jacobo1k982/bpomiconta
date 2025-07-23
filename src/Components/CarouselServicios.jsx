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
    const [direction, setDirection] = useState(0);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);

    // Auto-avance del carrusel
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrent(prev => (prev + 1) % data.length);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [data.length]);

    // Scroll suave al elemento actual
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: current * containerRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }, [current]);

    // Reiniciar intervalo al interactuar
    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrent(prev => (prev + 1) % data.length);
        }, 5000);
    };

    // Navegación manual
    const goToSlide = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
        resetInterval();
    };

    // Navegación por botones
    const nextSlide = () => {
        setDirection(1);
        setCurrent(prev => (prev + 1) % data.length);
        resetInterval();
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent(prev => (prev - 1 + data.length) % data.length);
        resetInterval();
    };

    if (!data.length) return null;

    return (
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado con animación mejorada */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-6">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-700 shadow-sm border border-blue-200/50 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2.5 animate-pulse"></span>
                        {etiqueta}
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to={linkGeneral}
                            className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-full flex items-center gap-2.5 text-sm font-bold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Ver todos los servicios
                            <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Título principal con gradiente */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-gray-900 max-w-4xl leading-tight"
                >
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                        {titulo.split(' ').slice(0, -3).join(' ')}
                    </span>
                    <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-700">
                        {titulo.split(' ').slice(-3).join(' ')}
                    </span>
                </motion.h2>

                {/* Carrusel móvil con controles */}
                <div className="md:hidden relative">
                    <div className="relative">
                        <div
                            ref={containerRef}
                            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-6"
                            role="region"
                            aria-label="Carrusel de servicios"
                            onTouchStart={resetInterval}
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                {data.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        custom={direction}
                                        variants={{
                                            enter: (direction) => ({
                                                x: direction > 0 ? 1000 : -1000,
                                                opacity: 0,
                                            }),
                                            center: {
                                                zIndex: 1,
                                                x: 0,
                                                opacity: 1,
                                            },
                                            exit: (direction) => ({
                                                zIndex: 0,
                                                x: direction < 0 ? 1000 : -1000,
                                                opacity: 0,
                                            }),
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                                        className="min-w-[88vw] snap-start bg-white rounded-2xl shadow-xl flex-shrink-0 border border-gray-100/50 overflow-hidden backdrop-blur-sm"
                                    >
                                        <div className="relative w-full h-52 overflow-hidden">
                                            <img
                                                src={item.imagen}
                                                alt={item.titulo}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl" />
                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                                                <span className="text-white text-xs font-bold">Destacado</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                                                {item.titulo}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                                                {item.descripcion}
                                            </p>
                                            <Link
                                                to={item.link}
                                                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm group"
                                            >
                                                Saber más
                                                <FaArrowUpRightFromSquare className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Botones de navegación móvil */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all"
                            aria-label="Anterior"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all"
                            aria-label="Siguiente"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicadores con animación */}
                    <div className="flex justify-center mt-6 gap-2.5">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={clsx(
                                    'w-3 h-3 rounded-full transition-all duration-300',
                                    current === index
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                )}
                                aria-label={`Ir a la tarjeta ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Rejilla escritorio con efectos mejorados */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group bg-white border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <img
                                    src={item.imagen}
                                    alt={item.titulo}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-2xl" />
                                <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 rounded-full">
                                    <span className="text-white text-xs font-bold">TOP</span>
                                </div>
                                <motion.div
                                    className="absolute bottom-4 left-5 right-5"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center justify-center w-full bg-white/90 backdrop-blur-sm text-blue-700 font-bold py-2.5 rounded-lg shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                                    >
                                        Explorar servicio
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {item.titulo}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                    {item.descripcion}
                                </p>
                                <Link
                                    to={item.link}
                                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors text-sm group"
                                >
                                    Saber más
                                    <FaArrowUpRightFromSquare className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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