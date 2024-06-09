import { Link } from "react-router-dom"

const MainUI = () => {
  return (
    <div className="py-2 lg:py-4 pb-12">
      {/* categories */}
      <div>
        <ul className="flex gap-2 lg:gap-4 flex-wrap items-center lg:justify-start ml-4 lg:ml-12">
          <li className="px-4 lg:px-8 py-2 bg-black text-white rounded-full cursor-pointer mt-4">All Products</li>
          <li className="px-4 lg:px-8 py-2 bg-gray-300 hover:bg-black hover:text-white rounded-full cursor-pointer mt-4">Mens</li>
          <li className="px-4 lg:px-8 py-2 bg-gray-300 hover:bg-black hover:text-white rounded-full cursor-pointer mt-4">Womens</li>
          <li className="px-4 lg:px-8 py-2 bg-gray-300 hover:bg-black hover:text-white rounded-full cursor-pointer mt-4">Kids</li>
        </ul>
      </div>
      <div>
        <div>
          <div className='flex gap-2 lg:gap-5 m-auto w-full flex-wrap items-center justify-center'>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link  className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-[47%] sm:w-[23%] md:w-[36%] lg:w-1/6'>
              <div className="relative m-2 lg:m-5 border rounded-lg border-[#EB6440] flex flex-col w-full h-full max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white">
                <Link>
                  <Link className="relative mx-3 mt-3 flex h-42 lg:h-52 overflow-hidden rounded-sm" to="#">
                    <img className="object-cover w-full rounded-lg" src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70" alt="product image" />
                    <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{80}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-5 flex flex-col">
                    <Link to="#">
                      <h5 className="text-md font-semibold tracking-tight text-slate-900">HeroHonda</h5>
                    </Link>
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">₹500</span>
                        <span className="text-sm text-slate-900 line-through">₹1200</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2 w-full">
                      <Link className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 lg:px-4 py-3 text-center w-full text-sm text-white transition hover:bg-orange-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                        </svg>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainUI