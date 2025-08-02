// src/pages/PlaylistPage.tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiPlayCircle, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";

// === Partícula refinada (igual que en HeroElegant) ===
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

const PlaylistPage = () => {
    // Lista de videos (puedes reemplazar con tus rutas reales)
    const videos = [
        {
            id: 1,
            title: "Introducción a nuestra Firma",
            src: "/NoticiasDestacadas/videoplayback.mp4",
            description: "Conoce nuestra misión, valores y equipo de trabajo.",
        },
        {
            id: 2,
            title: "Cómo funciona el ERP para tu negocio",
            src: "/NoticiasDestacadas/video-erp.mp4",
            description: "Demostración práctica de la implementación de sistemas ERP.",
        },
        {
            id: 3,
            title: "Optimización Fiscal: Caso de Éxito",
            src: "/NoticiasDestacadas/video-fiscal.mp4",
            description: "Cómo ayudamos a una PyME a reducir impuestos legalmente.",
        },
    ];

    const currentVideo = videos[0]; // Puedes hacer esto dinámico con estado

    // Elementos para partículas (igual que en HeroElegant)
    const elegantElements = useMemo(
        () => [
            { icon: <FiPlayCircle size={12} />, size: "w-2 h-2", color: "text-teal-400" },
            { icon: <FiFileText size={12} />, size: "w-2 h-2", color: "text-emerald-400" },
            { icon: <FiArrowLeft size={12} />, size: "w-2 h-2", color: "text-cyan-400" },
        ],
        []
    );

    const particles = useMemo(() => {
        return [...Array(10)].map((_, i) => {
            const element = elegantElements[Math.floor(Math.random() * elegantElements.length)];
            return <ElegantParticle key={`eleg-${i}`} id={`eleg-${i}`} element={element} />;
        });
    }, [elegantElements]);

    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
            {/* Fondo: gradiente profundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-teal-950"></div>

            {/* Textura de grid sutil */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Partículas flotantes sutiles */}
            <div className="absolute inset-0 pointer-events-none">{particles}</div>

            {/* Glow decorativos */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-4xl"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto px-6 py-12">
                {/* Botón de volver */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2 text-teal-300 hover:text-teal-100 font-medium transition-colors duration-300"
                    >
                        <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Volver</span>
                    </Link>
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 mb-4 text-center"
                >
                    Playlist de Videos
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                    Explora nuestros videos informativos sobre servicios contables, implementación de ERP y optimización fiscal.
                </motion.p>

                {/* Reproductor de video principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-12"
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <video
                            src={currentVideo.src}
                            controls
                            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl bg-black"
                            poster="/images/video-poster.jpg" // Opcional: imagen de portada
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="text-xl font-semibold text-white">{currentVideo.title}</h3>
                        <p className="text-gray-400 mt-1">{currentVideo.description}</p>
                    </div>
                </motion.div>

                {/* Lista de videos */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 text-center">Otros videos</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {videos.slice(1).map((video) => (
                            <motion.div
                                key={video.id}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="group cursor-pointer"
                                onClick={() => alert(`Próximamente: reproducir ${video.title}`)} // Reemplaza con tu lógica
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-teal-500/10 transition-shadow duration-300">
                                    <div className="aspect-w-16 aspect-h-9 bg-slate-800 flex items-center justify-center">
                                        <FiPlayCircle className="text-6xl text-teal-400 opacity-80" />
                                    </div>
                                    <div className="p-4 bg-slate-800/30 backdrop-blur-sm">
                                        <h3 className="text-white font-medium group-hover:text-teal-300 transition-colors">{video.title}</h3>
                                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">{video.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PlaylistPage;