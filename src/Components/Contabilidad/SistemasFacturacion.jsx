// src/components/SistemaFacturacion.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiBarChart2, FiTrendingUp, FiDatabase, FiClock, FiShield, FiLock, FiUsers } from 'react-icons/fi';

const SistemaFacturacion = () => {
    const benefits = [
        {
            title: "Automatización Inteligente",
            description: "Genera, envía y archiva facturas automáticamente, liberando tiempo para tu negocio.",
            icon: <FiTrendingUp className="text-blue-400 text-xl" />, // Tamaño aumentado
            color: "from-blue-500/10 to-blue-400/10"
        },
        {
            title: "Precisión Garantizada",
            description: "Elimina errores humanos con cálculos automáticos y validación de datos en tiempo real.",
            icon: <FiCheckCircle className="text-teal-400 text-xl" />, // Tamaño aumentado
            color: "from-teal-500/10 to-teal-400/10"
        },
        {
            title: "Integración Total",
            description: "Conecta sin problemas con tu contabilidad, inventario y otros sistemas empresariales.",
            icon: <FiDatabase className="text-purple-400 text-xl" />, // Tamaño aumentado
            color: "from-purple-500/10 to-purple-400/10"
        },
        {
            title: "Seguridad de Datos",
            description: "Protección avanzada y copias de seguridad automáticas en la nube.",
            icon: <FiLock className="text-rose-400 text-xl" />, // Tamaño aumentado
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

    const metrics = [
        { value: "85%", label: "Reducción de errores", icon: <FiCheckCircle className="text-green-400 text-xl" /> }, // Tamaño aumentado
        { value: "70%", label: "Ahorro de tiempo", icon: <FiClock className="text-blue-400 text-xl" /> }, // Tamaño aumentado
        { value: "95%", label: "Cumplimiento fiscal", icon: <FiShield className="text-teal-400 text-xl" /> }, // Tamaño aumentado
        { value: "24/7", label: "Acceso al sistema", icon: <FiUsers className="text-indigo-400 text-xl" /> } // Tamaño aumentado
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
                        <FiBarChart2 className="text-blue-400 mr-2" />
                        <span className="text-xs font-semibold text-blue-300 tracking-widest">SISTEMA INTEGRAL</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
                            Sistema de Facturación
                        </span>
                        <span className="block mt-2 text-white/90">
                            Moderno, Rápido y Seguro
                        </span>
                    </h2>
                    <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
                        Transforma tu proceso de facturación con nuestra solución digital avanzada.
                        Automatiza tareas, elimina errores y obtén información valiosa para impulsar
                        el crecimiento de tu empresa con total eficiencia.
                    </p>
                </motion.div>
                {/* Metrics section mejorada */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {metrics.map((metric, index) => (
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
                                {metric.icon}
                            </motion.div>
                            <p className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</p>
                            <p className="text-sm text-blue-200/80">{metric.label}</p>
                        </motion.div>
                    ))}
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
                                    whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.05)", scale: 1.01 }} // Efecto lift, cambio de fondo y escala
                                    className="flex items-center p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300 group shadow-sm hover:shadow-md" // Sombra mejorada
                                >
                                    {/* Icono de la característica con efecto hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex-shrink-0 mr-3 group-hover:text-green-400 transition-colors"
                                    >
                                        <FiCheckCircle className="text-green-400" />
                                    </motion.div>
                                    <span className="text-blue-100 text-sm font-medium">{feature}</span>
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
                                Solicitar Demostración
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
                                        <FiTrendingUp className="mr-1" />
                                        <span className="text-xs font-medium">TRANSFORMACIÓN DIGITAL</span>
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
                {/* Key features section mejorada */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -5 }} // Efecto lift en el contenedor de características
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl overflow-hidden relative" // Sombra mejorada y overflow hidden
                >
                    {/* Elementos flotantes decorativos en las características */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-500/5 filter blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-indigo-600/5 filter blur-2xl animate-pulse-slow-reverse"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-teal-500/5 filter blur-xl animate-pulse-slow"></div>
                    <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-purple-500/5 filter blur-xl animate-pulse-slow-reverse"></div>

                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-6">
                            <FiDatabase className="text-blue-400 text-2xl" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Características que Marcan la Diferencia</h4>
                        <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                            Nuestro sistema de facturación no solo emite comprobantes, sino que se convierte
                            en una herramienta estratégica para gestionar y hacer crecer tu negocio.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { stat: "API Abierta", label: "Integración Personalizada", desc: "Conecta con cualquier sistema" },
                                { stat: "Multi-Moneda", label: "Operaciones Internacionales", desc: "Factura en diferentes divisas" },
                                { stat: "AI-Powered", label: "Reconocimiento Inteligente", desc: "OCR para datos de facturas" }
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
            <style jsx>{`
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

export default SistemaFacturacion;