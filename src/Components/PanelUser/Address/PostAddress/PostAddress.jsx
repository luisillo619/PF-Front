import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postAddress } from '../../../../redux/actions/index';
import Cookies from 'js-cookie';
import './PostAddress.css';


function validate (input) {
    let errors = {};
    if(!input.country){
        errors.country = "Tu país es requerido.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.country)){
        errors.country = "Tu País no puede tener números o caracteres especiales.";
    }
    if(!input.city){
        errors.city = "Tu ciudad es requerido.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.city)){
        errors.city = "Tu ciudad no puede tener números o caracteres especiales.";
    }
    if(!input.state){
        errors.state = "Tu Estado, Departamento o Provincia se requiere.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.state)){
        errors.state = "Tu Estado, Departamento o Provincia no puede tener números o caracteres especiales.";
    }
    if(!input.zipCode){
        errors.zipCode = "tu código postal es requerido.";
    }
    return errors;
};


export default function PostAddress() {
    const dispatch = useDispatch();
    const [ errors, setErrors ] = useState({});

    //Local State donde guardaré los eventos para poderlos enviar
    const [ input, setInput ] = useState({
        country: '',
        city: '',
        street: '',
        state: '',
        zipCode: '',
        user: ''
    });
        
    const userLoginCookies = (Cookies.get("user"));
    const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
    const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

    //Es el handler para los inputs de los atributos en la tabla 'Recipes'
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    };


    //Fn para enviar el formulario cuando damos click en el botón enviar
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postAddress(userId, userToken, input));
        setInput({
            country: '',
            city: '',
            street: '',
            state: '',
            zipCode: '',
            user: ''
        });
    };


    return (
        <div className="container-PostInfoPerfil">
        <form className="form-PostInfoPerfil" onSubmit={(e) => handleSubmit(e)}>
            <div className="containerInputsCreate">
                <div className="ancholeyecda">
                    <label >Country</label>
                    <input type="name" name='country' placeholder="Country" value={ input.country } onChange={(e) => handleChange(e)} />{/*value={ input.country } */}
                    {errors.country && <p className="danger">{ errors.country }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>City</label>
                    <input type="text" name='city' placeholder="City" value={ input.city } onChange={(e) => handleChange(e)} />
                    {errors.city && <p className="danger">{ errors.city }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>State</label>
                    <input type="text" name='state' placeholder="State" value={ input.state } onChange={(e) => handleChange(e)} />
                    {errors.state && <p className="danger">{ errors.state }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>Street</label>
                    <input type="text" name='street' placeholder="Street" value={ input.street } onChange={(e) => handleChange(e)} />
                    {errors.street && <p className="danger">{ errors.street }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>ZipCode</label>
                    <input type="text" name='zipCode' placeholder="ZipCode" value={ input.zipCode } onChange={(e) => handleChange(e)} />
                    {errors.zipCode && <p className="danger">{ errors.zipCode }</p>}
                </div>
                {
                    !errors.country && input.country.length > 0 &&
                    !errors.city && input.city.length > 0 &&
                    !errors.state && input.state.length > 0 &&
                    !errors.street && input.street.length > 0 &&
                    !errors.zipCode && input.zipCode.length > 0 ?
                    <button className="buttonPutAddress" type="submit">Guardar</button> : <button className="buttonPutAddressDesaprobated" type="submit" disabled>Guardar</button>
                }
            </div>
            <div className="button-ProductDetailsPostInfoPerfil">
                <Link to='/panelUser'> <button className="button-ProductDetails">Volver</button> </Link>
            </div>
        </form>
    </div>
    );
};