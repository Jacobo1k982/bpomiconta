// src/components/HeroElegant.tsx
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiBriefcase,
  FiTrendingUp,
  FiCheckCircle,
  FiDollarSign,
  FiActivity,
  FiFileText,
  FiPercent,
  FiArrowRight,
} from "react-icons/fi";

// Partícula refinada: más lenta, más discreta
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

const HeroElegant = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["empresas PyME", "tu negocio", "emprendedores", "profesionales"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const benefits = [
    {
      icon: <FiBarChart2 className="text-teal-400" />,
      title: "Análisis Estratégico",
      desc: "Datos transformados en decisiones ejecutivas.",
    },
    {
      icon: <FiTrendingUp className="text-emerald-400" />,
      title: "Optimización Fiscal",
      desc: "Maximiza beneficios, minimiza riesgos.",
    },
    {
      icon: <FiBriefcase className="text-cyan-400" />,
      title: "Gestión Integral",
      desc: "Control total con precisión contable.",
    },
    {
      icon: <FiCheckCircle className="text-teal-300" />,
      title: "Cumplimiento Garantizado",
      desc: "Sin errores, sin retrasos, sin estrés.",
    },
  ];

  const elegantElements = useMemo(() => [
    { icon: <FiDollarSign size={12} />, size: 'w-2 h-2', color: 'text-teal-400' },
    { icon: <FiActivity size={12} />, size: 'w-2 h-2', color: 'text-emerald-400' },
    { icon: <FiTrendingUp size={12} />, size: 'w-2 h-2', color: 'text-cyan-400' },
    { icon: <FiFileText size={12} />, size: 'w-2 h-2', color: 'text-teal-300' },
    { icon: <FiPercent size={12} />, size: 'w-2 h-2', color: 'text-emerald-300' },
  ], []);

  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const element = elegantElements[Math.floor(Math.random() * elegantElements.length)];
      return <ElegantParticle key={`eleg-${i}`} id={`eleg-${i}`} element={element} />;
    });
  }, [elegantElements]);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen pt-20">
      {/* Fondo: gradiente profundo en negro con textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

      {/* Grid sutil como textura de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Partículas flotantes muy sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Glow decorativos en esquinas */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-4xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Texto Principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 tracking-wide"
          >
            Claridad financiera para{" "}
            <span className="font-semibold text-white">
              {text}
              <motion.span
                className="inline-block w-0.5 h-8 sm:h-10 bg-gradient-to-t from-teal-300 to-emerald-400 ml-2 align-middle"
                animate={{ opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Soluciones contables modernas, precisas y diseñadas para empresas que valoran el control, la transparencia y el crecimiento sostenible.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/contacto"
              className="group px-8 py-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 font-medium rounded-full shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:from-teal-500/30 hover:to-emerald-500/30 flex items-center gap-2"
              whileHover={{ borderColor: "rgba(20, 184, 166, 0.6)" }}
            >
              <span>Agenda tu Consulta</span>
              <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>

            <motion.button
              className="px-8 py-4 text-gray-300 border border-gray-700 hover:border-teal-400 font-medium rounded-full transition-all duration-300 hover:bg-teal-500/10 hover:text-teal-300 backdrop-blur-sm bg-black/20"
            >
              Conoce nuestros servicios
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Beneficios con estilo elegante y limpio */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="group p-5 bg-slate-800/20 backdrop-blur-md rounded-xl border border-slate-700/40 hover:border-teal-500/40 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(20, 184, 166, 0.03)" }}
            >
              {/* Barra lateral animada */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-teal-500/30 text-teal-300 group-hover:bg-teal-500/10 group-hover:border-teal-400 transition-all">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroElegant;