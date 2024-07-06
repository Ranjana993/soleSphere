import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const sellerId = localStorage.getItem('seller-token');
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: '',
    url: null, // Initialize as null for file inputs
    detailUrl: null, // Initialize as null for file inputs
    title: {
      shortTitle: "",
      longTitle: ""
    },
    price: {
      mrp: '',
      cost: '',
      discount: ''
    },
    ProductType: '',
    quantity: 0,
    description: '',
    discount: '',
    tagline: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'url' || name === 'detailUrl') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name.includes('title.')) {
      const [key, subkey] = name.split('.');
      setFormData({ ...formData, [key]: { ...formData[key], [subkey]: value } });
    } else if (name.includes('price.')) {
      const [key, subkey] = name.split('.');
      setFormData({ ...formData, [key]: { ...formData[key], [subkey]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('id', formData.id);
    data.append('url', formData.url);
    data.append('detailUrl', formData.detailUrl);
    data.append('title', JSON.stringify(formData.title));
    data.append('price', JSON.stringify(formData.price));
    data.append('ProductType', formData.ProductType);
    data.append('quantity', formData.quantity);
    data.append('description', formData.description);
    data.append('discount', formData.discount);
    data.append('tagline', formData.tagline);
    data.append('user', sellerId);

    try {
      await axios.post('https://solesphere-backend12.onrender.com/upload-product', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added successfully:', formData);
      toast.success("Products added successfully")
      navigate("/dashboard") 
    } catch (error) {
      console.error('Failed to add product:', error);
      toast.error("Failed while adding product:", error);
    }
  };

  return (
    <div className="mx-auto p-4">
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
                onChange={handleChange}
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
                onChange={handleChange}
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-[50%] p-4">
          <img
            id="imagePreview"
            className="w-full rounded-lg shadow-md"
            src={"https://i.pinimg.com/564x/76/92/9b/76929bec830d355d83026611e243ada5.jpg"}
            alt="Image Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
