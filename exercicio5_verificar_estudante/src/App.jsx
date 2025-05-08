import './App.css'
import VerificarEstudante from './components/VerificarEstudante'

function App() {
  return (
    <>
      <VerificarEstudante estudante={true} />
      <VerificarEstudante estudante={false} />
    </>
  )
}

export default App
