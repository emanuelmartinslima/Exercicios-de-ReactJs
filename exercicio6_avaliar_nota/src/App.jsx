import './App.css'
import AvaliarNota from './components/AvaliarNota';

function App() {
  return (
    <>
      <AvaliarNota nota={90} />
      <AvaliarNota nota={70} />
      <AvaliarNota nota={69} />
    </>
  )
}

export default App
