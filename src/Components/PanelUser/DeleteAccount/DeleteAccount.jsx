import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getOneUser, deleteAccount } from "../../../redux/actions/index";
import Gracias from '../../../assets/1.png';
import Cookies from 'js-cookie';
import './DeleteAccount.css'


export default function DeleteAccount () {
    const dispatch = useDispatch();
    const otro = useSelector((state) => state.getOneUser);

    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

    useEffect(()=>{
        dispatch(getOneUser(userId));
    }, [dispatch]);

    //Función para eliminar Account del User
    const handleDeleteAccount = (e)=> {
        dispatch(deleteAccount(userId, userToken));
    };


    return (
        <div className='container-DeleteAccount'>
            <div className='deleteAccount'>
                <h1>{ otro && <h1>Hola { otro.name }!</h1> }</h1>

                <p>Si has llegado hasta quí, es porque deseas eliminar tu cuenta, no te preocupes, entendemos tus motivos, así que por favor confirma tu intención de eliminar tu cuenta dando click en el siguiente botón.</p>
                <div className="botonEliminar-DeleteAccount">
                    <button className="botonEliminarAccount"  onClick={ e => handleDeleteAccount(e) }>Elimina tu cuenta</button>
                </div>
                
                <h1 className='deleteAccount-Gracias'>Gracias por darnos la oportunidad de servirte.</h1>
                <h1 className='deleteAccount-Gracias'>¡Éxitos en tus proyectos!</h1>

                <div className='deleteAccount-image'>
                    <img src={ Gracias } alt="Gracias" />
                </div>

                <div className="button-ProductDetailsPostInfoPerfil">
                    <Link to='/panelUser'> <button className="button-ProductDetails">Volver</button> </Link>
                </div>
            </div>
        </div>
    );
};