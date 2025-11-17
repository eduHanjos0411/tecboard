import './App.css'
import { Banner } from './components/Banner'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'

function App() {

  const temas = [
    {
      id: 1,
      nome: "front-end"
    },
    {
      id: 2,
      nome: "back-end"
    },
    {
      id: 3,
      nome: "devops"
    },
    {
      id: 4,
      nome: "inteligência artificial"
    },
    {
      id: 5,
      nome: "data science"
    },
    {
      id: 6,
      nome: "cloud"
    },
  ]

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front"
    }
  ]

  return (
    <main>
      <header>
        <img src="logoTecboard.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos}/>
          </section>
        )
      })}

    </main>
  )
}

export default App
