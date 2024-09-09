/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    url: '',
    detailUrl: '',
    title: {
      shortTitle: '',
      longTitle: ''
    },
    price: {
      mrp: '',
      cost: ''
    },
    ProductType: '',
    quantity: 0,
    description: '',
    discount: '',
    tagline: '',
    user: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-products/${id}`);
        setFormData(response?.data?.product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested state updates
    if (name.includes('.')) {
      const [mainKey, subKey] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [mainKey]: {
          ...prevState[mainKey],
          [subKey]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://solesphere-backend12.onrender.com/edit-product/${id}`, formData);
      toast.success("Product updated successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating product data:", error);
      toast.error("Failed to update product");
    }
  };

  return (
    <div className="mx-auto p-4 lg:pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full lg:w-[50%] p-4 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="id" className="text-sm lg:text-md font-medium text-gray-700">Products Number:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="mt-1 indent-2 py-2 w-full border border-gray-500 rounded-md"
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
                onChange={handleFileChange}
                className="opacity-0 absolute inset-0 z-50 cursor-pointer"
              />
              <button
                type="button"
                className="mt-1 block w-full border border-gray-500 rounded-md shadow-sm py-2 px-4 text-gray-700 text-start"
                onClick={() => document.getElementById('url').click()}
              >
                Choose image File
              </button>
            </div>
            <div className="relative">
              <label htmlFor="detailUrl" className="block text-sm lg:text-md font-medium text-gray-700">Detailed Product Image</label>
              <input
                type="file"
                id="detailUrl"
                name="detailUrl"
                onChange={handleFileChange}
                className="opacity-0 absolute inset-0 z-50 cursor-pointer"
              />
              <button
                type="button"
                className="mt-1 block w-full border border-gray-500 rounded-md shadow-sm py-2 px-4 text-gray-700 text-start"
                onClick={() => document.getElementById('detailUrl').click()}
              >
                Choose details File
              </button>
            </div>
            <div>
              <label htmlFor="shortTitle" className="text-sm lg:text-md font-medium text-gray-700">Short Title of the Product</label>
              <input
                id="shortTitle"
                name="title.shortTitle"
                value={formData.title.shortTitle}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. Xolo shoe"
              />
            </div>
            <div>
              <label htmlFor="longTitle" className="text-sm lg:text-md font-medium text-gray-700">Long Title of the Product</label>
              <input
                id="longTitle"
                name="title.longTitle"
                value={formData.title.longTitle}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. Xolo shoe"
              />
            </div>
            <div>
              <label htmlFor="mrp" className="text-sm lg:text-md font-medium text-gray-700">MRP of Product</label>
              <input
                id="mrp"
                name="price.mrp"
                value={formData.price.mrp}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. 1200"
              />
            </div>
            <div>
              <label htmlFor="cost" className="text-sm lg:text-md font-medium text-gray-700">Cost of Product</label>
              <input
                id="cost"
                name="price.cost"
                value={formData.price.cost}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. 700"
              />
            </div>
            <div>
              <label htmlFor="ProductType" className="text-sm lg:text-md font-medium text-gray-700">Product Type:</label>
              <input
                type="text"
                id="ProductType"
                name="ProductType"
                value={formData.ProductType}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. menwear womenswear and kidswear"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="text-sm lg:text-md font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. 1 or 2 ..."
              />
            </div>
            <div>
              <label htmlFor="description" className="text-sm lg:text-md font-medium text-gray-700">Brief Description of Product</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="Your product description"
              />
            </div>
            <div>
              <label htmlFor="discount" className="text-sm lg:text-md font-medium text-gray-700">Discount</label>
              <input
                type="text"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="mt-1 w-full indent-2 border border-gray-500 rounded-md shadow-sm py-2"
                placeholder="eg. 20%, 10% etc"
              />
            </div>
            <div>
              <label htmlFor="tagline" className="text-sm lg:text-md font-medium text-gray-700">Offer (if any)</label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-500 rounded-md shadow-sm indent-2 py-2"
                placeholder="eg. bumper diwali sale or holi sale"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-rose-500 text-white font-medium rounded-md shadow-sm hover:bg-rose-700"
              >
                Update
              </button>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700"
              >
                Update
              </button>

            </div>

          </form>
        </div>
        <div className="hidden lg:block w-[50%] p-4">
          <img
            id="imagePreview"
            className="w-full  rounded-tl-[30%] rounded-bl-[20%] shadow-md"
            src={"https://i.pinimg.com/564x/aa/e0/74/aae074ee2bebf8c79fe7cf208b69303e.jpg "}
            alt="Image Preview"
          />
        </div>
        {/* https://i.pinimg.com/564x/aa/e0/74/aae074ee2bebf8c79fe7cf208b69303e.jpg */}
      </div>
    </div>
  );
}

export default EditProduct;
