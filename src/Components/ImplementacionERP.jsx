// src/components/ImplementacionERP.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCogs, FaDatabase, FaUsers, FaSync, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Cambiado a Link para navegación interna

const ImplementacionERP = () => {
    const benefits = [
        {
            icon: <FaChartLine className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Automatización Inteligente",
            description: "Reduce errores manuales y optimiza tiempo mediante la automatización de procesos contables, inventarios y facturación."
        },
        {
            icon: <FaDatabase className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Toma de Decisiones",
            description: "Acceso a reportes en tiempo real y dashboards personalizados para una gestión financiera estratégica."
        },
        {
            icon: <FaUsers className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Colaboración Eficiente",
            description: "Permite el trabajo colaborativo entre departamentos con diferentes niveles de acceso y permisos."
        },
        {
            icon: <FaCogs className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Integración Total",
            description: "Conecta todos los módulos de tu negocio (ventas, compras, inventario, contabilidad) en una sola plataforma unificada."
        },
        {
            icon: <FaSync className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Escalabilidad",
            description: "Sistemas adaptables que crecen con tu empresa, soportando expansiones y nuevos requerimientos."
        },
        {
            icon: <FaShieldAlt className="text-4xl text-teal-400 drop-shadow-md" />,
            title: "Seguridad y Cumplimiento",
            description: "Protección de datos financieros sensibles y cumplimiento con normativas locales e internacionales."
        }
    ];

    const etapasImplementacion = [
        "Análisis de necesidades y procesos actuales",
        "Diseño de la solución personalizada",
        "Migración y estandarización de datos",
        "Configuración del sistema ERP",
        "Capacitación a equipos usuarios",
        "Pruebas piloto y ajustes",
        "Lanzamiento controlado y soporte continuo"
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-28">
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
                    <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="url(#erpGradient)" />
                    <defs>
                        <linearGradient id="erpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-6 px-6 py-3 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-bold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        TRANSFORMACIÓN DIGITAL
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 mb-6"> {/* Degradado coherente */}
                        Implementación de ERP
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Digitaliza tu empresa con soluciones ERP personalizadas que integran todos tus procesos en una sola plataforma poderosa.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div> {/* Línea redondeada y coherente */}
                </motion.div>

                {/* Beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }} // Efecto lift y escala aumentados
                            className="group"
                        >
                            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-white/10 hover:border-teal-400/30 transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col" // Fondo, borde y sombra mejorados
                            >
                                <div className="flex justify-center mb-6">
                                    {/* Icono con efecto hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.15 }} // Efecto de escala aumentado
                                        className="p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 shadow-md" // Estilo del contenedor del icono mejorado
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                                <p className="text-slate-300 text-center flex-grow">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Proceso de Implementación */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl mb-16 overflow-hidden relative" // Sombra y overflow hidden
                >
                    {/* Elementos flotantes decorativos en la sección de proceso */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-teal-500/5 filter blur-2xl animate-pulse-slow"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-emerald-600/5 filter blur-2xl animate-pulse-slow-reverse"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">Nuestro Proceso de Implementación</h3>
                        <p className="text-xl text-teal-100/90 max-w-3xl mx-auto"> {/* Color de texto coherente */}
                            Un enfoque estructurado y probado para garantizar una transición exitosa a tu nuevo sistema ERP.
                        </p>
                    </div>
                    <div className="relative z-10">
                        {etapasImplementacion.map((etapa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-start group mb-6 last:mb-0"
                            >
                                {/* Número de etapa con estilo mejorado */}
                                <div className="flex-shrink-0 mt-1 mr-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300"> {/* Degradado coherente */}
                                        {index + 1}
                                    </div>
                                </div>
                                {/* Descripción de etapa con estilo mejorado y efecto hover */}
                                <div className="flex-1 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 group-hover:border-teal-400/30 group-hover:bg-teal-900/10 transition-all duration-300 shadow-sm group-hover:shadow-md"> {/* Colores de borde y fondo coherentes */}
                                    <p className="text-lg text-slate-200">{etapa}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action mejorado con efecto shine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -6px rgba(20, 184, 166, 0.3)" }} // Sombra coherente
                        whileTap={{ scale: 0.98 }}
                        className="inline-block relative overflow-hidden group rounded-2xl" // Overflow hidden para el efecto shine y clase de redondeo
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Cambiado a Link para navegación interna */}
                        <Link
                            to="/contacto" // Ajusta esta ruta según tu sección de contacto
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg z-10 relative"
                        >
                            Agenda tu Consulta
                            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
        </section>
    );
};

export default ImplementacionERP;