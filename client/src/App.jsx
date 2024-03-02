import CollectionPage from "./Pages/CollectionPage"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Login from "./Pages/Signin.jsx"
import Seller from "./Pages/Seller"
import Header from "./components/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import Signin from "./Pages/Signin.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import Dashboard_Header from "./components/Dashboard_Header.jsx"
import Footer from "./components/Footer.jsx"
import Description from "./Pages/Detail.jsx"
import Cart from "./Pages/Cart.jsx"
import NewBlog from "./Pages/NewBlog.jsx"

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/dashboard' ? (
        <Dashboard_Header />
      ) : (
        <Header />
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/best-collection" element={<CollectionPage />} />
        <Route exact path="/seller" element={<Seller />} />
        <Route exact path="/login" element={<Signin />} />
        <Route path="/product-detail" element={<Description/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/new-blog" element={<NewBlog />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
