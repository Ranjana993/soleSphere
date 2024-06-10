/* eslint-disable no-unused-vars */
import { useState } from "react";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    url: '',
    detailUrl: '',
    title: '',
    price: '',
    ProductType: '',
    quantity: 0,
    description: '',
    discount: '',
    tagline: '',
    user: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    console.log('Form submitted', formData);
  };

  return (
    <div className="mx-auto p-4 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-1/2 p-4 rounded-lg ">
          <form onSubmit={"handleSubmit"} className="space-y-4">
            <div>
              <label htmlFor="id" className="text-sm lg:text-md font-medium text-gray-700">Products Number:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="mt-1 indent-2  py-2 w-full border border-gray-500 rounded-md"
                required
                placeholder="eg. #1"
              />
            </div>
            <div className="relative">
              <label htmlFor="url" className="block text-sm lg:text-md font-medium text-gray-700">Product Image</label>
              <input
                type="file"
                id="url"
                name="url"
                onChange={handleChange}
                className="opacity-0 absolute inset-0 z-50 cursor-pointer "
              />
              <button
                type="button"
                className="mt-1 block w-full border border-gray-500 rounded-md shadow-sm py-2 px-4  text-gray-700 text-start "
                onClick={() => document.getElementById('url').click()}
              >
                Choose File
              </button>
            </div>
            <div className="relative">
              <label htmlFor="url" className="block text-sm lg:text-md font-medium text-gray-700">Detailed Product Image</label>
              <input
                type="file"
                id="url"
                name="url"
                onChange={handleChange}
                className="opacity-0 absolute inset-0 z-50 cursor-pointer "
              />
              <button
                type="button"
                className="mt-1 block w-full border border-gray-500 rounded-md shadow-sm py-2 px-4  text-gray-700 text-start "
                onClick={() => document.getElementById('url').click()}
              >
                Choose File
              </button>
            </div>
            <div>
              <label htmlFor="title" className=" text-sm lg:text-md  font-medium text-gray-700">Title of the Product</label>
              <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="eg . Xolo shoe "
              />
            </div>
            <div>
              <label htmlFor="price" className=" text-sm lg:text-md  font-medium text-gray-700">Price of Product</label>
              <input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="eg. 200"
              />
            </div>
            <div>
              <label htmlFor="ProductType" className=" text-sm lg:text-md  font-medium text-gray-700">Product Type:</label>
              <input
                type="text"
                id="ProductType"
                name="ProductType"
                value={formData.ProductType}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="eg. menwear womenswear and kidswear"
              />
            </div>
            <div>
              <label htmlFor="quantity" className=" text-sm lg:text-md  font-medium text-gray-700">Quantity </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="eg. 1 or 2 ..."
              />
            </div>
            <div>
              <label htmlFor="description" className=" text-sm lg:text-md  font-medium text-gray-700">Brief Description of Product </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="Your product description"
              />
            </div>
            <div>
              <label htmlFor="discount" className=" text-sm lg:text-md  font-medium text-gray-700">Discount </label>
              <input
                type="text"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="mt-1 w-full indent-2 border border-gray-500 rounded-md shadow-sm py-2 "
                placeholder="eg. 20% , 10% etc"
              />
            </div>
            <div>
              <label htmlFor="tagline" className=" text-sm lg:text-md  font-medium text-gray-700">Offer (if any )</label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2  py-2 "
                placeholder="eg . bumfer diwali sale of holi sale "
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
