import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importa Link
import { FaBalanceScale, FaFileInvoiceDollar, FaChartLine, FaHandHoldingUsd, FaBook, FaRegCheckCircle } from 'react-icons/fa';

const ContabilidadFinanciera = () => {
    const servicios = [
        {
            icon: <FaBalanceScale className="text-4xl text-blue-400" />,
            title: "Regulación Contable",
            description: "Cumplimiento estricto con la Ley de Regulación del Ejercicio de la Contaduría Pública y Normas Internacionales de Información Financiera (NIIF) aplicables en Costa Rica."
        },
        {
            icon: <FaFileInvoiceDollar className="text-4xl text-blue-400" />,
            title: "Gestión Tributaria",
            description: "Elaboración y presentación de declaraciones ante el Ministerio de Hacienda, incluyendo IVA, Impuesto sobre la Renta y otros tributos según el Código de Normas y Procedimientos Tributarios."
        },
        {
            icon: <FaChartLine className="text-4xl text-blue-400" />,
            title: "Estados Financieros",
            description: "Preparación de balances generales, estados de resultados y flujos de efectivo conforme a los requerimientos de la Superintendencia General de Entidades Financieras (SUGEF) cuando aplica."
        },
        {
            icon: <FaHandHoldingUsd className="text-4xl text-blue-400" />,
            title: "Auditorías Financieras",
            description: "Servicios de auditoría independiente según Normas Internacionales de Auditoría (NIA) requeridas por la Ley 8422 para entidades reguladas."
        },
        {
            icon: <FaBook className="text-4xl text-blue-400" />,
            title: "Contabilidad Electrónica",
            description: "Implementación de sistemas contables digitales cumpliendo con los requisitos del Reglamento de Factura Electrónica y Conservación de Documentos."
        },
        {
            icon: <FaRegCheckCircle className="text-4xl text-blue-400" />,
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
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
            {/* Efecto de partículas */}
            <div className="absolute inset-0 opacity-10">
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
                        Cumplimiento Legal en Costa Rica
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
                            Contabilidad Financiera
                        </span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                        Servicios profesionales de contabilidad financiera adaptados a la normativa costarricense y estándares internacionales
                    </p>
                </motion.div>

                {/* Servicios */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-6 p-4 rounded-full bg-blue-900/30 border border-blue-400/20 group-hover:bg-blue-800/50 transition-colors">
                                        {servicio.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{servicio.title}</h3>
                                    <p className="text-blue-100">{servicio.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Marco Legal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-3xl p-0.5 mb-16"
                >
                    <div className="bg-gray-900/80 backdrop-blur-md rounded-[calc(1.5rem-1px)] p-12">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
                                Marco Legal de la Contabilidad en Costa Rica
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {requisitosLegales.map((requisito, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-400/30 transition-colors"
                                    >
                                        <div className="flex-shrink-0 mt-1 mr-4">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-teal-400"></div>
                                        </div>
                                        <span className="text-blue-100 text-lg">{requisito}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-semibold text-blue-300 mb-6">
                        ¿Necesita asesoría especializada en contabilidad financiera?
                    </h3>
                    <Link to="/contacto"> {/* Cambio a Link */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            Solicitar Consultoría Gratuita
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ContabilidadFinanciera;