import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logoFinanzas from '/Imagen/Navbar/icon.png';
import SERVICES from '../data/Contabilidad/servicesData.json';

const NAV_LINKS = [
    { name: "Sobre Nosotros", path: "/nosotros" },
    { name: "Noticias", path: "/noticias" },
    { name: "Contacto", path: "/contacto" }
];

// Componente para el dropdown de servicios (con subcategorías escalonadas)
const ServicesDropdown = ({ services, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }}
                className="absolute z-50 left-0 mt-3 w-80 origin-top-right rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 focus:outline-none overflow-hidden border border-white/20"
            >
                <div className="py-3">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} onClose={onClose} />
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

// Componente para cada servicio (con subcategorías anidadas)
const ServiceItem = ({ service, onClose }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);

    if (service.subcategories) {
        return (
            <div className="group">
                {/* Servicio principal con subcategorías */}
                <button
                    onClick={() => setIsSubOpen(!isSubOpen)}
                    className="flex items-center justify-between w-full px-6 py-4 text-sm text-slate-700 hover:bg-gradient-to-r from-cyan-50/80 to-blue-50/80 hover:text-cyan-700 transition-all duration-200 border-b border-slate-100/50"
                >
                    <div className="flex items-center">
                        <span className="mr-4 text-xl">{service.icon}</span>
                        <span className="font-semibold">{service.name}</span>
                    </div>
                    <motion.svg
                        className="h-4 w-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isSubOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </button>

                {/* Subcategorías con animación escalonada */}
                <AnimatePresence>
                    {isSubOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="pl-12 pr-4 pb-2 space-y-1">
                                {service.subcategories.map((sub, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={sub.path}
                                        className="block px-4 py-3 text-xs text-slate-600 hover:bg-cyan-50/80 hover:text-cyan-700 rounded-lg transition-all duration-200 border-l-2 border-cyan-200/50 hover:border-cyan-400"
                                        onClick={onClose}
                                    >
                                        <div className="font-medium">{sub.name}</div>
                                        <div className="text-xs opacity-75 mt-1">{sub.description}</div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Servicio sin subcategorías
    return (
        <Link
            to={service.path}
            className="flex items-center px-6 py-4 text-sm text-slate-700 hover:bg-gradient-to-r from-cyan-50/80 to-blue-50/80 hover:text-cyan-700 transition-all duration-200 group border-b border-slate-100/50 last:border-0"
            onClick={onClose}
        >
            <span className="mr-4 text-xl group-hover:scale-110 transition-transform">{service.icon}</span>
            <span className="font-semibold">{service.name}</span>
        </Link>
    );
};

// Componente para el menú móvil (con subcategorías escalonadas)
const MobileMenu = ({ isOpen, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [subOpenIndex, setSubOpenIndex] = useState(null);

    const toggleSubcategories = (index) => {
        setSubOpenIndex(subOpenIndex === index ? null : index);
    };

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
                    {/* Backdrop con efecto de vidrio */}
                    <motion.div
                        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    {/* Panel con animación mejorada */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                            duration: 0.3
                        }}
                        className="relative ml-auto w-80 max-w-sm h-full bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header del menú móvil */}
                            <div className="px-6 py-5 border-b border-slate-700/50 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                                        <img
                                            src={logoFinanzas}
                                            alt="Logo Finanzas"
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <span className="ml-3 text-xl font-bold text-white">
                                        BPO<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">MICONTA</span>
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                >
                                    <svg className="h-6 w-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {/* Contenido del menú */}
                            <div className="flex-1 overflow-y-auto py-6 px-4">
                                <div className="space-y-2">
                                    {/* Dropdown de Servicios */}
                                    <div className="border border-slate-700/30 rounded-xl bg-slate-800/50 backdrop-blur-sm">
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex justify-between items-center text-slate-200 hover:text-cyan-300 px-4 py-4 rounded-xl text-base font-semibold transition-colors"
                                        >
                                            <div className="flex items-center">
                                                <span className="mr-3 text-lg">💼</span>
                                                <span>Servicios</span>
                                            </div>
                                            <motion.svg
                                                className="h-5 w-5 text-slate-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ rotate: servicesOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </motion.svg>
                                        </button>
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-2 px-2 space-y-1">
                                                        {SERVICES.map((service, index) => (
                                                            <div key={index}>
                                                                {service.subcategories ? (
                                                                    // Servicio con subcategorías en móvil
                                                                    <div>
                                                                        <button
                                                                            onClick={() => toggleSubcategories(index)}
                                                                            className="flex items-center justify-between w-full text-slate-300 hover:text-cyan-300 hover:bg-cyan-900/20 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                                                                        >
                                                                            <div className="flex items-center">
                                                                                <span className="mr-3 text-lg">{service.icon}</span>
                                                                                {service.name}
                                                                            </div>
                                                                            <motion.svg
                                                                                className="h-4 w-4 text-slate-400"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                                animate={{ rotate: subOpenIndex === index ? 180 : 0 }}
                                                                                transition={{ duration: 0.2 }}
                                                                            >
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                                            </motion.svg>
                                                                        </button>
                                                                        <AnimatePresence>
                                                                            {subOpenIndex === index && (
                                                                                <motion.div
                                                                                    initial={{ height: 0, opacity: 0 }}
                                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                                    exit={{ height: 0, opacity: 0 }}
                                                                                    transition={{ duration: 0.3 }}
                                                                                    className="overflow-hidden pl-8 pr-2 pb-2 space-y-1"
                                                                                >
                                                                                    {service.subcategories.map((sub, subIndex) => (
                                                                                        <Link
                                                                                            key={subIndex}
                                                                                            to={sub.path}
                                                                                            className="block text-slate-400 hover:text-cyan-300 hover:bg-cyan-900/20 px-4 py-2.5 rounded-lg text-xs transition-all"
                                                                                            onClick={onClose}
                                                                                        >
                                                                                            <div className="font-medium">{sub.name}</div>
                                                                                            <div className="text-xs opacity-75 mt-1">{sub.description}</div>
                                                                                        </Link>
                                                                                    ))}
                                                                                </motion.div>
                                                                            )}
                                                                        </AnimatePresence>
                                                                    </div>
                                                                ) : (
                                                                    // Servicio sin subcategorías en móvil
                                                                    <Link
                                                                        to={service.path}
                                                                        className="flex items-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-900/20 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                                                                        onClick={onClose}
                                                                    >
                                                                        <span className="mr-3 text-lg">{service.icon}</span>
                                                                        {service.name}
                                                                    </Link>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {/* Links de navegación */}
                                    {NAV_LINKS.map((link, index) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="block text-slate-300 hover:text-cyan-300 hover:bg-cyan-900/20 px-4 py-4 rounded-xl text-base font-medium transition-colors border border-slate-700/30 bg-slate-800/50 backdrop-blur-sm"
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Botón de acción en el footer */}
                            <div className="p-6 border-t border-slate-700/50">
                                <motion.button
                                    onClick={() => navigate('/contacto')}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3), 0 8px 10px -6px rgba(6, 182, 212, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Consultoría Gratis
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
            <nav className={`fixed w-full z-30 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl py-3 shadow-xl border-b border-slate-200/30'
                : 'bg-transparent py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo con efecto mejorado */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLogoClick}
                            className="flex-shrink-0 flex items-center cursor-pointer"
                        >
                            <div className="flex items-center group">
                                <div className={`p-2 rounded-xl shadow-xl transition-all duration-300 ${scrolled
                                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:shadow-cyan-500/20'
                                    : 'bg-white/90 group-hover:shadow-white/20'
                                    }`}>
                                    <img
                                        src={logoFinanzas}
                                        alt="Logo Finanzas"
                                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="ml-3 flex flex-col">
                                    <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'
                                        }`}>
                                        BPO<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">MICONTA</span>
                                    </span>
                                    <span className={`text-xs transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-blue-100'
                                        }`}>
                                        Soluciones financieras integrales
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        {/* Menú desktop con estilo mejorado */}
                        <div className="hidden md:flex items-center space-x-2">
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => toggleDropdown('services')}
                                    className={`px-5 py-3 text-sm font-bold flex items-center rounded-xl transition-all duration-300 ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100/80'
                                        : 'text-white/90 hover:bg-white/10'
                                        } ${dropdownOpen === 'services' ? (scrolled ? 'bg-slate-100/80' : 'bg-white/10') : ''}`}
                                >
                                    Servicios
                                    <motion.svg
                                        className="ml-2 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ rotate: dropdownOpen === 'services' ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
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
                                    className={`px-5 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${scrolled
                                        ? 'text-slate-700 hover:bg-slate-100/80'
                                        : 'text-white/90 hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3), 0 8px 10px -6px rgba(6, 182, 212, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-cyan-400/30"
                            >
                                Consultoría Gratis
                            </motion.button>
                        </div>
                        {/* Botón móvil con estilo mejorado */}
                        <div className="md:hidden flex items-center">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`p-3 rounded-xl transition-colors ${scrolled
                                    ? 'text-slate-700 hover:bg-slate-100/80'
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