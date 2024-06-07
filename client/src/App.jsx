import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const CollectionPage = lazy(() => import("./Pages/CollectionPage"));
const Contact = lazy(() => import("./Pages/Contact"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const Header = lazy(() => import("./components/Header"));
const Dashboard = lazy(() => import("./Pages/Dashboard.jsx"));
const Dashboard_Header = lazy(() => import("./components/Dashboard_Header.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Description = lazy(() => import("./Pages/Detail.jsx"));
// const Cart = lazy(() => import("./Pages/Cart.jsx"));
const Cart1 = lazy(() => import("./Pages/Cart1.jsx"));
const NewBlog = lazy(() => import("./Pages/NewBlog.jsx"));
import giffi from "./assets/giffi.gif"
import Aboutus from "./Pages/Aboutus.jsx";
import OfferTitle from "./Pages/OfferTitle.jsx";
import SignupAsASeller from "./Pages/BecomeSeller/SignupAsASeller.jsx";
import SigninUser from "./Pages/BecomeSeller/SigninUser.jsx";
import Register from "./Pages/Register.jsx";


const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="w-full flex items-center justify-center h-screen">
      <img src={giffi} alt="" />
    </div>}>
      {location.pathname === '/dashboard' ? (
        <>
          <OfferTitle />
          <Dashboard_Header />
        </>

      ) : (
        <>
          <OfferTitle />
          <Header />
        </>

      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about-us" element={<Aboutus />} />
        <Route exact path="/best-collection" element={<CollectionPage />} />
        <Route path="/product/:id" element={<Description />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart1 />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/sign-up-seller" element={<SignupAsASeller />} />
        <Route path="/sign-in-seller" element={<SigninUser />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
