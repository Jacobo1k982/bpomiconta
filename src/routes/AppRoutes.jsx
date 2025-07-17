import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion aquí
import Layout from "../Components/Layout";
import Contactanos from "../Components/Contactanos.jsx";
import FinanceDivider from "../page/FinanceDivider.jsx";

// Lazy loading con nombres más descriptivos
const HomeHero = lazy(() => import("../Components/Hero.jsx"));
const NewsSection = lazy(() => import("../Components/Noticias.jsx"));
const NewsDetail = lazy(() => import("../page/NoticiaDetalle.jsx"));
const AboutUs = lazy(() => import("../Components/QuienesSomos.jsx"));
const AccountingAdvisory = lazy(() => import("../Components/ContabilidadFinanciera.jsx"));
const OtherServices = lazy(() => import("../page/OtrosServicios.jsx"));
const InventoryManagement = lazy(() => import("../Components/GestionInventario.jsx"));
const ImplementacionERP = lazy(() => import("../Components/ImplementacionERP.jsx"));
const RegistroDeMarca = lazy(() => import("../Components/RegistroDeMarca.jsx"));
const NotFound = lazy(() => import("../Components/NotFound.jsx"));
const PrivacyPolicy = lazy(() => import("../page/PrivacyPolicy.jsx"));
const NoticiaDestacada = lazy(() => import("../Components/NoticiaDestacada.jsx"));
const NoticiaDestacadaDetalle = lazy(() => import("../page/NoticiaDestacadaDetalle.jsx"));

// Loader mejorado con animación profesional
const LoadingIndicator = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
        >
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
            </div>
            <motion.p
                className="text-blue-300 text-lg font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Cargando experiencia financiera...
            </motion.p>
        </motion.div>
    </div>
);

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
                                <OtherServices />
                            </div>
                        }
                    />

                    {/* Rutas de contenido */}
                    <Route path="/noticias" element={<NewsSection />} />
                    <Route path="/noticias/:id" element={<NewsDetail />} />
                    <Route path="/politica-privacidad" component={PrivacyPolicy} />
                    <Route path="/noticias-destacadas/:id" element={<NoticiaDestacadaDetalle />} />
"

                    {/* Rutas de servicios */}
                    <Route path="/servicios/asesoria-contable" element={<AccountingAdvisory />} />
                    <Route path="/servicios/gestion_inventario" element={<InventoryManagement />} />

                    {/* Rutas corporativas */}
                    <Route path="/nosotros" element={<AboutUs />} />
                    <Route path="/contacto" element={<Contactanos />} />
                    <Route path="/servicios/contabilidad-financiera" element={<AccountingAdvisory />} />
                    <Route path="/servicios/erp" element={<ImplementacionERP />} />
                    <Route patah="/servicios/registro_marca" element={<RegistroDeMarca />} />

                    {/* Redirección para rutas obsoletas */}
                    <Route path="/about" element={<Navigate to="/nosotros" replace />} />
                    <Route path="/contact" element={<Navigate to="/contacto" replace />} />

                    {/* Ruta comodín para 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;