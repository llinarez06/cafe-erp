import React, { useState, useEffect } from 'react';

const FormularioCompra = () => {
  const [kilos, setKilos] = useState(0);
  const [precioUsd, setPrecioUsd] = useState(0);
  const [tasaBcv, setTasaBcv] = useState(0);
  const [totalBs, setTotalBs] = useState(0);
  const [totalUsd, setTotalUsd] = useState(0);

  // Efecto para calcular en tiempo real los totales
  useEffect(() => {
    const usd = kilos * precioUsd;
    setTotalUsd(usd);
    setTotalBs(usd * tasaBcv);
  }, [kilos, precioUsd, tasaBcv]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Orden de Compra</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Nro. Orden de Compra</label>
          <input type="text" placeholder="OC-2026-001" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad (Kilos)</label>
          <input type="number" onChange={(e) => setKilos(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Precio por Kilo (USD)</label>
          <input type="number" step="0.01" onChange={(e) => setPrecioUsd(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Tasa BCV del Día (Bs/USD)</label>
          <input type="number" step="0.01" onChange={(e) => setTasaBcv(Number(e.target.value))} className="mt-1 block w-full border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border bg-green-50" />
        </div>

        {/* Resumen Financiero Dinámico */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-md border border-gray-200 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 font-medium">Total a Pagar (USD):</span>
            <span className="text-xl font-bold text-gray-800">${totalUsd.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 pt-2">
            <span className="text-gray-600 font-medium">Equivalente a Pagar (Bs):</span>
            <span className="text-2xl font-bold text-blue-700">Bs {totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Generar Orden de Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCompra;