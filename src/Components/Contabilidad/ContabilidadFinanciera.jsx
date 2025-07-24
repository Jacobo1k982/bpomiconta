import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiBarChart2, FiTrendingUp, FiShield, FiUsers, FiCheckCircle, FiArrowRight, FiPieChart, FiDollarSign } from 'react-icons/fi';

const ContabilidadFinanciera = () => {
    const benefits = [
        {
            title: "Transparencia Total",
            description: "Informes claros y precisos que te muestran exactamente la salud financiera de tu empresa.",
            icon: <FiBarChart2 className="text-blue-400" />,
            color: "from-blue-500/10 to-blue-400/10"
        },
        {
            title: "Cumplimiento Garantizado",
            description: "Nos aseguramos de que todos tus registros cumplan con las normativas fiscales vigentes.",
            icon: <FiShield className="text-teal-400" />,
            color: "from-teal-500/10 to-teal-400/10"
        },
        {
            title: "Toma de Decisiones Inteligente",
            description: "Datos financieros en tiempo real para decisiones estratégicas basadas en información real.",
            icon: <FiTrendingUp className="text-purple-400" />,
            color: "from-purple-500/10 to-purple-400/10"
        },
        {
            title: "Ahorro de Costos",
            description: "Optimización fiscal que puede reducir tus impuestos hasta en un 30% legalmente.",
            icon: <FiDollarSign className="text-amber-400" />,
            color: "from-amber-500/10 to-amber-400/10"
        }
    ];

    const services = [
        "Registro Contable Completo",
        "Estados Financieros",
        "Declaraciones Tributarias",
        "Análisis de Rentabilidad",
        "Control de Costos",
        "Asesoría Fiscal"
    ];

    const trustFactors = [
        { number: "8+", label: "Años de Experiencia", icon: <FiBook className="text-blue-400" /> },
        { number: "20+", label: "Empresas Atendidas", icon: <FiUsers className="text-teal-400" /> },
        { number: "98%", label: "Clientes Satisfechos", icon: <FiCheckCircle className="text-purple-400" /> },
        { number: "100%", label: "Cumplimiento Legal", icon: <FiShield className="text-amber-400" /> }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950/20 text-white overflow-hidden pt-28">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 mb-6">
                        <FiBook className="text-blue-400 mr-2" />
                        <span className="text-xs font-semibold text-blue-300 tracking-widest">CONFIANZA Y PROFESIONALISMO</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-blue-100">
                            Contabilidad Financiera
                        </span>
                        <span className="block mt-2 text-white/90">
                            Para el Crecimiento de Tu Empresa
                        </span>
                    </h2>

                    <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light">
                        Más que números, tu aliado estratégico. Ofrecemos servicios contables confiables y personalizados
                        que te permiten tomar decisiones informadas y enfocarte en hacer crecer tu negocio.
                    </p>
                </motion.div>

                {/* Trust factors */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {trustFactors.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-4">
                                {factor.icon}
                            </div>
                            <p className="text-2xl md:text-3xl font-bold text-white mb-1">{factor.number}</p>
                            <p className="text-sm text-blue-200/80">{factor.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
                    {/* Left content - Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            Servicios que Impulsan tu Negocio
                        </h3>

                        <p className="text-blue-100/90 mb-8 leading-relaxed">
                            Nuestros servicios contables están diseñados específicamente para las necesidades
                            de pymes, brindando precisión, cumplimiento y valor estratégico para tu crecimiento.
                        </p>

                        <div className="grid grid-cols-1 gap-4 mb-10">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 mr-4 group-hover:bg-blue-500/20 transition-colors">
                                        <FiCheckCircle className="text-blue-400" />
                                    </div>
                                    <span className="text-blue-100 font-medium">{service}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4), 0 5px 15px -5px rgba(59, 130, 246, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                        >
                            <span className="relative z-10 flex items-center">
                                Agendar Consulta Gratuita
                                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Right content - Benefits visualization */}
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
                                        <FiPieChart className="mr-1" />
                                        <span className="text-xs font-medium">ROI Garantizado</span>
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
                                            whileHover={{ y: -5 }}
                                            className="group"
                                        >
                                            <div className={`p-5 rounded-2xl bg-gradient-to-br ${benefit.color} backdrop-blur-sm border border-white/10 hover:border-blue-400/20 transition-all duration-300`}>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 mr-4 group-hover:bg-white/10 transition-colors">
                                                        {benefit.icon}
                                                    </div>
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

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/5 filter blur-2xl"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 8, 0],
                                opacity: [0.4, 0.7, 0.4]
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
                                y: [0, 10, 0],
                                x: [0, -8, 0],
                                opacity: [0.4, 0.7, 0.4]
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

                {/* Testimonial section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-6">
                            <FiUsers className="text-blue-400 text-2xl" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Confianza de Empresas como la Tuya</h4>
                        <p className="text-lg text-blue-100/90 mb-6 leading-relaxed">
                            "Gracias al servicio contable profesional, pudimos identificar áreas de ahorro que
                            incrementaron nuestra rentabilidad en un 18% en solo 6 meses. La transparencia y
                            asesoría han sido fundamentales para nuestras decisiones estratégicas."
                        </p>
                        <div>
                            <p className="font-semibold text-white">María González</p>
                            <p className="text-sm text-blue-300">Directora Financiera - TechSolutions Ltda.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Custom animations */}
            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.05; transform: scale(1); }
                    50% { opacity: 0.1; transform: scale(1.05); }
                }
                @keyframes pulse-slow-reverse {
                    0%, 100% { opacity: 0.05; transform: scale(1.05); }
                    50% { opacity: 0.1; transform: scale(1); }
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

export default ContabilidadFinanciera;