// src/components/GestionInventario.tsx
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
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden pt-28">
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
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#inventarioGradient)" />
                    <defs>
                        <linearGradient id="inventarioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                        GESTIÓN INTELIGENTE
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6">
                        Sistema de Inventario
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-8">
                            Tecnología avanzada para el control preciso de su cadena de suministro y gestión de almacenes.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                {/* Pasos del proceso con cards modernas y animación de entrada */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
                    {pasosData.map((paso, index) => {
                        const IconComponent = iconComponents[paso.icon];
                        return (
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
                                    <div className="flex items-center mb-6">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg">
                                            <IconComponent className="text-2xl text-white" />
                                        </div>
                                        <span className="ml-4 text-sm font-medium text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full border border-teal-700/30">
                                            Paso {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-teal-200 transition-colors">{paso.titulo}</h3>
                                    <p className="text-slate-300 mb-6 flex-grow">{paso.descripcion}</p>
                                    <div className="flex items-center text-teal-300 group-hover:text-teal-200 transition-colors mt-auto">
                                        <span className="text-sm font-medium">Ver detalles</span>
                                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Beneficios con estilo moderno y coherente */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300">
                            Beneficios Clave
                        </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
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
                                <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
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

export default GestionInventario;