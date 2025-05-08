import './App.css'
import SaudacaoUsuario from './components/SaudacaoUsuario';

function App() {
  return (
    <>
      <SaudacaoUsuario autenticacao={true} />
      <SaudacaoUsuario autenticacao={false} />
    </>
  )
}

export default App
