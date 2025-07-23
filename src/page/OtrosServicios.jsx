import React from 'react';
import { motion } from 'framer-motion';
import CarouselServicios from '../Components/CarouselServicios.jsx';
import otrosServiciosData from '../data/otrosServicios.json';

const OtrosServicios = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Efecto de fondo decorativo mejorado */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
            </div>

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl opacity-5"></div>

            {/* Efecto de partículas mejorado */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-teal-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 4}px`,
                            height: `${Math.random() * 8 + 4}px`,
                            opacity: 0.1
                        }}
                        animate={{
                            y: [0, (Math.random() * 100 - 50)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0.1, 0.3, 0.1]
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-700 shadow-sm border border-blue-200/50 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2.5 animate-pulse"></span>
                        Soluciones Integrales
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700">
                            Desbloquee la libertad financiera
                        </span>
                        <span className="block mt-2 text-gray-700">
                            con decisiones inteligentes
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Tome decisiones inteligentes con nuestros servicios especializados en contabilidad y finanzas para impulsar el crecimiento sostenible de su empresa.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <CarouselServicios
                        data={otrosServiciosData}
                        titulo=""
                        etiqueta="Contabilidad"
                        linkGeneral="/servicios"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-20"
                >
                    <motion.a
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        href="/servicios"
                        className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-xl text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-300"
                    >
                        Explorar todos los servicios
                        <svg
                            className="ml-3 -mr-1 h-6 w-6 transition-transform group-hover:translate-x-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-500 text-sm"
                    >
                        Más de 15 servicios especializados para su negocio
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default OtrosServicios;