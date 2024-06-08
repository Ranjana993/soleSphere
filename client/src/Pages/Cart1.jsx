import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeFromCart, clearCart } from '../../redux/slice/cartSlice';
import CartPage from './Cart';
import thankyou_img from "../assets/thankyou.gif"

const Cart1 = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const totalCost = cartItems.reduce((total, item) => total + item.price.cost * item.quantity, 0);

  const handleCheckout = () => {
    setShowPopup(true);
    dispatch(clearCart());
  };

  return (
    <div className='relative'>
      <div className={`bg-gray-50 ${showPopup ? 'blur-background' : ''}`}>
        {
          cartItems.length === 0 ? (
            <CartPage />
          ) : (
            <div className='flex flex-col justify-between lg:flex-row p-4 w-full'>
              <ul className=' flex flex-col items-center w-full lg:w-[50%]'>
                {
                  cartItems.map(item => (
                    <li key={item._id} className="flex border bg-white shadow-custom-medium border-gray-300 rounded-lg p-2 mb-4 lg:w-[70%]">
                      <img src={item.detailUrl} alt={item.title.shortTitle} className="w-[50%] object-cover mr-4" />
                      <div className="flex flex-col w-full">
                        <div className='flex justify-end'>
                          <p className='bg-green-600 text-white w-fit float-right p-1 px-4 rounded-xl'>{item.tagline}</p>
                        </div>
                        <h3 className='text-sm lg:text-xl py-3 font-noto-serif font-bold'>{item.title.shortTitle}</h3>
                        <p><span className='font-noto-serif font-bold'>Price:</span> ₹{item.price.cost}</p>
                        <p><span className='font-noto-serif font-bold'>Quantity:</span> {item.quantity}</p>
                        <p><span className='font-noto-serif font-bold'>Product Category:</span> {item?.ProductType}</p>
                        <button className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center px-4 py-2 mt-4 lg:mt-8 float-end rounded" onClick={() => dispatch(removeFromCart(item))}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1={10} x2={10} y1={11} y2={17} /><line x1={14} x2={14} y1={11} y2={17} /></svg>
                          <span> Remove</span>
                        </button>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="w-full lg:w-[50%]">
                <div className='bg-[#fff] border shadow-custom-medium w-full lg:w-[80%] rounded-lg p-4 lg:px-12'>
                  <h2 className='text-xl capitalize font-noto-serif'>Your total amount is: <span className='text-sm text-gray-700'>Total Cost: ₹{totalCost}</span></h2>
                  <p className='py-4 text-gray-400'>Not including taxes and shipping costs</p>
                  <div className='flex justify-end w-full'>
                    <button
                      className="bg-blue-500 text-white hover:bg-green-700 px-8 py-2 mt-12 rounded"
                      onClick={handleCheckout}
                    >
                      Continue to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {/* <img src={thankyou_img} alt="" /> */}
            <h2>Thank You!</h2>
            <p>Your order has been placed successfully.</p>
            <button className="bg-blue-500 text-white hover:bg-green-700 px-4 py-2 mt-4 rounded" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart1;
