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
const FinancialParticle = React.memo(({ id, element, index }) => {
  return (
    <motion.div
      key={id} // Usar una key estable
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

// Componente memoizado para un cubo (si decides mantenerlos)
const RotatingCube = React.memo(({ id }) => {
  return (
    <motion.div
      key={id} // Usar una key estable
      className="absolute w-8 h-8"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
        y: [0, Math.random() > 0.5 ? -150 : 150],
      }}
      transition={{
        duration: Math.random() * 30 + 30, // Más lento: 30-60 segundos
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute w-full h-full bg-teal-400/20 transform translate-z-4"></div>
      <div className="absolute w-full h-full bg-teal-500/20 transform rotate-y-180 translate-z-4"></div>
      <div className="absolute w-full h-full bg-emerald-400/20 transform rotate-y-90 translate-z-4"></div>
      <div className="absolute w-full h-full bg-emerald-500/20 transform rotate-y--90 translate-z-4"></div>
      <div className="absolute w-full h-full bg-cyan-400/20 transform rotate-x-90 translate-z-4"></div>
      <div className="absolute w-full h-full bg-cyan-500/20 transform rotate-x--90 translate-z-4"></div>
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
      icon: <FiBarChart2 className="text-teal-400 text-3xl" />,
      title: "Análisis Financiero",
      desc: "Informes claros para decisiones precisas",
    },
    {
      icon: <FiTrendingUp className="text-teal-400 text-3xl" />,
      title: "Optimización de Costos",
      desc: "Mejora tu rentabilidad y flujo de caja",
    },
    {
      icon: <FiBriefcase className="text-teal-400 text-3xl" />,
      title: "Gestión Empresarial",
      desc: "Control total de tus obligaciones fiscales",
    },
    {
      icon: <FiCheckCircle className="text-teal-400 text-3xl" />,
      title: "Cumplimiento Legal",
      desc: "Declaraciones y reportes sin errores",
    },
  ];

  // Elementos financieros para el fondo animado
  const financialElements = useMemo(() => [
    { icon: <FiDollarSign />, size: 'w-6 h-6', color: 'text-teal-400/30' },
    { icon: <FiActivity />, size: 'w-5 h-5', color: 'text-emerald-400/30' },
    { icon: <FiTrendingUp />, size: 'w-6 h-6', color: 'text-cyan-400/30' },
    { icon: <FiFileText />, size: 'w-5 h-5', color: 'text-teal-300/30' },
    { icon: <FiPercent />, size: 'w-6 h-6', color: 'text-emerald-300/30' },
    { icon: <FiBarChart2 />, size: 'w-5 h-5', color: 'text-cyan-300/30' },
  ], []);

  // Generar partículas con keys estables
  const particleElements = useMemo(() => {
    return [...Array(30)].map((_, i) => {
      const element = financialElements[Math.floor(Math.random() * financialElements.length)];
      // Usar un ID estable basado en el índice
      return <FinancialParticle key={`fin-${i}`} id={`fin-${i}`} element={element} index={i} />;
    });
  }, [financialElements]); // Solo se recalcula si financialElements cambia

  // Generar cubos con keys estables (opcional)
  const cubeElements = useMemo(() => {
    return [...Array(8)].map((_, i) => {
      // Usar un ID estable basado en el índice
      return <RotatingCube key={`cube-${i}`} id={`cube-${i}`} />;
    });
  }, []); // Solo se calcula una vez

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden pt-20 min-h-screen">
      {/* Contenedor 3D para elementos financieros */}
      <div className="absolute inset-0 perspective-1000">
        {/* Renderizar partículas memoizadas */}
        {particleElements}
        {/* Si decides mantener los cubos, también los renderizas memoizados */}
        {/* {cubeElements} */}
      </div>
      {/* Efecto de luz cenital */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Contabilidad financiera para{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 relative">
              {text}
              <motion.span
                className="inline-block w-1 h-12 bg-gradient-to-b from-teal-400 to-emerald-500 ml-1"
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
              translateZ: 10,
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
              className="relative bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-medium transition-all shadow-lg text-center overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(20px)"
              }}
            >
              <span className="relative z-10">Agenda tu asesoría</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 opacity-0 hover:opacity-100 transition-opacity"></div>
            </motion.a>
            <motion.button
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 px-7 py-3.5 rounded-full text-base sm:text-lg font-medium transition-all shadow-md relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                rotateX: -10,
                rotateY: -5,
                backgroundColor: "rgba(20, 184, 166, 0.1)",
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
        {/* Tarjetas de beneficios con efecto 3D */}
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
              className="flex items-start gap-5 bg-slate-800/40 backdrop-blur-lg p-5 rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 20,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, x: 50, rotateX: -15 }}
              animate={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)"
              }}
            >
              {/* Efecto de luz en las esquinas */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl"></div>
              </div>
              <motion.div
                className="mt-1 transform translate-z-20"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <div className="transform translate-z-10">
                <p className="font-bold text-white text-lg">{item.title}</p>
                <p className="text-sm text-gray-300">{item.desc}</p>
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
RotatingCube.displayName = 'RotatingCube';

export default Hero;