// src/components/NavbarFinanzas.tsx
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

// --- Componentes auxiliares mejorados con estilo elegante ---

const ServicesDropdown = ({ services, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                }}
                className="absolute z-50 left-0 mt-4 w-80 origin-top-right rounded-2xl bg-slate-900/90 backdrop-blur-xl shadow-2xl ring-1 ring-slate-700/50 border border-slate-800/50 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="py-2">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} onClose={onClose} />
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

const ServiceItem = ({ service, onClose }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);

    if (service.subcategories) {
        return (
            <div className="group">
                <button
                    onClick={() => setIsSubOpen(!isSubOpen)}
                    className="flex items-center justify-between w-full px-6 py-4 text-sm text-gray-200 hover:bg-slate-800/50 hover:text-teal-300 transition-all duration-200 border-b border-slate-800/30"
                >
                    <div className="flex items-center">
                        <span className="mr-4 text-xl">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
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
                                        className="block px-4 py-3 text-xs text-gray-300 hover:bg-teal-900/20 hover:text-teal-300 rounded-lg transition-all duration-200 border-l-2 border-teal-500/30 hover:border-teal-400"
                                        onClick={onClose}
                                    >
                                        <div className="font-medium">{sub.name}</div>
                                        <div className="text-xs opacity-70 mt-1">{sub.description}</div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <Link
            to={service.path}
            className="flex items-center px-6 py-4 text-sm text-gray-200 hover:bg-slate-800/50 hover:text-teal-300 transition-all duration-200 group border-b border-slate-800/30 last:border-0"
            onClick={onClose}
        >
            <span className="mr-4 text-xl group-hover:scale-110 transition-transform">{service.icon}</span>
            <span className="font-medium">{service.name}</span>
        </Link>
    );
};

const MobileMenu = ({ isOpen, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [subOpenIndex, setSubOpenIndex] = useState(null);
    const navigate = useNavigate();

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
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                            duration: 0.3,
                        }}
                        className="relative ml-auto w-80 h-full bg-slate-900/95 backdrop-blur-lg shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="px-6 py-5 border-b border-slate-800/40 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30">
                                        <img src={logoFinanzas} alt="Logo" className="h-8 w-auto" />
                                    </div>
                                    <span className="ml-3 text-lg font-bold text-white">
                                        BPO<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">MICONTA</span>
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                                >
                                    <svg className="h-6 w-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                                <div className="border border-slate-800/40 rounded-xl bg-slate-800/30 backdrop-blur-sm">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="w-full flex justify-between items-center text-gray-200 hover:text-teal-300 px-4 py-4 rounded-xl text-sm font-medium transition-colors"
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
                                                                <div>
                                                                    <button
                                                                        onClick={() => toggleSubcategories(index)}
                                                                        className="flex items-center justify-between w-full text-gray-300 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-3 rounded-lg text-sm transition-all"
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
                                                                                        className="block text-gray-400 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-2.5 rounded-lg text-xs transition-all"
                                                                                        onClick={onClose}
                                                                                    >
                                                                                        <div className="font-medium">{sub.name}</div>
                                                                                        <div className="text-xs opacity-70 mt-1">{sub.description}</div>
                                                                                    </Link>
                                                                                ))}
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    to={service.path}
                                                                    className="flex items-center text-gray-300 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-3 rounded-lg text-sm transition-all"
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

                                {NAV_LINKS.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="block text-gray-200 hover:text-teal-300 hover:bg-slate-800/50 px-4 py-4 rounded-xl text-sm font-medium transition-colors border border-slate-800/40 backdrop-blur-sm"
                                        onClick={onClose}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="p-6 border-t border-slate-800/40">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/contacto')}
                                    className="w-full relative bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 px-4 py-4 rounded-xl text-sm font-medium shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group"
                                >
                                    <span className="relative z-10">Agenda tu Consulta</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- Navbar Principal Elegante ---
const NavbarFinanzas = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <nav
                className={`fixed w-full z-30 transition-all duration-500 ${scrolled
                        ? 'bg-slate-900/80 backdrop-blur-xl py-3 shadow-lg border-b border-slate-800/50'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo con efecto 3D sutil */}
                        <motion.div
                            onClick={handleLogoClick}
                            className="flex items-center cursor-pointer"
                            whileHover="hover"
                            whileTap="tap"
                            initial="initial"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                variants={{
                                    initial: { scale: 1 },
                                    hover: { scale: 1.03 },
                                    tap: { scale: 0.98 },
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center"
                            >
                                <div className="relative">
                                    <div
                                        className={`p-2.5 rounded-2xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700/50 shadow-lg transition-all duration-300 ${scrolled ? 'shadow-slate-900/30' : 'shadow-slate-900/40'
                                            }`}
                                    >
                                        <img
                                            src={logoFinanzas}
                                            alt="Logo"
                                            className="h-8 w-auto transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <div className="flex items-baseline">
                                        <span className="text-xl sm:text-2xl font-bold text-white">BPO</span>
                                        <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-300 ml-1">
                                            MICONTA
                                        </span>
                                    </div>
                                    <p className="text-xs text-teal-200 font-medium tracking-wide uppercase">
                                        Soluciones Financieras
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Menú Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => toggleDropdown('services')}
                                    className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-1 ${dropdownOpen === 'services'
                                            ? 'text-teal-300 bg-slate-800/50'
                                            : 'text-gray-200 hover:bg-slate-800/40 hover:text-teal-200'
                                        }`}
                                >
                                    Servicios
                                    <motion.svg
                                        className="h-4 w-4 text-slate-400"
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
                                    className="px-5 py-3 text-sm font-medium text-gray-200 hover:text-teal-200 hover:bg-slate-800/40 rounded-xl transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/contacto')}
                                className="ml-4 px-6 py-3 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm border border-teal-500/40 text-teal-100 font-medium rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group"
                            >
                                <span className="relative z-10">Agenda tu Consulta</span>
                            </motion.button>
                        </div>

                        {/* Botón móvil */}
                        <div className="md:hidden">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/40 text-gray-200 transition-colors"
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

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
};

export default NavbarFinanzas;