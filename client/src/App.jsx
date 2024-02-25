import CollectionPage from "./Pages/CollectionPage"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Login from "./Pages/Signin.jsx"
import Seller from "./Pages/Seller"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Signin from "./Pages/Signin.jsx"

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/best-collection" element={<CollectionPage />} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/login" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
