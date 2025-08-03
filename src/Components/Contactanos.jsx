// src/components/Contactanos.tsx
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
        const texto = `Hola, soy *${nombre}*.\n\nMi correo es: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
        e.target.reset();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 4000);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-teal-400 text-2xl" />, // Tamaño aumentado y color coherente
            title: "Teléfono",
            info: "+506 (87) 905-876"
        },
        {
            icon: <FaEnvelope className="text-teal-400 text-2xl" />,
            title: "Email",
            info: "jgutierrez@bpomiconta.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-teal-400 text-2xl" />,
            title: "Dirección",
            info: "Calle Topo, Principal\nMontes de Oca, San Pedro"
        },
        {
            icon: <FaClock className="text-teal-400 text-2xl" />,
            title: "Horario",
            info: "Lun-Vie: 8:00 AM - 6:00 PM\nSáb: 9:00 AM - 1:00 PM"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-40">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-3"> {/* Opacidad reducida */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            {/* Brillo animado sutil en el fondo - Mejorado y coherente */}
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
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent)' // Color teal-500 con menos opacidad
                }}
            />
            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>
                {/* Patrón geométrico sutil mejorado con degradado coherente */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#contactGradient)" />
                    <defs>
                        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-emerald-400/20" // Colores coherentes
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

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado con estilo moderno y colores coherentes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        CONTACTO DIRECTO
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6"> {/* Degradado coherente */}
                        Estamos aquí para ayudarte
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        ¿Tienes preguntas? ¿Necesitas una cotización? ¿Quieres agendar una consulta? Ponte en contacto con nosotros.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }} // Efecto lift y escala aumentados
                                className="flex items-start p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-lg hover:shadow-xl" // Fondo, borde y sombra mejorados
                            >
                                <div className="flex-shrink-0 mr-6 p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md"> {/* Contenedor del icono mejorado */}
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-300 whitespace-pre-line">{item.info}</p> {/* whitespace-pre-line para mantener saltos de línea */}
                                </div>
                            </motion.div>
                        ))}

                        {/* Botón de WhatsApp con estilo mejorado y efecto shine */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }} // Efecto lift y escala aumentados
                            className="mt-8"
                        >
                            <motion.a
                                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -8px rgba(34, 197, 94, 0.4), 0 5px 15px -5px rgba(34, 197, 94, 0.3)" }} // Sombra coherente con WhatsApp
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/50687905876"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 w-full justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" // Overflow hidden para el efecto shine
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <FaWhatsapp className="text-2xl" />
                                <span className="relative z-10">Enviar mensaje por WhatsApp</span>
                                {/* Efecto Shine en el botón de WhatsApp */}
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Formulario con estilo mejorado y coherente */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-2xl rounded-3xl p-0.5 border border-white/10 shadow-2xl" // Sombra mejorada
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/40 rounded-3xl p-6 md:p-8 h-full">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <FaComment className="text-teal-400" /> {/* Icono coherente */}
                                Envíanos un mensaje
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaUser className="text-slate-500" />
                                            </div>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaEnvelope className="text-slate-500" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="asunto" className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaHeading className="text-slate-500" />
                                        </div>
                                        <input
                                            type="text"
                                            id="asunto"
                                            name="asunto"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 pointer-events-none">
                                            <FaComment className="text-slate-500" />
                                        </div>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows={5}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                {/* Botón Enviar con estilo mejorado y efecto shine */}
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -8px rgba(20, 184, 166, 0.4), 0 5px 15px -5px rgba(20, 184, 166, 0.3)" }} // Sombra coherente
                                    whileTap={{ scale: 0.98 }}
                                    className="relative overflow-hidden rounded-2xl group" // Overflow hidden para el efecto shine
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
                                    >
                                        Enviar Mensaje
                                    </button>
                                    {/* Efecto Shine en el botón de Enviar */}
                                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Mensaje de confirmación con estilo mejorado */}
                <AnimatePresence>
                    {enviado && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed bottom-8 right-8 z-50"
                        >
                            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md border border-teal-400/30">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                <span className="font-medium">Mensaje enviado. ¡Gracias por contactarnos!</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
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

export default Contactanos;