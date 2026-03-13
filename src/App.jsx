import React, { useState } from 'react';
import FormularioRecepcion from './FormularioRecepcion'
import FormularioCompra from './FormularioCompra'
import FormularioCalidad from './FormularioCalidad'

// Sistema de Íconos (Limpios y minimalistas)
const Icons = {
  Dashboard: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  Recepcion: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  Compra: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  Calidad: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  Silo: () => <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  Dinero: () => <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Barco: () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> // Usando rayo como indicador de rapidez/exportación
};

const views = [
  { id: 'dashboard', name: 'Dashboard General', icon: Icons.Dashboard },
  { id: 'recepcion', name: 'Recepción en Planta', icon: Icons.Recepcion },
  { id: 'compra', name: 'Órdenes de Compra', icon: Icons.Compra },
  { id: 'calidad', name: 'Control de Calidad', icon: Icons.Calidad },
];

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">

      {/* SIDEBAR - Carbón elegante */}
      <aside className="w-72 bg-slate-900 shadow-2xl flex flex-col z-20">
        <div className="p-6 flex items-center gap-4 border-b border-slate-800">
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Café<span className="text-amber-500">ERP</span></h1>
            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">Enterprise</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 mt-4">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 group
                ${activeView === view.id
                  ? 'bg-amber-500/10 text-amber-500'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              <div className={`${activeView === view.id ? 'text-amber-500' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`}>
                <view.icon />
              </div>
              {view.name}
              {activeView === view.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 m-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://ui-avatars.com/api/?name=Luis&background=f59e0b&color=fff&bold=true" alt="Luis" className="w-10 h-10 rounded-full border-2 border-slate-800" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white leading-tight">Luis Llinarez</p>
              <p className="text-xs text-slate-400">Tech Lead</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* TOP HEADER */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex justify-between items-center z-10 sticky top-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              {views.find(v => v.id === activeView)?.name}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Resumen operativo y financiero actualizado al día de hoy.</p>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold text-slate-600">Zafra 2026 Activa</span>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-amber-600 transition-colors bg-slate-50 rounded-full border border-slate-200 hover:border-amber-200 hover:bg-amber-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* CONTENIDO DESLIZABLE */}
        <div className="flex-1 overflow-y-auto p-8">

          {activeView === 'dashboard' ? (
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* Grid de KPIs Premium */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1: Silos */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Icons.Silo /></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-50 p-2 rounded-lg text-amber-600"><Icons.Silo /></div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Materia Prima</h3>
                  </div>
                  <p className="text-3xl font-black text-slate-800">12,450 <span className="text-lg text-slate-400 font-medium">kg</span></p>
                  <p className="text-sm font-semibold text-emerald-600 mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +15% vs mes ant.
                  </p>
                </div>

                {/* Card 2: Calidad */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Icons.Calidad /></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600"><Icons.Calidad /></div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Lotes Aprobados</h3>
                  </div>
                  <p className="text-3xl font-black text-slate-800">85<span className="text-lg text-slate-400 font-medium">%</span></p>
                  <p className="text-sm font-medium text-slate-500 mt-2">De 40 lotes procesados hoy</p>
                </div>

                {/* Card 3: Exportación */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Icons.Barco /></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Icons.Barco /></div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Exportación</h3>
                  </div>
                  <p className="text-3xl font-black text-slate-800">3 <span className="text-lg text-slate-400 font-medium">Contenedores</span></p>
                  <p className="text-sm font-medium text-slate-500 mt-2">Destino: Hamburgo, ALE</p>
                </div>

                {/* Card 4: Finanzas */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Icons.Dinero /></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600"><Icons.Dinero /></div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Flujo de Caja</h3>
                  </div>
                  <p className="text-3xl font-black text-slate-800"><span className="text-lg text-slate-400 font-medium">$</span>45,200</p>
                  <p className="text-sm font-semibold text-rose-500 mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                    -2% por pagos
                  </p>
                </div>
              </div>

              {/* Área de Gráficos (Placeholder elegante) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[350px] flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Tendencia de Precios vs Costos</h3>
                  <div className="flex-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center">
                    <p className="text-slate-400 font-medium flex flex-col items-center">
                      <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                      Área reservada para gráfico Recharts
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[350px] flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Distribución de Calidad por Lote</h3>
                  <div className="flex-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center">
                    <p className="text-slate-400 font-medium flex flex-col items-center">
                      <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                      Área reservada para gráfico de dona
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto mt-8">
              {activeView === 'recepcion' && <FormularioRecepcion />}
              {activeView === 'compra' && <FormularioCompra />}
              {activeView === 'calidad' && <FormularioCalidad />}
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;