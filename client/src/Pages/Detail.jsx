import logo1 from "../assets/return.png"
import logo2 from "../assets/secure.png"
import logo3 from "../assets/topbrand.png"
import logo4 from "../assets/freedelivery.png"
import { Share, ShoppingCart } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slice/cartSlice"

const Description = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [token, setToken] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('user-Token');
    setToken(storedToken);
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://solesphere-backend12.onrender.com/get-products/${id}`);
        setProduct(res.data.product);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleCartFn = () => {
    if (token) {
      dispatch(addToCart(product))
      toast.success("Product added successfully")
      navigate("/cart")
    } else {
      navigate("/login")
    }

  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-center bg-white gap-2">
        <div className="w-full p-4 lg:w-1/2  flex flex-col items-center justify-center py-4">
          <img className="w-full border border-slate-300 lg:w-3/4 lg:h-3/4 " src={product?.detailUrl} alt="" />
          <div className="flex flex-row py-4 gap-1 lg:flex-row ">
            <button onClick={handleCartFn} className="bg-yellow-500 hover:bg-yellow-600 w-44 lg:w-72 text-white flex items-center justify-center gap-4 px-4 py-4"><ShoppingCart className=" text-white hover:rounded-full " /> Add to cart</button>
            <button className="bg-orange-500 hover:bg-orange-600 w-44 lg:w-64 text-white flex items-center justify-center gap-4  py-4 px-4"><Share className=" text-white hover:rounded-full " /> Buy now</button>
          </div>
        </div>
        <div className="w-full p-4 lg:w-1/2  lg:py-12">
          <h4 className="text-2xl">{product?.title?.longTitle}</h4>
          <div className="mb-4">
            <div className="flex items-center">
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">4.0</span>
            </div>
          </div>
          <div className="border-t-2 border-gray-200">
            <h4 className="bg-red-500 hover:bg-red-600 cursor-pointer text-white w-44 rounded-md px-2 py-1 mt-2">Limited time deal</h4>
            <p className="mt-2"> <span className="text-red-400 font-medium text-3xl"> -55%  </span>₹1,119</p>
            <p className="text-sm">M.R.P.: ₹{product?.price?.mrp}</p>
          </div>
          <div className="py-4">
            <p className="pr-4 text-sm text-gray-700">{product?.description}</p>
          </div>
          <div>
            <h3>Offers</h3>
            <div className="flex gap-4 flex-col lg:flex-row ">
              <div className="border border-red-200 p-4">
                <h5 className="font-bold">Bank Offer</h5>
                <p className="pr-4 text-sm text-gray-700">10% Instant Discount up to INR 750 on ICICI Bank Credit Card... </p>
              </div>
              <div className="border border-green-200 p-4">
                <h5 className="font-bold">No Cost EMI</h5>
                <p className="pr-4 text-sm text-gray-700">Upto ₹83.73 EMI interest savings on Amazon Pay I.</p>
              </div>
              <div className="border border-blue-200 p-4">
                <h5 className="font-bold">Partner Offers</h5>
                <p className="pr-4 text-sm text-gray-700">Get GST invoice and save up to 28% on business purchases.</p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex py-4 gap-3">
            <div className="p-2 hover:bg-gray-100 hover:border border-gray-200">
              <img className="w-12 text-center" src={logo1} alt="" />
              <p className="text-xs font-bold text-blue-400">10 days Return & Exchange</p>
            </div>
            <div className="p-2 hover:bg-gray-100 hover:border border-gray-200">
              <img className="w-12 text-center" src={logo2} alt="" />
              <p className="text-xs font-bold text-blue-400">10 days Return & Exchange</p>
            </div>
            <div className="p-2 hover:bg-gray-100 hover:border border-gray-200">
              <img className="w-12 text-center" src={logo3} alt="" />
              <p className="text-xs font-bold text-blue-400">10 days Return & Exchange</p>
            </div>
            <div className="p-2 hover:bg-gray-100 hover:border border-gray-200">
              <img className="w-12 text-center" src={logo4} alt="" />
              <p className="text-xs font-bold text-blue-400">10 days Return & Exchange</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Description