import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import './Favorites.css';


export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h1>Mis productos favoritos</h1>
      <div className="favorites-list">
        {favorites.map(product => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.productName}
            productImage={product.productImage}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
          />
        ))}
      </div>
    </div>
  );
}