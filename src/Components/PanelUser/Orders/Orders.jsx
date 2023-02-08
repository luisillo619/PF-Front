import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../redux/actions/index";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import './Orders.css'


export default function Orders () {
    const dispatch = useDispatch();
    
    const getAllOrders = useSelector((state) => state.getOrders);
    console.log(getAllOrders)
    
    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

    useEffect(()=>{
        dispatch(getOrders(userId, userToken));
    }, [dispatch]);

   
    return (
        <div className='container-PerfilUser'>
            <h1 className='container-PerfilUserH1'>Historial de ordenes</h1>
            <div className='div-mapOrdesUser'>
                {  getAllOrders &&
                    getAllOrders?.map(e =>{
                        return(
                            <div className='container-OrderComplete'>
                                {
                                    e.amount.map(p => {
                                        if (e.status.status === "orderComplete") {
                                            return (
                                                
                                                <div className='container-imegenOrder' key={p.id}>
                                                    <img className='imegenOrder' src={p.image} alt={p.name}/>
                                                    <div className='imegenOrderText'>
                                                        <h2>Quantity: {p.quantity}</h2>
                                                        <h2>PriceUnit: {p.unitPrice}</h2>
                                                        <h2>Total: USD {p.quantity * p.unitPrice}</h2>
                                                    </div>
                                                </div>
                                            )
                                        } 
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/cart' style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer noopener">
                <button className='buttonPutAddressPerfil'>Ordenes en curso</button>
            </Link>
        </div>
    );
};
