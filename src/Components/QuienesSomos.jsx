import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/quienesSomos.json';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const QuienesSomos = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white pt-20">
            {/* Efecto de partículas decorativas */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px'
                        }}
                        animate={{
                            y: [null, (Math.random() * 100 - 50) + 'px'],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    {data.map((item) => {
                        if (item.activo === false) return null;

                        switch (item.tipo) {
                            case 'titulo':
                                return (
                                    <motion.div key={item.id} variants={itemVariants} className="text-center">
                                        <motion.h2
                                            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-400 pb-4"
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            {item.texto}
                                        </motion.h2>
                                        <motion.div
                                            className="mx-auto h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-1/3 my-6"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        />
                                    </motion.div>
                                );

                            case 'parrafo':
                                return (
                                    <motion.div key={item.id} variants={itemVariants} className="max-w-4xl mx-auto">
                                        <motion.p
                                            className="text-xl md:text-2xl leading-relaxed text-blue-100 text-center font-light"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        >
                                            {item.contenido}
                                        </motion.p>
                                    </motion.div>
                                );

                            case 'bloque':
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="relative group overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-indigo-900/20 rounded-2xl"></div>
                                        <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl">
                                            <motion.h3
                                                className="text-3xl font-semibold text-blue-300 mb-6"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                {item.titulo}
                                            </motion.h3>
                                            <motion.p
                                                className="text-blue-100 text-lg leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.8, delay: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                {item.contenido}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                );

                            case 'lista':
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="relative overflow-hidden rounded-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-indigo-900/30 rounded-2xl"></div>
                                        <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-2xl">
                                            <motion.h3
                                                className="text-3xl font-semibold text-blue-300 mb-8"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                {item.titulo}
                                            </motion.h3>
                                            <ul className="space-y-5">
                                                {item.items.map((val, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-start"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: 0.1 * index + 0.4
                                                        }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                    >
                                                        <div className="flex-shrink-0 mt-1.5">
                                                            <div className="h-7 w-7 rounded-full bg-blue-500/30 flex items-center justify-center">
                                                                <FaChevronRight className="text-blue-300 text-xs" />
                                                            </div>
                                                        </div>
                                                        <p className="ml-4 text-blue-100 text-lg">{val}</p>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                );

                            case 'imagen':
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="relative group overflow-hidden rounded-3xl shadow-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 z-10"></div>
                                        <motion.img
                                            src={item.imagen}
                                            alt={item.alt || ''}
                                            className="w-full h-auto max-h-[600px] object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="text-xl font-medium text-white">{item.titulo || ' '}</h4>
                                        </motion.div>
                                    </motion.div>
                                );

                            case 'video':
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="relative aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 z-10"></div>
                                        <iframe
                                            src={item.video}
                                            title={item.titulo}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <h4 className="text-xl font-medium text-white">{item.titulo}</h4>
                                        </motion.div>
                                    </motion.div>
                                );

                            case 'link':
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        className="text-center pt-8"
                                    >
                                        <motion.a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-lg font-medium group relative"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="relative overflow-hidden">
                                                <span className="inline-block bg-gradient-to-r from-blue-300 to-teal-400 bg-clip-text text-transparent">
                                                    {item.titulo}
                                                </span>
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                            </span>
                                            <FiExternalLink className="text-blue-300 group-hover:text-teal-300 transition-colors duration-300" />
                                        </motion.a>
                                    </motion.div>
                                );

                            default:
                                return null;
                        }
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default QuienesSomos;