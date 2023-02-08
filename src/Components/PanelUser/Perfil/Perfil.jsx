import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../../redux/actions/index";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import './Perfil.css'


export default function Perfil () {
    const dispatch = useDispatch();
    const otro = useSelector((state) => state.getOneUser);
   
    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    
    useEffect(()=>{
        dispatch(getOneUser(userId));
    }, [dispatch])


    return (
        <div className='container-PerfilUser'>
        <h1 className='container-PerfilUserH1'>Tu información personal</h1>
        {
            otro &&
            <div className='container-perfilUser'>
                <div className='perfilText'>
                    <div className='textNameLastPerfil'>
                        <h1>Name</h1>
                        <p className='textNameLastPerfilP'>{otro.name}</p>
                        <h1>LastName</h1>
                        <p className='textNameLastPerfilP'>{otro.lastName}</p>
                    </div>
                    <h1>Document Identity</h1>
                    <p>{otro.docIdentity}</p>
                    <h1>Phone</h1>
                    <p>{otro.phone}</p>
                </div>
                <div className='addressUserTwo'>
                    <h1>UserName</h1>
                    <p>{otro.userName}</p>
                    <h1>Email</h1>
                    <p>{otro.email}</p>
                    <h1>SignupDate</h1>
                    <p>{otro.signupDate}</p>
                    <div className='buttonPerfilAct'>
                        <Link to={`/panelUser/postInfoPerfil/${userId}`}> <button className="buttonPutAddressPerfil">Actualiza tus datos</button> </Link>
                    </div>
                    <div className='buttonPerfilAct'>
                        <Link to={`/panelUser/deleteAccount/${userId}`}> <button className="botonEliminarAccount">Eliminar tu cuenta</button> </Link>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}