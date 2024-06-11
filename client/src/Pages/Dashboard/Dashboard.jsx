import { useNavigate } from "react-router-dom"
import MainUI from "./MainUI"


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-around items-center py-4 lg:py-6">
        <h4 className="text-gray-900 text-3xl hidden lg:block ml-12 w-[30%] font-noto-serif">Products</h4>
        <div className="w-[60%] lg:w-[30%] pl-4 lg:pl-0">
          <input type="text" className="bg-gray-50 border outline-none rounded-full  border-gray-200 px-8 py-2 w-full"  placeholder="Search here..." />
        </div>
        <div className="w-[40%] lg:w-[30%] flex justify-end pr-2">
          <button onClick={() => navigate("/add-product")} className="bg-green-600 px-4 lg:px-8 py-2 text-white flex items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            <span> Add</span>
          </button>
        </div>
      </div>
      <div className="">
        <MainUI />
      </div>
    </div>
  )
}

export default Dashboard