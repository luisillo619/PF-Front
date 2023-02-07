import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCompleteInfo } from '../../../redux/actions/index';
import Cookies from 'js-cookie';
import './PostInfoPerfil.css';


function validate (input) {
    let errors = {};
    if(!input.name){
        errors.name = "Tu nombre es requerido.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
        errors.name = "Tu nombre no puede tener números o caracteres especiales.";
    }
    if(!input.lastName){
        errors.lastName = "Tu apellido es requerido.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.lastName)){
        errors.lastName = "Tu apellido no puede tener números o caracteres especiales.";
    }
    if(!input.docIdentity){
        errors.docIdentity = "Tu documento de identidad es requerido.";
    } else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.docIdentity)){
        errors.docIdentity = "Tu documento de identidad no puede tener letras o caracteres especiales.";
    }
    if(!input.phone){
        errors.phone = "Tu número telefónico es requerido.";
    } else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.phone)){
        errors.phone = "Tu número telefónico no puede tener letras o caracteres especiales.";
    }
    return errors;
};


export default function PostInfoPerfil() {
    const dispatch = useDispatch();
    const [ errors, setErrors ] = useState({});

    //Local State donde guardaré los eventos para poderlos enviar
    const [ input, setInput ] = useState({
        name: '',
        lastName: '',
        docIdentity: '',
        phone:''
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
        dispatch(postCompleteInfo(userId, userToken, input));
        setInput({
            name: '',
            lastName: '',
            docIdentity: '',
            phone:''
        });
    };


    return (
        <div className="container-PostInfoPerfil">
        <form className="form-PostInfoPerfil" onSubmit={(e) => handleSubmit(e)}>
            <div className="containerInputsCreate">
                <div className="ancholeyecda">
                    <label>Name</label>
                    <input type="text" name='name' placeholder="Name" value={ input.name } onChange={(e) => handleChange(e)} />{/*value={ input.country } */}
                    {errors.name && <p className="danger">{ errors.name }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>Lastname</label>
                    <input type="text" name='lastName' placeholder="LastName" value={ input.lastName } onChange={(e) => handleChange(e)} />
                    {errors.lastName && <p className="danger">{ errors.lastName }</p>}
                </div>
               
                <div className="ancholeyecda">
                    <label>Identification Document</label>
                    <input type="number" name='docIdentity' placeholder="Documento de identidad" value={ input.docIdentity } onChange={(e) => handleChange(e)} />
                    {errors.docIdentity && <p className="danger">{ errors.docIdentity }</p>}
                </div>
                <div className="ancholeyecda">
                    <label>Phone</label>
                    <input type="number" name='phone'  placeholder="Número de celular" value={ input.phone } onChange={(e) => handleChange(e)} />
                    {errors.phone && <p className="danger">{ errors.phone }</p>}
                </div>
                {
                    !errors.name && input.name.length > 0 &&
                    !errors.lastName && input.lastName.length > 0 &&
                    !errors.docIdentity && input.docIdentity.length > 0 &&
                    !errors.phone && input.phone.length > 0 ?
                    <button className="buttonPutAddress ProductDetailsSave" type="submit">Guardar</button> : <button className="buttonPutAddressDesaprobated" type="submit" disabled>Guardar</button>
                }
            </div>
            <div className="button-ProductDetailsPostInfoPerfil">
                <Link to='/panelUser'> <button className="button-ProductDetails">Volver</button> </Link>
            </div>
        </form>
    </div>
    );
};