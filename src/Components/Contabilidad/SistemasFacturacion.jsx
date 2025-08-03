// src/components/SistemaFacturacion.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    FiCheckCircle,
    FiArrowRight,
    FiBarChart2,
    FiTrendingUp,
    FiDatabase,
    FiClock,
    FiShield,
    FiLock,
    FiUsers
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SistemaFacturacion = () => {
    const benefits = [
        {
            title: "Automatización Inteligente",
            description: "Genera, envía y archiva facturas automáticamente, liberando tiempo para tu negocio.",
            icon: <FiTrendingUp className="text-teal-400 text-xl" />,
        },
        {
            title: "Precisión Garantizada",
            description: "Elimina errores humanos con cálculos automáticos y validación de datos en tiempo real.",
            icon: <FiCheckCircle className="text-emerald-400 text-xl" />,
        },
        {
            title: "Integración Total",
            description: "Conecta sin problemas con tu contabilidad, inventario y otros sistemas empresariales.",
            icon: <FiDatabase className="text-cyan-400 text-xl" />,
        },
        {
            title: "Seguridad de Datos",
            description: "Protección avanzada y copias de seguridad automáticas en la nube.",
            icon: <FiShield className="text-teal-300 text-xl" />,
        },
        {
            title: "Acceso en Tiempo Real",
            description: "Toma decisiones informadas con reportes actualizados 24/7 desde cualquier dispositivo.",
            icon: <FiUsers className="text-emerald-300 text-xl" />,
        },
        {
            title: "Cumplimiento Fiscal",
            description: "Emite facturas electrónicas conforme a las normativas locales e internacionales.",
            icon: <FiLock className="text-teal-400 text-xl" />,
        }
    ];

    const features = [
        "Facturación Electrónica",
        "Integración Contable",
        "Multi-Plataforma",
        "Reportes Personalizados",
        "Soporte Técnico 24/7",
        "Actualizaciones Automáticas"
    ];

    const metrics = [
        { value: "85%", label: "Reducción de errores", icon: <FiCheckCircle className="text-teal-400" /> },
        { value: "70%", label: "Ahorro de tiempo", icon: <FiClock className="text-emerald-400" /> },
        { value: "95%", label: "Cumplimiento fiscal", icon: <FiShield className="text-teal-400" /> },
        { value: "24/7", label: "Acceso al sistema", icon: <FiUsers className="text-cyan-400" /> }
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden pt-28">
            {/* === FONDO UNIFICADO CON EL HERO === */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

            {/* Textura sutil (igual que en Hero) */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Glows decorativos en esquinas */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-500/3 rounded-full blur-4xl"></div>

            {/* === PARTÍCULAS ULTRA-ELEGANTES === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => {
                    const size = Math.random() * 2 + 1; // 1–3px
                    const duration = Math.random() * 30 + 40; // 40–70s
                    const delay = Math.random() * 10;
                    const opacity = Math.random() * 0.1 + 0.05; // 0.05–0.15

                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                background: `radial-gradient(circle at 30% 30%, rgba(20, 184, 166, ${opacity + 0.1}), rgba(16, 185, 129, ${opacity}))`,
                                boxShadow: `0 0 ${size * 2}px rgba(20, 184, 166, ${opacity})`,
                                transformStyle: "preserve-3d",
                            }}
                            initial={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 8, 0],
                                rotate: [0, 180, 360],
                                scale: [1, 1.2, 1],
                                opacity: [opacity, opacity * 1.5, opacity],
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                delay,
                            }}
                        />
                    );
                })}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600/20 to-emerald-600/20 mb-6">
                        <FiBarChart2 className="text-teal-400 text-2xl" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300">
                            Sistema de Facturación
                        </span>
                        <span className="block mt-2 font-semibold text-white">
                            Digital y Automatizado
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        La facturación manual es obsoleta y propensa a errores. Un sistema digital automatiza procesos, garantiza precisión y proporciona análisis valiosos para decisiones estratégicas. Es la columna vertebral de una operación empresarial eficiente.
                    </p>
                </motion.div>

                {/* Beneficios */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group p-6 bg-slate-800/20 backdrop-blur-md rounded-xl border border-slate-700/40 hover:border-teal-500/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black/20 flex items-center justify-center border border-teal-500/30 text-teal-300 group-hover:bg-teal-500/10 group-hover:border-teal-400 transition-all">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-base mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Características clave */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-md rounded-2xl border border-slate-700/40 shadow-lg overflow-hidden p-8 mb-16"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">Características Clave</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-sm text-gray-300 group"
                            >
                                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                {feature}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Estadísticas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center border border-teal-500/30">
                                    {metric.icon}
                                </div>
                            </div>
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300">
                                {metric.value}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{metric.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <Link to="/contacto">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-teal-500/20 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            <span className="relative z-10 flex items-center">
                                Solicitar Demostración
                                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SistemaFacturacion;