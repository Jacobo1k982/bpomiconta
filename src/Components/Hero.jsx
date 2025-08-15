// src/components/HeroContabilidadPymeCR.tsx
import React, { useState, useEffect, useMemo, memo } from "react";
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

// Partícula flotante optimizada
const DataParticle = memo(({ id, element }) => {
  const delay = Math.random() * 5;
  const duration = Math.random() * 15 + 15;

  return (
    <motion.div
      key={id}
      className={`absolute ${element.size} ${element.color} opacity-10 pointer-events-none`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        willChange: "transform",
      }}
      animate={{
        y: [0, -25, 0],
        x: [-4, 4, -4],
        scale: [0.8, 1.3, 0.8],
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      initial={false}
    >
      {element.icon}
    </motion.div>
  );
});
DataParticle.displayName = "DataParticle";

// Contador animado mejorado con requestAnimationFrame
const AnimatedCounter = memo(({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const endValue = parseFloat(value.replace(/[^0-9.-]/g, "")) || 0;
    if (endValue === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = endValue * progress;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  const displayValue = value.includes("₡")
    ? `₡${Math.floor(count).toLocaleString()}`
    : `${count.toFixed(0)}%`;

  return <span className="font-bold tabular-nums">{displayValue}</span>;
});
AnimatedCounter.displayName = "AnimatedCounter";

const HeroContabilidadPymeCR = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["PyMEs", "Profesionales", "Emprendedores"];

  // Espacio reservado para evitar cambios de layout
  const maxWordLength = Math.max(...words.map((w) => w.length));
  const placeholderText = "\u200B".repeat(maxWordLength);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      const newText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(newText);
      setTypingSpeed(isDeleting ? 50 : 140);

      if (!isDeleting && newText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const benefits = useMemo(
    () => [
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
    ],
    []
  );

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
    return [...Array(12)].map((_, i) => {
      const element = financialElements[Math.floor(Math.random() * financialElements.length)];
      return <DataParticle key={`cr-particle-${i}`} id={`cr-${i}`} element={element} />;
    });
  }, [financialElements]);

  const kpis = useMemo(
    () => [
      { label: "Flujo de Caja", value: "₡2.4M", up: true },
      { label: "Margen Bruto", value: "62%", up: true },
      { label: "Fact. Mensual", value: "₡18.7M", up: true },
      { label: "Imp. Ahorrados", value: "₡1.1M", up: true },
    ],
    []
  );

  return (
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-teal-900/20"></div>

      {/* Textura de hoja de cálculo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          filter: "blur(0.3px)",
        }}
      />

      {/* Efectos de flujo de datos animados */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent blur-sm"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent blur-sm -rotate-1"
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, delay: 1.2, ease: "easeInOut" }}
        style={{ transformOrigin: "right" }}
      />

      {/* Partículas flotantes */}
      <div className="pointer-events-none absolute inset-0">{particles}</div>

      {/* Brillos decorativos */}
      <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/2 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl opacity-15 animate-bounce delay-1000"></div>

      {/* Contenedor principal centrado */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center space-y-10 relative z-10">
        {/* Título con typewriter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 tracking-wide pt-20"
          >
            Contabilidad inteligente para{" "}
            <span className="font-semibold block mt-2">
              <span className="inline-block relative min-h-[1.2em] text-white">
                <span className="opacity-0 absolute inset-0">{placeholderText}</span>
                <span className="relative z-10">
                  {text}
                  <motion.span
                    className="inline-block w-1 h-8 sm:h-10 bg-gradient-to-t from-emerald-400 to-cyan-400 ml-2 align-middle rounded-full"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                </span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforma tu caos financiero en claridad. Cumple con Hacienda, optimiza tus impuestos y toma decisiones con precisión.
            <strong className="text-white"> Todo en una sola plataforma segura.</strong>
          </motion.p>
        </motion.div>

        {/* KPIs animados - centrados */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-slate-800/40 backdrop-blur-sm border border-emerald-500/20 rounded-lg px-5 py-4 text-center min-w-[140px] shadow-sm hover:shadow-md transition-all duration-300 hover:bg-slate-800/60"
            >
              <div className="text-sm text-gray-300 font-medium">{kpi.label}</div>
              <div className="text-white text-lg mt-1">
                <AnimatedCounter value={kpi.value} />
              </div>
              <div className="text-emerald-400 text-xs mt-1">↑ +{Math.random().toFixed(1)}%</div>
            </div>
          ))}
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="/contacto"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            whileHover={{ boxShadow: "0 0 30px rgba(16, 185, 129, 0.35)" }}
          >
            <span className="relative z-10">Agenda tu Consulta Gratuita</span>
            <FiArrowRight className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            <motion.div
              className="absolute inset-0 bg-white/15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              initial={false}
            />
          </motion.a>
        </motion.div>

        {/* Sello de confianza */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.span
            className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
            whileHover={{ x: 2 }}
          >
            <FiShield size={14} className="text-emerald-400" /> <span>Expertos en Hacienda CR</span>
          </motion.span>
          <span className="text-gray-600">•</span>
          <motion.span
            className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            whileHover={{ x: 2 }}
          >
            <FiClock size={14} className="text-cyan-400" /> <span>Soporte en menos de 2h</span>
          </motion.span>
          <span className="text-gray-600">•</span>
          <motion.span
            className="flex items-center gap-1 hover:text-teal-300 transition-colors"
            whileHover={{ x: 2 }}
          >
            <FiZap size={14} className="text-teal-400" /> <span>Plataforma 100% digital</span>
          </motion.span>
        </motion.div>

        {/* Beneficios (opcional: si quieres mostrarlos debajo en móvil) */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-2 gap-5 max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="p-5 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center border border-emerald-500/30 text-emerald-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-tight">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroContabilidadPymeCR);