import React from 'react';
import { motion } from 'framer-motion';

const HeroFinanzas = () => {
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 to-blue-800 text-white overflow-hidden">
            {/* Fondo con elementos gráficos financieros */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-20 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
                <svg
                    className="absolute bottom-0 left-0 w-full opacity-5"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span className="block">Optimiza tus</span>
                            <span className="text-blue-300">Finanzas Empresariales</span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 max-w-lg mb-8">
                            Soluciones contables inteligentes para tomar decisiones estratégicas y maximizar el crecimiento de tu negocio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Solicitar Auditoría
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700/30 transition-all"
                            >
                                Conoce Nuestros Servicios
                            </motion.button>
                        </div>

                        <div className="mt-10 flex items-center space-x-6">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-blue-100">Certificados IFRS</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-blue-100">Analítica Financiera</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-blue-400/20 shadow-2xl">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6">
                                {/* Gráfico financiero animado */}
                                <div className="h-64 flex items-end space-x-2 mb-6">
                                    {[30, 60, 45, 80, 65, 90, 70].map((height, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className={`w-8 ${index === 3 ? 'bg-blue-300' : 'bg-white/70'} rounded-t-md`}
                                        ></motion.div>
                                    ))}
                                </div>

                                {/* Tarjetas de métricas */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <p className="text-blue-200 text-sm">ROI Anual</p>
                                        <p className="text-white text-2xl font-bold">24.5%</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <p className="text-blue-200 text-sm">Ahorro Fiscal</p>
                                        <p className="text-white text-2xl font-bold">+37%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elementos decorativos */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-400/20 filter blur-xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-indigo-500/20 filter blur-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroFinanzas;