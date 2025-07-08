import React from "react";
import { motion } from "framer-motion";
import pasosData from "../data/gestionInventario.json";
import {
    FaBoxes, FaCheckCircle, FaTruckLoading,
    FaClipboardList, FaWarehouse, FaChartLine
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const GestionInventario = () => {
    const iconComponents = {
        FaTruckLoading,
        FaClipboardList,
        FaWarehouse,
        FaBoxes,
        FaCheckCircle,
        FaChartLine
    };

    const benefits = [
        "Disponibilidad garantizada de productos",
        "Reducción de pérdidas por vencimiento",
        "Optimización del espacio de almacén",
        "Datos en tiempo real para análisis",
        "Automatización de procesos clave",
        "Integración con otros sistemas"
    ];

    return (
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
            {/* Efecto de partículas */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.3, 0.8, 0.3]
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
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block mb-4 text-blue-300 font-medium tracking-widest text-sm uppercase">
                        Gestión Inteligente
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
                            Sistema de Inventario
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Tecnología avanzada para el control preciso de su cadena de suministro y gestión de almacenes.
                    </p>
                </motion.div>

                {/* Pasos del proceso */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-28">
                    {pasosData.map((paso, index) => {
                        const IconComponent = iconComponents[paso.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden relative">
                                    {/* Efecto de borde luminoso */}
                                    <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-blue-400/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent rounded-2xl"></div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-6">
                                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                                                <IconComponent className="text-2xl text-white" />
                                            </div>
                                            <span className="ml-4 text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
                                                Paso {index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">{paso.titulo}</h3>
                                        <p className="text-blue-100 mb-6">{paso.descripcion}</p>
                                        <div className="flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
                                            <span className="text-sm font-medium">Ver detalles</span>
                                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Beneficios */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-3xl p-0.5"
                >
                    <div className="bg-gray-900/80 backdrop-blur-md rounded-[calc(1.5rem-1px)] p-12">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
                                    Beneficios Clave
                                </span>
                            </h3>
                            <p className="text-blue-200">
                                Nuestra solución transforma radicalmente la gestión de inventarios
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-start p-5 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors"
                                >
                                    <div className="flex-shrink-0 mt-1 mr-4">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-teal-400"></div>
                                    </div>
                                    <span className="text-blue-100 text-lg">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GestionInventario;