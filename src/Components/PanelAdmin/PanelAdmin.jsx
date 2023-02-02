import React from 'react';
import {CreateProducts} from './CreateProducts/CreateProducts';
import GoHome from './GoHome/GoHome';
import SeeAllOrders from './SeeAllOrders/SeeAllOrders';
import SeeAllProducts from './SeeAllProducts/SeeAllProducts';
import './PanelAdmin.css';


export default function PanelAdmin () {
 console.log("panelA");
    return (
        <div className='container-panelAdmin'>
            <div>
                <div className='panelAdmin-Bienbenido'>
                    <h1>Bienvenido</h1>
                    <p>Carlos Mario!</p>
                </div>
                <div >
                    <h1>Panel del Administrador</h1>
                </div>
            </div>
            <div>
                <CreateProducts />
                {/* <GoHome /> */}
                <SeeAllOrders />
                <SeeAllProducts />
            </div>
            <div>
                <h1>Panel del Admin</h1>
            </div>
        </div>
    )
};