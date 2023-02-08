import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShippingFast } from 'react-icons/fa';
import './Product.css';


// rendreizar el precio en grande, el nombre en pequeño, pero ese nombre va a estar oculto hasta que se haga un hover, desplegando un poco mas para abajo la card y dejando una pequeña sombra, como en mercado libre
export default function Product({
    id,
    productName,
    productImage,
    productPrice,
    productDescription
}) {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );
    const [isFavorited, setIsFavorited] = useState(
        favorites.find((e) => e.id === id) || false
    );

    function handleFavorite() {
        const currentFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
        const newFavorites = [...currentFavorites];
        console.log(currentFavorites);
        if (isFavorited) {
            const index = newFavorites.findIndex((e) => e.id === id);
            newFavorites.splice(index, 1);
            setIsFavorited(false);
        } else {
            newFavorites.push({ id, productName, productImage, productDescription, productPrice });
            setIsFavorited(true);
        }
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };


    return (
        <div className="container-Product">
            <div>
                <button className="favorites-Heart" onClick={handleFavorite}> {isFavorited ? "❤️" : "🤍"} </button>
                <Link className="container-Product__Link" to={ `/product/${productName}/${productDescription}/${id}` }>
                    <div className="container-Imagen__Product">
                        <img className="imagen-Product" src={ productImage } alt={ productName } />
                    </div>
                </Link>
                
                <div className="container-Name-Price">
                    <p className="name-Product">{ productName }</p>
                    <h1>{ productPrice } USD</h1>
                    <div className="free-Shipping__Product">
                        <FaShippingFast /><span> Envío gratis</span>
                    </div>
                </div>
            </div>
        </div>
    );
};