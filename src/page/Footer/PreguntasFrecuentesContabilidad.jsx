// src/components/PreguntasFrecuentesContabilidad.tsx
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
            icon: <FaCalculator className="text-teal-400 text-xl" />, // Cambiado a teal-400
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
            icon: <FaReceipt className="text-teal-400 text-xl" />, // Cambiado a teal-400
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
            icon: <FaBalanceScale className="text-teal-400 text-xl" />, // Cambiado a teal-400
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
            icon: <FaBuilding className="text-teal-400 text-xl" />, // Cambiado a teal-400
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
            icon: <FaUserTie className="text-teal-400 text-xl" />, // Cambiado a teal-400
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
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
            {/* Efecto de fondo con textura sutil y colores coherentes */}
            <div className="absolute inset-0 opacity-3"> {/* Opacidad reducida */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            {/* Brillo animado sutil en el fondo - Mejorado */}
            <motion.div
                className="absolute inset-0 opacity-5" // Opacidad reducida
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    duration: 20, // Más lento
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.2), transparent)' // Color teal-500 con menos opacidad
                }}
            />
            {/* Partículas animadas mejoradas - CON PARPADEO Y MÁS VARIACIÓN */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => ( // Más partículas
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
                        className="inline-block mb-6 px-4 py-2 bg-teal-500/10 border border-teal-400/20 rounded-full text-teal-300 font-semibold tracking-widest text-sm uppercase backdrop-blur-sm" // Colores coherentes
                    >
                        Guía Contable Completa
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300"> {/* Colores coherentes */}
                            Preguntas Frecuentes de Contabilidad
                        </span>
                    </h1>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-slate-300 mb-4">
                            Respuestas claras a las dudas más comunes sobre contabilidad, tributación y gestión financiera para tu empresa en Costa Rica
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto rounded-full"></div> {/* Colores coherentes */}
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
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" // Sombra mejorada en hover
                        >
                            {/* Header de categoría con degradado coherente */}
                            <div className="bg-gradient-to-r from-teal-900/20 to-emerald-900/20 p-6 border-b border-slate-700/50"> {/* Colores coherentes */}
                                <div className="flex items-center">
                                    {/* Icono con efecto hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }} // Efecto de escala y rotación
                                        className="mr-4 p-3 rounded-xl bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 shadow-md" // Mejor estilo del contenedor del icono
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <h2 className="text-2xl font-bold text-slate-100">
                                        {category.category}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {category.questions.map((faq, index) => (
                                        <div key={index} className="border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors duration-300"> {/* Borde hover coherente */}
                                            {/* Botón de pregunta con efecto lift y shine */}
                                            <motion.button
                                                whileHover={{ y: -3, backgroundColor: "rgba(30, 41, 59, 0.6)" }} // Efecto lift y cambio de fondo
                                                whileTap={{ scale: 0.99 }}
                                                onClick={() => toggleAccordion(`${categoryIndex}-${index}`)}
                                                className="w-full p-6 text-left flex justify-between items-center bg-slate-800/30 transition-colors duration-300 relative overflow-hidden group" // Overflow hidden para el efecto shine
                                                style={{ transformStyle: "preserve-3d" }}
                                            >
                                                <span className="text-lg font-semibold text-slate-200 pr-4 z-10">
                                                    {faq.question}
                                                </span>
                                                {/* Efecto Shine en el botón de pregunta */}
                                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
                                                <motion.div
                                                    animate={{ rotate: activeIndex === `${categoryIndex}-${index}` ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex-shrink-0 text-teal-400 z-10" // Color coherente
                                                >
                                                    <FaChevronDown />
                                                </motion.div>
                                            </motion.button>
                                            {/* Panel de respuesta del acordeón mejorado */}
                                            <AnimatePresence>
                                                {activeIndex === `${categoryIndex}-${index}` && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0, scaleX: 0.98 }} // Inicial con escala horizontal
                                                        animate={{ height: 'auto', opacity: 1, scaleX: 1 }} // Animación de escala horizontal
                                                        exit={{ height: 0, opacity: 0, scaleX: 0.98 }}
                                                        transition={{ duration: 0.4 }} // Duración ajustada
                                                        className="overflow-hidden"
                                                        style={{ originX: 0.5 }} // Origen de la escala en el centro
                                                    >
                                                        <div className="p-6 bg-slate-900/60 border-t border-slate-700/30 backdrop-blur-sm"> {/* Fondo y borde mejorados */}
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
                {/* CTA Final mejorado con efecto shine */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-teal-900/20 to-emerald-900/20 border-l-4 border-teal-500 p-8 rounded-r-xl backdrop-blur-sm shadow-lg"> {/* Degradado y sombra mejorados */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                            ¿Tienes otras preguntas sobre contabilidad?
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                            Nuestros expertos contables están listos para resolver tus dudas específicas y ofrecerte soluciones personalizadas para tu negocio.
                        </p>
                        {/* Botón CTA con efecto shine mejorado */}
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.3), 0 10px 10px -6px rgba(20, 184, 166, 0.3)" // Sombra coherente
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group" // Clases base del botón
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span className="relative z-10">Consulta Gratuita con un Experto</span>
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PreguntasFrecuentesContabilidad;