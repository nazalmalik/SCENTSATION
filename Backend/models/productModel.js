import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String, required: true }, 
    price: { type: Number, required: true, min: 0 }, 
    image: { type: Array, required: true }, 
    category: { type: String, required: true }, 
    brand: { type: String, required: true }, 
    type: { type: String, required: true }, 
    seasons: { type: String }, 
    pricerange: { type: String }, 
    bestseller: { type: Boolean }, 
    date: { type: Number, required: true }, 
    rating: { type: Number, default: 0 }, 
    reviewsCount: { type: Number, default: 0 }, 
    inStock: { type: Boolean, required: true, default: true } 
});

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel