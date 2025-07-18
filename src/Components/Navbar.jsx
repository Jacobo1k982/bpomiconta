import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logoFinanzas from '/Imagen/Navbar/icon.png';

const NavbarFinanzas = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        // Navega a la página de inicio y luego recarga
        navigate('/');
        window.location.reload();
    };

    const services = [
        {
            name: "Contabilidad Financiera",
            icon: "📊",
            path: "/servicios/contabilidad-financiera"
        },
        {
            name: "Sistemas de Facturación",
            icon: "🖥️",
            path: "/servicios/consultoria-fiscal"
        },
        {
            name: "Análisis de Estados Financieros",
            icon: "📈",
            path: "/servicios/analisis-financiero"
        },
        {
            name: "Implementación ERP",
            icon: "🖥️",
            path: "/servicios/erp"
        },
        {
            name: "Inventario y Logística",
            icon: "📦",
            path: "/servicios/gestion_inventario"
        },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo con enlace a home que recarga la página */}
                    <div
                        onClick={handleLogoClick}
                        className="flex-shrink-0 flex items-center cursor-pointer"
                    >
                        <div className="flex items-center">
                            <img
                                src={logoFinanzas}
                                alt="Logo Finanzas"
                                className="h-12 w-auto"
                            />
                            <div className="ml-2 flex flex-col">
                                <span className="text-3xl font-bold text-gray-900">
                                    BPO<span className="text-blue-600">MICONTA</span>
                                </span>
                                <span className="text-sm text-gray-500 mt-[-4px]">
                                    Soluciones financieras integrales
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Menú desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(dropdownOpen === 'services' ? null : 'services')}
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                            >
                                Servicios
                                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <AnimatePresence>
                                {dropdownOpen === 'services' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute z-10 left-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div className="py-2">
                                            {services.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    to={service.path}
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                                    onClick={() => setDropdownOpen(null)}
                                                >
                                                    <span className="mr-2">{service.icon}</span>
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sobre Nosotros</Link>
                        <Link to="/noticias" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Noticias</Link>
                        <Link to="/contacto" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contacto</Link>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition-colors"
                        >
                            Consultor Gratis
                        </motion.button>
                    </div>

                    {/* Botón móvil */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                            <div>
                                <button
                                    onClick={() => setDropdownOpen(dropdownOpen === 'mobileServices' ? null : 'mobileServices')}
                                    className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium"
                                >
                                    <span>Servicios</span>
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dropdownOpen === 'mobileServices' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                                    </svg>
                                </button>

                                {dropdownOpen === 'mobileServices' && (
                                    <div className="pl-4 space-y-1">
                                        {services.map((service, index) => (
                                            <Link
                                                key={index}
                                                to={service.path}
                                                className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="mr-2">{service.icon}</span>
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link to="/about" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotros</Link>
                            <Link to="/clientes" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Clientes</Link>
                            <Link to="/noticias" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                            <Link to="/contacto" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium shadow-md hover:bg-blue-700 transition-colors mt-2"
                            >
                                Consultor Gratis
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarFinanzas;