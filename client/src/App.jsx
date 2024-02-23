import CollectionPage from "./Pages/CollectionPage"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Seller from "./Pages/Seller"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"

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
      </Routes>
    </>
  )
}

export default App
