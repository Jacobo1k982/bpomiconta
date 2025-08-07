// src/components/InteractiveFinanceDashboard.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiDollarSign,
    FiTrendingUp,
    FiBarChart2,
    FiDownload,
    FiCalendar,
    FiFileText,
} from "react-icons/fi";

const InteractiveFinanceDashboard = () => {
    const [activeMonth, setActiveMonth] = useState(0);

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const data = [
        { income: 12400000, expenses: 8200000, profit: 4200000 },
        { income: 13800000, expenses: 8600000, profit: 5200000 },
        { income: 15200000, expenses: 9100000, profit: 6100000 },
        { income: 14500000, expenses: 8900000, profit: 5600000 },
        { income: 16700000, expenses: 9300000, profit: 7400000 },
        { income: 18900000, expenses: 10200000, profit: 8700000 },
        { income: 17500000, expenses: 9800000, profit: 7700000 },
        { income: 19200000, expenses: 10100000, profit: 9100000 },
        { income: 21000000, expenses: 10800000, profit: 10200000 },
        { income: 20500000, expenses: 10500000, profit: 10000000 },
        { income: 22800000, expenses: 11200000, profit: 11600000 },
        { income: 25000000, expenses: 12000000, profit: 13000000 },
    ];

    const current = data[activeMonth];

    // Generar puntos del gráfico
    const chartHeight = 200;
    const maxIncome = Math.max(...data.map(d => d.income));
    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = chartHeight - (d.profit / maxIncome) * chartHeight * 1.3;
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/30 mt-20 pt-12 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
                        Tu <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">estado financiero</span> en tiempo real
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explora cómo se verían tus finanzas con una gestión profesional. Este demo interactivo simula tu crecimiento mes a mes.
                    </p>
                </motion.div>

                {/* Panel de control */}
                <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6 mb-8 backdrop-blur-md">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <FiCalendar className="text-emerald-400" />
                            <div>
                                <label className="text-sm text-gray-400">Mes seleccionado</label>
                                <div className="flex gap-2 mt-1 flex-wrap">
                                    {months.map((month, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveMonth(i)}
                                            className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-200 ${i === activeMonth
                                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                                                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-700"
                                                }`}
                                        >
                                            {month}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all"
                        >
                            <FiDownload /> Exportar Reporte
                        </motion.button>
                    </div>
                </div>

                {/* Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Gráfico */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/40 backdrop-blur-sm">
                            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                                <FiBarChart2 className="text-cyan-400" />
                                Evolución de Utilidades (₡)
                            </h3>
                            <div className="h-64 w-full relative">
                                <svg className="w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
                                    {/* Fondo del gráfico */}
                                    <defs>
                                        <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                                        </linearGradient>
                                    </defs>

                                    {/* Área bajo la curva */}
                                    <polygon
                                        points={`0,200 ${points} 100,200`}
                                        fill="url(#gradient-fill)"
                                    />

                                    {/* Línea de utilidades */}
                                    <polyline
                                        points={points}
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="2"
                                        className="drop-shadow-lg"
                                    />

                                    {/* Punto actual */}
                                    <motion.circle
                                        cx={(activeMonth / (data.length - 1)) * 100}
                                        cy={chartHeight - (current.profit / maxIncome) * chartHeight * 1.3}
                                        r="4"
                                        fill="#06d6a0"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="drop-shadow-md"
                                    />
                                </svg>

                                {/* Eje Y (valores aproximados) */}
                                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pointer-events-none">
                                    <span>₡25M</span>
                                    <span>₡15M</span>
                                    <span>₡5M</span>
                                    <span>₡0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KPIs */}
                    <div className="space-y-5">
                        <div className="bg-gradient-to-br from-emerald-900/40 to-slate-800 rounded-xl p-6 border border-emerald-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                    <FiDollarSign className="text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Ingresos</p>
                                    <p className="text-2xl font-bold text-white">
                                        ₡{(current.income / 1000000).toFixed(1)}M
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs text-emerald-400 flex items-center gap-1">
                                <FiTrendingUp size={12} /> +{(Math.random() * 12 + 5).toFixed(1)}% vs mes anterior
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-900/40 to-slate-800 rounded-xl p-6 border border-cyan-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                    <FiTrendingUp className="text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Utilidad Neta</p>
                                    <p className="text-2xl font-bold text-white">
                                        ₡{(current.profit / 1000000).toFixed(1)}M
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs text-cyan-400">Margen: {((current.profit / current.income) * 100).toFixed(1)}%</p>
                        </div>

                        <div className="bg-gradient-to-br from-violet-900/40 to-slate-800 rounded-xl p-6 border border-violet-500/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                                    <FiFileText className="text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">Próximo Vencimiento</p>
                                    <p className="text-lg font-semibold text-white">DIOT</p>
                                    <p className="text-xs text-gray-400">15/{(activeMonth + 2) % 12 || 12}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nota */}
                <motion.p
                    className="text-center text-sm text-gray-500 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Demo interactivo. Datos simulados para fines ilustrativos.
                </motion.p>
            </div>
        </div>
    );
};

export default InteractiveFinanceDashboard;