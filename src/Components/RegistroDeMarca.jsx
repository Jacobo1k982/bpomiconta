import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaSearch, FaMoneyBillWave, FaClock, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegistroDeMarca = () => {
    const pasosRegistro = [
        {
            icon: <FaSearch className="text-3xl text-blue-400" />,
            title: "Búsqueda de Antecedentes",
            description: "Verificación en la base de datos del Registro Nacional para asegurar que la marca no esté registrada."
        },
        {
            icon: <FaFileAlt className="text-3xl text-blue-400" />,
            title: "Preparación de Documentación",
            description: "Formulario de solicitud, poder legal (si aplica), y representación gráfica de la marca según requisitos del Registro Nacional."
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-blue-400" />,
            title: "Pago de Tasas",
            description: "Pago de derechos de registro ante el Ministerio de Hacienda (aproximadamente ₡156,000 para personas físicas, ₡312,000 para jurídicas en 2024)."
        },
        {
            icon: <FaClock className="text-3xl text-blue-400" />,
            title: "Examen Formal",
            description: "Evaluación por parte del Registro Nacional (6-8 meses según carga laboral actual)."
        },
        {
            icon: <FaShieldAlt className="text-3xl text-blue-400" />,
            title: "Publicación y Oposición",
            description: "Publicación en La Gaceta por 30 días hábiles para posibles oposiciones."
        },
        {
            icon: <FaGlobeAmericas className="text-3xl text-blue-400" />,
            title: "Certificado de Registro",
            description: "Entrega del certificado con validez por 10 años renovables, protección en todo Costa Rica."
        }
    ];

    const requisitos2024 = [
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
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            {/* Efecto de fondo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                            Registro de Marca en Costa Rica
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Proteja su identidad comercial conforme a la Ley de Marcas No. 7978 y regulaciones actuales del Registro Nacional
                    </p>
                </motion.div>

                {/* Proceso de Registro */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {pasosRegistro.map((paso, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                                <div className="flex flex-col">
                                    <div className="mb-6 text-blue-500">
                                        {paso.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{paso.title}</h3>
                                    <p className="text-gray-600 mb-4">{paso.description}</p>
                                    <span className="mt-auto text-sm font-medium text-blue-600">Paso {index + 1}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Información Adicional */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Requisitos 2024</h2>
                        <ul className="space-y-4">
                            {requisitos2024.map((requisito, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    </div>
                                    <span className="text-gray-700">{requisito}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ventajas del Registro</h2>
                        <ul className="space-y-4">
                            {beneficios.map((beneficio, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1 mr-4">
                                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                    </div>
                                    <span className="text-gray-700">{beneficio}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Información Actualizada */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12"
                >
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">⚠️ Actualización Importante 2024</h3>
                    <p className="text-blue-700">
                        Desde enero 2024, el Registro Nacional implementó el <strong>Trámite en Línea</strong> para solicitudes de marca,
                        reduciendo tiempos de espera. Consulte los nuevos requisitos técnicos para presentación digital en
                        el <a href="https://www.registronacional.go.cr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">portal oficial</a>.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        ¿Necesita asesoría especializada en registro de marca?
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contacto">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                            >
                                Asesoría Legal Personalizada
                            </motion.button>
                        </Link>
                        <a
                            href="https://www.registronacional.go.cr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-white border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        >
                            <FaFileAlt />
                            Visitar Registro Nacional
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistroDeMarca;