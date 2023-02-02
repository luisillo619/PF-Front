import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/7.png';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';


export default function Footer () {

    return (
        <div className='container-Footer'>
            <div className='contents-Footer'>
                <div className='container-logo__Footer'>
                    <img src={ logo } alt="logo" />
                </div>
                <div className='firs-Section__Footer'>
                    <p>MATE</p>
                    <p>VINOS Y BODEGAS</p>
                    <p>PARRILLA Y ASADOS</p>
                    <p>ACCESORIOS</p>
                </div>
                <div className='second-Section__Footer'>
                    <p>CINTURONES</p>
                    <p>CUADERNOS</p>
                    <p>GRABADOS</p>
                    <p>CARTAS</p>
                </div>
                <div className='third-Section__Footer'>
                    <div><a href="https://www.instagram.com/eltero.ar/" target="_blank" rel="noreferrer noopener"><FaInstagram className="instagramFooter" /></a></div>
                    <p>Tel: (011) 1569257880</p>
                    <p>elteroexpresss@gmail.com</p>
                    <p>Monroe 1770 Boulogne Buenos Aires</p>
                </div>
            </div> 

            <div className='additional__Footer'>
                <span>Powered by Proyect Final</span>
                <Link to='/legalNoticies' style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer noopener">
                    <span>Avisos legales</span>
                </Link>
                <Link to='/privacyStatement' style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer noopener">
                    <span>¿Cómo cuidamos tu privacidad?</span>
                </Link>
            </div>
        </div>
    )
};