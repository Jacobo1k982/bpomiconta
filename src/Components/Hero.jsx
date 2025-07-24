import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiCheckCircle, FiArrowRight, FiPieChart, FiActivity, FiChevronDown } from 'react-icons/fi';

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
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950/20 text-white overflow-hidden pt-16 pb-24">
            {/* Enhanced subtle animated background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Soft radial gradients for depth */}
                <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full filter blur-3xl animate-pulse-slow-reverse"></div>

                {/* Minimalist geometric lines for sophistication */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#93c5fd" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <line x1="10" y1="20" x2="90" y2="20" stroke="url(#lineGradient)" strokeWidth="0.1" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="url(#lineGradient)" strokeWidth="0.1" />
                    <line x1="15" y1="80" x2="85" y2="80" stroke="url(#lineGradient)" strokeWidth="0.1" />
                </svg>

                {/* Refined floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-400/10 border border-white/5"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 3
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Text content - Refined spacing and typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Updated tag for a more premium feel */}
                        <motion.div
                            className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 mb-8"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                            <span className="text-xs font-semibold text-blue-300 tracking-widest">FINANZAS INTELIGENTES 2025</span>
                        </motion.div>

                        {/* Streamlined headline with refined gradient */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
                                Transformación
                            </span>
                            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                Financiera Digital
                            </span>
                        </h1>

                        {/* Softer, more readable subheading */}
                        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
                            Soluciones contables basadas en datos para una toma de decisiones estratégica que impulse el crecimiento sostenible de tu organización.
                        </p>

                        {/* Refined buttons with smoother shadows and transitions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                            <motion.button
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4), 0 5px 15px -5px rgba(59, 130, 246, 0.2)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    Solicitar Auditoría
                                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.04,
                                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                                    borderColor: "rgba(165, 180, 252, 0.5)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="border border-blue-400/30 text-blue-100 px-8 py-4 rounded-xl font-semibold text-base hover:border-blue-300/50 hover:bg-blue-900/10 transition-all duration-300 flex items-center justify-center"
                            >
                                Explorar Servicios
                                <FiArrowRight className="ml-2 text-blue-300" />
                            </motion.button>
                        </div>

                        {/* Features grid - Slightly increased spacing */}
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-center p-3.5 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <span className="text-blue-100 text-sm font-medium">{feature.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dashboard visualization - Enhanced glass morphism and subtle animations */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Main dashboard card with improved glass effect */}
                        <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-blue-900/5 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/15 shadow-2xl">
                            <div className="bg-gradient-to-br from-gray-900/70 to-blue-900/10 rounded-3xl p-8 h-full">
                                {/* Dashboard header - Refined typography and spacing */}
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Dashboard Financiero</h3>
                                        <p className="text-sm text-blue-300/70 mt-1 font-light">Análisis en tiempo real</p>
                                    </div>
                                    <div className="flex items-center bg-gradient-to-r from-green-500/15 to-teal-500/15 text-green-300 px-3 py-1.5 rounded-full border border-green-500/20">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                        <span className="text-xs font-medium tracking-wider">EN VIVO</span>
                                    </div>
                                </div>

                                {/* Chart visualization - More refined bars and animations */}
                                <div className="h-56 flex items-end space-x-1.5 mb-10 relative">
                                    {/* Chart grid lines - Subtler */}
                                    <div className="absolute inset-0 flex flex-col justify-between pb-8">
                                        {[0, 1, 2, 3, 4].map((line) => (
                                            <div key={line} className="h-px bg-white/3"></div>
                                        ))}
                                    </div>
                                    {/* Animated bars with smoother spring and refined colors */}
                                    {[30, 50, 45, 70, 65, 90, 75, 60, 80, 55, 72, 68].map((height, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: `${height}%`, opacity: 1 }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.5 + index * 0.07,
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 80
                                            }}
                                            className={`relative flex-1 rounded-t-md ${index % 4 === 0 ? 'bg-gradient-to-t from-blue-500 to-blue-400/90' :
                                                    index % 4 === 1 ? 'bg-gradient-to-t from-teal-500 to-teal-400/90' :
                                                        index % 4 === 2 ? 'bg-gradient-to-t from-purple-500 to-purple-400/90' :
                                                            'bg-gradient-to-t from-amber-500 to-amber-400/90'
                                                } shadow-sm`}
                                        >
                                            {/* Value label - More subtle */}
                                            <motion.div
                                                className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-[10px] font-semibold text-white/80 bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/5"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
                                                transition={{
                                                    delay: 2 + index * 0.07,
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    repeatDelay: 4
                                                }}
                                            >
                                                {height}%
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Metrics grid - Refined card design */}
                                <div className="grid grid-cols-3 gap-4">
                                    {metrics.map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -6 }}
                                            transition={{ 
                                                delay: 1 + index * 0.1, 
                                                type: "spring", 
                                                stiffness: 300, 
                                                damping: 20 
                                            }}
                                            className="bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-blue-400/20 transition-all duration-300 group"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-medium text-blue-300/80 tracking-wide">{metric.label}</span>
                                                {metric.icon}
                                            </div>
                                            <div className="flex items-baseline">
                                                <p className="text-2xl font-bold text-white tracking-tight">{metric.value}</p>
                                                <span className="ml-2 text-xs font-bold text-green-400 flex items-center">
                                                    {metric.change}
                                                    <FiArrowRight className="ml-1" size={11} />
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative elements - More subtle */}
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
            </div>

            {/* Scroll indicator - Refined */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
            >
                <span className="text-blue-300/80 text-xs mb-2 font-light tracking-wide">Explorar servicios</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-blue-400"
                >
                    <FiChevronDown size={20} />
                </motion.div>
            </motion.div>

            {/* Custom animation styles */}
            <style>{`
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

export default HeroFinanzas;
