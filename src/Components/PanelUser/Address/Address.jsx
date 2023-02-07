import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../../redux/actions/index";
import { deleteAddress } from '../../../redux/actions/index';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import './Address.css';


export default function Address () {
    const dispatch = useDispatch();
    const userAddress = useSelector((state) => state.getAddress);
    
    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

    useEffect(()=>{
        dispatch(getAddress(userId));
    }, [dispatch]);

    //Función para eliminar recetas creadas
    const handleDelete = (e)=> {
        const addressID = e.target.value;                           //Guardamos el 'addressID' de la address
        dispatch(deleteAddress(userId, addressID, userToken));      //Despachamos el 'addressID' para la 'action type' que elimina
        // window.location.reload();                                //Recarga la página cuando se elimina la address
    };


    return (
        <div className='container-AddressUser'>
            <h1 className='container-PerfilUserH1'>Tus direcciones</h1>
            <div className='div-mapAddressUser'>
                <div className='container-mapAddressUser'>
                    {userAddress &&
                        userAddress ?.map((e) => {
                            return (
                                <div className='mapAddressUser' key={e._id}>
                                    <div className='🤓'>
                                        <span className='mapAddressUserH1'>Country: </span> <span>{ e.country }</span><br></br>
                                        <span className='mapAddressUserH1'>City: </span> <span>{ e.city }</span><br></br>
                                        <span className='mapAddressUserH1'>State: </span> <span>{ e.state }</span><br></br>
                                        <span className='mapAddressUserH1'>Street: </span> <span>{ e.street }</span><br></br>
                                        <span className='mapAddressUserH1'>ZipCode: </span> <span>{ e.zipCode }</span><br></br>
                                    </div>
                                    <div className='🤣'>
                                        <Link to={`/panelUser/putAddress/${userId}/${e._id}`}>
                                            <button className='button-PutAddress'>Editar</button>
                                        </Link>
                                        <button className="botonEliminarAddress" value={ e._id } onClick={ e => handleDelete(e) }>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='container-button-PutAddress'>
                <Link to={`/panelUser/postAddress/${userId}`}>
                    <button className='buttonPutAddressPerfil'>Agrega una dirección</button>
                </Link>
            </div>
        </div>
    )
}