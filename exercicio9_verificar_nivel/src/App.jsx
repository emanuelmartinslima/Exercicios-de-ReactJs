import './App.css'
import VerificarNivel from './components/VerificarNivel';

function App() {
  return (
    <>
      <VerificarNivel nivel='iniciante' />
      <VerificarNivel nivel='intermediário' />
      <VerificarNivel nivel='avançado' />
    </>
  )
}

export default App
