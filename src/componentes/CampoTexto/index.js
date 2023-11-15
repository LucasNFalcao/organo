import './style.css'

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto
