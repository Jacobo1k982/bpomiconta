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

// --- Componentes auxiliares (ServicesDropdown, ServiceItem, MobileMenu) ---
// (Mantienen su funcionalidad base, con estilos mejorados)

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
                className="absolute z-50 left-0 mt-3 w-80 origin-top-right rounded-2xl bg-slate-800/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/10 focus:outline-none overflow-hidden border border-slate-700/50"
                style={{ transformStyle: "preserve-3d" }}
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

const ServiceItem = ({ service, onClose }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);
    if (service.subcategories) {
        return (
            <div className="group">
                <button
                    onClick={() => setIsSubOpen(!isSubOpen)}
                    className="flex items-center justify-between w-full px-6 py-4 text-sm text-gray-200 hover:bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:text-teal-300 transition-all duration-200 border-b border-slate-700/30"
                    style={{ transformStyle: "preserve-3d" }}
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
                                        className="block px-4 py-3 text-xs text-gray-300 hover:bg-slate-700/50 hover:text-teal-300 rounded-lg transition-all duration-200 border-l-2 border-teal-400/30 hover:border-teal-400"
                                        onClick={onClose}
                                        style={{ transformStyle: "preserve-3d" }}
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
    return (
        <Link
            to={service.path}
            className="flex items-center px-6 py-4 text-sm text-gray-200 hover:bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:text-teal-300 transition-all duration-200 group border-b border-slate-700/30 last:border-0"
            onClick={onClose}
            style={{ transformStyle: "preserve-3d" }}
        >
            <span className="mr-4 text-xl group-hover:scale-110 transition-transform">{service.icon}</span>
            <span className="font-semibold">{service.name}</span>
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
                        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
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
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="px-6 py-5 border-b border-slate-700/50 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg">
                                        <img
                                            src={logoFinanzas}
                                            alt="Logo Finanzas"
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <span className="ml-3 text-xl font-bold text-white">
                                        BPO<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">MICONTA</span>
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
                            <div className="flex-1 overflow-y-auto py-6 px-4">
                                <div className="space-y-2">
                                    <div className="border border-slate-700/30 rounded-xl bg-slate-800/50 backdrop-blur-sm">
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className="w-full flex justify-between items-center text-gray-200 hover:text-teal-300 px-4 py-4 rounded-xl text-base font-semibold transition-colors"
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
                                                                            className="flex items-center justify-between w-full text-gray-300 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-3 rounded-lg text-sm font-medium transition-all"
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
                                                                                            <div className="text-xs opacity-75 mt-1">{sub.description}</div>
                                                                                        </Link>
                                                                                    ))}
                                                                                </motion.div>
                                                                            )}
                                                                        </AnimatePresence>
                                                                    </div>
                                                                ) : (
                                                                    <Link
                                                                        to={service.path}
                                                                        className="flex items-center text-gray-300 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-3 rounded-lg text-sm font-medium transition-all"
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
                                            className="block text-gray-300 hover:text-teal-300 hover:bg-teal-900/20 px-4 py-4 rounded-xl text-base font-medium transition-colors border border-slate-700/30 bg-slate-800/50 backdrop-blur-sm"
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 border-t border-slate-700/50">
                                <motion.button
                                    onClick={() => navigate('/contacto')}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3), 0 8px 10px -6px rgba(20, 184, 166, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <span className="relative z-10">Consultoría Gratis</span>
                                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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

// --- Componente Principal NavbarFinanzas ---
const NavbarFinanzas = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
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

    // Función para aplicar el efecto shine a los botones del menú
    const MenuButtonShineEffect = ({ children, isActive = false, ...props }) => (
        <div className="relative group overflow-hidden rounded-xl" {...props}>
            <div className={`px-5 py-3 text-sm font-bold flex items-center rounded-xl transition-all duration-300 ${scrolled
                ? (isActive ? 'bg-slate-800/60' : 'text-gray-200 hover:bg-slate-800/50')
                : (isActive ? 'bg-slate-800/40' : 'text-gray-200 hover:bg-slate-800/30')
                }`}
                style={{ transformStyle: "preserve-3d" }}
            >
                {children}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
            </div>
        </div>
    );

    return (
        <>
            <nav className={`fixed w-full z-30 transition-all duration-500 ${scrolled
                ? 'bg-slate-900/90 backdrop-blur-xl py-3 shadow-xl border-b border-slate-700/50'
                : 'bg-transparent py-5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <motion.div
                            onClick={handleLogoClick}
                            className="flex-shrink-0 flex items-center cursor-pointer"
                            whileHover="hover"
                            whileTap="tap"
                            initial="initial"
                            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                        >
                            <motion.div
                                variants={{
                                    initial: { scale: 1 },
                                    hover: { scale: 1.05 },
                                    tap: { scale: 0.98 }
                                }}
                                transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center group"
                            >
                                {/* Contenedor del ícono con efectos 3D y brillo */}
                                <div className="relative">
                                    <div
                                        className={`relative p-2.5 rounded-2xl transition-all duration-300 
                    ${scrolled
                                                ? 'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg'
                                                : 'bg-gradient-to-br from-slate-800 to-slate-700 shadow-lg'
                                            } 
                    group-hover:shadow-2xl group-hover:shadow-teal-500/40
                    transform-gpu`}
                                        style={{
                                            transform: 'translateZ(10px)',
                                            boxShadow: scrolled
                                                ? '0 10px 25px -5px rgba(20, 184, 166, 0.3), 0 5px 10px -5px rgba(20, 184, 166, 0.2)'
                                                : '0 8px 20px -4px rgba(30, 41, 59, 0.3), 0 4px 8px -4px rgba(30, 41, 59, 0.2)'
                                        }}
                                    >
                                        <img
                                            src={logoFinanzas}
                                            alt="Logo Finanzas"
                                            className="h-8 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                        />
                                    </div>

                                    {/* Efecto de brillo (shine) */}
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity"
                                        variants={{
                                            hover: {
                                                backgroundPosition: '200% center'
                                            }
                                        }}
                                        animate="initial"
                                        whileHover={{
                                            backgroundPosition: ['0% center', '200% center'],
                                            transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
                                        }}
                                        style={{
                                            backgroundSize: '100% 100%',
                                            transform: 'translateZ(5px)'
                                        }}
                                    />
                                </div>

                                {/* Texto del logo */}
                                <div className="ml-3.5 transform-gpu" style={{ transform: 'translateZ(15px)' }}>
                                    <div className="flex items-baseline space-x-1">
                                        <span className={`text-xl sm:text-2xl font-extrabold ${scrolled ? 'text-white' : 'text-white'}`}>
                                            BPO
                                        </span>
                                        <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200">
                                            MICONTA
                                        </span>
                                    </div>
                                    <motion.p
                                        className={`text-[12.2px] sm:text-[14.5px] md:text-[14.5px] lg:text-[14.6px] xl:text-[14.5px] mt-0.5 ${scrolled ? 'text-teal-200' : 'text-teal-200'} font-medium tracking-widest uppercase`}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Soluciones Financieras
                                    </motion.p>

                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-2">
                            <div className="relative" ref={dropdownRef}>
                                {/* Botón Servicios con efecto shine y highlight */}
                                <MenuButtonShineEffect
                                    isActive={dropdownOpen === 'services'}
                                    onClick={() => toggleDropdown('services')}
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
                                </MenuButtonShineEffect>
                                <ServicesDropdown
                                    services={SERVICES}
                                    isOpen={dropdownOpen === 'services'}
                                    onClose={() => setDropdownOpen(null)}
                                />
                            </div>
                            {/* Links de navegación con efecto shine */}
                            {NAV_LINKS.map((link, index) => (
                                <MenuButtonShineEffect key={index} asChild>
                                    <Link
                                        to={link.path}
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {link.name}
                                    </Link>
                                </MenuButtonShineEffect>
                            ))}
                            {/* Botón de acción con efecto shine mejorado */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.3), 0 8px 10px -6px rgba(20, 184, 166, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-3 relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm border border-teal-400/30"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <span className="relative z-10">Consultoría Gratis</span>
                                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                            </motion.button>
                        </div>

                        <div className="md:hidden flex items-center">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`p-3 rounded-xl transition-colors ${scrolled
                                    ? 'text-gray-200 hover:bg-slate-800/50'
                                    : 'text-gray-200 hover:bg-slate-800/30'
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