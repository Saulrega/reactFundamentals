import './App.css'
import { useModalContext } from './components/Modal/context';
import { Modal } from './components/Modal/Modal';

function App() {
  const {setState} = useModalContext();

  const openModal = () => {
    setState(true)
  }

  return(
    <>
      <Modal>
        <h2>Buenas noches</h2>
        <h3>siiiiiiiii</h3>
      </Modal>
      <button onClick={openModal}>Abrete Sésamo</button>
    </>
  )
}

export default App
