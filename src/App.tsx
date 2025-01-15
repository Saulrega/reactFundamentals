import './App.css'
import { Button } from './components'
import { ColorRed } from './components/Button/Button';

function App() {
  const handleClick = () => {
    console.log("Clic!!!!!!")
  }

  const dimeHola = () => {
    alert("Hola!!!!")
  }

  return(
    <>
      <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo </Button></ColorRed>
      <Button parentMethod={handleClick}>My Botno Normal</Button>
    </>
  )
}

export default App
