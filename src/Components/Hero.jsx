import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiCheckCircle, FiArrowRight, FiPieChart, FiActivity } from 'react-icons/fi';

const HeroFinanzas = () => {
    const metrics = [
        { value: "24.5%", label: "ROI Anual", icon: <FiTrendingUp className="text-blue-400" />, change: "+2.3%" },
        { value: "+37%", label: "Ahorro Fiscal", icon: <FiDollarSign className="text-teal-400" />, change: "+5.1%" },
        { value: "95%", label: "Clientes Satisfechos", icon: <FiCheckCircle className="text-purple-400" />, change: "+3.7%" }
    ];

    const features = [
        { name: "Certificados Ingresos", icon: <FiCheckCircle className="text-blue-400" /> },
        { name: "Analítica Financiera", icon: <FiBarChart2 className="text-teal-400" /> },
        { name: "Reportes Personalizados", icon: <FiPieChart className="text-purple-400" /> },
        { name: "Optimización Fiscal", icon: <FiActivity className="text-amber-400" /> }
    ];

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900/90 to-indigo-900 text-white overflow-hidden pt-10">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/3 -right-40 w-[400px] h-[400px] bg-indigo-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>

                {/* Geometric pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="rgba(59, 130, 246, 0.05)"
                    />
                    <path
                        d="M0,0 L100,0 L50,50 L0,100 Z"
                        fill="rgba(99, 102, 241, 0.05)"
                        className="animate-pulse"
                    />
                </svg>

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 10 + 2}px`,
                            height: `${Math.random() * 10 + 2}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                            <span className="text-sm font-semibold text-blue-300 tracking-wide">FINANZAS INTELIGENTES 2025</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-blue-100">
                                Transformación
                            </span>
                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                Financiera Digital
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Soluciones contables basadas en datos para una toma de decisiones estratégica que impulse el crecimiento sostenible de tu organización.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    Solicitar Auditoría
                                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(99, 102, 241, 0.15)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-blue-300/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-300 hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center"
                            >
                                Explorar Servicios
                                <FiArrowRight className="ml-2" />
                            </motion.button>
                        </div>

                        {/* Features grid */}
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 mr-3 group-hover:bg-blue-500/20 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <span className="text-blue-100 text-sm font-semibold">{feature.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dashboard visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main dashboard card */}
                        <div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/10 shadow-2xl">
                            <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/20 rounded-3xl p-8 h-full">
                                {/* Dashboard header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Dashboard Financiero</h3>
                                        <p className="text-sm text-blue-300/80 mt-1">Análisis en tiempo real</p>
                                    </div>
                                    <div className="flex items-center bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 px-3 py-1.5 rounded-full border border-green-500/30">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                        <span className="text-xs font-semibold">EN VIVO</span>
                                    </div>
                                </div>

                                {/* Chart visualization */}
                                <div className="h-56 flex items-end space-x-1.5 mb-10 relative">
                                    {/* Chart grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pb-8">
                                        {[0, 1, 2, 3, 4].map((line) => (
                                            <div key={line} className="h-px bg-white/5"></div>
                                        ))}
                                    </div>

                                    {/* Animated bars */}
                                    {[30, 50, 45, 70, 65, 90, 75, 60, 80, 55, 72, 68].map((height, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{
                                                duration: 1.5,
                                                delay: index * 0.08,
                                                type: "spring",
                                                damping: 12,
                                                stiffness: 100
                                            }}
                                            className={`relative flex-1 rounded-t-lg ${index % 4 === 0 ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                                                    index % 4 === 1 ? 'bg-gradient-to-t from-teal-500 to-teal-400' :
                                                        index % 4 === 2 ? 'bg-gradient-to-t from-purple-500 to-purple-400' :
                                                            'bg-gradient-to-t from-amber-500 to-amber-400'
                                                }`}
                                        >
                                            <motion.div
                                                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{
                                                    delay: 1.5 + index * 0.08,
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatDelay: 3
                                                }}
                                            >
                                                {height}%
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Metrics grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {metrics.map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-semibold text-blue-300/90 tracking-wide">{metric.label}</span>
                                                {metric.icon}
                                            </div>
                                            <div className="flex items-baseline">
                                                <p className="text-2xl font-bold text-white">{metric.value}</p>
                                                <span className="ml-2 text-xs font-bold text-green-400 flex items-center">
                                                    {metric.change}
                                                    <FiArrowRight className="ml-1" size={12} />
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-500/10 filter blur-2xl"
                            animate={{
                                y: [0, -15, 0],
                                x: [0, 10, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-indigo-600/10 filter blur-2xl"
                            animate={{
                                y: [0, 15, 0],
                                x: [0, -10, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 9,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-blue-300 text-sm mb-2">Desplázate para explorar</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroFinanzas;