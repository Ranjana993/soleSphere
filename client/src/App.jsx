import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Header from "./components/Header"
import {Routes , Route} from "react-router-dom"

const App = () => {

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home /> }/>
        <Route path="/login"  element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
