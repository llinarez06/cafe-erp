import DashboardCafe from './DashboardCafe'
import FormularioRecepcion from './FormularioRecepcion'
import FormularioCompra from './FormularioCompra'
import FormularioCalidad from './FormularioCalidad'

function App() {
  return (
    <>
      <DashboardCafe />
      <div className="bg-gray-50 pb-8 px-8 font-sans">
        <FormularioRecepcion />
        <FormularioCompra />
        <FormularioCalidad />
      </div>
    </>
  )
}

export default App
