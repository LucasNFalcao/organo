import { useState } from 'react'

import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

import './style.css'

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('Programação')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time })
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={setNome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterado={setCargo}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={setImagem}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={props.times}
          valor={time}
          aoAlterado={setTime}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario
