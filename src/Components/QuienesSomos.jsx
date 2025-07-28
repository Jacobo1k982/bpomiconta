// src/components/SobreNosotros.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiEye, FiHeart, FiUsers, FiRefreshCw, FiUser, FiBriefcase, FiAward } from 'react-icons/fi';
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
            "texto": "En BPOMICONTA, somos un equipo de expertos apasionados por las finanzas y la contabilidad. Nuestra misión es simplificar la complejidad financiera para que las empresas puedan enfocarse en lo que mejor saben hacer: innovar y crecer."
        },
        {
            "id": 3,
            "tipo": "parrafo",
            "texto": "Fundada en 2018, hemos acompañado el crecimiento de más de 20 empresas en Costa Rica, brindando soluciones contables, fiscales y administrativas adaptadas a las necesidades específicas de cada cliente. Creemos en la transparencia, la precisión y el compromiso como pilares fundamentales de una relación de confianza."
        },
        {
            "id": 4,
            "tipo": "parrafo",
            "texto": "Nuestro enfoque va más allá del cumplimiento legal; buscamos ser un verdadero socio estratégico, proporcionando información financiera clara y oportuna que impulse la toma de decisiones inteligentes y sostenibles."
        }
    ];

    const valores = [
        {
            icono: <FiTarget className="text-teal-400 text-3xl" />,
            titulo: "Misión",
            descripcion: "Brindar soluciones integrales de contabilidad, fiscalidad y administración que impulsen el crecimiento sostenible de nuestros clientes con ética, precisión y excelencia."
        },
        {
            icono: <FiEye className="text-emerald-400 text-3xl" />,
            titulo: "Visión",
            descripcion: "Ser el socio financiero más confiable de las pymes costarricenses, reconocidos por nuestra innovación, compromiso y resultados tangibles."
        },
        {
            icono: <FiHeart className="text-cyan-400 text-3xl" />,
            titulo: "Valores",
            descripcion: "Integridad, Excelencia, Compromiso, Innovación y Transparencia son los principios que guían cada acción de nuestro equipo."
        }
    ];

    const equipo = {
        titulo: "Nuestro Equipo",
        descripcion: "Un grupo multidisciplinario de profesionales altamente calificados, comprometidos con tu éxito.",
        miembros: [
            { nombre: "Lic. Juan Pérez", puesto: "Director General", experiencia: "10+ años" },
            { nombre: "CPA. María González", puesto: "Jefa de Contabilidad", experiencia: "8+ años" },
            { nombre: "Lic. Carlos Ramírez", puesto: "Asesor Fiscal Senior", experiencia: "12+ años" }
        ]
    };

    // Función para renderizar cada bloque de contenido
    const renderBloque = (bloque, index) => {
        switch (bloque.tipo) {
            case 'titulo':
                return (
                    <motion.h1
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300"
                    >
                        {bloque.texto}
                    </motion.h1>
                );
            case 'parrafo':
                return (
                    <motion.p
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed max-w-4xl mx-auto text-center px-4"
                    >
                        {bloque.texto}
                    </motion.p>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-24">
            {/* Fondo con textura sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            {/* Brillo animado sutil en el fondo - Mejorado y coherente */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 25, // Más lento
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.3), transparent)' // Color teal-500 con opacidad coherente
                }}
            />
            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow-reverse"></div>
                {/* Patrón geométrico sutil mejorado con degradado coherente */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#aboutGradient)" />
                    <defs>
                        <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(20, 184, 166)" /> {/* teal-500 */}
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" /> {/* emerald-500 */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* Partículas flotantes mejoradas - CON PARPADEO Y MÁS VARIACIÓN y COLORES COHERENTES */}
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
                            duration: Math.random() * 30 + 20, // Duraciones más lentas y variadas: 20-50s
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
                {/* Contenido principal */}
                <div className="mb-28">
                    {contenido.map((bloque, index) => renderBloque(bloque, index))}
                </div>

                {/* Sección de Valores, Misión y Visión */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-28"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {valores.map((valor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ y: -8, scale: 1.02 }} // Efecto lift y escala aumentados
                                className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-lg hover:shadow-xl" // Sombra y borde mejorados
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md">
                                        {valor.icono}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-white">{valor.titulo}</h3>
                                <p className="text-slate-300 text-center leading-relaxed">{valor.descripcion}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Sección de Nuestro Equipo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ y: -5 }} // Efecto lift en el contenedor del equipo
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl mb-16 overflow-hidden relative" // Sombra y overflow hidden
                >
                    {/* Elementos flotantes decorativos en la sección de equipo */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-teal-500/5 filter blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-emerald-600/5 filter blur-2xl animate-pulse-slow-reverse"></div>

                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 mb-6">
                            <FiUsers className="text-teal-400 text-2xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">{equipo.titulo}</h2>
                        <p className="text-xl text-teal-100/90">{equipo.descripcion}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {equipo.miembros.map((miembro, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ y: -5, scale: 1.03 }} // Efecto lift y escala aumentados
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-300 shadow-md hover:shadow-lg" // Sombra mejorada
                            >
                                {/* Icono del miembro del equipo con efecto hover */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-600/20 to-emerald-600/20 mb-4 text-teal-400"
                                >
                                    <FiUser className="text-2xl" />
                                </motion.div>
                                <h4 className="font-bold text-white text-lg">{miembro.nombre}</h4>
                                <p className="text-teal-200 mb-1">{miembro.puesto}</p>
                                <p className="text-sm text-teal-300/80 flex items-center justify-center">
                                    <FiAward className="mr-1" /> {miembro.experiencia}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action mejorado con efecto shine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -6px rgba(20, 184, 166, 0.3)" }} // Sombra coherente
                        whileTap={{ scale: 0.98 }}
                        className="inline-block relative overflow-hidden group rounded-2xl" // Overflow hidden para el efecto shine y clase de redondeo
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <Link
                            to="/servicios"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg z-10 relative"
                        >
                            {/* Icono del botón con efecto hover */}
                            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center">
                                <FiBriefcase className="mr-2" />
                            </motion.div>
                            Conoce Nuestros Servicios
                            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        {/* Efecto Shine en el botón */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                    </motion.div>
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
        </div>
    );
};

export default SobreNosotros;