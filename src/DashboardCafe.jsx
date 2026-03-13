import React from 'react';

const DashboardCafe = () => {
  return (
    <div className="font-sans">

      {/* Grid de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        {/* Tarjeta Operativa: Materia Prima */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Materia Prima en Silos</h3>
          <p className="text-3xl font-bold text-amber-700 mt-2">12,450 kg</p>
          <span className="text-green-500 text-sm font-medium">+15% vs mes anterior</span>
        </div>

        {/* Tarjeta Calidad: Lotes Aprobados */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Lotes en Calidad (Aprobados)</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">85%</p>
          <span className="text-gray-400 text-sm">De 40 lotes procesados hoy</span>
        </div>

        {/* Tarjeta Exportación: Contenedores */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Listos para Exportación</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">3 Contenedores</p>
          <span className="text-gray-400 text-sm">Destino: Hamburgo, Alemania</span>
        </div>

        {/* Tarjeta Financiera: Flujo de Caja */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">Flujo de Caja (USD)</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">$45,200</p>
          <span className="text-red-500 text-sm font-medium">-2% por pagos a productores</span>
        </div>
      </div>

      {/* Sección de Gráficos (Placeholder para Recharts/Tremor) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 min-h-[300px] flex items-center justify-center">
          <p className="text-gray-400">[Gráfico de Tendencia de Precios de Compra vs Venta]</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 min-h-[300px] flex items-center justify-center">
          <p className="text-gray-400">[Gráfico de Defectos por Lote (Control de Calidad)]</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCafe;