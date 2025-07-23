import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logoFinanzas from '/Imagen/Navbar/icon.png';

// Constantes para datos estáticos
const SERVICES = [
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

const NAV_LINKS = [
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Noticias", path: "/noticias" },
    { name: "Contacto", path: "/contacto" }
];

// Componente para el dropdown de servicios
const ServicesDropdown = ({ services, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }}
                className="absolute z-20 left-0 mt-2 w-64 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
            >
                <div className="py-2">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.path}
                            className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r from-blue-50 to-teal-50 hover:text-blue-700 transition-all duration-200 group"
                            onClick={onClose}
                        >
                            <span className="mr-3 text-lg group-hover:scale-110 transition-transform">{service.icon}</span>
                            <span className="font-medium">{service.name}</span>
                        </Link>
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

// Componente para el menú móvil
const MobileMenu = ({ isOpen, onClose }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden fixed inset-0 z-40"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200
                        }}
                        className="relative ml-auto w-80 max-w-sm h-full bg-white shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="px-6 py-5 border-b border-gray-100 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-4">
                                <div className="space-y-1">
                                    <div className="border-b border-gray-100 pb-4">
                                        <button
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="w-full flex justify-between items-center text-gray-800 hover:text-blue-600 px-3 py-3 rounded-xl text-base font-semibold transition-colors"
                                        >
                                            <span>Servicios</span>
                                            <motion.svg
                                                className="h-5 w-5 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </motion.svg>
                                        </button>

                                        <AnimatePresence>
                                            {dropdownOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-2 pt-2 space-y-1">
                                                        {SERVICES.map((service, index) => (
                                                            <Link
                                                                key={index}
                                                                to={service.path}
                                                                className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                                                                onClick={onClose}
                                                            >
                                                                <span className="mr-3">{service.icon}</span>
                                                                {service.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {NAV_LINKS.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl text-base font-medium transition-colors"
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-100">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Consultor Gratis
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Componente principal Navbar
const NavbarFinanzas = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogoClick = () => {
        navigate('/');
        window.location.reload();
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <>
            <nav className={`fixed w-full z-30 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md py-2 shadow-md border-b border-gray-100'
                    : 'bg-transparent py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLogoClick}
                            className="flex-shrink-0 flex items-center cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className={`p-1.5 rounded-lg shadow-lg transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-blue-600 to-teal-500' : 'bg-white/80'
                                    }`}>
                                    <img
                                        src={logoFinanzas}
                                        alt="Logo Finanzas"
                                        className="h-10 w-auto"
                                    />
                                </div>
                                <div className="ml-3 flex flex-col">
                                    <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
                                        }`}>
                                        BPO<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">MICONTA</span>
                                    </span>
                                    <span className={`text-xs transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-blue-100'
                                        }`}>
                                        Soluciones financieras integrales
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Menú desktop */}
                        <div className="hidden md:flex items-center space-x-1">
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => toggleDropdown('services')}
                                    className={`px-4 py-2.5 text-sm font-semibold flex items-center rounded-lg transition-all duration-300 ${scrolled
                                            ? 'text-gray-700 hover:bg-gray-100'
                                            : 'text-white/90 hover:bg-white/10'
                                        }`}
                                >
                                    Servicios
                                    <motion.svg
                                        className="ml-1.5 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ rotate: dropdownOpen === 'services' ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>
                                <ServicesDropdown
                                    services={SERVICES}
                                    isOpen={dropdownOpen === 'services'}
                                    onClose={() => setDropdownOpen(null)}
                                />
                            </div>

                            {NAV_LINKS.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${scrolled
                                            ? 'text-gray-700 hover:bg-gray-100'
                                            : 'text-white/90 hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                Consultor Gratis
                            </motion.button>
                        </div>

                        {/* Botón móvil */}
                        <div className="md:hidden flex items-center">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`p-2.5 rounded-lg transition-colors ${scrolled
                                        ? 'text-gray-700 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10'
                                    }`}
                                aria-label="Toggle menu"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
};

export default NavbarFinanzas;