import {Link} from "react-router-dom"
const Cart = () => {
  return (
    <>

      <div className="relative w-full">
        <div>
          <img className="w-full" src="https://i.pinimg.com/originals/51/cb/65/51cb6500edee52112b2be59c70576b95.gif" alt="" />
        </div>
        <div className="absolute top-4 lg:top-10 right-4 lg:right-10">
          <h3 className="lg:text-6xl">Your cart is empty </h3>
          <Link to="/" className="bg-slate-800 item-center text-white p-1 mt-4 lg:p-2 px-3 lg:px-4 ">Back to buy </Link>
        </div>
      </div>
      <div className="py-4 flex items-center justify-center px-4 ">
        <p className="text-gray-700 mt-4 text-sm lg:text-xl">The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item&apos;s most recent price.
          Do you have a promotional code? We&apos;ll ask you to enter your claim code when it&apos;s time to pay.</p>
      </div>
    </>
  )
}

export default Cart