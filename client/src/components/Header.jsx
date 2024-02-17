

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center px-2 py-2 bg-violet-500">
                <div className="">
                    <img src="" alt="LOGO" />
                </div>
                <div className="" >
                    <input type="text" className=" px-4  border-none outline-none p-2 rounded-l-lg" placeholder="Search here..." />
                    <button className="bg-orange-600 rounded-r-lg p-2">🔍</button>
                </div>
                <div className="flex items-center ">
                    <p className="mr-4 text-white font-bold">Become a Seller</p>
                    <button className="bg-orange-600 rounded-lg py-2 px-4 text-white">Signin/signup</button>
                </div>
            </div>


        </>
    )
}

export default Header