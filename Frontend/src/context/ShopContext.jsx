import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "Rs.";
  const delivery_fee = 150;
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  // Add to Cart Function
  const addToCart = async (itemId, quantity) => {
    if (!backendUrl) {
      toast.error("Backend URL is not defined.");
      return;
    }

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId, quantity }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error("Error adding item to cart.");
      }
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId].quantity += quantity;
    } else {
      cartData[itemId] = { quantity };
    }
    setCartItems(cartData);
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = { quantity };
    setCartItems(cartData);

    if (token && backendUrl) {
      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } });
      } catch (error) {
        console.log(error);
        toast.error("Error updating quantity.");
      }
    }
  };

  const increaseQuantity = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      updatedCart[itemId].quantity += 1;
      setCartItems(updatedCart);
    }
  };

  const decreaseQuantity = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId] && updatedCart[itemId].quantity > 1) {
      updatedCart[itemId].quantity -= 1;
      setCartItems(updatedCart);
    } else if (updatedCart[itemId] && updatedCart[itemId].quantity === 1) {
      delete updatedCart[itemId];
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (itemId) => {
    let updatedCart = { ...cartItems };
    if (updatedCart[itemId]) {
      delete updatedCart[itemId];
      setCartItems(updatedCart);
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId].quantity;
    }
    return totalCount;
  };

  const getCartTotal = () => {
    let totalCost = 0;
    for (const itemId in cartItems) {
      const product = products.find((prod) => prod._id === itemId);
      if (product) {
        totalCost += product.price * cartItems[itemId].quantity;
      }
    }
    return totalCost + delivery_fee;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching products.");
    }
  };

  const getUserCart = async () =>{
    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

 // Fetch products on mount
 useEffect(() => {
  getProductsData(); // Fetch products when the component mounts
}, []) // Empty array ensures it runs only once when the component mounts

useEffect(() => {
  if (!token && localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'))
  }
}, [])

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    setCartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getCartCount,
    getCartTotal,
    navigate,
    updateQuantity,
    backendUrl,
    token,
    setToken
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
