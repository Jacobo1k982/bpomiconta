import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaUser, FaEnvelope, FaHeading, FaComment } from "react-icons/fa";

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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 overflow-hidden">
            {/* Efecto de fondo */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
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

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400">
                            Contacta a Nuestros Expertos
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Completa el formulario y nos comunicaremos contigo inmediatamente vía WhatsApp
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Información de contacto (opcional) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl"
                    >
                        <h3 className="text-2xl font-semibold text-blue-300 mb-6">Información de Contacto</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                </div>
                                <p className="text-blue-100">Horario: Lunes a Viernes, 8am - 5pm</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                </div>
                                <p className="text-blue-100">Email: jgutierrez@bpomiconta.com</p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                                </div>
                                <p className="text-blue-100">Teléfono: +506 8790-5876</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
                    >
                        <AnimatePresence>
                            {enviado && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-green-600/90 text-white px-4 py-3 rounded-lg text-center flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ¡Mensaje preparado para enviar por WhatsApp!
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300">
                                    <FaUser className="text-sm" />
                                </div>
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre completo"
                                    required
                                    className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300">
                                    <FaEnvelope className="text-sm" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    required
                                    className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300">
                                <FaHeading className="text-sm" />
                            </div>
                            <input
                                type="text"
                                name="asunto"
                                placeholder="Asunto"
                                required
                                className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute top-3 left-3 text-blue-300">
                                <FaComment className="text-sm" />
                            </div>
                            <textarea
                                rows="5"
                                name="mensaje"
                                placeholder="Tu mensaje..."
                                required
                                className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-white font-semibold rounded-lg text-lg flex items-center gap-3 justify-center hover:shadow-lg transition-all"
                        >
                            <FaWhatsapp className="text-xl" />
                            Enviar por WhatsApp
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;