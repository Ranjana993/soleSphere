import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const CollectionPage = lazy(() => import("./Pages/CollectionPage"));
const Contact = lazy(() => import("./Pages/Contact"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Signin.jsx"));
const Seller = lazy(() => import("./Pages/Seller"));
const Header = lazy(() => import("./components/Header"));
const Signin = lazy(() => import("./Pages/Signin.jsx"));
const Dashboard = lazy(() => import("./Pages/Dashboard.jsx"));
const Dashboard_Header = lazy(() => import("./components/Dashboard_Header.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Description = lazy(() => import("./Pages/Detail.jsx"));
const Cart = lazy(() => import("./Pages/Cart.jsx"));
const NewBlog = lazy(() => import("./Pages/NewBlog.jsx"));
import giffi from "./assets/giffi.gif"
import SigninUser from "./Pages/SigninUser.jsx";
import SignupUser from "./Pages/SignupUser.jsx";


const App = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div className="w-full flex items-center justify-center h-screen">
      <img src={giffi} alt="" />
    </div>}>
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
        <Route path="/product-detail" element={<Description />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/sign-up-user" element={<SignupUser />} />
        <Route path="/sign-in-user" element={<SigninUser />}/>

      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
