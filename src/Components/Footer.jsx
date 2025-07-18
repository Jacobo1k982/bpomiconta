import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterFinanzas = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            {/* Ola decorativa */}
            <div className="relative -top-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Columna 1 - Logo y descripción */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center">
                            <img
                                src="/Imagen/Navbar/icon.png" // Asegúrate de que la ruta sea correcta
                                alt="FinCorp Logo"
                                className="h-8 w-auto"
                            />
                            <span className="ml-2 text-xl font-bold">BPO<span className="text-blue-400">MICONTA</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Soluciones contables y financieras de alto nivel para empresas que buscan optimizar sus recursos y maximizar su crecimiento sostenible.
                        </p>
                        <div className="flex space-x-4">
                            {['LinkedIn', 'Twitter', 'Facebook'].map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    href="#"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="h-6 w-6">
                                        {/* Iconos de redes sociales */}
                                        {social === 'LinkedIn' && (
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        )}
                                        {social === 'Twitter' && (
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        )}
                                        {social === 'Facebook' && (
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        )}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Columna 2 - Servicios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-blue-400">Servicios</h3>
                        <ul className="space-y-3">
                            {[
                                "Auditoría Financiera",
                                "Sistemas de Facturación",
                                "Análisis de Estados Financieros",
                                "Implementación ERP",
                                "Planificación Financiera"
                            ].map((service, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors flex items-start"
                                    >
                                        <svg className="h-4 w-4 mt-1 mr-2 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                        {service}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 3 - Enlaces rápidos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-blue-400">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            {[
                                { text: "Sobre Nosotros", icon: "🏢", href: "#sobre-nosotros" },
                                { text: "Nuestro Equipo", icon: "👥", href: "/nosotros" },
                                { text: "Casos de Estudio", icon: "📑", href: "#casos-estudio" },
                                { text: "Blog Financiero", icon: "📚", href: "/noticias" },
                                { text: "Preguntas Frecuentes", icon: "❓", href: "#faq" }
                            ].map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 5 }}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">{link.icon}</span>
                                        {link.text}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 4 - Contacto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-semibold text-blue-400">Contacto</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <svg className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p className="text-gray-400">Calle. Topo, Principal<br />Montes de Oca, San Pedro</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a href="tel:50664541700" className="text-gray-400 hover:text-white transition-colors">+506 (87) 905-876</a>
                            </div>
                            <div className="flex items-center">
                                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:jgutierrez@bpomiconta.com" className="text-gray-400 hover:text-white transition-colors">jgutierrez@bpomiconta.com</a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-blue-400 mb-3">Suscríbete a nuestro boletín</h4>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                                >
                                    Enviar
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* División */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} BPOMICONTA. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/politica-privacidad" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                                Política de Privacidad
                            </Link>
                            <Link to="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                                Términos de Servicio
                            </Link>
                            <Link to="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                                Mapa del Sitio
                            </Link>
                        </div>+
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFinanzas;