import './App.css'
import VerificarDesconto from './components/VerificarDesconto';

function App() {
  return (
    <>
      <VerificarDesconto temDesconto={true} />
      <VerificarDesconto temDesconto={false} />
    </>
  )
}

export default App
