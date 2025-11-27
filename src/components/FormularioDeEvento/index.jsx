import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { SelectDeFormulario } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formEventoEstilos.css'

export function FormularioDeEvento({ temas, aoSubmeter }) {
  
  function aoFormSubmetido(formData) {
    console.log('Novo evento a ser criado', formData)
    const dataBruta = formData.get('dataEvento')
    const [ano, mes, dia] = dataBruta.split('-')
    const data = new Date(ano, mes - 1, dia)
    
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.nome === formData.get('tema')
      }),
      data: data,
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloFormulario >
        Preencha para criar um evento:
      </TituloFormulario>

      <div className="campos">
        <CampoDeFormulario >
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text"name="nomeEvento" id="nomeEvento" placeholder='Summer dev hits' />
        </CampoDeFormulario>

        <CampoDeFormulario >
          <Label htmlFor="capa">
            Qual a URL da capa do evento?
          </Label>
          <CampoDeEntrada type="text" name="capa" id="capa" placeholder='Coloque a URL aqui' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento:
          </Label>
          <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" placeholder='DD/MM/YYYY' />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label>Tema do Evento</Label>
          <SelectDeFormulario id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>

      <div className="acoes">
        <Botao type="submit">
          Criar evento
        </Botao>
      </div>


    </form>
  )
}