import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaFileInvoiceDollar, FaChartLine, FaHandHoldingUsd, FaBook, FaRegCheckCircle } from 'react-icons/fa';

const ContabilidadFinanciera = () => {
    const servicios = [
        {
            icon: <FaBalanceScale className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Regulación Contable",
            description: "Cumplimiento estricto con la Ley de Regulación del Ejercicio de la Contaduría Pública y Normas Internacionales de Información Financiera (NIIF) aplicables en Costa Rica."
        },
        {
            icon: <FaFileInvoiceDollar className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Gestión Tributaria",
            description: "Elaboración y presentación de declaraciones ante el Ministerio de Hacienda, incluyendo IVA, Impuesto sobre la Renta y otros tributos según el Código de Normas y Procedimientos Tributarios."
        },
        {
            icon: <FaChartLine className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Estados Financieros",
            description: "Preparación de balances generales, estados de resultados y flujos de efectivo conforme a los requerimientos de la Superintendencia General de Entidades Financieras (SUGEF) cuando aplica."
        },
        {
            icon: <FaHandHoldingUsd className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Auditorías Financieras",
            description: "Servicios de auditoría independiente según Normas Internacionales de Auditoría (NIA) requeridas por la Ley 8422 para entidades reguladas."
        },
        {
            icon: <FaBook className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Contabilidad Electrónica",
            description: "Implementación de sistemas contables digitales cumpliendo con los requisitos del Reglamento de Factura Electrónica y Conservación de Documentos."
        },
        {
            icon: <FaRegCheckCircle className="text-4xl text-cyan-400 drop-shadow-sm" />,
            title: "Cumplimiento Legal",
            description: "Asesoría en normativas específicas como la Ley contra el Lavado de Dinero y Ley de Fortalecimiento de las Sociedades Cooperativas cuando aplica."
        }
    ];

    const requisitosLegales = [
        "Ley de Regulación del Ejercicio de la Contaduría Pública (Ley 8422)",
        "Código de Comercio de Costa Rica (Artículos 30 al 54 sobre contabilidad mercantil)",
        "Reglamento de Contabilidad para Pequeñas y Medianas Empresas",
        "Normas Técnicas de Contabilidad emitidas por el Colegio de Contadores Públicos",
        "Ley de Fortalecimiento de las Sociedades Cooperativas (Ley 8630)",
        "Reglamento de Factura Electrónica (DGT-R-48-2016)"
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
            {/* Efecto de fondo con textura sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)'
                }}
            />

            {/* Partículas animadas mejoradas */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 20 + 10 + 'px',
                            height: Math.random() * 20 + 10 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 200 - 100) + 'px'],
                            x: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado con estilo moderno */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-300 font-semibold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        Experticia Contable Certificada
                    </motion.span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300">
                            Contabilidad Financiera
                        </span>
                    </h1>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-4">
                            Servicios profesionales de contabilidad financiera adaptados a la normativa costarricense y estándares internacionales
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                {/* Servicios con cards modernas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 p-4 rounded-2xl bg-slate-700/30 border border-slate-600/30 group-hover:bg-cyan-900/20 group-hover:border-cyan-400/30 transition-all duration-300">
                                        {servicio.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-cyan-300 transition-colors">
                                        {servicio.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">{servicio.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Marco Legal con estilo mejorado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative mb-16"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20">
                            <div className="bg-slate-900/80 rounded-2xl p-10">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-3xl font-bold text-center mb-10">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                                            Marco Legal de la Contabilidad en Costa Rica
                                        </span>
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {requisitosLegales.map((requisito, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="flex items-start group"
                                            >
                                                <div className="flex-shrink-0 mt-1 mr-6">
                                                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                                                </div>
                                                <div className="flex-1 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 group-hover:border-cyan-400/30 group-hover:bg-cyan-900/10 transition-all duration-300">
                                                    <span className="text-slate-200 text-lg group-hover:text-slate-100 transition-colors">{requisito}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA con botón moderno */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        ¿Necesita asesoría especializada en contabilidad financiera?
                    </h3>
                    <Link to="/contacto">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.3), 0 10px 10px -6px rgba(6, 182, 212, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
                        >
                            Solicitar Consultoría Gratuita
                        </motion.button>
                    </Link>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-slate-400 mt-6"
                    >
                        Experticia contable al servicio de su crecimiento empresarial
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContabilidadFinanciera;