import React from "react";
import useFilter from "../../hooks/useFilter";
import { priceRange } from "../helpers/priceRange";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import ButtonUser from "../Login/ButtonUser";
import logo from '../../assets/7.png';
import { AiFillHeart } from 'react-icons/ai';

import './NavBar.css';


function Select({ options, value, onChange, name }) {
  return (
    <select
      className="text-white "
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      {name === "productCategory" ? (
        <option className="text-white bg-[#022957] bg-opacity-70 rounded-sm"  value="Categoria de mate">Categoria de mate</option>
      ) : (
        <option className="text-white bg-[#022957] bg-opacity-70 rounded-sm" value="Rango de precios">Rango de precios</option>
      )}
      {options.map((option) => (
        <option className="text-white bg-[#022957] bg-opacity-70 rounded-sm"
          key={option.id || option._id}
          value={option.name || option.category}
        >
          {option.name || option.category}
        </option>
      ))}
    </select>
  );
}

const filterValidations = (filtersState, dispatch, addFilter) => {
  const validations = {};

  if (filtersState.productCategory !== "Categoria de mate") {
    validations.productCategory = filtersState.productCategory;
  } else validations.productCategory = "";

  if (filtersState.productPrice !== "Rango de precios") {
    validations.productPrice = filtersState.productPrice;
  } else validations.productPrice = "";

  validations.productName = filtersState.productName;

  dispatch(addFilter(validations));
};

function NavBar({ userOrderCookies,userLoginCookies }) {
  const { filtersState, handleChange, nameOptions, products, categories } =
    useFilter(filterValidations);
 
  const userOrderLenght = userOrderCookies && parseInt(userOrderCookies);

  const productsCart = useSelector((state) => state.productsCart);
    console.log(productsCart, "carrito")
  const [count, setCount] = useState(productsCart && userOrderLenght);

  useEffect(() => {
    if (productsCart || userOrderLenght) {
      setCount(productsCart || userOrderLenght);
    } else setCount(0);


  }, [productsCart, userOrderLenght]);


    return (
    <div className="container-NavBarAll">
        <div className='container-logo__Navbar'>
            <Link style={{textDecoration: 'none'}} className="link" to="/"><img src={ logo } alt="Logo" /></Link>
        </div>

        <div className="container-FilterSearch__Navbar">
            <input
                className="inputSearchNavBar "
                type="text"
                list="names"
                id="productName"
                name="productName"
                value={filtersState.productName}
                onChange={handleChange}
                placeholder="Buscar Productos"
            />
            <div className="filter-Mavbar ">
                <datalist className="datalist  " id="names">
                    {nameOptions(products, filtersState.productName)}
                </datalist>
                <Select  options={categories} value={filtersState.productCategory} onChange={ handleChange } name="productCategory" />
                <Select  options={priceRange} value={filtersState.productPrice} onChange={handleChange} name="productPrice" />
            </div>
        </div>

        <div className="container-Button-Cart">
            <ButtonUser userOrderCookies={userOrderCookies} userLoginCookies={userLoginCookies}/>
            <Link to="/cart">
                <button>
                    <FontAwesomeIcon className="cartShopping" size="xl" icon={faCartShopping} />
                    <p className="count-Cart">{count}</p>
                </button>
            </Link>
        </div>
         
        <Link  to='/favorites'>
            <AiFillHeart className='heartFavorites'/>
        </Link>
    </div>
    );
}


export default NavBar;