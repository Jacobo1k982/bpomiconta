// src/components/AsesoriaEmprendedores.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaChartBar, FaHandshake, FaShieldAlt, FaRegStar, FaWhatsapp } from "react-icons/fa";

const AsesoriaEmprendedores = () => {
    const beneficios = [
        {
            icon: <FaLightbulb className="text-teal-400 text-3xl" />,
            title: "Validación de Idea",
            description: "Te ayudamos a validar tu modelo de negocio con análisis de mercado, competencia y viabilidad financiera."
        },
        {
            icon: <FaRocket className="text-teal-400 text-3xl" />,
            title: "Lanzamiento Estratégico",
            description: "Plan de lanzamiento claro, con cronograma, presupuesto y canales de venta definidos desde el inicio."
        },
        {
            icon: <FaChartBar className="text-teal-400 text-3xl" />,
            title: "Proyecciones Financieras",
            description: "Modelos financieros realistas: ingresos, costos, flujo de caja y punto de equilibrio."
        },
        {
            icon: <FaHandshake className="text-teal-400 text-3xl" />,
            title: "Acceso a Financiamiento",
            description: "Preparamos tu pitch y documentación para inversores, fondos o créditos bancarios."
        },
        {
            icon: <FaShieldAlt className="text-teal-400 text-3xl" />,
            title: "Cumplimiento Legal",
            description: "Te guiamos en la elección de régimen, inscripción en Hacienda, CCSS y obligaciones iniciales."
        },
        {
            icon: <FaRegStar className="text-teal-400 text-3xl" />,
            title: "Mentoría Continua",
            description: "Sesiones periódicas para ajustar tu estrategia, resolver dudas y acelerar tu crecimiento."
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden pt-28">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 28,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)'
                }}
            />

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>

                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#mentorGradient)" />
                    <defs>
                        <linearGradient id="mentorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
                            <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas animadas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(14)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 22 + 6 + 'px',
                            height: Math.random() * 22 + 6 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 280 - 140) + 'px'],
                            x: [null, (Math.random() * 180 - 90) + 'px'],
                            opacity: [0.1, 0.35, 0.1],
                            scale: [1, 1.25, 1]
                        }}
                        transition={{
                            duration: Math.random() * 28 + 16,
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-6 py-3 bg-emerald-500/10 border border-emerald-400/20 rounded-full text-emerald-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        APOYAMOS TU SUEÑO
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 mb-6">
                        Asesoría para Emprendedores
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Desde la idea hasta el primer millón. Te acompañamos con estrategia, finanzas y cumplimiento para que tu emprendimiento crezca con bases sólidas.
                    </p>
                </motion.div>

                {/* Tarjetas de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {beneficios.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 * index, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-2xl group cursor-default"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-slate-300 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -8px rgba(16, 185, 129, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        href="https://wa.me/50687905876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span className="relative z-10">Agenda tu primera sesión gratis</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Animaciones CSS */}
            <style>{`
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

export default AsesoriaEmprendedores;