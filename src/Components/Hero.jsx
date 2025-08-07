// src/components/HeroContabilidadPymeCR.tsx
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiTrendingUp,
  FiCheckCircle,
  FiBriefcase,
  FiDollarSign,
  FiActivity,
  FiFileText,
  FiPercent,
  FiArrowRight,
  FiShield,
  FiClock,
  FiZap,
} from "react-icons/fi";

// Partícula flotante animada (datos financieros)
const DataParticle = React.memo(({ id, element }) => {
  const delay = Math.random() * 5;
  const duration = Math.random() * 15 + 15;

  return (
    <motion.div
      key={id}
      className={`absolute ${element.size} ${element.color} opacity-15 pointer-events-none`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 0.15))",
      }}
      animate={{
        y: [0, -30, 0],
        x: [-5, 5, -5],
        scale: [0.8, 1.4, 0.8],
        opacity: [0.1, 0.5, 0.1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.8,
        opacity: 0.8,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
    >
      {element.icon}
    </motion.div>
  );
});
DataParticle.displayName = "DataParticle";

// Contador animado para KPIs
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseFloat(value.replace(/[^0-9.-]/g, "")) || 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="font-bold">
      {value.includes("₡") ? `₡${Math.floor(count).toLocaleString()}` : value}
    </span>
  );
};

const HeroContabilidadPymeCR = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["PyMEs", "Profesionales", "Emprendedores"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 140);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
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
      icon: <FiCheckCircle className="text-emerald-400" />,
      title: "Cumplimiento 100% con Hacienda",
      desc: "Facturación electrónica, DIOT, declaraciones de IVA e IR. Todo al día, sin multas ni retrasos.",
    },
    {
      icon: <FiBarChart2 className="text-cyan-400" />,
      title: "Reportes Financieros Claros",
      desc: "Entiende tu flujo de caja, margen de ganancia y rentabilidad mensual. Toma decisiones con datos reales.",
    },
    {
      icon: <FiTrendingUp className="text-teal-400" />,
      title: "Optimización Fiscal Legal",
      desc: "Aprovecha beneficios del régimen aplicable y reduce tu carga fiscal con ética y transparencia.",
    },
    {
      icon: <FiBriefcase className="text-blue-400" />,
      title: "Gestión Integral y Segura",
      desc: "Desde la apertura hasta el crecimiento: contabilidad en la nube, respaldo y acceso 24/7 desde cualquier lugar.",
    },
  ];

  const financialElements = useMemo(
    () => [
      { icon: <FiDollarSign size={10} />, size: "w-2 h-2", color: "text-emerald-400" },
      { icon: <FiActivity size={10} />, size: "w-2.5 h-2.5", color: "text-cyan-400" },
      { icon: <FiTrendingUp size={10} />, size: "w-2 h-2", color: "text-teal-400" },
      { icon: <FiFileText size={10} />, size: "w-2.5 h-2.5", color: "text-blue-400" },
      { icon: <FiPercent size={10} />, size: "w-2 h-2", color: "text-violet-400" },
      { icon: <FiBarChart2 size={10} />, size: "w-2 h-2", color: "text-amber-400" },
    ],
    []
  );

  const particles = useMemo(() => {
    return [...Array(16)].map((_, i) => {
      const element = financialElements[Math.floor(Math.random() * financialElements.length)];
      return <DataParticle key={`cr-particle-${i}`} id={`cr-${i}`} element={element} />;
    });
  }, [financialElements]);

  // Simulación de KPIs financieros
  const kpis = [
    { label: "Flujo de Caja", value: "₡2.4M", up: true },
    { label: "Margen Bruto", value: "62%", up: true },
    { label: "Fact. Mensual", value: "₡18.7M", up: true },
    { label: "Imp. Ahorrados", value: "₡1.1M", up: true },
  ];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen pt-10">
      {/* Fondo con gradiente profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-teal-900/20"></div>

      {/* Textura de malla sutil (hoja de cálculo financiera) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          filter: "blur(0.5px)",
        }}
      />

      {/* Efectos de flujo de datos */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent blur-sm"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-500/25 to-transparent blur-sm -rotate-2"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">{particles}</div>

      {/* Brillos en esquinas */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-4xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-5xl animate-bounce"></div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 tracking-wide"
          >
            Contabilidad inteligente para{" "}
            <span className="font-semibold text-white">
              {text}
              <motion.span
                className="inline-block w-1 h-9 sm:h-12 bg-gradient-to-t from-emerald-400 to-cyan-400 ml-2 align-middle rounded-full"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforma tu caos financiero en claridad. Cumple con Hacienda, optimiza tus impuestos y toma decisiones con precisión.
            <strong className="text-white"> Todo en una sola plataforma segura.</strong>
          </motion.p>

          {/* KPIs animados */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-3 text-xs"
              >
                <div className="text-gray-300">{kpi.label}</div>
                <div className="text-white">
                  <AnimatedCounter value={kpi.value} />
                </div>
                <div className="text-emerald-400 text-xs">↑ +{Math.random() * 5 + 1.5}%</div>
              </div>
            ))}
          </motion.div>

          {/* CTA con brillo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/contacto"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              whileHover={{ boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
            >
              <span className="relative z-10">Agenda tu Consulta Gratuita</span>
              <FiArrowRight className="inline ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              <motion.div
                className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                initial={false}
              />
            </motion.a>
          </motion.div>

          {/* Sello de confianza animado */}
          <motion.div
            className="mt-8 text-sm text-gray-400 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.span
              className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
              whileHover={{ x: 2 }}
            >
              <FiShield className="text-emerald-400" size={14} /> <span>Expertos en Hacienda CR</span>
            </motion.span>
            <span className="hidden sm:inline">•</span>
            <motion.span
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
              whileHover={{ x: 2 }}
            >
              <FiClock className="text-cyan-400" size={14} /> <span>Soporte en menos de 2h</span>
            </motion.span>
            <span className="hidden sm:inline">•</span>
            <motion.span
              className="flex items-center gap-1 hover:text-teal-300 transition-colors"
              whileHover={{ x: 2 }}
            >
              <FiZap className="text-teal-400" size={14} /> <span>Plataforma 100% digital</span>
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Beneficios con efecto 3D */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="group p-6 bg-slate-800/20 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-emerald-500/60 transition-all duration-300 relative overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-900/50 to-slate-800 flex items-center justify-center border border-emerald-500/40 text-emerald-300 group-hover:scale-110 group-hover:from-emerald-600/50 transition-all duration-300 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContabilidadPymeCR;