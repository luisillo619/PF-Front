import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast } from 'react-icons/fa';
import './Product.css';

// rendreizar el precio en grande, el nombre en pequeño, pero ese nombre va a estar oculto hasta que se haga un hover, desplegando un poco mas para abajo la card y dejando una pequeña sombra, como en mercado libre

const handleFavorite = () => {};

export default function Product({
    id,
        productName,
        productImage,
        productPrice,
        productDescription
    }) {

    return (
        <div className="container-Product">
            {/* <button className="favorites-Product" onClick={handleFavorite}> ❤️ </button> */}
            <div>
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
}
