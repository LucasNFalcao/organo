import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

import './style.css'

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]
  return (
    <section className="formulario">
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Times" itens={times} />
      </form>
    </section>
  )
}

export default Formulario