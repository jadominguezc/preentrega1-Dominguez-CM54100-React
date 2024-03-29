import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <Navbar/> 
      <br /><br /><br /><br />
      <ItemListContainer greeting={"\u26A0 ¡Próximamente estaremos disponibles para ti! \u26A0"}/>   
    </>
  )
}

export default App
