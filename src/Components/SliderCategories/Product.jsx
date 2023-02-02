import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { filterByLandingPage } from "../../redux/actions";
import "./Product.css";


export default function Product(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (e) => {
      navigate("/category");
      dispatch(filterByLandingPage(e.target.value));
      window.scrollTo(0, 0);
    };


    return (
        <div>
                <div className="card">
                <img className="product-Image" src={props.url} alt="productimage" />
            
                <p>{props.description}</p>
                <p><button onClick={handleClick} value={props.name}>{props.name}</button></p>
            </div>
        </div>
    );
}
