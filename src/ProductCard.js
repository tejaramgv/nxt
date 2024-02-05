
import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Practice.css'; // Make sure to import your CSS file
import { CartContext } from './CartContext.js';

const ProductCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    setAddToCartAnimation(true); // Trigger the jump animation
    addToCart(props); // Assuming `props` contains product details

    // Reset the animation class after a short delay
    setTimeout(() => {
      setAddToCartAnimation(false);
    }, 500);
  };

  return (
    <>
      <div className="container shadow mt-4 product-card">
        <div className="row mb-2">
          <div className={"card shadow product-card"}>
            <center><img src={props.image} alt="teja" /></center>
            <center><span className="para">{props.name}</span></center>
            <span>
              Price: {props.price}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill={isLiked ? "green" : "none"}
                viewBox="0 0 24 24"
                stroke="green"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`bi bi-heart${isLiked ? '-fill' : ''}`}
                onClick={handleHeartClick}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 17.21 2 14.01 2 10.5 2 7.42 4.42 5 7.5 5c1.74 0 3.41.81 4.5 2.09C13.09 5.81 14.76 5 16.5 5 19.58 5 22 7.42 22 10.5c0 3.51-3.4 6.71-8.55 9.54L12 21.35z"
                />
              </svg>
            </span>
            <button
              className={`btn bg-green mb-1 text-light${addToCartAnimation ? ' jump-animation' : ''}`}
              onClick={handleAddToCart}
            >
              {addToCartAnimation ? 'Added to cart!' : 'Add to cart'}
            </button>
            <button
              className="btn bg-light viewdetails-button"
              onClick={handleShowModal}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="modal shadow" tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">More Details</h5>
              <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                <center><span aria-hidden="true">&times;</span></center>
              </button>
            </div>
            <div className="modal-body">
              <center><img src={props.image} alt="teja" /></center>
              <center><span className="para">{props.name}</span></center>
              <h3>Description</h3>
              <p>{props.description}</p>
              <h3>Price: {props.price}</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
               
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
 