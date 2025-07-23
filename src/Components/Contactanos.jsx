import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaUser, FaEnvelope, FaHeading, FaComment, FaClock, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contactanos = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const asunto = e.target.asunto.value;
        const mensaje = e.target.mensaje.value;
        const telefono = "50687905876";
        const texto = `Hola, soy *${nombre}*.\nMi correo es: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
        e.target.reset();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 4000);
    };

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>

                {/* Patrón geométrico sutil */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#contactGradient)"
                    />
                    <defs>
                        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                            <stop offset="100%" stopColor="rgb(124, 58, 237)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Efecto de partículas decorativas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400 to-teal-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 8 + 4}px`,
                            height: `${Math.random() * 8 + 4}px`,
                            opacity: 0.1
                        }}
                        animate={{
                            y: [0, (Math.random() * 100 - 50)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0.1, 0.3, 0.1]
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

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-blue-300 shadow-sm border border-blue-200/50 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2.5 h-2.5 bg-blue-400 rounded-full mr-2.5 animate-pulse"></span>
                        Conéctate con nosotros
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-blue-100">
                            Contacta a Nuestros
                        </span>
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            Expertos Financieros
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed"
                    >
                        Completa el formulario y nos comunicaremos contigo inmediatamente vía WhatsApp para resolver tus consultas financieras.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Información de contacto con estilo mejorado */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/10 shadow-2xl"
                    >
                        <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/20 rounded-3xl p-6 md:p-8 h-full">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                Información de Contacto
                            </h3>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start group"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 mt-1 mr-5">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 group-hover:scale-105 transition-transform">
                                            <FaClock className="text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Horario de Atención</h4>
                                        <p className="text-blue-200/80">Lunes a Viernes, 8:00 AM - 5:00 PM</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start group"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 mt-1 mr-5">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 group-hover:scale-105 transition-transform">
                                            <FaEnvelope className="text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Correo Electrónico</h4>
                                        <a href="mailto:jgutierrez@bpomiconta.com" className="text-blue-200/80 hover:text-blue-300 transition-colors">
                                            jgutierrez@bpomiconta.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start group"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 mt-1 mr-5">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 group-hover:scale-105 transition-transform">
                                            <FaPhone className="text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Teléfono</h4>
                                        <a href="tel:+50687905876" className="text-blue-200/80 hover:text-blue-300 transition-colors">
                                            +506 8790-5876
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start group"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 mt-1 mr-5">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30 group-hover:scale-105 transition-transform">
                                            <FaMapMarkerAlt className="text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Dirección</h4>
                                        <p className="text-blue-200/80">
                                            Calle Topo, Principal<br />
                                            Montes de Oca, San Pedro
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Tarjeta de WhatsApp destacada */}
                            <motion.div
                                className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <FaWhatsapp className="text-2xl text-green-400" />
                                    <h4 className="text-lg font-bold text-white">Respuesta Inmediata</h4>
                                </div>
                                <p className="text-green-200/90 text-sm">
                                    Nuestro equipo responde tus mensajes de WhatsApp en menos de 2 horas en horario laboral.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Formulario con estilo mejorado */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/10 shadow-2xl"
                    >
                        <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/20 rounded-3xl p-6 md:p-8 h-full">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/30">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                Envíanos un Mensaje
                            </h3>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <AnimatePresence>
                                    {enviado && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: -20, height: 0 }}
                                            className="bg-gradient-to-r from-green-600/90 to-teal-600/90 text-white px-5 py-4 rounded-xl text-center flex items-center justify-center gap-3 shadow-lg"
                                        >
                                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span className="font-medium">¡Mensaje preparado! Te redirigimos a WhatsApp...</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300">
                                            <FaUser className="text-base" />
                                        </div>
                                        <input
                                            type="text"
                                            name="nombre"
                                            placeholder="Nombre completo"
                                            required
                                            className="bg-white/5 border border-white/10 w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:border-blue-400/30"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300">
                                            <FaEnvelope className="text-base" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Correo electrónico"
                                            required
                                            className="bg-white/5 border border-white/10 w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:border-blue-400/30"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-300">
                                        <FaHeading className="text-base" />
                                    </div>
                                    <input
                                        type="text"
                                        name="asunto"
                                        placeholder="Asunto de tu consulta"
                                        required
                                        className="bg-white/5 border border-white/10 w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:border-blue-400/30"
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute top-4 left-4 text-blue-300">
                                        <FaComment className="text-base" />
                                    </div>
                                    <textarea
                                        rows="5"
                                        name="mensaje"
                                        placeholder="Describe tu consulta financiera..."
                                        required
                                        className="bg-white/5 border border-white/10 w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none transition-all group-hover:border-blue-400/30"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(16, 185, 129, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all group"
                                >
                                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                                    <span>Enviar Consulta por WhatsApp</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>

                                <p className="text-center text-blue-300/70 text-sm">
                                    Al enviar, serás redirigido a WhatsApp para continuar la conversación
                                </p>
                            </motion.form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;