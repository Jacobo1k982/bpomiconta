import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiDollarSign, FiClock, FiLock, FiBarChart2, FiSend, FiZap, FiArrowRight, FiTrendingUp, FiShield } from 'react-icons/fi';

const SistemasFacturacion = () => {
    const benefits = [
        {
            title: "Precisión y Rapidez",
            description: "Elimina errores manuales y genera facturas en segundos con datos pre-cargados.",
            icon: <FiZap className="text-blue-400" />,
            color: "from-blue-500/10 to-blue-400/10"
        },
        {
            title: "Cumplimiento Legal",
            description: "Actualizaciones automáticas para cumplir con las normativas fiscales vigentes.",
            icon: <FiShield className="text-teal-400" />,
            color: "from-teal-500/10 to-teal-400/10"
        },
        {
            title: "Automatización Total",
            description: "Envío automático, recordatorios y seguimiento de pagos pendientes.",
            icon: <FiSend className="text-purple-400" />,
            color: "from-purple-500/10 to-purple-400/10"
        },
        {
            title: "Control Financiero",
            description: "Visualiza ingresos, gastos y flujo de caja en tiempo real.",
            icon: <FiBarChart2 className="text-amber-400" />,
            color: "from-amber-500/10 to-amber-400/10"
        },
        {
            title: "Ahorro de Tiempo",
            description: "Reduce horas de trabajo administrativo y enfócate en tu negocio.",
            icon: <FiClock className="text-indigo-400" />,
            color: "from-indigo-500/10 to-indigo-400/10"
        },
        {
            title: "Seguridad de Datos",
            description: "Protección avanzada y copias de seguridad automáticas en la nube.",
            icon: <FiLock className="text-rose-400" />,
            color: "from-rose-500/10 to-rose-400/10"
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

    return (
        <section className="relative py-28 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950/20 text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full filter blur-3xl animate-pulse-slow-reverse"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 gap-8 h-full">
                        {[...Array(144)].map((_, i) => (
                            <div key={i} className="border-r border-b border-white/5"></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 mb-6">
                        <FiTrendingUp className="text-blue-400 mr-2" />
                        <span className="text-xs font-semibold text-blue-300 tracking-widest">EVOLUCIÓN DIGITAL</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
                            Sistemas de Facturación
                        </span>
                        <span className="block mt-2 text-white/90">
                            Transforma tu Gestión Financiera
                        </span>
                    </h2>

                    <p className="text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-light">
                        En la era digital, un sistema de facturación eficiente no es un lujo,
                        es una necesidad fundamental para el crecimiento y la sostenibilidad de cualquier negocio.
                    </p>
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
                    {/* Left content - Importance */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            ¿Por qué es crucial un sistema moderno de facturación?
                        </h3>

                        <p className="text-blue-100/90 mb-8 leading-relaxed">
                            La facturación manual es obsoleta y propensa a errores. Un sistema digital
                            automatiza procesos, garantiza precisión y proporciona análisis valiosos para
                            decisiones estratégicas. Es la columna vertebral de una operación empresarial eficiente.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10"
                                >
                                    <FiCheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                                    <span className="text-blue-100 text-sm font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4), 0 5px 15px -5px rgba(59, 130, 246, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                        >
                            <span className="relative z-10 flex items-center">
                                Solicitar Demostración
                                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Right content - Benefits visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-blue-900/5 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/15 shadow-2xl">
                            <div className="bg-gradient-to-br from-gray-900/70 to-blue-900/10 rounded-3xl p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="text-xl font-semibold text-white">Beneficios Clave</h4>
                                    <div className="flex items-center bg-gradient-to-r from-green-500/15 to-teal-500/15 text-green-300 px-3 py-1.5 rounded-full border border-green-500/20">
                                        <FiDollarSign className="mr-1" />
                                        <span className="text-xs font-medium">ROI +45%</span>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * index }}
                                            whileHover={{ y: -5 }}
                                            className="group"
                                        >
                                            <div className={`p-5 rounded-2xl bg-gradient-to-br ${benefit.color} backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300`}>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 mr-4 group-hover:bg-white/10 transition-colors">
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-white mb-1">{benefit.title}</h5>
                                                        <p className="text-sm text-blue-100/80">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/5 filter blur-2xl"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 8, 0],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-indigo-600/5 filter blur-2xl"
                            animate={{
                                y: [0, 10, 0],
                                x: [0, -8, 0],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>

                {/* Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "85%", label: "Reducción de errores", icon: <FiCheckCircle className="text-green-400" /> },
                            { value: "70%", label: "Ahorro de tiempo", icon: <FiClock className="text-blue-400" /> },
                            { value: "95%", label: "Cumplimiento fiscal", icon: <FiShield className="text-teal-400" /> },
                            { value: "3x", label: "Mayor productividad", icon: <FiTrendingUp className="text-purple-400" /> }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4">
                                    {stat.icon}
                                </div>
                                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-sm text-blue-200/80">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.05; transform: scale(1); }
                    50% { opacity: 0.1; transform: scale(1.05); }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% { opacity: 0.05; transform: scale(1.05); }
                    50% { opacity: 0.1; transform: scale(1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-pulse-slow-reverse {
                    animation: pulse-slow-reverse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </section>
    );
};

export default SistemasFacturacion;