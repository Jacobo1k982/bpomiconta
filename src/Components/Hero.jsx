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
} from "react-icons/fi";

// Partícula: datos flotando (flujo financiero)
const DataParticle = React.memo(({ id, element }) => {
  return (
    <motion.div
      key={id}
      className={`absolute ${element.size} ${element.color} opacity-10`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -10, 0],
        scale: [0.8, 1, 0.8],
        opacity: [0.1, 0.3, 0.1],
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
DataParticle.displayName = "DataParticle";

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
      setTypingSpeed(isDeleting ? 40 : 130);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
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
      desc: "Aprovecha beneficios del régimen aplicable (simplificado, normal, etc.) y reduce tu carga fiscal con ética.",
    },
    {
      icon: <FiBriefcase className="text-blue-400" />,
      title: "Gestión Integral y Segura",
      desc: "Desde la apertura hasta el crecimiento: contabilidad en la nube, respaldo y acceso 24/7 desde cualquier lugar.",
    },
  ];

  const elegantElements = useMemo(() => [
    { icon: <FiDollarSign size={10} />, size: 'w-1.5 h-1.5', color: 'text-emerald-400' },
    { icon: <FiActivity size={10} />, size: 'w-1.5 h-1.5', color: 'text-cyan-400' },
    { icon: <FiTrendingUp size={10} />, size: 'w-1.5 h-1.5', color: 'text-teal-400' },
    { icon: <FiFileText size={10} />, size: 'w-1.5 h-1.5', color: 'text-blue-400' },
    { icon: <FiPercent size={10} />, size: 'w-1.5 h-1.5', color: 'text-violet-400' },
  ], []);

  const particles = useMemo(() => {
    return [...Array(10)].map((_, i) => {
      const element = elegantElements[Math.floor(Math.random() * elegantElements.length)];
      return <DataParticle key={`cr-particle-${i}`} id={`cr-${i}`} element={element} />;
    });
  }, [elegantElements]);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden min-h-screen pt-10">
      {/* Fondo: gradiente profundo y profesional */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-950 to-emerald-900"></div>

      {/* Textura sutil: malla de datos */}
      <div
        className="absolute inset-0 opacity-6"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Partículas sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Efectos de brillo en esquinas */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-4xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 tracking-wide"
          >
            Contabilidad financiera para{" "}
            <span className="font-semibold text-white">
              {text}
              <motion.span
                className="inline-block w-0.5 h-8 sm:h-10 bg-gradient-to-t from-emerald-400 to-cyan-400 ml-2 align-middle"
                animate={{ opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Deja atrás el caos financiero. Te ayudamos a cumplir con Hacienda, entender tus números y crecer con orden,
            <strong> sin pagar de más ni perder tiempo</strong>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/contacto"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/40 text-emerald-100 font-medium rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:from-emerald-600/30 hover:to-cyan-600/30 flex items-center gap-2"
              whileHover={{ borderColor: "rgba(16, 185, 129, 0.6)" }}
            >
              <span>Agenda tu Consulta Gratuita</span>
              <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </motion.a>
          </motion.div>

          {/* Sello de confianza adicional */}
          <motion.div
            className="mt-8 text-sm text-gray-400 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="flex items-center gap-1">
              ✅ <span>Expertos en normativa CR</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              💻 <span>Plataforma 100% digital</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              🔐 <span>Datos seguros y encriptados</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="group p-5 bg-slate-800/20 backdrop-blur-md rounded-xl border border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center border border-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-400 transition-all duration-300">
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

export default HeroContabilidadPymeCR;