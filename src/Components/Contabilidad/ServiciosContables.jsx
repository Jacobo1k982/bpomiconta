// src/components/ServiciosContables.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaFileInvoice, FaChartLine, FaRegLightbulb, FaUsers, FaHandHoldingUsd, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";

const ServiciosContables = () => {
    const servicios = [
        {
            icon: <FaBalanceScale className="text-teal-400 text-3xl" />,
            title: "Contabilidad para PYMES",
            description: "Llevamos tu contabilidad completa bajo normas NIC, cumpliendo con Hacienda y listos para auditorías."
        },
        {
            icon: <FaFileInvoice className="text-teal-400 text-3xl" />,
            title: "Declaraciones Mensuales",
            description: "Presentación oportuna de tus declaraciones de renta, IVA y otros impuestos sin preocupaciones."
        },
        {
            icon: <FaChartLine className="text-teal-400 text-3xl" />,
            title: "Estado de Resultados",
            description: "Reportes claros y mensuales para que tomes decisiones financieras informadas."
        },
        {
            icon: <MdOutlineAutoAwesome className="text-teal-400 text-3xl" />,
            title: "Régimen Simplificado",
            description: "Ideal para pequeños contribuyentes. Cumplimos con todos los requisitos sin complicaciones."
        },
        {
            icon: <FaRegLightbulb className="text-teal-400 text-3xl" />,
            title: "Asesoría Fiscal",
            description: "Optimizamos tu carga tributaria legalmente y te preparamos para cambios en la ley."
        },
        {
            icon: <FaHandHoldingUsd className="text-teal-400 text-3xl" />,
            title: "Gestión de Nómina",
            description: "Cálculo de salarios, pagos de seguridad social y reportes mensuales al INS y CCSS."
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-28">
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
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent)'
                }}
            />

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>

                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#serviceGradient)" />
                    <defs>
                        <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas animadas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 20 + 6 + 'px',
                            height: Math.random() * 20 + 6 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 250 - 125) + 'px'],
                            x: [null, (Math.random() * 150 - 75) + 'px'],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 25 + 15,
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
                        className="inline-block mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        SERVICIOS CONTABLES
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6">
                        Contabilidad para PYMES en Costa Rica
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Simplificamos tu gestión contable y fiscal para que te enfoques en hacer crecer tu negocio.
                        Ideal para empresas bajo régimen general o simplificado.
                    </p>
                </motion.div>

                {/* Tarjetas de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 * index, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-lg hover:shadow-2xl group cursor-default"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    {servicio.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{servicio.title}</h3>
                                <p className="text-slate-300 leading-relaxed">{servicio.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -8px rgba(20, 184, 166, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        href="https://wa.me/50687905876"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span className="relative z-10">Cotiza tu servicio contable</span>
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

export default ServiciosContables;