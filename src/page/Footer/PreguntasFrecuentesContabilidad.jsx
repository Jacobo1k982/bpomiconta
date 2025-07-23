import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCalculator, FaReceipt, FaBalanceScale, FaBuilding, FaUserTie } from 'react-icons/fa';

const PreguntasFrecuentesContabilidad = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            category: "General",
            icon: <FaCalculator className="text-cyan-400 text-xl" />,
            questions: [
                {
                    question: "¿Qué es la contabilidad y por qué es importante para mi empresa?",
                    answer: "La contabilidad es el proceso de registrar, clasificar y resumir las operaciones económicas de una empresa. Es fundamental porque permite tomar decisiones informadas, cumplir con obligaciones fiscales, obtener financiamiento y evaluar el desempeño financiero de tu negocio."
                },
                {
                    question: "¿Cuál es la diferencia entre contabilidad financiera y contabilidad gerencial?",
                    answer: "La contabilidad financiera se enfoca en registrar transacciones y preparar estados financieros para terceros (inversionistas, bancos, gobierno). La contabilidad gerencial proporciona información interna para la toma de decisiones estratégicas de la administración."
                },
                {
                    question: "¿Con qué frecuencia debo actualizar mis registros contables?",
                    answer: "Se recomienda actualizar los registros diariamente o como máximo semanalmente. Esto asegura información precisa, facilita la toma de decisiones y previene errores acumulados que son más difíciles de corregir."
                }
            ]
        },
        {
            category: "Obligaciones Tributarias",
            icon: <FaReceipt className="text-cyan-400 text-xl" />,
            questions: [
                {
                    question: "¿Qué declaraciones tributarias debo presentar mensualmente?",
                    answer: "Las obligaciones mensuales más comunes incluyen: declaración de IVA (Formulario 08), declaración de renta de terceros (Formulario 03), y declaración de impuestos al consumo (según aplique). Las pymes bajo Régimen Simplificado pueden tener excepciones."
                },
                {
                    question: "¿Cuál es el plazo para presentar la declaración anual de renta?",
                    answer: "Para personas físicas y jurídicas, el plazo es del 1 de marzo al 30 de abril del año siguiente. Las empresas que cierran ejercicio en meses diferentes tienen plazos proporcionales. Se recomienda presentar antes de abril para evitar multas."
                },
                {
                    question: "¿Qué consecuencias tiene no presentar declaraciones a tiempo?",
                    answer: "Las consecuencias incluyen multas del 10% al 100% del impuesto omitido, intereses moratorios del 1.5% mensual, bloqueo de cuentas bancarias, y posibles sanciones penales en casos graves de evasión fiscal."
                }
            ]
        },
        {
            category: "Estados Financieros",
            icon: <FaBalanceScale className="text-cyan-400 text-xl" />,
            questions: [
                {
                    question: "¿Qué estados financieros básicos debo preparar mensualmente?",
                    answer: "Los estados financieros básicos son: 1) Balance General (situación financiera en un momento), 2) Estado de Resultados (ingresos y gastos del período), 3) Estado de Flujos de Efectivo (movimientos de dinero), y 4) Estado de Cambios en el Patrimonio."
                },
                {
                    question: "¿Cómo interpreto mi estado de resultados?",
                    answer: "Analiza la relación entre ingresos totales y gastos totales. Un resultado positivo (utilidad) indica que ganas más de lo que gastas. Examina los márgenes brutos, gastos operativos y rentabilidad neta para identificar áreas de mejora."
                },
                {
                    question: "¿Con qué frecuencia debo conciliar mis cuentas bancarias?",
                    answer: "La conciliación bancaria debe realizarse mensualmente. Compara tus registros contables con los extractos bancarios para identificar errores, cheques pendientes, y asegurar la exactitud de tus saldos de caja."
                }
            ]
        },
        {
            category: "Regímenes Especiales",
            icon: <FaBuilding className="text-cyan-400 text-xl" />,
            questions: [
                {
                    question: "¿Qué es el Régimen Simplificado y quién puede acogerse?",
                    answer: "El Régimen Simplificado es un sistema tributario para pymes con ingresos brutos anuales menores a ₡114 millones. Permite simplificar registros contables, calcular impuestos sobre ingresos brutos y presentar menos declaraciones formales."
                },
                {
                    question: "¿Cuáles son las ventajas del Régimen de Tributación por Actividades Económicas (RTA)?",
                    answer: "El RTA permite deducir gastos reales, calcular impuestos sobre utilidad neta, y acceder a beneficios fiscales específicos. Es ideal para empresas con estructura contable sólida y gastos significativos deducibles."
                },
                {
                    question: "¿Cómo afecta la digitalización contable a los diferentes regímenes?",
                    answer: "Desde 2024, todas las empresas deben emitir facturas electrónicas. El Régimen Simplificado puede usar sistemas simplificados, mientras que el RTA requiere sistemas más completos de registro electrónico y reporte en tiempo real."
                }
            ]
        },
        {
            category: "Servicios Profesionales",
            icon: <FaUserTie className="text-cyan-400 text-xl" />,
            questions: [
                {
                    question: "¿Qué documentos debo conservar para cumplir con requisitos fiscales?",
                    answer: "Debes conservar: facturas de compra y venta (10 años), libros contables (10 años), declaraciones presentadas (10 años), contratos importantes (10 años), y documentos de nómina (5 años). Todo debe estar disponible en formato digital."
                },
                {
                    question: "¿Cuándo es recomendable contratar un servicio de contabilidad externo?",
                    answer: "Es recomendable cuando: careces de conocimiento técnico, tu volumen de transacciones es alto, necesitas cumplir con normas complejas (IFRS), o deseas optimizar tu tiempo para enfocarte en operaciones. También para auditorías y consultoría especializada."
                },
                {
                    question: "¿Qué software de contabilidad recomiendan para pymes en Costa Rica?",
                    answer: "Para Régimen Simplificado: Sistemas básicos como ContaSimple o Facture. Para RTA: Soluciones avanzadas como SAP Business One, Exacta, o QuickBooks. Considera integración con facturación electrónica, facilidad de uso, y soporte técnico local."
                }
            ]
        }
    ];

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
            {/* Efecto de fondo con textura sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Brillo animado sutil en el fondo */}
            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(103, 232, 249, 0.3), transparent)'
                }}
            />

            {/* Partículas animadas mejoradas */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 20 + 10 + 'px',
                            height: Math.random() * 20 + 10 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 200 - 100) + 'px'],
                            x: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado con estilo moderno */}
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
                        className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-300 font-semibold tracking-widest text-sm uppercase backdrop-blur-sm"
                    >
                        Guía Contable Completa
                    </motion.span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300">
                            Preguntas Frecuentes de Contabilidad
                        </span>
                    </h1>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-4">
                            Respuestas claras a las dudas más comunes sobre contabilidad, tributación y gestión financiera para tu empresa en Costa Rica
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                </motion.div>

                {/* FAQ Sections */}
                <div className="space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 border-b border-slate-700/50">
                                <div className="flex items-center">
                                    <div className="mr-4 p-2 rounded-lg bg-slate-700/50">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-100">
                                        {category.category}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="space-y-4">
                                    {category.questions.map((faq, index) => (
                                        <div key={index} className="border border-slate-700/30 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300">
                                            <button
                                                onClick={() => toggleAccordion(`${categoryIndex}-${index}`)}
                                                className="w-full p-6 text-left flex justify-between items-center bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300"
                                            >
                                                <span className="text-lg font-semibold text-slate-200 pr-4">
                                                    {faq.question}
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: activeIndex === `${categoryIndex}-${index}` ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex-shrink-0 text-cyan-400"
                                                >
                                                    <FaChevronDown />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {activeIndex === `${categoryIndex}-${index}` && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-6 bg-slate-900/50 border-t border-slate-700/30">
                                                            <p className="text-slate-300 leading-relaxed">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-l-4 border-cyan-500 p-8 rounded-r-xl backdrop-blur-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                            ¿Tienes otras preguntas sobre contabilidad?
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                            Nuestros expertos contables están listos para resolver tus dudas específicas y ofrecerte soluciones personalizadas para tu negocio.
                        </p>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.3), 0 10px 10px -6px rgba(6, 182, 212, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Consulta Gratuita con un Experto
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PreguntasFrecuentesContabilidad;