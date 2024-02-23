
import Logo from "../assets/logo1.png"


const SignupAsASeller = () => {
    return (
        <>
            <div>
                <div className="p-2">
                    <div className="flex items-center justify-center bg-red-300">

                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-[40%] bg-gray-200">
                                    <div className="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src={Logo}
                                                alt="logo"
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                We are The Lotus Team
                                            </h4>
                                        </div>

                                        <form >
                                            <p className="mb-4">Please register an account</p>
                                            {/* <!--Username input--> */}
                                            <div>
                                                <input
                                                    type="text"
                                                    label="Username"
                                                    placeholder="Enter Username"
                                                    className="mb-4 w-full p-2 border border-gray-400"
                                                />
                                            </div>

                                            <div>
                                                {/* <!--Password input--> */}
                                                <input
                                                    type="password"
                                                    label="Password"
                                                    placeholder="Password"
                                                    className="mb-4 w-full p-2 border border-gray-400"
                                                />
                                            </div>


                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white focus:outline-none "
                                                    type="button"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                    }}
                                                >
                                                    Sign up
                                                </button>

                                                {/* <!--Forgot password link--> */}
                                                <a href="#!">Terms and conditions</a>
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Have an account?</p>
                                                <button
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-[40%] lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>

            </div>


        </>
    )
}

export default SignupAsASeller