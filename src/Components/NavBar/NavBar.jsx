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

function Select({ options, value, onChange, name }) {
  return (
    <select
      className=""
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      {name === "productCategory" ? (
        <option value="Categoria de mate">Categoria de mate</option>
      ) : (
        <option value="Rango de precios">Rango de precios</option>
      )}
      {options.map((option) => (
        <option
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

function NavBar({ userOrderCookies }) {
  const { filtersState, handleChange, nameOptions, products, categories } =
    useFilter(filterValidations);

  const userOrderLenght = userOrderCookies && parseInt(userOrderCookies);

  const productsCart = useSelector((state) => state.productsCart);

  const [count, setCount] = useState(productsCart && userOrderLenght);

  useEffect(() => {
    if (productsCart || userOrderLenght) {
      setCount(productsCart || userOrderLenght);
    } else setCount(0);
  }, [productsCart, userOrderLenght]);

  return (
    <div>
      <input
        type="search"
        list="names"
        id="productName"
        name="productName"
        value={filtersState.productName}
        onChange={handleChange}
        placeholder="Buscar Productos"
      />
      <datalist id="names">
        {nameOptions(products, filtersState.productName)}
      </datalist>

      <label htmlFor="productCategory">Categorias de Productos</label>
      <Select
        options={categories}
        value={filtersState.productCategory}
        onChange={handleChange}
        name="productCategory"
      />

      <label htmlFor="productPrice">Rangos de Precios</label>
      <Select
        options={priceRange}
        value={filtersState.productPrice}
        onChange={handleChange}
        name="productPrice"
      />

      <ButtonUser userOrderCookies={userOrderCookies}/>

      <Link to="/cart">
        <button>
          <FontAwesomeIcon size="xl" icon={faCartShopping} />
          <p>{count}</p>
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
