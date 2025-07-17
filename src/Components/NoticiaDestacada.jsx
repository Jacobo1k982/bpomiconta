import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import noticiasData from '../data/noticiasDestacadas.json';

const NoticiaDestacada = () => {
    // Obtener las noticias destacadas del JSON
    const noticiasDestacadas = noticiasData.noticias.filter(noticia => noticia.destacada);

    return (
        <motion.section
            className="relative bg-gradient-to-br from-gray-900 to-blue-900/80 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido textual */}
                    <div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-sm font-medium text-blue-300">Tribu-CR</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                                ¿Como pasar de ATV a
                            </span> Tribu-CR
                        </h2>

                        <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                            Le mostramos cómo Tribu-CR puede ayudarte a optimizar tu contabilidad y cumplir con las nuevas normativas fiscales. Descubre los beneficios de migrar de ATV a Tribu-CR.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex items-center text-blue-200">
                                <FiCalendar className="mr-2 text-blue-300" />
                                <span className="font-medium">15 Julio, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-4 py-1.5 bg-blue-800/30 text-blue-300 rounded-full text-sm font-medium">
                                    Prioridad Alta
                                </div>
                                <div className="px-3 py-1.5 bg-green-900/30 text-green-300 rounded-full text-sm font-medium flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                    Nuevo
                                </div>
                            </div>
                        </div>

                        <Link to="/guias/migracion-tribu-cr">
                            <motion.div
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                            >
                                Leer Análisis Completo
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </div>

                    {/* Tarjeta de resumen (derecha) */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-2xl p-1 border border-white/10"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/70 rounded-xl p-6 h-full">
                            <h3 className="text-lg font-semibold text-blue-200 mb-4">Puntos Clave</h3>
                            <ul className="space-y-4">
                                {noticiasDestacadas.map((noticia, index) => (
                                    <motion.li
                                        key={noticia.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link to={`/noticias-destacadas/${noticia.id}`}>
                                            <motion.div
                                                className="group flex items-start p-3 -m-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                                                whileHover={{ x: 4 }}
                                            >
                                                <div className="flex-shrink-0 mt-1 mr-3">
                                                    <div className={`w-2 h-2 rounded-full ${noticia.destacada ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`}></div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-blue-100 group-hover:text-white transition-colors truncate">
                                                            {noticia.titulo}
                                                        </span>
                                                        {noticia.destacada && (
                                                            <span className="px-2 py-0.5 bg-green-900/40 text-green-300 rounded-full text-xs whitespace-nowrap">
                                                                Nuevo
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center mt-1">
                                                        <span className="text-xs text-blue-400/80 group-hover:text-blue-300 transition-colors">
                                                            Ver detalles
                                                        </span>
                                                        <FiArrowRight className="ml-1 w-3 h-3 text-blue-400/50 group-hover:text-blue-300 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Mini gráfico de impacto */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-sm font-medium text-blue-300 mb-3">Impacto estimado en ahorro fiscal</h4>
                                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "78%" }}
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-blue-300/80 mt-2">
                                    <span>0%</span>
                                    <span>Hasta 78% en casos óptimos</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default NoticiaDestacada;