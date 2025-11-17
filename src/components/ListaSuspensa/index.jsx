import './selectFormEstilos.css'

export function SelectDeFormulario() {
  return (
      <select name="temaEvento" id="temaEvento" className='select-form'>
        <option value="default" selected hidden>Selecione uma opção</option>
        <option value="ia">IA</option>
        <option value="front">Front-end</option>
        <option value="back">Back-end</option>
        <option value="devops">Devops</option>
        <option value="dataScience">Data Science</option>
        <option value="cloud">Cloud</option>
      </select>

  )
}