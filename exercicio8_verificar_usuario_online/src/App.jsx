import './App.css'
import VerificarUsuarioOnline from './components/VerificarUsuarioOnline';

function App() {
  return (
    <>
      <VerificarUsuarioOnline online={true} />
      <VerificarUsuarioOnline online={false} />
    </>
  )
}

export default App
