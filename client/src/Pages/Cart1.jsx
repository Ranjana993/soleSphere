import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/slice/cartSlice';
import CartPage from './Cart';

const Cart1 = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((total, item) => total + item.price.cost * item.quantity, 0);

  return (
    <div className='bg-gray-50'>
      {
        cartItems.length === 0 ? (
          <CartPage />
        ) : (
          <div>
            <ul className='flex items-start flex-col p-4 w-full'>
              {
                cartItems.map(item => (
                  <li key={item._id} className="flex border bg-white shadow-custom-medium border-gray-300 rounded-lg p-2 mb-4 w-full lg:w-[50%] h-64">
                    <img src={item.detailUrl} alt={item.title.shortTitle} className="w-[50%] object-cover mr-4" />
                    <div className="flex flex-col w-full">
                      <div className='flex justify-end'>
                        <p className='bg-red-900 text-white w-fit float-right p-1 px-4 rounded-xl'>{item.tagline}</p>
                      </div>
                      <h3 className='text-xl py-3 font-noto-serif font-bold'>{item.title.shortTitle}</h3>
                      <p><span className='font-noto-serif font-bold'>Price:</span> ₹{item.price.cost}</p>
                      <p><span className='font-noto-serif font-bold'>Quantity:</span> {item.quantity}</p>
                      <p><span className='font-noto-serif font-bold'>Product Category:</span> {item?.ProductType} </p>
                      <button className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center px-4  py-2 mt-4 lg:mt-8 float-end rounded" onClick={() => dispatch(removeFromCart(item))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1={10} x2={10} y1={11} y2={17} /><line x1={14} x2={14} y1={11} y2={17} /></svg>
                        <span> Remove</span>
                      </button>
                    </div>
                  </li>
                ))
              }
            </ul>
            <div className="mt-4">
              <p>Total Cost: ₹{totalCost}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Cart1;
