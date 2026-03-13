import React, { useState } from 'react';

const FormularioRecepcion = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recepción de Materia Prima</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Proveedor</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border">
            <option>Seleccionar proveedor...</option>
            <option>Finca El Bucare</option>
            <option>Hacienda La Victoria</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ubicación de Origen</label>
          <input type="text" placeholder="Ej: Boconó, Trujillo" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Almacén Destino</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border">
            <option>Silo Principal A</option>
            <option>Almacén Secundario B</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Peso Bruto (Kg)</label>
          <input type="number" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Humedad (%)</label>
          <input type="number" step="0.1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad de Sacos</label>
          <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 p-2 border" />
        </div>

        <div className="md:col-span-2 mt-4">
          <button type="submit" className="w-full bg-amber-700 text-white font-bold py-2 px-4 rounded hover:bg-amber-800 transition">
            Registrar Recepción
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioRecepcion;