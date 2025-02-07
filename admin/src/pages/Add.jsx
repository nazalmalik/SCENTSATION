import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [seasons, setSeasons] = useState("");
  const [pricerange, setPricerange] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [rating, setRating] = useState("");
  const [reviewsCount, setReviewsCount] = useState("");
  const [inStock, setInStock] = useState(false);


  const handleAddProduct = async(e) => {
    e.preventDefault();
    try {

      const formData = new FormData()
      formData.append("name", name)
      formData.append("price", price)
      formData.append("description", description)
      formData.append("type", type)
      formData.append("brand", brand)
      formData.append("category", category)
      formData.append("seasons", seasons)
      formData.append("pricerange", pricerange)
      formData.append("bestseller", bestseller)
      formData.append("rating", rating)
      formData.append("reviewsCount", reviewsCount)
      formData.append("inStock", inStock)

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})
      
      if (response.data.success) {
        toast.success(response.data.message)
        setName("")
        setPrice("")
        setDescription("")
        setBrand("")
        setPricerange("")
        setRating("")
        setReviewsCount("")
        setImage1("")
        setImage2("")
        setImage3("")
        setImage4("")
      }else{
        toast.error(response.data.message)
      }
      
    } 
    catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  };

  return (
    <form onSubmit={handleAddProduct} className="bg-white p-8 rounded shadow-lg ">

      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <p className="mb-2" >Upload Image</p>

          <div className="flex gap-2">
            <label htmlFor="image1">
              <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
              <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
              <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
              <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input onChange={(e) => setName(e.target.value)} value={name}
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          />
          <input onChange={(e) => setPrice(e.target.value)} value={price}
            type="number"
            name="price"
            placeholder="Price"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          />
        </div>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}
          name="description"
          placeholder="Description"
          className="w-full p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
          required
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select onChange={(e) => setType(e.target.value)}
            name="type"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          >
            <option value="" disabled selected>
              Select a Type
            </option>
            <option value="citrus">Citrus</option>
            <option value="floral">Floral</option>
            <option value="fruity">Fruity</option>
            <option value="green">Green</option>
            <option value="oriental">Oriental</option>
            <option value="sweet">Sweet</option>
            <option value="woody">Woody</option>
          </select>

          <input onChange={(e) => setBrand(e.target.value)} value={brand}
            type="text"
            name="brand"
            placeholder="Brand"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select onChange={(e) => setCategory(e.target.value)}
            name="category"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          >
            <option value="" disabled selected>
              Select a Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
            <option value="Giftsets">Giftsets</option>
            <option value="Dior">Dior</option>
            <option value="Versace">Versace</option>
            <option value="Tomford">Tom Ford</option>
            <option value="Ysl">YSL</option>
            <option value="Ck">Ck</option>
            <option value="Gucci">Gucci</option>
            <option value="Chanel">Chanel</option>
          </select>

          <select onChange={(e) => setSeasons(e.target.value)}
            name="seasons"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
            required
          >
            <option value="" disabled selected>
              Select a Season
            </option>
            <option value="spring">Spring</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
            <option value="summer">Summer</option>
          </select>
        </div>
        <input onChange={(e) => setPricerange(e.target.value)} value={pricerange}
          type="text"
          name="pricerange"
          placeholder="Price Range"
          className="w-full p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
        />
        <div className="mb-4">
          <label className="flex items-center">
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller}
              type="checkbox"
              name="bestseller"
              className="mr-2"
            />
            Bestseller
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input onChange={(e) => setRating(e.target.value)} value={rating}
            type="number"
            name="rating"
            placeholder="Rating"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
          />
          <input onChange={(e) => setReviewsCount(e.target.value)} value={reviewsCount}
            type="string"
            name="reviewsCount"
            placeholder="Reviews Count"
            max="5"
            min="1"
            className="w-full md:w-500px p-2 mb-4 border border-[#d2d2d0] outline-[#2e485f] rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input onChange={() => setInStock(prev => !prev)} checked={inStock}
              type="checkbox"
              name="inStock"
              className="mr-2"
            />
            In Stock
          </label>
        </div>
        <button type="submit" className="w-full bg-[#0b6153] text-white p-2 rounded hover:bg-[#0D8370]">
          Add Product
        </button>
      </div>

    </form>
  );
};

export default Add;