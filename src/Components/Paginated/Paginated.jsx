import React from "react";
import { Link } from "react-router-dom";
import "./Paginated.css";


export default function Paginated({
  productPorPage,
  allProducts,
  paginated,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allProducts / productPorPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    <div className="container-Paginated">
      <div className="container-button-LandingPage">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button-LandingPage">HOME</button>
        </Link>
      </div>

      <div className="containerPaginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button key={number}
              className={`container-Paginado ${
                number === currentPage ? "active" : ""
              }`}
              onClick={() => paginated(number)}
            >
              {number}
            </button>
          ))}
      </div>
    </div>
  );
};