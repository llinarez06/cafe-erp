import { useState } from 'react';
import DashboardCafe from './DashboardCafe'
import FormularioRecepcion from './FormularioRecepcion'
import FormularioCompra from './FormularioCompra'
import FormularioCalidad from './FormularioCalidad'

function App() {
  const [activeTab, setActiveTab] = useState('recepcion');

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <DashboardCafe />

      <div className="px-8 font-sans">
        <div className="mb-6 flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('recepcion')}
            className={`py-2 px-4 font-semibold text-sm transition-colors border-b-2 ${
              activeTab === 'recepcion'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Recepción
          </button>
          <button
            onClick={() => setActiveTab('compra')}
            className={`py-2 px-4 font-semibold text-sm transition-colors border-b-2 ${
              activeTab === 'compra'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Compras
          </button>
          <button
            onClick={() => setActiveTab('calidad')}
            className={`py-2 px-4 font-semibold text-sm transition-colors border-b-2 ${
              activeTab === 'calidad'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Calidad
          </button>
        </div>

        <div className="mt-4">
          {activeTab === 'recepcion' && <FormularioRecepcion />}
          {activeTab === 'compra' && <FormularioCompra />}
          {activeTab === 'calidad' && <FormularioCalidad />}
        </div>
      </div>
    </div>
  )
}

export default App
