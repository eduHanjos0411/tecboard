import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { SelectDeFormulario } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formEventoEstilos.css'

export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario >
        Preencha para criar um evento:
      </TituloFormulario>

      <div className="campos">
      <CampoDeFormulario >
        <Label htmlFor="nomeEvento">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" name="nomeEvento" id="nomeEvento" placeholder='Summer dev hits' />
      </CampoDeFormulario>

      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do Evento:
        </Label>
        <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" placeholder='DD/MM/YYYY' />
      </CampoDeFormulario>

      <CampoDeFormulario>
        <Label>Tema do Evento</Label>
        <SelectDeFormulario/>
      </CampoDeFormulario>
      </div>

      <div className="acoes">
      <Botao>
        Criar evento
      </Botao>
      </div>


    </form>
  )
}