import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Constants
  const currency = "Rs.";
  const delivery_fee = 150;

  // States
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); // Initialize as an object
  const  navigate = useNavigate();


  // Add to Cart Function
  const addToCart = async (itemId, quantity) => {
    const product = products.find((prod) => prod._id === itemId);
    if (!product) return; // If the product doesn't exist, exit the function

    let cartData = structuredClone(cartItems); // Clone the cartItems object

    if (cartData[itemId]) {
      // If the item exists in the cart, update its quantity
      cartData[itemId].quantity += quantity;
    } else {
      // Otherwise, add the new item with the specified details
      cartData[itemId] = {
        quantity,
        name: product.name,
        image: product.image?.[0] || "default-image.jpg", // Use first image or default
        price: product.price, // Optional: Include price for calculations
      };
    }

    setCartItems(cartData);
  };

  // Increase quantity of an item
  const increaseQuantity = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      updatedCart[itemId].quantity += 1;
      setCartItems(updatedCart);
    }
  };

  // Decrease quantity of an item
  const decreaseQuantity = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId] && updatedCart[itemId].quantity > 1) {
      updatedCart[itemId].quantity -= 1;
      setCartItems(updatedCart);
    } else if (updatedCart[itemId] && updatedCart[itemId].quantity === 1) {
      // If quantity is 1, remove the item from the cart
      delete updatedCart[itemId];
      setCartItems(updatedCart);
    }
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      delete updatedCart[itemId]; // Remove the item by its ID
      setCartItems(updatedCart);
    }
  };

  // Get total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;
    // Loop through each cart item
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId].quantity; // Sum up the quantity of each item
    }
    return totalCount;
  };

  // Get the total cost of the cart
  const getCartTotal = () => {
    let totalCost = 0;
    for (const itemId in cartItems) {
      const product = products.find((prod) => prod._id === itemId);
      if (product) {
        totalCost += product.price * cartItems[itemId].quantity;
      }
    }
    return totalCost + delivery_fee; // Adding delivery fee to the total cost
  };

  // Context Value
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems, // Ensure this is included
    addToCart,
    increaseQuantity, // New function
    decreaseQuantity, // New function
    removeFromCart,   // New function
    getCartCount,
    getCartTotal,     // Add total cost to the context
    navigate,
  };

  // Provider Component
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
