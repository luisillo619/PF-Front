import React from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import Paginated from "../Paginated/Paginated"
import {useState, useEffect} from 'react';
import {getProducts} from "../../redux/actions/index"
import { productName, productCategory, productPrice } from "../helpers/filteringFunction";
import './Products.css';


export default function Products() {
    const dispatch = useDispatch()
    const filters = useSelector((state) => state.filters);
    let products = useSelector((state) => state.products);
  
    products = products.filter(e=>e.isDeleted !== true)
  

    if (filters.productName)
    products = productName(filters.productName, products);

    if (filters.productCategory)
    products = productCategory(filters.productCategory, products);

    if (filters.productPrice)
    products = productPrice(filters.productPrice, products);


  //paginado 
  const [currentPage, setCurrentPage]=useState(1)//pagina actual que arranca en 1
  const [productPorPage]= useState(12) // muestro 12 productos por pagina
  const indexOfLastmate= currentPage * productPorPage //12  productos 
  const indexOfFirstmate = indexOfLastmate - productPorPage //
  const currentProducts = products.slice(indexOfFirstmate,indexOfLastmate,)

    const paginated = (pageNumber) =>{
        setCurrentPage(pageNumber);
    };

   
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div>
            <div className="container-ProductsAll">
                <div className="otrounos">
                    {
                        currentProducts?.map((e) =>{
                            return (
                                <div key={e._id}>
                                    <Product
                                        key={e._id}
                                        id={e._id}
                                        productName={e.name}
                                        productImage={e.image}
                                        productPrice={e.price}
                                        productDescription={e.description}
                                        counter={e.counter}
                                        />  
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="paginated-rigth">
                <Paginated  productPorPage={productPorPage} allProducts={products.length} paginated={paginated} currentPage= {currentPage} />
            </div>
        </div>
    );
}
