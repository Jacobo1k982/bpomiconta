// src/components/SobreNosotros.tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
    FiArrowRight,
    FiTarget,
    FiEye,
    FiHeart,
    FiUsers,
    FiUser,
    FiBriefcase,
    FiAward,
    FiDollarSign,
    FiActivity,
    FiTrendingUp,
    FiFileText,
    FiPercent,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// === Partícula refinada (igual que en HeroElegant) ===
const ElegantParticle = React.memo(({ id, element }) => {
    return (
        <motion.div
            key={id}
            className={`absolute ${element.size} ${element.color} opacity-10`}
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
            animate={{
                y: [0, -100, 0],
                scale: [0.8, 1, 0.8],
                opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            {element.icon}
        </motion.div>
    );
});
ElegantParticle.displayName = "ElegantParticle";

const SobreNosotros = () => {
    // Datos del contenido
    const contenido = useMemo(
        () => [
            {
                id: 1,
                tipo: "titulo",
                texto: "¿Quiénes Somos?",
            },
            {
                id: 2,
                tipo: "parrafo",
                texto: "En BPOMICONTA, somos un equipo de expertos apasionados por las finanzas y la contabilidad. Nuestra misión es simplificar la complejidad financiera para que las empresas puedan enfocarse en lo que mejor saben hacer: innovar y crecer.",
            },
            {
                id: 3,
                tipo: "parrafo",
                texto: "Fundada en 2018, hemos acompañado el crecimiento de más de 20 empresas en Costa Rica, brindando soluciones contables, fiscales y administrativas adaptadas a las necesidades específicas de cada cliente. Creemos en la transparencia, la precisión y el compromiso como pilares fundamentales de una relación de confianza.",
            },
            {
                id: 4,
                tipo: "parrafo",
                texto: "Nuestro enfoque va más allá del cumplimiento legal; buscamos ser un verdadero socio estratégico, proporcionando información financiera clara y oportuna que impulse la toma de decisiones inteligentes y sostenibles.",
            },
        ],
        []
    );

    const valores = useMemo(
        () => [
            {
                icono: <FiTarget className="text-teal-400" />,
                titulo: "Misión",
                descripcion:
                    "Brindar soluciones integrales de contabilidad, fiscalidad y administración que impulsen el crecimiento sostenible de nuestros clientes con ética, precisión y excelencia.",
            },
            {
                icono: <FiEye className="text-emerald-400" />,
                titulo: "Visión",
                descripcion:
                    "Ser el socio financiero más confiable de las pymes costarricenses, reconocidos por nuestra innovación, compromiso y resultados tangibles.",
            },
            {
                icono: <FiHeart className="text-cyan-400" />,
                titulo: "Valores",
                descripcion:
                    "Integridad, Excelencia, Compromiso, Innovación y Transparencia son los principios que guían cada acción de nuestro equipo.",
            },
        ],
        []
    );

    const equipo = useMemo(
        () => ({
            titulo: "Nuestro Equipo",
            descripcion: "Un grupo multidisciplinario de profesionales altamente calificados, comprometidos con tu éxito.",
            miembros: [
                { nombre: "Lic. Juan Pérez", puesto: "Director General", experiencia: "10+ años" },
                { nombre: "CPA. María González", puesto: "Jefa de Contabilidad", experiencia: "8+ años" },
                { nombre: "Lic. Carlos Ramírez", puesto: "Asesor Fiscal Senior", experiencia: "12+ años" },
            ],
        }),
        []
    );

    // Elementos para las partículas (iconos pequeños como en HeroElegant)
    const elegantElements = useMemo(
        () => [
            { icon: <FiDollarSign size={12} />, size: "w-2 h-2", color: "text-teal-400" },
            { icon: <FiActivity size={12} />, size: "w-2 h-2", color: "text-emerald-400" },
            { icon: <FiTrendingUp size={12} />, size: "w-2 h-2", color: "text-cyan-400" },
            { icon: <FiFileText size={12} />, size: "w-2 h-2", color: "text-teal-300" },
            { icon: <FiPercent size={12} />, size: "w-2 h-2", color: "text-emerald-300" },
        ],
        []
    );

    const particles = useMemo(() => {
        return [...Array(12)].map((_, i) => {
            const element = elegantElements[Math.floor(Math.random() * elegantElements.length)];
            return <ElegantParticle key={`eleg-${i}`} id={`eleg-${i}`} element={element} />;
        });
    }, [elegantElements]);

    // Renderizado de bloques
    const renderBloque = (bloque, index) => {
        switch (bloque.tipo) {
            case "titulo":
                return (
                    <motion.h1
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300"
                    >
                        {bloque.texto}
                    </motion.h1>
                );
            case "parrafo":
                return (
                    <motion.p
                        key={bloque.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed max-w-4xl mx-auto text-center px-4"
                    >
                        {bloque.texto}
                    </motion.p>
                );
            default:
                return null;
        }
    };

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
            {/* Fondo: gradiente profundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

            {/* Textura de grid sutil */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Partículas flotantes con iconos (estilo HeroElegant) */}
            <div className="absolute inset-0 pointer-events-none">{particles}</div>

            {/* Glow decorativos en esquinas */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-4xl"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
                {/* Sección Principal */}
                <div className="mb-28 text-center">
                    {contenido.map((bloque, index) => renderBloque(bloque, index))}
                </div>

                {/* Valores, Misión y Visión */}
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
                                whileHover={{ scale: 1.02 }}
                                className="group"
                            >
                                <div className="p-8 rounded-xl bg-slate-800/20 backdrop-blur-md border border-slate-700/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-teal-500/30 text-teal-300 group-hover:bg-teal-500/10 group-hover:border-teal-400 transition-all">
                                            {valor.icono}
                                        </div>
                                        <h3 className="font-semibold text-white text-xl">{valor.titulo}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{valor.descripcion}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Nuestro Equipo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-slate-800/20 backdrop-blur-md rounded-2xl p-8 border border-slate-700/40 shadow-xl mb-16 overflow-hidden relative"
                >
                    {/* Glow interno decorativo */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-teal-500/5 blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-emerald-600/5 blur-3xl"></div>

                    <div className="text-center mb-12 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 mb-6">
                            <FiUsers className="text-teal-400 text-2xl" />
                        </div>
                        <h2 className="text-3xl font-light text-white mb-4">{equipo.titulo}</h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">{equipo.descripcion}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {equipo.miembros.map((miembro, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                whileHover={{ scale: 1.03 }}
                                className="group"
                            >
                                <div className="p-8 rounded-xl bg-slate-800/20 backdrop-blur-md border border-slate-700/40 hover:border-teal-500/40 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/30 border border-teal-500/30 text-teal-300 mb-5 group-hover:bg-teal-500/10 group-hover:border-teal-400 transition-all"
                                    >
                                        <FiUser className="text-2xl" />
                                    </motion.div>
                                    <h4 className="font-semibold text-white text-lg mb-1">{miembro.nombre}</h4>
                                    <p className="text-teal-200 mb-3">{miembro.puesto}</p>
                                    <p className="text-sm text-teal-300/80 flex items-center justify-center gap-1">
                                        <FiAward className="text-xs" /> {miembro.experiencia}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        to="/servicios"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 font-medium rounded-full shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:from-teal-500/30 hover:to-emerald-500/30"
                    >
                        Conoce Nuestros Servicios
                        <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SobreNosotros;