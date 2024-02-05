

import React, { useContext, useState } from 'react';
import Layout from './components/layout/layout.js';
import { CartContext } from '/home/rguktongole/Desktop/ReactProjects/my-first-app/src/CartContext.js';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Practice.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [removingItem, setRemovingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    houseNo: '',
    pincode: '',
    city: '',
    state: '',
    contactNumber: '',
    landmark: '',
  });

  const handleRemoveItem = (itemId) => {
    setRemovingItem(itemId);

    // Simulate the removal delay (you can replace this with your actual removal logic)
    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItem(null);
    }, 500); // Adjust the delay as needed
  };

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => total + (parseFloat(item.price) || 0), 0);
    return totalPrice.toFixed(2);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmOrder = () => {
    // Check if any of the required fields is empty
    const requiredFields = ['houseNo', 'pincode', 'city', 'state', 'contactNumber', 'landmark'];
    const isEmpty = requiredFields.some(field => !address[field]);

    if (isEmpty) {
      toast.error('Please fill in all required fields', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      // You can handle the order confirmation logic here
      // For simplicity, just close the modal and show a success notification in this example
      closeModal();
      toast.success('Order Placed!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <div className="cart-container">
        <center>
          <h2 className="style">Your Cart</h2>
        </center>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3 className="style">Oops! Your cart is empty.</h3>
          </div>
        ) : (
          <React.Fragment>
            <ul className="cart-list">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className={`cart-item${removingItem === item.id ? ' removing' : ''}`}
                >
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} width="50" height="50" />
                  </div>
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">Price: ${item.price}</p>
                    <p>Description: {item.description}</p>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p className="total-price">Total Price: ${calculateTotalPrice()}/-</p>
              <button className="place-order-button" onClick={openModal}>
                Place Order
              </button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Address Modal"
              className="address-modal"
              overlayClassName="overlay"
            >
              <div className="close-button" onClick={closeModal}>
                &#10005;
              </div>
              <center>
                <h2 className="address">Enter Your Address</h2>
              </center>
              <form>
                <label>
                  House No:
                  <input
                    type="text"
                    name="houseNo"
                    value={address.houseNo}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label>
                  Pincode:
                  <input
                    type="text"
                    name="pincode"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label>
                  State:
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label>
                  Contact Number:
                  <input
                    type="text"
                    name="contactNumber"
                    value={address.contactNumber}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <label>
                  Landmark:
                  <input
                    type="text"
                    name="landmark"
                    value={address.landmark}
                    onChange={handleAddressChange}
                    required
                  />
                </label>
                <div className="payment-method">
                  <label>
                    Cash on Delivery:
                    <input type="radio" name="paymentMethod" value="cod" defaultChecked />
                  </label>
                </div>
              </form>
              <div className="button-container">
                <button className="confirm-button" onClick={handleConfirmOrder}>
                  Confirm
                </button>
                <button className="cancel-button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </Modal>
          </React.Fragment>
        )}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Cart;
