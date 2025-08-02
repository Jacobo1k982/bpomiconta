// src/components/FooterFinanzas.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterFinanzas = () => {
    return (
        <footer className="relative bg-gradient-to-b from-slate-950 via-black to-teal-950 text-gray-400 pt-20 pb-12 overflow-hidden">
            {/* Línea decorativa superior sutil */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>

            {/* Wave SVG con gradiente sutil y textura refinada */}
            <div className="absolute top-0 left-0 right-0 -mt-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 opacity-10">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="url(#footerGradient1)"
                    />
                    <defs>
                        <linearGradient id="footerGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#0D9F8C" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Partículas flotantes muy sutiles y lentas (coherentes con el Hero) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`footer-particle-${i}`}
                        className="absolute rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            opacity: 0.05,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 10, 0],
                            opacity: [0.05, 0.2, 0.05],
                        }}
                        transition={{
                            duration: Math.random() * 40 + 30, // 30-70 segundos
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Columna 1: Logo y descripción */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 backdrop-blur-sm shadow-lg">
                                <img
                                    src="/Imagen/Navbar/icon.png"
                                    alt="Logo BPO MICONTA"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="ml-3">
                                <div className="flex items-baseline">
                                    <span className="text-xl font-bold text-white">BPO</span>
                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300 ml-1">
                                        MICONTA
                                    </span>
                                </div>
                                <p className="text-xs text-teal-200 font-medium tracking-wide uppercase mt-1">
                                    Soluciones Financieras
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Expertos en contabilidad estratégica y gestión financiera moderna para empresas que buscan claridad, control y crecimiento sostenible.
                        </p>

                        {/* Redes sociales con hover elegante */}
                        <div className="flex space-x-4 pt-2">
                            {[
                                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                                { name: 'Facebook', icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="text-gray-500 hover:text-teal-400 transition-all duration-300"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    <div className="h-5 w-5">
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Columna 2: Servicios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-base font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300">
                            Servicios
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Auditoría Financiera",
                                "Sistemas de Facturación",
                                "Análisis de Estados",
                                "Implementación ERP",
                                "Planificación Fiscal"
                            ].map((service, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 6 }}
                                        href="#"
                                        className="text-sm text-gray-400 hover:text-teal-300 transition-all duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-teal-500/40 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                                        {service}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 3: Enlaces Rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-base font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300">
                            Enlaces
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { text: "Sobre Nosotros", href: "/nosotros" },
                                { text: "Nuestro Equipo", href: "/nosotros" },
                                { text: "Casos de Estudio", href: "#" },
                                { text: "Blog", href: "/noticias" },
                                { text: "Preguntas Frecuentes", href: "/pre_frecuentes" }
                            ].map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 6 }}
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-teal-300 transition-all duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-emerald-500/40 rounded-full group-hover:bg-emerald-400 transition-colors"></span>
                                        {link.text}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 4: Contacto y Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300">
                            Contacto
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start text-sm text-gray-400 group">
                                <svg className="h-4 w-4 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="leading-tight">Calle. Topo, Principal<br />Montes de Oca, San Pedro</p>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 group">
                                <svg className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:50664541700" className="hover:text-teal-300 transition-colors">+506 (87) 905-876</a>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 group">
                                <svg className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:jgutierrez@bpomiconta.com" className="hover:text-teal-300 transition-colors">jgutierrez@bpomiconta.com</a>
                            </div>
                        </div>

                        {/* Newsletter con estilo del Hero */}
                        <div className="pt-4">
                            <h4 className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
                                Recibe nuestras actualizaciones
                            </h4>
                            <form className="flex rounded-lg overflow-hidden backdrop-blur-sm border border-slate-700/50 shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Tu correo"
                                    className="px-4 py-3 w-full bg-slate-800/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="relative bg-gradient-to-r from-teal-600/20 to-emerald-600/20 border-l border-teal-500/40 text-teal-100 px-5 py-3 text-sm font-medium transition-all duration-300 group"
                                >
                                    <span className="relative z-10">Enviar</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Divisor y créditos */}
                <div className="border-t border-slate-800/50 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-600 transition-colors hover:text-gray-400">
                            © {new Date().getFullYear()} <span className="font-medium text-white">BPOMICONTA</span>. Todos los derechos reservados.
                        </p>
                        <div className="flex flex-wrap justify-center gap-5">
                            <Link to="/politica-privacidad" className="text-xs text-gray-600 hover:text-teal-400 transition-colors hover:underline">
                                Política de Privacidad
                            </Link>
                            <Link to="#" className="text-xs text-gray-600 hover:text-teal-400 transition-colors hover:underline">
                                Términos
                            </Link>
                            <Link to="#" className="text-xs text-gray-600 hover:text-teal-400 transition-colors hover:underline">
                                Mapa del Sitio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFinanzas;