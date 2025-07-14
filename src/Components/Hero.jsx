import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const HeroFinanzas = () => {
    const metrics = [
        { value: "24.5%", label: "ROI Anual", icon: <FiTrendingUp className="text-blue-300" /> },
        { value: "+37%", label: "Ahorro Fiscal", icon: <FiDollarSign className="text-blue-300" /> },
        { value: "95%", label: "Clientes Satisfechos", icon: <FiCheckCircle className="text-blue-300" /> }
    ];

    const features = [
        "Certificados Ingresos",
        "Analítica Financiera",
        "Reportes Personalizados",
        "Optimización Fiscal"
    ];

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Fondo con elementos abstractos modernos */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>

                {/* Patrón geométrico abstracto */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="rgba(59, 130, 246, 0.03)"
                    />
                    <path
                        d="M0,0 L100,0 L50,50 L0,100 Z"
                        fill="rgba(99, 102, 241, 0.03)"
                        className="animate-pulse"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-blue-300">Finanzas Inteligentes</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Transformación</span>
                            <span className="block">Financiera Digital</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/90 max-w-lg mb-8 leading-relaxed">
                            Soluciones contables basadas en datos para una toma de decisiones estratégica que impulse el crecimiento sostenible de tu organización.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <span className="relative z-10">Solicitar Auditoría</span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 hover:opacity-100 transition-opacity"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                    backgroundColor: "rgba(99, 102, 241, 0.2)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-blue-300/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-300 transition-all"
                            >
                                Explorar Servicios
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="flex-shrink-0 bg-blue-500/10 p-1.5 rounded-lg mr-3">
                                        <FiCheckCircle className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-blue-100 text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Tarjeta de gráfico principal */}
                        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-1 border border-white/10 shadow-2xl">
                            <div className="bg-gradient-to-br from-gray-900 to-blue-900/70 rounded-2xl p-8 h-full">
                                {/* Encabezado del dashboard */}
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-lg font-semibold text-blue-200">Dashboard Financiero</h3>
                                    <div className="text-xs bg-blue-800/30 text-blue-300 px-3 py-1 rounded-full">
                                        Tiempo Real
                                    </div>
                                </div>

                                {/* Gráfico animado moderno */}
                                <div className="h-52 flex items-end space-x-1 mb-8">
                                    {[30, 50, 45, 70, 65, 90, 75, 60, 80, 55].map((height, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{
                                                duration: 1,
                                                delay: index * 0.1,
                                                type: "spring",
                                                damping: 10
                                            }}
                                            className={`relative flex-1 rounded-t-md ${index % 3 === 0 ? 'bg-blue-400' : 'bg-blue-300/70'}`}
                                        >
                                            <motion.div
                                                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-100 opacity-0"
                                                animate={{ opacity: [0, 1, 0] }}
                                                transition={{
                                                    delay: 1 + index * 0.1,
                                                    duration: 3,
                                                    repeat: Infinity
                                                }}
                                            >
                                                {height}%
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Métricas */}
                                <div className="grid grid-cols-3 gap-4">
                                    {metrics.map((metric, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-blue-300/80">{metric.label}</span>
                                                {metric.icon}
                                            </div>
                                            <p className="text-2xl font-bold text-white">{metric.value}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Elementos decorativos flotantes */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/10 filter blur-lg"
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-indigo-600/10 filter blur-lg"
                            animate={{
                                y: [0, 10, 0],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroFinanzas;