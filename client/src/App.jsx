import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

const Contact = lazy(() => import("./Pages/Contact"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const Header = lazy(() => import("./components/Header"));
const Dashboard_Header = lazy(() => import("./components/Dashboard_Header.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Description = lazy(() => import("./Pages/Detail.jsx"));
const Cart1 = lazy(() => import("./Pages/Cart1.jsx"));
const NewBlog = lazy(() => import("./Pages/NewBlog.jsx"));
import giffi from "./assets/giffi.gif";
import Aboutus from "./Pages/Aboutus.jsx";
import OfferTitle from "./Pages/OfferTitle.jsx";
import SignupAsASeller from "./Pages/BecomeSeller/SignupAsASeller.jsx";
import SigninUser from "./Pages/BecomeSeller/SigninUser.jsx";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AddProduct from "./Pages/Dashboard/AddProduct.jsx";
import Profile from "./Pages/Dashboard/Profile.jsx";
import EditProduct from "./Pages/Dashboard/EditProduct.jsx";

const App = () => {
  const location = useLocation();
  const [sellerToken, setSellerToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("seller-token");
    setSellerToken(token);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center h-screen">
          <img src={giffi} alt="Loading..." />
        </div>
      }
    >
      {location.pathname.startsWith('/dashboard') ? (
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
        <Route path="/product/:id" element={<Description />} />
        <Route path="/cart" element={<Cart1 />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/sign-up-seller" element={<SignupAsASeller />} />
        <Route path="/sign-in-seller" element={<SigninUser />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

        {/* Conditional Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            sellerToken ? (
              <Dashboard />
            ) : (
                <Navigate to="/sign-up-seller" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
