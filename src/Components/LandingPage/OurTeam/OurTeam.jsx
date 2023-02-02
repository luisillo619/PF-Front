import React from 'react';
import CarlosReyes from '../../../assets/Programador-Carlos-Reyes.jpg';
import GeovannyCasadiegos from '../../../assets/Programador-Geovanny-Casadiegos.jpeg';
import AndrésPastor from '../../../assets/Programador-Andrés-Pastor.jpg';
import LuisCarlosRangel from '../../../assets/Programador-Luis-Rangel.jpg';
import LucasGonzalez from '../../../assets/Programador-Lucas-Gonzalez.jpeg';
import MartinCastro from '../../../assets/Programador-Martin-Castro.jpg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './OurTeam.css';


export default function OurTeam () {

    
    return (
        <div className="container-OurTeam">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={ GeovannyCasadiegos } alt="GeovannyCasadiegos" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Geovanny Casadiegos</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/Geovanny89" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>
            
                <div className="card">
                    <div className="imgBx">
                        <img src={ LuisCarlosRangel } alt="LuisCarlosRangel" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Luis Carlos Rangel</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/luisrangel-lagunes/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/luisillo619" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={ LucasGonzalez } alt="LucasGonzalez" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Lucas González</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/lucas-gonzalez-swd/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/LucasGonzalezSwd" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={ AndrésPastor } alt="AndrésPastor" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Andrés Pastor</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/andres-felipe-pastor-ferrer-8080b01ab/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/MrAleew" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={ MartinCastro } alt="MartinCastro" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Martín Castro</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/martin-daniel-castro/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/Drake4044" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="imgBx">
                        <img src={ CarlosReyes } alt="CarlosReyes" />
                    </div>
                    <div className="content">
                        <div className="contentBx">
                            <h3>Carlos Reyes</h3>
                        </div>
                        <ul className="sci">
                            <li ><a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className="FaLinkedinInOurteam" /></a></li>
                            <li ><a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><FaGithub className="FaGithubOurteam" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


