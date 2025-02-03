import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Button from 'react-bootstrap/Button';
import './PlaceOrder.css';  // Ensure the CSS file is correctly linked


const PlaceOrder = () => {
  const { cartItems, currency, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default payment method
  const {navigate } = useContext(ShopContext);
  // Calculate Subtotal: Product price * quantity
  const calculateSubtotal = () =>
    Object.keys(cartItems).reduce((total, itemId) => {
      const product = products.find((product) => product._id === itemId);
      const price = product?.price || 0;
      const quantity = cartItems[itemId].quantity;
      return total + price * quantity;
    }, 0);

  // Calculate Delivery Fee (fixed Rs. 150)
  const calculateDeliveryFee = () => 150;

  // Calculate Total (Subtotal + Delivery Fee)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = calculateDeliveryFee();
    return subtotal + deliveryFee;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="delivery-info-section">
        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold',paddingLeft:'30px' }}>Delivery Information</h3>
        <div className="delivery-info-flex" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          {/* Delivery Form Container */}
          <div className="delivery-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '650px', padding: '1rem', backgroundColor: '#fff' }}>
            
            {/* First Name and Last Name in one row */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', flex: 1, fontSize: '0.875rem' }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', flex: 1, fontSize: '0.875rem' }}
              />
            </div>

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-control form-control-lg"
              style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem' }}
            />

            {/* Street Address Input */}
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleInputChange}
              required
              className="form-control form-control-lg"
              style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem' }}
            />

            {/* City and State Inputs */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem', flex: 1 }}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem', flex: 1 }}
              />
            </div>

            {/* Zipcode and Country Inputs */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                value={formData.zipcode}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem', flex: 1 }}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                style={{ marginBottom: '1rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem', flex: 1 }}
              />
            </div>

            {/* Phone Number Input */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-control form-control-lg"
              style={{ marginBottom: '1.5rem', padding: '0.25rem 0.75rem', height: '30px', fontSize: '0.875rem' }}
            />
          </div>
        

        <div className="order-summary" style={{ padding: '30px', backgroundColor: '#fff', maxWidth: '650px' }}>
          <h4>Order Summary</h4>
          {/* Display subtotal, delivery fee, and total */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>Subtotal</span>
            <span>{currency} {calculateSubtotal().toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span>Delivery Fee</span>
            <span>Rs. 150</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>{currency} {calculateTotal().toFixed(2)}</span>
          </div>

          <h4>Payment Method</h4>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '3rem', margin: '0px', paddingLeft: '0px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={handlePaymentChange}
                style={{ marginRight: '0.5rem' }}
              />
              Cash on Delivery
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="paymentMethod"
                value="debit"
                checked={paymentMethod === 'debit'}
                onChange={handlePaymentChange}
                style={{ marginRight: '0.5rem' }}
              />
              Debit Card
            </label>

            <label style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="paymentMethod"
                value="jazzcash"
                checked={paymentMethod === 'jazzcash'}
                onChange={handlePaymentChange}
                style={{ marginRight: '0.5rem' }}
              />
              Jazzcash
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5rem' }}>
            <Button 
            onClick={()=>navigate('/orders')}
            variant="primary">Proceed to Checkout</Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
