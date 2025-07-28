// src/components/FacturacionElectronica.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiLock, FiBarChart2, FiTrendingUp, FiCheckCircle, FiArrowRight, FiShield, FiDatabase } from 'react-icons/fi';

const FacturacionElectronica = () => {
    const benefits = [
        {
            title: "Compliance 100% SAT",
            description: "Sistema certificado que garantiza la validez fiscal de tus comprobantes.",
            icon: <FiFileText className="text-blue-400 text-xl" />, // Tamaño aumentado
            color: "from-blue-500/10 to-blue-400/10"
        },
        {
            title: "Control en Tiempo Real",
            description: "Monitoreo instantáneo de todos tus comprobantes y su estatus fiscal.",
            icon: <FiBarChart2 className="text-teal-400 text-xl" />, // Tamaño aumentado
            color: "from-teal-500/10 to-teal-400/10"
        },
        {
            title: "Automatización Total",
            description: "Generación, envío y archivo automático de facturas y comprobantes.",
            icon: <FiTrendingUp className="text-purple-400 text-xl" />, // Tamaño aumentado
            color: "from-purple-500/10 to-purple-400/10"
        },
        {
            title: "Integración Flexible",
            description: "Conecta con tu sistema contable y ERP favorito sin complicaciones.",
            icon: <FiDatabase className="text-amber-400 text-xl" />, // Tamaño aumentado
            color: "from-amber-500/10 to-amber-400/10"
        }
    ];

    const services = [
        "Emisión de CFDI 4.0",
        "Cancelación de Facturas",
        "Timbrado Electrónico",
        "Reportes Fiscales",
        "Integración con Contabilidad",
        "Soporte Técnico Especializado"
    ];

    const trustFactors = [
        { number: "10+", label: "Años de Experiencia", icon: <FiFileText className="text-blue-400 text-xl" /> }, // Tamaño aumentado
        { number: "1500+", label: "Empresas Certificadas", icon: <FiCheckCircle className="text-teal-400 text-xl" /> }, // Tamaño aumentado
        { number: "99.9%", label: "Disponibilidad del Sistema", icon: <FiShield className="text-purple-400 text-xl" /> }, // Tamaño aumentado
        { number: "0", label: "Errores Reportados", icon: <FiLock className="text-amber-400 text-xl" /> } // Tamaño aumentado
    ];

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950/20 text-white overflow-hidden">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-3"> {/* Opacidad reducida */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            {/* Brillo animado sutil en el fondo - Mejorado */}
            <motion.div
                className="absolute inset-0 opacity-5" // Opacidad reducida
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 25, // Más lento
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)' // Color blue-500 con menos opacidad
                }}
            />
            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => ( // Más partículas
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20" // Colores coherentes
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 25 + 5 + 'px', // Mayor variación de tamaño
                            height: Math.random() * 25 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 300 - 150) + 'px'], // Mayor rango de movimiento
                            x: [null, (Math.random() * 200 - 100) + 'px'],
                            opacity: [0.1, 0.4, 0.1], // Parpadeo más pronunciado
                            scale: [1, 1.3, 1] // Escala ligeramente mayor
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20, // Duraciones más lentas y variadas: 20-50s
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header con estilo moderno y colores coherentes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 mb-6"
                    >
                        <FiLock className="text-blue-400 mr-2" />
                        <span className="text-xs font-semibold text-blue-300 tracking-widest">FACTURACIÓN DIGITAL CERTIFICADA</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
                            Facturación Electrónica
                        </span>
                        <span className="block mt-2 text-white/90">
                            Simplifica tu Obligación Fiscal
                        </span>
                    </h2>
                    <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
                        Emite, gestiona y controla todos tus comprobantes fiscales con la máxima seguridad,
                        legalidad y eficiencia que tu empresa merece. Nuestro sistema certificado por el SAT
                        te garantiza el cumplimiento y la tranquilidad fiscal.
                    </p>
                </motion.div>
                {/* Trust factors mejorados con efectos hover */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -8, scale: 1.03 }} // Efecto lift y escala aumentados
                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-md hover:shadow-lg" // Sombra mejorada
                        >
                            {/* Icono con efecto hover */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }} // Efecto de escala y rotación
                                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4"
                            >
                                {factor.icon}
                            </motion.div>
                            <p className="text-2xl md:text-3xl font-bold text-white mb-1">{factor.number}</p>
                            <p className="text-sm text-blue-200/80">{factor.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
                    {/* Left content - Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            Solución Integral de Facturación Digital
                        </h3>
                        <p className="text-blue-100/90 mb-8 leading-relaxed">
                            Nuestro sistema de facturación electrónica certificado te permite
                            emitir comprobantes válidos ante el SAT, controlar su estatus en tiempo
                            real y cumplir con todas las obligaciones fiscales sin complicaciones.
                        </p>
                        <div className="grid grid-cols-1 gap-4 mb-10">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.05)", scale: 1.01 }} // Efecto lift, cambio de fondo y escala
                                    className="flex items-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300 group shadow-sm hover:shadow-md" // Sombra mejorada
                                >
                                    {/* Icono del servicio con efecto hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 mr-4 group-hover:bg-blue-500/20 transition-colors"
                                    >
                                        <FiCheckCircle className="text-blue-400" />
                                    </motion.div>
                                    <span className="text-blue-100 font-medium">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                        {/* Botón CTA con efecto shine mejorado */}
                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4), 0 5px 15px -5px rgba(59, 130, 246, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span className="relative z-10 flex items-center">
                                Sistema de Facturación Gratis
                                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            {/* Efecto Shine en el botón */}
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                        </motion.button>
                    </motion.div>
                    {/* Right content - Benefits visualization mejorada */}
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
                                        <FiLock className="mr-1" />
                                        <span className="text-xs font-medium">SEGURIDAD GARANTIZADA</span>
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
                                            whileHover={{ y: -5, scale: 1.02 }} // Efecto lift y escala aumentados
                                            className="group"
                                        >
                                            <div className={`p-5 rounded-2xl bg-gradient-to-br ${benefit.color} backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-md hover:shadow-lg`}> {/* Sombra mejorada */}
                                                <div className="flex items-start">
                                                    {/* Icono del beneficio con efecto hover */}
                                                    <motion.div
                                                        whileHover={{ scale: 1.15, rotate: 5 }} // Efecto de escala y rotación
                                                        className="flex-shrink-0 p-3 rounded-xl bg-white/5 mr-4 group-hover:bg-white/10 transition-colors"
                                                    >
                                                        {benefit.icon}
                                                    </motion.div>
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
                        {/* Floating elements mejorados */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/5 filter blur-2xl"
                            animate={{
                                y: [0, -15, 0], // Movimiento aumentado
                                x: [0, 10, 0], // Movimiento aumentado
                                opacity: [0.3, 0.6, 0.3] // Opacidad ajustada
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
                                y: [0, 15, 0], // Movimiento aumentado
                                x: [0, -10, 0], // Movimiento aumentado
                                opacity: [0.3, 0.6, 0.3] // Opacidad ajustada
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
                {/* Security section mejorada */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -5 }} // Efecto lift en el contenedor de seguridad
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl overflow-hidden relative" // Sombra mejorada y overflow hidden
                >
                    {/* Elementos flotantes decorativos en la seguridad */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-500/5 filter blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-indigo-600/5 filter blur-2xl animate-pulse-slow-reverse"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-teal-500/5 filter blur-xl animate-pulse-slow"></div>
                    <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-purple-500/5 filter blur-xl animate-pulse-slow-reverse"></div>

                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-6">
                            <FiShield className="text-blue-400 text-2xl" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Seguridad y Confiabilidad</h4>
                        <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                            Tu información fiscal está protegida con los más altos estándares de seguridad.
                            Nuestra infraestructura certificada garantiza la integridad, confidencialidad
                            y disponibilidad de tus datos en todo momento.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { stat: "SSL 256-bit", label: "Encriptación de Datos", desc: "Protección avanzada en tránsito" },
                                { stat: "ISO 27001", label: "Certificación de Seguridad", desc: "Estándar internacional cumplido" },
                                { stat: "99.99%", label: "Respaldo Automático", desc: "Protección contra pérdida de datos" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.03 }} // Efecto lift y escala aumentados
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-md hover:shadow-lg" // Sombra mejorada
                                >
                                    <p className="text-3xl font-bold text-blue-300 mb-2">{item.stat}</p>
                                    <p className="font-semibold text-white mb-1">{item.label}</p>
                                    <p className="text-sm text-blue-200/80">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Animaciones CSS personalizadas */}
            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% { opacity: 0.3; transform: scale(1.05); }
                    50% { opacity: 0.6; transform: scale(1); }
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

export default FacturacionElectronica;