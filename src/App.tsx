import './App.css'
import { Button } from './components'
import { ColorRed } from './components/Button/Button';
import { GlobalProvider } from './context/global.provider';

function App() {
  const handleClick = () => {
    console.log("Clic!!!!!!")
  }

  const dimeHola = () => {
    alert("Hola!!!!")
  }

  return(
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo </Button></ColorRed>
      <Button parentMethod={handleClick}>My Botno Normal</Button>
    </GlobalProvider>
  )
}

export default App
