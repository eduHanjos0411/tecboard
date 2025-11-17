import './botaoFormEstilos.css'

export function Botao({ children }) {
  return (
    <button className="btn-form">
      {children}
    </button>
  )
}