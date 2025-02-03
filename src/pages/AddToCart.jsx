import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AddToCart.css";
import { assets } from "../assets/frontend_assets/assets";

function AddToCart() {
  const { products, currency, cartItems, setCartItems, user } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  // Update cart data whenever cartItems change
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId]?.quantity > 0) {
        tempData.push({
          ...cartItems[itemId],
          _id: itemId,
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // Calculate the total price excluding delivery fee
  const calculateSubtotal = () =>
    cartData.reduce(
      (subtotal, item) =>
        subtotal +
        (products.find((product) => product._id === item._id)?.price || 0) *
          item.quantity,
      0
    );

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedCart = { ...cartItems }; // Clone cartItems
      updatedCart[id] = {
        ...updatedCart[id],
        quantity: newQuantity, // Update quantity
      };
      setCartItems(updatedCart); // Update cart state
    }
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    const updatedCart = { ...cartItems }; // Clone cartItems
    delete updatedCart[id]; // Remove the item
    setCartItems(updatedCart); // Update cart state
  };

  // Handle checkout
  const handleCheckout = () => {
    if (user) {
      // If the user is logged in, navigate to the Place Order page
      navigate("/place-order");
    } else {
      // If the user is not logged in, navigate to the Login page
      navigate("/login");
    }
  };

  return (
    <div className="add-to-cart">
      <div className="flex d-flex text-2xl mb-6 text-center">
        <h2 style={{ padding: "30px" }}>Shopping Cart</h2>
      </div>
      {cartData.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty. Please add items to the cart.
        </p>
      ) : (
        <div className="cart-list">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div key={index} className="cart-item">
                <img
                  className="cart-item-img"
                  src={productData?.image?.[0] || "default-image.jpg"}
                  alt={productData?.name}
                />
                <div className="flex flex-row cart-item-details">
                  <div className="product-name">
                    <h5>{productData?.name}</h5>
                  </div>
                  <div className="product-price">
                    <p>
                      Price: {currency} {productData?.price}
                    </p>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="quantity-container">
                  <input
                    type="number"
                    className="quantity-input"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item._id, parseInt(e.target.value))
                    }
                  />
                </div>

                {/* Delete Icon */}
                <img
                  src={assets.bin_icon} // Use the path to your delete icon
                  alt="Delete"
                  className="delete-icon"
                  onClick={() => handleRemoveItem(item._id)} // Remove the item on click
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                    marginLeft: "10px",
                  }} // Style for clickable icon
                />
              </div>
            );
          })}

          {/* Subtotal and Total Price */}
          <div className="cart-total">
            <h3>Total</h3>
            <h6>Delivery Fee: Rs.150</h6>
            <h6>
              Subtotal: {currency} {calculateSubtotal()}
            </h6>
            <h5>
              Total Price: {currency} {calculateSubtotal() + 150}
            </h5>
          </div>

          {/* Checkout Button */}
          <div className="checkout-btn">
            <Button variant="success" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
