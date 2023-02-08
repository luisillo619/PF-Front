import React from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from '../../../../redux/actions/index';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';


export default function Delete () {
    const dispatch = useDispatch();
    const addressID = useParams().addressId;

    //Obtenemos el id del usuario
    const userLoginCookies = (Cookies.get("user"));
    const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

    //Función para eliminar recetas creadas
    const handleDelete = (e)=> {
        const addressID = e.target.value;                   //Guardamos el 'addressID' de la address
        dispatch(deleteAddress(addressID, userToken));      //Despachamos el 'addressID' para la 'action type' que elimina
        window.location.reload();                           //Recarga la página cuando se elimina la address
    };


    return (
        <div className="">
            <button className="botonEliminar"  onClick={ e => handleDelete(e) }>Delete</button>
        </div>
    );
};