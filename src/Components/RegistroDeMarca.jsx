// src/components/RegistroDeMarca.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrademark, FaSearch, FaFileContract, FaShieldAlt, FaChartLine, FaUsers, FaArrowRight, FaExclamationTriangle, FaCheckCircle, FaClock, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegistroDeMarca = () => {
    const beneficios = [
        "Protección legal exclusiva de tu marca",
        "Derecho de uso exclusivo en todo el territorio nacional",
        "Facilita el crecimiento y expansión de tu negocio",
        "Aumenta el valor de tu empresa",
        "Evita el uso no autorizado por terceros",
        "Posibilidad de licenciar o vender tu marca"
    ];

    const pasosRegistro = [
        {
            icono: <FaSearch className="text-teal-400 text-3xl" />,
            titulo: "Búsqueda de Viabilidad",
            descripcion: "Análisis exhaustivo para verificar que tu marca no esté registrada previamente ni sea similar a otras."
        },
        {
            icono: <FaFileContract className="text-teal-400 text-3xl" />,
            titulo: "Preparación y Presentación",
            descripcion: "Elaboración de la solicitud formal con todos los requisitos técnicos y legales necesarios."
        },
        {
            icono: <FaClock className="text-teal-400 text-3xl" />,
            titulo: "Examen de Forma",
            descripcion: "Revisión por parte del INDER para verificar el cumplimiento de requisitos formales."
        },
        {
            icono: <FaClock className="text-teal-400 text-3xl" />,
            titulo: "Publicación y Oposición",
            descripcion: "Publicación en el Boletín de Propiedad Industrial para posibles oposiciones (2 meses)."
        },
        {
            icono: <FaClock className="text-teal-400 text-3xl" />,
            titulo: "Examen de Fondo",
            descripcion: "Análisis detallado por parte del INDER para determinar la registrabilidad de la marca."
        },
        {
            icono: <FaCheckCircle className="text-teal-400 text-3xl" />,
            titulo: "Registro y Certificado",
            descripcion: "Emisión del certificado de registro de marca otorgando la protección legal exclusiva."
        }
    ];

    // Variante de animación para las tarjetas del proceso
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
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
            {/* Fondo con textura sutil de cubos */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Nueva textura sutil de puntos alineados */}
            <div className="absolute inset-0 opacity-2">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dots.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo - Mejorado y coherente */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent)'
                }}
            />

            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>

                {/* Patrón geométrico sutil mejorado con degradado coherente */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#marcaGradient)" />
                    <defs>
                        <linearGradient id="marcaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 25 + 5 + 'px',
                            height: Math.random() * 25 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 300 - 150) + 'px'],
                            x: [null, (Math.random() * 200 - 100) + 'px'],
                            opacity: [0.1, 0.4, 0.1],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado mejorado con estilo moderno y colores coherentes */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        PROTEGE TU IDENTIDAD
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6">
                        Registro de Marca en Costa Rica
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-8">
                            Proteja su identidad comercial conforme a la Ley de Marcas No. 7978
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                {/* Beneficios con estilo mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaTrademark className="text-teal-400" />
                        Beneficios Clave del Registro de Marca
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {beneficios.map((beneficio, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 + 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 8 }}
                                className="flex items-start group p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-teal-400/30 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                </div>
                                <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{beneficio}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Información Actualizada con estilo moderno */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-teal-900/30 to-emerald-900/30 border-l-4 border-teal-500 p-6 rounded-r-xl mb-12 backdrop-blur-sm"
                >
                    <div className="flex items-start">
                        <FaExclamationTriangle className="text-teal-400 text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Información Actualizada</h3>
                            <p className="text-slate-300">
                                El trámite de registro de marca en Costa Rica tiene una duración aproximada de <strong>12 a 18 meses</strong>,
                                dependiendo de la complejidad del caso y posibles oposiciones. El registro otorga protección por <strong>10 años</strong>,
                                renovables indefinidamente.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Proceso de Registro con cards modernas y animación de entrada */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {pasosRegistro.map((paso, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            custom={index}
                            className="group"
                        >
                            <motion.div
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    rotateX: 5,
                                    rotateY: 5,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 10px 20px -5px rgba(20, 184, 166, 0.2)"
                                }}
                                className="h-full bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 transform"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="flex justify-center mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md"
                                    >
                                        {paso.icono}
                                    </motion.div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">{paso.titulo}</h3>
                                <p className="text-slate-300 text-center flex-grow">{paso.descripcion}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action mejorado con efecto shine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -6px rgba(20, 184, 166, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block relative overflow-hidden group rounded-2xl"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Link
                            to="/contacto"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg z-10 relative"
                        >
                            Agenda tu Consulta
                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {/* Efecto Shine en el botón */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animaciones CSS personalizadas */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.2; transform: scale(1.05); }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% { opacity: 0.1; transform: scale(1.05); }
                    50% { opacity: 0.2; transform: scale(1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-pulse-slow-reverse {
                    animation: pulse-slow-reverse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    );
};

export default RegistroDeMarca;