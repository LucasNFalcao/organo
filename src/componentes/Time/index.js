import Colaborador from '../Colaborador'

import './style.css'

const Time = (props) => {
  const corSecundaria = { backgroundColor: props.corSecundaria }

  return (
    <section className="time" style={corSecundaria}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      {props.colaboradores.map((colaborador) => (
        <Colaborador />
      ))}
    </section>
  )
}

export default Time
