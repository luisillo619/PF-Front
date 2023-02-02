import React from 'react';
import Visa from '../../../assets/Visa.png';
import MasterCard from '../../../assets/MasterCard.png';
import American_Express from '../../../assets/American_Express.png';
import DinersClub from '../../../assets/Diners-Club.png';
import './MeansOfPayment.css';


export default function MeansOfPayment () {

    return (
        <div className='container-MeansOfPayment'>
            <h1>MÉTODOS DE PAGO</h1>
            <div className='container-MeansOfPayment__Info'>
                <p>www.elteroexpess.com acepta las siguientes Formas de Pago electrónicas por medio de nuestro proveedor de servicios certificado para Latam.</p>
                <h2>TARJETAS DE CRÉDITO:</h2>
                <p>Visa.</p>
                <p>American Express.</p>
                <p>Diners.</p>
                <p>MasterCard.</p>
                <div className='images-MeansOfPayment'>
                    <img src={ Visa } alt="Visa" />
                    <img src={ MasterCard } alt="MasterCard" />
                    <img src={ American_Express } alt="American_Express" />
                    <img src={ DinersClub } alt="DinersClub" />
                </div>
                <p>Una vez que tu pedido ha sido confirmado, tu tarjeta de crédito o débito será cargada. No nos hacemos responsables de errores tipográficos de digitación en el sitio de nuestro proveedor del sistema de pagos electrónicos autorizado.</p>
                <h2>DÉBITOS A CUENTAS DE AHORRO Y CUENTAS CORRIENTES:</h2>
                <p>Puedes hacer transferencias bancarias desde los principales bancos de Latam, si lo deseas, las tarjetas débito cuentan con código CVV para pagos electrónicos.</p>
                <h2>CUPONES DE DESCUENTO:</h2>
                <p>El cupón debe hacerse efectivo cuando estés en el carrito de compras, debes seleccionar la opción "Agregar cupón de descuento". Ingresa el código del cupón de descuento en la casilla correspondiente y haz clic en agregar. Si tu cupón es aprobado por el sistema, de inmediato el valor de tu cuenta se reajustará para que puedas proceder a pagar el excedente por medio de nuestro aliado de pagos.</p>
                <h2>BONOS ELTEROEXPRESS:</h2>
                <p>Estos son bonos que fueron adquiridos a través de nuestro sitio con el propósito de ser usados exclusivamente en las tiendas ELTEROEXPRESS del país y no podrán ser redimidos en la tienda online.</p>
                <h2>PAGO EN BANCO:</h2>
                <p>Imprime tu recibo de consignación con código de barras y preséntalo en cualquier sucursal de los bancos registrados. El plazo para realizar el pago es de 24 horas, pasado este plazo tu pedido será cancelado automáticamente.</p>
            </div>
        </div>
    );
};