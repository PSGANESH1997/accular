import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const products = [
    {
      id: 1,
      imageUrl:
        "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_3_1.png",
      title: "Lenovo ThinkBad",
      description:
        "Lenovo 60.45 cm (23.8 inch) Full HD VA Panel 3-Side Near Edgeless",
      price: "Rs 49,999",
    },
    {
      id: 2,
      imageUrl:
        "https://m.media-amazon.com/images/I/41Sm2nAy2KL._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Boult Earbuds",
      description:
        "Boult Audio K40 True Wireless in Ear Earbuds with 48H Playtime",
      price: "Rs 2,499",
    },
    {
      id: 3,
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png",
      title: "Nike Shoes",
      description: "NIKE AIR ZOOM STRUCTURE 25 Running Shoes For Men",
      price: "Rs 4,999",
    },
  ];

  const incrementCartCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <header className="header-cards">
        <h1 className="header-title">Shopping Cart</h1>
        <p className="count-title">
          <span className="cart-count">Items in Cart: {cartCount}</span>
        </p>
      </header>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={incrementCartCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
