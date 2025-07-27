// src/components/SobreNosotros.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiEye, FiHeart, FiUsers, FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SobreNosotros = () => {
    // Datos simulados - en una implementación real, estos vendrían de un archivo JSON o API
    const contenido = [
        {
            "id": 1,
            "tipo": "titulo",
            "texto": "¿Quiénes Somos?"
        },
        {
            "id": 2,
            "tipo": "parrafo",
            "contenido": "En BPOMICONTA, somos una empresa especializada en la externalización de procesos contables, financieros y administrativos. Nuestro objetivo es proporcionar soluciones eficientes, confiables y personalizadas para pequeñas y medianas empresas."
        },
        {
            "id": 2.1,
            "tipo": "parrafo",
            "contenido": "Desde el año 2019, hemos brindado servicios contables personalizados a pequeñas empresas, emprendedores y profesionales independientes. Somos una firma costarricense con un enfoque humano y una visión clara: ayudar a nuestros clientes a comprender sus finanzas, cumplir con sus obligaciones legales y tomar decisiones con mayor claridad."
        },
        {
            "id": 2.2,
            "tipo": "parrafo",
            "contenido": "Nos especializamos en contabilidad financiera, guiándonos por las mejores prácticas y normativas vigentes, para garantizar registros precisos, informes claros y tranquilidad fiscal"
        },
        {
            "id": 2.3,
            "tipo": "parrafo",
            "contenido": "En bpomiconta sabemos que la contabilidad no solo se trata de números, sino de comprender la historia financiera detrás de cada negocio. Trabajamos codo a codo con nuestros clientes, construyendo relaciones a largo plazo basadas en confianza, responsabilidad y atención personalizada."
        },
        {
            "id": 3,
            "tipo": "bloque",
            "titulo": "Nuestra Misión",
            "contenido": "Brindar servicios de contabilidad financiera confiables, personalizados y alineados con la normativa vigente, para apoyar a nuestros clientes en la gestión clara, ordenada y estratégica de sus finanzas",
            "icon": <FiTarget className="text-teal-400 text-2xl" />
        },
        {
            "id": 4,
            "tipo": "bloque",
            "titulo": "Nuestra Visión",
            "contenido": "Ser reconocidos como una firma de confianza en Costa Rica por nuestro profesionalismo, cercanía y compromiso con el crecimiento de cada uno de nuestros clientes.",
            "icon": <FiEye className="text-teal-400 text-2xl" />
        },
        {
            "id": 5,
            "tipo": "lista",
            "titulo": "Nuestros Valores",
            "items": [
                " Compromiso: Cada cliente es una prioridad, y su éxito también es el nuestro.",
                " Transparencia: Nos guiamos por la ética profesional y la claridad en cada informe.",
                " Responsabilidad: Cumplimos con precisión y puntualidad.",
                " Atención personalizada: Escuchamos, entendemos y actuamos según las necesidades reales.",
                " Actualización constante: Nos mantenemos al día con cambios contables, fiscales y tecnológicos."
            ],
            "icon": <FiHeart className="text-teal-400 text-2xl" />
        },
        {
            "id": 6,
            "tipo": "imagen",
            "imagen": "/quienes-somos/vision-mision.jpg",
            "alt": "Equipo de trabajo",
            "activo": false
        },
        {
            "id": 7,
            "tipo": "video",
            "titulo": "Conócenos en 1 minuto",
            "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "activo": false
        },
        {
            "id": 8,
            "tipo": "link",
            "titulo": "Ver más sobre nuestra historia",
            "url": "https://www.bpomiconta.com/sobre-nosotros",
            "activo": false,
            "icon": <FiUsers className="text-teal-400" />
        }
    ];

    // Función para renderizar cada bloque de contenido
    const renderBloque = (bloque, index) => {
        const delay = index * 0.1;

        switch (bloque.tipo) {
            case 'titulo':
                return (
                    <motion.h1
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                    >
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-400">
                            {bloque.texto}
                        </span>
                    </motion.h1>
                );

            case 'parrafo':
                return (
                    <motion.p
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto"
                    >
                        {bloque.contenido}
                    </motion.p>
                );

            case 'bloque':
                return (
                    <motion.div
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300"
                        style={{ transformStyle: "preserve-3d" }}
                        whileHover={{
                            y: -5,
                            scale: 1.02,
                            rotateX: 3,
                            rotateY: 3
                        }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-slate-700/50 border border-slate-600/50">
                                {bloque.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">{bloque.titulo}</h3>
                                <p className="text-gray-300">{bloque.contenido}</p>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'lista':
                return (
                    <motion.div
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-800/40 to-teal-900/20 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
                    >
                        <div className="flex items-start gap-4 mb-5">
                            <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-slate-700/50 border border-slate-600/50">
                                {bloque.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{bloque.titulo}</h3>
                        </div>
                        <ul className="space-y-4">
                            {bloque.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: delay + (i * 0.05) }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <div className="flex-shrink-0 mt-2 mr-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:scale-125 transition-transform"></div>
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                );

            case 'link':
                return (
                    <motion.div
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link
                            to={bloque.url}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all group"
                            style={{ transformStyle: "preserve-3d" }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -5px rgba(20, 184, 166, 0.2)",
                                rotateX: 5,
                                rotateY: 5
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>{bloque.titulo}</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-24">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-10"></div>
                {/* Patrón geométrico sutil */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                        d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"
                        fill="url(#aboutGradient)"
                    />
                    <defs>
                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            opacity: 0.1
                        }}
                        animate={{
                            y: [0, (Math.random() * 100 - 50)],
                            x: [0, (Math.random() * 100 - 50)],
                            opacity: [0.1, 0.2, 0.1]
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

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="space-y-16">
                    {contenido.map((bloque, index) => renderBloque(bloque, index))}
                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;