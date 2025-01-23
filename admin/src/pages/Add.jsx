import React from "react";
import { toast } from "react-toastify";

const Add = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    toast.success("Product added successfully!");
  };

  return (
    <form onSubmit={handleAddProduct} className="bg-white p-8 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Price"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded"
      ></textarea>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default Add;