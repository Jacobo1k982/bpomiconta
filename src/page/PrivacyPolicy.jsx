// src/components/PrivacyPolicy.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaLock, FaUserShield, FaCookie, FaEnvelope, FaFileContract, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";

const PrivacyPolicy = () => {
    // Variantes de animación para secciones
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Variantes de animación para elementos de lista
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
            {/* Fondo con textura sutil de cubos */}
            <div className="absolute inset-0 opacity-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Nueva textura sutil de puntos alineados */}
            <div className="absolute inset-0 opacity-2">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dots.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo */}
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

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>

                {/* Patrón geométrico sutil */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#privacyGradient)" />
                    <defs>
                        <linearGradient id="privacyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas animadas mejoradas */}
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

            <div className="relative max-w-4xl mx-auto p-6">
                <Helmet>
                    <title>Política de Privacidad | BPO Contabilidad</title>
                    <meta
                        name="description"
                        content="Política de Privacidad de BPO Contabilidad. Conoce cómo protegemos tus datos personales."
                    />
                </Helmet>

                {/* Encabezado con estilo moderno */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center justify-center mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        <FaLock className="mr-2" />
                        SEGURIDAD Y TRANSPARENCIA
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6">
                        Política de Privacidad
                    </h1>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl text-slate-300 mb-8">
                            Tu privacidad es nuestra prioridad. Entiende cómo cuidamos tus datos personales.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaFileContract className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">1. Información que Recopilamos</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            En BPO Contabilidad, recopilamos información personal que nos proporcionas voluntariamente, como:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Nombre completo y datos de contacto (email, teléfono)",
                                "Información de facturación (para servicios de pago)",
                                "Datos de navegación (cookies, dirección IP)",
                                "Información de transacciones comerciales"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaShieldAlt className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">2. Uso de la Información</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Utilizamos tus datos para:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Proveer nuestros servicios y procesar transacciones",
                                "Mejorar la experiencia del usuario",
                                "Comunicaciones comerciales legítimas",
                                "Cumplir con obligaciones legales"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaUserShield className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">3. Compartir Información</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            No vendemos tus datos. Podemos compartir información con:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Proveedores de servicios necesarios (ej: procesadores de pago)",
                                "Autoridades cuando lo exija la ley",
                                "Socios comerciales en acuerdos de confidencialidad"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaHeadset className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">4. Derechos del Usuario</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Tienes derecho a:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Acceder, rectificar o eliminar tus datos",
                                "Oponerte al procesamiento de tus datos",
                                "Solicitar la portabilidad de tus datos",
                                "Retirar consentimiento en cualquier momento"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/30"
                        >
                            <p className="text-slate-300">
                                Para ejercer estos derechos, contáctanos en:{" "}
                                <a
                                    href="mailto:privacidad@bpomiconta.com"
                                    className="inline-flex items-center text-teal-300 hover:text-teal-200 font-medium transition-colors"
                                >
                                    <FaEnvelope className="mr-1.5" />
                                    privacidad@bpomiconta.com
                                </a>
                            </p>
                        </motion.div>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaLock className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">5. Seguridad de Datos</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Implementamos medidas técnicas y organizativas para proteger tu información, incluyendo:
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Encriptación de datos sensibles",
                                "Accesos restringidos al personal autorizado",
                                "Revisiones periódicas de seguridad"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaCookie className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">6. Cookies y Tecnologías Similares</h2>
                        </div>
                        <p className="text-slate-300 mb-4">
                            Utilizamos cookies para:
                        </p>
                        <ul className="space-y-3 mb-4">
                            {[
                                "Funcionalidad básica del sitio",
                                "Análisis de tráfico (Google Analytics)",
                                "Personalización de contenido"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-1.5 mr-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-slate-300">
                            Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.
                        </p>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaSyncAlt className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">7. Cambios en esta Política</h2>
                        </div>
                        <p className="text-slate-300">
                            Actualizaremos esta política cuando sea necesario. Te notificaremos sobre cambios significativos.
                        </p>
                    </motion.section>

                    <motion.section
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <FaHeadset className="text-teal-400 text-2xl mr-3" />
                            <h2 className="text-2xl font-bold text-white">8. Contacto</h2>
                        </div>
                        <div className="space-y-3 text-slate-300">
                            <p>
                                Para preguntas sobre privacidad:
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="mr-2 text-teal-400" />
                                Email: <a href="mailto:privacidad@bpomiconta.com" className="ml-2 text-teal-300 hover:text-teal-200 transition-colors">privacidad@bpomiconta.com</a>
                            </p>
                            <p className="flex items-start">
                                <FaUserShield className="mr-2 mt-1 text-teal-400 flex-shrink-0" />
                                Dirección: Calle Topo, Principal Montes de Oca, San Pedro
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Información de actualización */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-slate-400 text-sm"
                >
                    Última actualización: Julio 2025
                </motion.div>
            </div>

            {/* Animaciones CSS personalizadas */}
            <style>{`
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
        </div>
    );
};

export default PrivacyPolicy;