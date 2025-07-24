import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaSearch, FaMoneyBillWave, FaClock, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegistroDeMarca = () => {
    const pasosRegistro = [
        {
            icon: <FaSearch className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Búsqueda de Antecedentes",
            description: "Verificación en la base de datos del Registro Nacional para asegurar que la marca no esté registrada."
        },
        {
            icon: <FaFileAlt className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Preparación de Documentación",
            description: "Formulario de solicitud, poder legal (si aplica), y representación gráfica de la marca según requisitos del Registro Nacional."
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Pago de Tasas",
            description: "Pago de derechos de registro ante el Ministerio de Hacienda (aproximadamente ₡156,000 para personas físicas, ₡312,000 para jurídicas en 2024)."
        },
        {
            icon: <FaClock className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Examen Formal",
            description: "Evaluación por parte del Registro Nacional (6-8 meses según carga laboral actual)."
        },
        {
            icon: <FaShieldAlt className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Publicación y Oposición",
            description: "Publicación en La Gaceta por 30 días hábiles para posibles oposiciones."
        },
        {
            icon: <FaGlobeAmericas className="text-3xl text-cyan-400 drop-shadow-sm" />,
            title: "Certificado de Registro",
            description: "Entrega del certificado con validez por 10 años renovables, protección en todo Costa Rica."
        }
    ];

    const requisitos2025 = [
        "Formulario de solicitud debidamente completado (Disponible en www.registronacional.go.cr)",
        "Representación gráfica clara de la marca (mínimo 5x5 cm, máximo 8x8 cm)",
        "Lista de productos/servicios según Clasificación de Niza (11ª edición)",
        "Comprobante de pago de tasas oficiales",
        "Poder notariado si se aplica mediante representante legal",
        "Para marcas colectivas/cerificadas: reglamento de uso"
    ];

    const beneficios = [
        "Derecho exclusivo de uso por 10 años renovables",
        "Protección legal contra infracciones",
        "Posibilidad de licenciamiento y franquicias",
        "Aumento del valor empresarial",
        "Protección en plataformas digitales y marketplaces",
        "Base para expansión internacional"
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-40">
            {/* Efecto de fondo con textura sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)'
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado con estilo moderno */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
                            Registro de Marca en Costa Rica
                        </span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-4">
                            Proteja su identidad comercial conforme a la Ley de Marcas No. 7978
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                {/* Proceso de Registro con cards modernas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {pasosRegistro.map((paso, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2">
                                <div className="flex flex-col">
                                    <div className="mb-6 p-3 rounded-xl bg-slate-700/30 w-fit">
                                        {paso.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                                        {paso.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 leading-relaxed">{paso.description}</p>
                                    <span className="mt-auto text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full w-fit">
                                        Paso {index + 1}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Información Adicional con diseño mejorado */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl p-8 hover:border-cyan-500/20 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-bold text-slate-100">Requisitos 2025</h2>
                        </div>
                        <ul className="space-y-4">
                            {requisitos2025.map((requisito, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1.5 mr-4">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500/70 group-hover:bg-cyan-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{requisito}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl p-8 hover:border-teal-500/20 transition-all duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                            <h2 className="text-2xl font-bold text-slate-100">Ventajas del Registro</h2>
                        </div>
                        <ul className="space-y-4">
                            {beneficios.map((beneficio, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1.5 mr-4">
                                        <div className="w-2 h-2 rounded-full bg-teal-500/70 group-hover:bg-teal-400 transition-colors"></div>
                                    </div>
                                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{beneficio}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Información Actualizada con estilo moderno */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-12 backdrop-blur-sm"
                >
                    <div className="flex items-start">
                        <div className="mr-4 mt-1 text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-cyan-100 mb-2">Actualización Importante 2025</h3>
                            <p className="text-cyan-200">
                                Desde enero 2024, el Registro Nacional implementó el <strong className="text-white">Trámite en Línea</strong> para solicitudes de marca,
                                reduciendo tiempos de espera. Consulte los nuevos requisitos técnicos para presentación digital en
                                el <a href="https://www.registronacional.go.cr" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline font-medium transition-colors">portal oficial</a>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA con botones modernos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8">
                        ¿Necesita asesoría especializada en registro de marca?
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contacto">
                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3), 0 8px 10px -6px rgba(6, 182, 212, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Asesoría Legal Personalizada
                            </motion.button>
                        </Link>
                        <a
                            href="https://www.registronacional.go.cr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-600 text-slate-200 px-6 py-4 rounded-xl font-bold hover:bg-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <FaFileAlt className="text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span>Visitar Registro Nacional</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistroDeMarca;