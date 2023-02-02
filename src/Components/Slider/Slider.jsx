import React from 'react';
import { Slideshow, Slide } from './Slideshow/Slideshow';
import './Slider.css';


export default function Slider () {

	return (
		<main>
            <Slideshow controles={ true } autoplay={ true } velocidad="6000" intervalo="5000">
                <Slide>
                    <a href="https://www.instagram.com/eltero.ar/" target="_blank" rel="noreferrer noopener">
                        <img src='https://http2.mlstatic.com/D_NQ_NP_626950-MLA52849623093_122022-OO.webp' alt=""/>
                    </a>
                </Slide>
                <Slide>
                    <a href="https://www.facebook.com/ElTero.ar/" target="_blank" rel="noreferrer noopener">
                        <img src='https://http2.mlstatic.com/D_NQ_NP_654180-MLA52747018902_122022-OO.webp' alt=""/>
                    </a>
                </Slide>
            </Slideshow>
		</main>
	);
};