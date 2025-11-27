import './selectFormEstilos.css'

export function SelectDeFormulario( { itens, id, name } ) {
  return (
      <select name={name} id={id} className='select-form'>
        <option value="" disabled>Selecione uma opção</option>
        {itens.map(function (item) {
          return <option key={item.id} value={item.nome}>
          {item.nome}
          </option>
        })}
      </select>

  )
}