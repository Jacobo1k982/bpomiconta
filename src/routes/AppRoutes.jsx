import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../Components/Layout";
import Contactanos from "../Components/Contactanos.jsx";
import FinanceDivider from "../page/FinanceDivider.jsx";
import OtherServices from "../page/OtrosServicios.jsx";

// Lazy loading con nombres más descriptivos
const HomeHero = lazy(() => import("../Components/Hero.jsx"));
const NewsSection = lazy(() => import("../Components/Noticias.jsx"));
const NewsDetail = lazy(() => import("../page/NoticiaDetalle.jsx"));
const AboutUs = lazy(() => import("../Components/QuienesSomos.jsx"));
const RegistroMarca = lazy(() => import("../Components/RegistroDeMarca.jsx"));
const InventoryManagement = lazy(() => import("../Components/GestionInventario.jsx"));
const ImplementacionERP = lazy(() => import("../Components/ImplementacionERP.jsx"));
const NotFound = lazy(() => import("../Components/NotFound.jsx"));
const PrivacyPolicy = lazy(() => import("../page/PrivacyPolicy.jsx"));
const NoticiaDestacada = lazy(() => import("../Components/NoticiaDestacada.jsx"));
const NoticiaDestacadaDetalle = lazy(() => import("../page/NoticiasDestacadas/NoticiaDestacadaDetalle.jsx"));
const CarouselServicios = lazy(() => import("../Components/CarouselServicios.jsx"));
const PreguntasFrecuentesContabilidad = lazy(() => import("../page/Footer/PreguntasFrecuentesContabilidad.jsx"));
const SistemasFacturacion = lazy(() => import("../Components/Contabilidad/SistemasFacturacion.jsx"));
const ContabilidadFinanciera = lazy(() => import("../Components/Contabilidad/ContabilidadFinanciera.jsx"));
const ContabilidadFiscal = lazy(() => import("../Components/Contabilidad/ContabilidadFiscal.jsx"));
const ContabilidadCostos = lazy(() => import("../Components/Contabilidad/ContabilidadCostos.jsx"));
const ContabilidadGerencial = lazy(() => import("../Components/Contabilidad/ContabilidadGerencial.jsx"));
const ContabilidadAdministrativa = lazy(() => import("../Components/Contabilidad/ContabilidadAdministrativa.jsx"));
const FacturacionElectronica = lazy(() => import("../Components/Contabilidad/FacturacionElectronica.jsx"));
const PlaylistPage = lazy(() => import("../page/PlaylistPage.jsx"));
const ServiciosContables = lazy(() => import("../Components/Contabilidad/ServiciosContables.jsx"));
const AsesoriaEmprendedores = lazy(() => import("../Components/Contabilidad/AsesoriaEmprendedores.jsx"));

// === LoadingIndicator mejorado y alineado con tu estilo ===
const LoadingIndicator = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-teal-950 z-50 overflow-hidden">
            {/* Textura de grid sutil */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Partículas sutiles (mismo estilo que ImplementacionERP/HeroElegant) */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`load-particle-${i}`}
                    className="absolute w-2 h-2 text-teal-400 opacity-10"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <circle cx="6" cy="6" r="6" />
                    </svg>
                </motion.div>
            ))}

            {/* Glow decorativos */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

            {/* Contenido del loader */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-6 relative z-10"
            >
                {/* Spinner con degradado */}
                <div className="relative">
                    <motion.div
                        className="w-16 h-16 rounded-full border-4 border-teal-500/30 border-t-teal-400"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Punto central animado */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full shadow-lg"
                        animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                                "0 0 10px rgba(20, 184, 166, 0.5)",
                                "0 0 20px rgba(20, 184, 166, 0.8)",
                                "0 0 10px rgba(20, 184, 166, 0.5)",
                            ],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Texto con degradado */}
                <motion.p
                    className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Cargando experiencia financiera...
                </motion.p>
            </motion.div>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <Layout>
                <Routes>
                    {/* Ruta principal con estructura organizada */}
                    <Route
                        path="/"
                        element={
                            <div className="space-y-0">
                                <HomeHero />
                                <NoticiaDestacada />
                                <FinanceDivider />
                                <CarouselServicios />
                            </div>
                        }
                    />

                    {/* Rutas de contenido */}
                    <Route path="/noticias" element={<NewsSection />} />
                    <Route path="/noticias/:id" element={<NewsDetail />} />
                    <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
                    <Route path="/noticias-destacadas/:id" element={<NoticiaDestacadaDetalle />} />
                    <Route path="/pre_frecuentes" element={<PreguntasFrecuentesContabilidad />} />
                    <Route path="/playlist" element={<PlaylistPage />} />

                    {/* Rutas de servicios */}
                    <Route path="/servicios/gestion_inventario" element={<InventoryManagement />} />
                    <Route path="/Servicios/otros_servicios" element={<OtherServices />} />
                    <Route path="/servicios/erp" element={<ImplementacionERP />} />
                    <Route path="/Servicios/registro_marca" element={<RegistroMarca />} />
                    <Route path="/sistemas-facturacion" element={<SistemasFacturacion />} />
                    <Route path="/contabilidad-financiera" element={<ContabilidadFinanciera />} />
                    <Route path="/contabilidad-fiscal" element={<ContabilidadFiscal />} />
                    <Route path="/contabilidad-costos" element={<ContabilidadCostos />} />
                    <Route path="/contabilidad-gerencial" element={<ContabilidadGerencial />} />
                    <Route path="/contabilidad-administrativa" element={<ContabilidadAdministrativa />} />
                    <Route path="/facturas-electronicas" element={<FacturacionElectronica />} />
                    <Route path="/servicios-contables" element={<ServiciosContables />} />
                    <Route path="/asesoria-emprendedores" element={<AsesoriaEmprendedores />} />

                    {/* Rutas corporativas */}
                    <Route path="/nosotros" element={<AboutUs />} />
                    <Route path="/contacto" element={<Contactanos />} />

                    {/* Ruta comodín para 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;