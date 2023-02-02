import React from 'react';
import logo from '../../../assets/WhatsApp.png';
import './WhatsApp.css';


export default function WhatsApp () {


    return (
        <div className='whatsapp-Landgin'>
            <a href="https://web.whatsapp.com/send?phone=573128082002&text=Hola, bienvenido al Mate Express" target="_blank" rel="noreferrer noopener">
                <img src={ logo } alt="Logo WhatsApp" />
            </a>
        </div>
    )
};