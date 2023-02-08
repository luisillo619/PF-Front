import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import Address from './Address/Address';
import Orders from './Orders/Orders';
import Perfil from './Perfil/Perfil';
import Cookies from 'js-cookie';
import './PanelUser.css';


export default function PanelUser () {
    const dispatch = useDispatch();
    const otro = useSelector((state) => state.getOneUser);
    
    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    
    useEffect(()=>{
        dispatch(getOneUser(userId));
    }, [dispatch,userId]);


    return (
        <div className='container-PanelUser'>
            <div className='container-PanelUserHead'>
                <h1 className='container-h1PanelUserHead'>Bienvenido</h1>
                <div>{ otro && <h1>{ otro.name } { otro.lastName }</h1> }</div>
            </div>
            <div className='container-PanelUserButton'>
                <Perfil />
                <Address />
                <Orders />
                <Link to='/'> <button className="button-ProductDetails">Volver</button> </Link>
            </div>
        </div>
    );
};