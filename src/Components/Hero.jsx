// src/components/Hero.tsx
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
} from "react-icons/fi";

// Componente memoizado para una partícula financiera
const FinancialParticle = React.memo(({ id, element }) => {
  return (
    <motion.div
      key={id}
      className={`absolute flex items-center justify-center ${element.color} ${element.size}`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        y: [0, Math.random() > 0.5 ? -200 : 200],
        x: [0, Math.random() > 0.5 ? -200 : 200],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: Math.random() * 40 + 40, // Más lento: 40-80 segundos
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {element.icon}
    </motion.div>
  );
});

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["empresas PyME", "tu negocio", "emprendedores", "profesionales"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 150);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const benefits = [
    {
      icon: <FiBarChart2 className="text-teal-400 text-xl" />, // Icono más pequeño
      title: "Análisis Financiero",
      desc: "Informes claros para decisiones precisas",
    },
    {
      icon: <FiTrendingUp className="text-teal-400 text-xl" />,
      title: "Optimización de Costos",
      desc: "Mejora tu rentabilidad y flujo de caja",
    },
    {
      icon: <FiBriefcase className="text-teal-400 text-xl" />,
      title: "Gestión Empresarial",
      desc: "Control total de tus obligaciones fiscales",
    },
    {
      icon: <FiCheckCircle className="text-teal-400 text-xl" />,
      title: "Cumplimiento Legal",
      desc: "Declaraciones y reportes sin errores",
    },
  ];

  // Elementos financieros para el fondo animado (ajustados colores y tamaños)
  const financialElements = useMemo(() => [
    { icon: <FiDollarSign />, size: 'w-5 h-5', color: 'text-teal-400/20' }, // Menos opacidad
    { icon: <FiActivity />, size: 'w-4 h-4', color: 'text-emerald-400/20' },
    { icon: <FiTrendingUp />, size: 'w-5 h-5', color: 'text-cyan-400/20' },
    { icon: <FiFileText />, size: 'w-4 h-4', color: 'text-teal-300/20' },
    { icon: <FiPercent />, size: 'w-5 h-5', color: 'text-emerald-300/20' },
    { icon: <FiBarChart2 />, size: 'w-4 h-4', color: 'text-cyan-300/20' },
  ], []);

  // Generar partículas con keys estables
  const particleElements = useMemo(() => {
    // Considera reducir el número de partículas si se siente muy ocupado, ej: 20 o 25
    return [...Array(25)].map((_, i) => {
      const element = financialElements[Math.floor(Math.random() * financialElements.length)];
      return <FinancialParticle key={`fin-${i}`} id={`fin-${i}`} element={element} />;
    });
  }, [financialElements]);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-20 min-h-screen">
      {/* Contenedor 3D para elementos financieros */}
      <div className="absolute inset-0 perspective-1000">
        {particleElements}
      </div>

      {/* Efecto de luz cenital */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>

      {/* Glow / Resplandor alrededor del contenido principal (opcional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Texto principal con efecto 3D */}
        <motion.div
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left transform-style-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Brillo animado sobre el texto (opcional) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            Contabilidad financiera para{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 relative">
              {text}
              <motion.span
                className="inline-block w-0.5 h-10 sm:h-12 bg-gradient-to-b from-teal-300 to-emerald-400 ml-1.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ transform: "translateZ(20px)" }}
              />
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              translateY: -2,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Brindamos claridad, control y crecimiento para tu empresa con
            soluciones contables modernas, ágiles y confiables.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, z: -50 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ delay: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.a
              href="/contacto"
              className="relative bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-medium shadow-lg text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:from-teal-600 hover:via-emerald-600 hover:to-cyan-600"
              whileHover={{
                scale: 1.05,
                // rotateX: 5, // Opcional: efecto 3D sutil
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(20px)"
              }}
            >
              <span className="relative z-10">Agenda tu asesoría</span>
            </motion.a>
            <motion.button
              className="border border-teal-500/50 text-teal-300 hover:text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-medium transition-all shadow-md relative overflow-hidden bg-slate-800/30 backdrop-blur-sm hover:bg-teal-500/10"
              whileHover={{
                scale: 1.05,
                // backgroundColor: "rgba(20, 184, 166, 0.1)", // Ya manejado por hover:bg-teal-500/10
                boxShadow: "0 0 15px rgba(20, 184, 166, 0.3)", // Glow hover
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(15px)"
              }}
            >
              <span className="relative z-10">Conoce nuestros planes</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Tarjetas de beneficios con efecto 3D actualizadas */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-slate-800/30 backdrop-blur-lg p-4 rounded-2xl border border-slate-700/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                scale: 1.02,
                // z: 10, // Efecto 3D sutil
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(20, 184, 166, 0.15)", // Glow hover
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)"
              }}
            >
              {/* Efecto de luz en las esquinas */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-24 h-24 bg-teal-400/5 rounded-full blur-xl group-hover:bg-teal-400/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-400/5 rounded-full blur-xl group-hover:bg-emerald-400/10 transition-colors duration-300"></div>
              </div>

              {/* Icono en círculo */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-slate-700/50 border border-slate-600/50 group-hover:bg-teal-500/10 transition-colors duration-300">
                <motion.div
                  className="transform translate-z-20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
              </div>

              <div className="transform translate-z-10">
                <p className="font-bold text-white text-base">{item.title}</p>
                <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Añadir display name para evitar warnings en desarrollo
FinancialParticle.displayName = 'FinancialParticle';

export default Hero;