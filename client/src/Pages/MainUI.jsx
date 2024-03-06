import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/slice/dataSlice";
import { Link } from "react-router-dom";
// import { Link } from "lucide-react";

const MainUI = () => {
  7
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const getAllData = async () => {
    const res = await axios.get("http://localhost:8000/get-products");

    console.log(res?.data?.products);
    dispatch(addData(res?.data?.products))
    setData(res?.data?.products)
  }
  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>

      <form className=" mx-auto flex items-center justify-center mt-4">
        <label htmlFor="countries" className="mb-2 text-sm  hidden lg:block  font-medium text-gray-900 dark:text-red-600">Select an option</label>
        <select id="countries" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm px-4 focus:ring-blue-500 rounded-sm focus:border-blue-500 block w-[90%] lg:w-52 py-2 ml-3 dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected >Choose an option</option>
          <option className="py-4" value="US">MENS</option>
          <option className="py-4" value="CA">WOMENS</option>
          <option className="py-4" value="FR">KIDS</option>
        </select>
      </form>

      <div className='flex gap-2 m-auto flex-wrap items-center justify-center'>
        {
          data.map(item => (
            <div key={item.id} className="relative m-6 lg:m-10 border border-gray-300 flex w-full max-w-xs flex-col overflow-hidden rounded-sm  shadow-lg hover:shadow-gray-100 bg-white" >
              <Link to={"/product-detail"}>
                <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-sm" to="#">
                  <img className="object-cover w-full" src={item?.url} alt="product image" />
                  <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{item?.price?.discount}% OFF</span>
                </Link>
                <div className="mt-4 px-5 pb-5">
                  <Link to="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{item.title.shortTitle}</h5>
                  </Link>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-2xl lg:text-3xl font-bold text-slate-900">${item?.price?.cost}</span>
                      <span className="text-sm text-slate-900 line-through">${item?.price?.mrp}</span>
                    </p>
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
                  <Link to="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</Link>
                </div>
              </Link>

            </div>
          ))
        }
      </div>

    </>
  );
};

export default MainUI;
