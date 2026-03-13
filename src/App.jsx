import React, { useState } from 'react';
import DashboardCafe from './DashboardCafe'
import FormularioRecepcion from './FormularioRecepcion'
import FormularioCompra from './FormularioCompra'
import FormularioCalidad from './FormularioCalidad'

// Iconos SVG rápidos para el menú
const Icon = ({ path, className }) => (
  <svg className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const views = [
  { id: 'dashboard', name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'recepcion', name: 'Recepción', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { id: 'compra', name: 'Orden de Compra', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'calidad', name: 'Análisis de Calidad', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
];

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans antialiased">
      {/* --- MENÚ VERTICAL LATERAL (SIDEBAR) --- */}
      <nav className="w-64 bg-amber-950 p-6 flex flex-col border-r border-amber-900 sticky top-0 h-screen">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-amber-600 p-2 rounded-xl text-white font-bold text-2xl">C</div>
          <span className="text-xl font-bold text-amber-50">Café ERP</span>
        </div>

        <div className="space-y-3 flex-1">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-semibold transition duration-200
                ${activeView === view.id
                  ? 'bg-amber-800 text-white shadow-inner'
                  : 'text-amber-200 hover:bg-amber-900 hover:text-white'}`}
            >
              <Icon path={view.icon} className={activeView === view.id ? 'text-amber-100' : 'text-amber-300'} />
              {view.name}
            </button>
          ))}
        </div>

        <div className="mt-auto border-t border-amber-900 pt-5">
          <div className="flex items-center gap-4">
            <img src="https://ui-avatars.com/api/?name=Luis&background=random" alt="User" className="w-12 h-12 rounded-full border-2 border-amber-700" />
            <div>
              <p className="font-semibold text-white">Luis Llinarez</p>
              <p className="text-xs text-amber-300">Líder Técnico</p>
            </div>
          </div>
        </div>
      </nav>

      {/* --- ÁREA DE CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 max-w-full overflow-x-hidden">
        {/* Barra superior (Opcional, pero para UX atractiva) */}
        <header className="bg-white p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-800">
            {views.find(v => v.id === activeView)?.name || 'Módulo'}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Campaña 2026
            </span>
            <button className="text-gray-500 hover:text-gray-800 transition p-2 rounded-lg bg-gray-100 border">
                <Icon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </button>
          </div>
        </header>

        {/* Contenidos */}
        <div className="p-8">
          {activeView === 'dashboard' && <DashboardCafe />}
          {activeView === 'recepcion' && <FormularioRecepcion />}
          {activeView === 'compra' && <FormularioCompra />}
          {activeView === 'calidad' && <FormularioCalidad />}
        </div>
      </main>
    </div>
  );
};

export default App;