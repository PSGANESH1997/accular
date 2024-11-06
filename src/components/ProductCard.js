import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ imageUrl, title, description, price, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setShowNotification(true);
    onAddToCart(); // Increment the cart count
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Notification disappears after 2 seconds
  };

  return (
    <article className="product-card">
      <figure>
        <img src={imageUrl} alt={title} className="product-image" />
      </figure>

      <section className="product-info">
        <header>
          <h2 className="product-title">{title}</h2>
        </header>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={isAdded}
          aria-label={`Add ${title} to cart`}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </section>

      {showNotification && (
        <div role="alert" className="notification fade-in">
          Product added to cart!
        </div>
      )}
    </article>
  );
}

export default ProductCard;
