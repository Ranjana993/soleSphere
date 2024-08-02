import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-hot-toast"

const SignupAsASeller = () => {
    const [userData, setUserData] = useState({
        email: "",
        fullName: "",
        password: "",
        contactNumber: "",
        companyName: "",
        location: "",
        buisnessCategory: "",
        description: "",
    })
    const navigate = useNavigate()
    const onHandleChange = (e) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/register-as-a-seller", userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response?.data?.newUser?._id)
            // console.log("userData....",userData);
            toast.success(response.message)
            navigate("/sign-in-seller")
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong while registering user")
        }
    }

    return (
        <>
            <div className="py-10">
                <section className="">
                    <div className="flex items-center py-2">
                        <div className="w-full flex justify-between gap-4">
                            <div className="w-full lg:w-[50%] ml-2 lg:ml-12 px-4 lg:px-12 space-y-2 md:space-y-2 sm:p-8">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight font-mono pb-4">Create Account</h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="fullName" className="mb-2 text-md font-mono font-bold">Your Full Name</label>
                                        <input type="text" name="fullName" value={userData.fullName} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="Enter your full name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Email</label>
                                        <input type="email" name="email" value={userData.email} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="email@gmail.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-mono font-bold text-gray-900 ">Password</label>
                                        <input type="password" name="password" value={userData.password} onChange={onHandleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " required />
                                    </div>
                                    <div>
                                        <label htmlFor="contactNumber" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Contact No.</label>
                                        <input type="text" name="contactNumber" value={userData.contactNumber} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="+91 412411" required />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Company Name</label>
                                        <input type="text" name="companyName" value={userData.companyName} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="Ramu footwear shop" required />
                                    </div>
                                    <div>
                                        <label htmlFor="location" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Location</label>
                                        <input type="text" name="location" value={userData.location} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="street 23ft Nehru road Delhi" required />
                                    </div>
                                    <div>
                                        <label htmlFor="buisnessCategory" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your buisness Category</label>
                                        <input type="text" name="buisnessCategory" value={userData.buisnessCategory} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="e.g. kids menswear and womens wear...." required />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Description</label>
                                        <textarea type="text" rows={5} cols={40} name="description" value={userData.description} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[98%] lg:w-[90%] p-2.5 " placeholder="Description about your company/organisation" required />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input aria-describedby="terms" type="checkbox" className="w-[98%] lg:w-[90%] h-4 border border-gray-300 rounded " required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline  dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                                        </div>
                                    </div>
                                    <button type="submit" onSubmit={handleSubmit} className="w-[98%] lg:w-[90%] text-white bg-[#D9534F] hover:bg-orange-900 text-sm px-5 py-3 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 ">Create an account</button>
                                    <p className="text-sm font-light ">
                                        Already have an account? <Link to="/sign-in-seller" className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-500 underline text-orange-500">Login here</Link>
                                    </p>
                                </form>
                            </div>
                            <div className="w-[50%] px-12 hidden lg:block">
                                <img className="w-full rounded-xl bg-contain" src="https://i.pinimg.com/564x/fa/88/eb/fa88eb8aefbb2d806aa57f0768ef741b.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SignupAsASeller