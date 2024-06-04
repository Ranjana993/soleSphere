import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

// https://images.unsplash.com/photo-1610899805519-77847d0c4c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZvb3R3ZWFyfGVufDB8fDB8fHww

const SignupAsASeller = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
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
        const data = await axios.post("https://solesphere.onrender.com/signup", userData)
        console.log(data?.data)
        navigate("/login")
    }
    return (
        <>
            <div className="py-12">
                <section className="">
                    <div className="flex items-center py-4">
                        <div className="w-full flex justify-between gap-4 rounded-lg">
                            <div className="p-4 w-[50%] ml-12 px-12 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-5xl font-bold leading-tight tracking-tight font-mono">Create Account</h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username" className="mb-2 text-md font-mono font-bold">Your Full Name</label>
                                        <input type="text" name="username" value={userData.username} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[90%] p-2.5 " placeholder="enter your full name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-mono text-gray-900  font-bold ">Your Email</label>
                                        <input type="email" name="email" value={userData.email} onChange={onHandleChange} className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[90%] p-2.5 " placeholder="email@gmail.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-mono font-bold text-gray-900 ">Password</label>
                                        <input type="password" name="password" value={userData.password} onChange={onHandleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-500 text-gray-900 sm:text-sm rounded-lg w-[90%] p-2.5 " required />
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input aria-describedby="terms" type="checkbox" className="w-[90%] h-4 border border-gray-300 rounded " required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500">I accept the <Link className="font-medium text-primary-600 hover:underline  dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                                        </div>
                                    </div>
                                    <button type="submit" onSubmit={handleSubmit} className="w-[90%] text-white bg-[#D9534F] hover:bg-orange-900 text-sm px-5 py-3 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 ">Create an account</button>
                                    <p className="text-sm font-light ">
                                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-orange-500">Login here</Link>
                                    </p>
                                </form>
                            </div>
                            <div className="w-[50%] px-12 hidden lg:block">
                                <img className="w-full rounded-xl bg-contain" src="https://plus.unsplash.com/premium_photo-1665675242030-54da84ce57c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SignupAsASeller