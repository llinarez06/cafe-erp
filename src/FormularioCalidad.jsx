import React from 'react';

const FormularioCalidad = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Análisis de Calidad Sensorial y Físico</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Lote Recibido (Nro. Ticket)</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
            <option>Seleccionar Lote en Cuarentena...</option>
            <option>TICKET-001 (Finca El Bucare)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Clasificación</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border">
            <option>Lavado (Washed)</option>
            <option>Natural</option>
            <option>Honey</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Defectos Físicos (%)</label>
          <input type="number" step="0.1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
        </div>

        <div className="md:col-span-2 border-t border-gray-200 mt-2 pt-4">
          <h3 className="text-md font-semibold text-gray-700 mb-3">Análisis Sensorial (Cata)</h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Puntaje SCA (Taza)</label>
          <input type="number" step="0.25" placeholder="Ej: 84.5" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notas de Cata</label>
          <input type="text" placeholder="Ej: Chocolate, Cítrico, Caramelo" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Dictamen Final</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2 border bg-gray-50">
            <option>Aprobado para Exportación</option>
            <option>Aprobado para Consumo Nacional</option>
            <option>Rechazado</option>
          </select>
        </div>

        <div className="md:col-span-2 mt-4">
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded hover:bg-emerald-700 transition">
            Guardar Análisis
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCalidad;