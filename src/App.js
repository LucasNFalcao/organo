import { useState } from 'react'

import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log('This is the colaborador: ', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
    </div>
  )
}

export default App
