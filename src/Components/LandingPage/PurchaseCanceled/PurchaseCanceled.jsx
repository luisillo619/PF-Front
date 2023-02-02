import React from 'react';
import './PurchaseCanceled.css';


export default function PurchaseCanceled () {

    return (
        <div className='container-PurchaseCanceled'>
            <h1>¿CÓMO CANCELO MI COMPRA?</h1>
            <div className='container-PurchaseCanceled__Info'>
                <h2>Compré sin cuenta de Mercado Libre…</h2>
                <p>Para cancelar tu compra tenés que escribirnos para que podamos ayudarte. Encontrá nuestros datos de contacto desde el e-mail que recibiste con la confirmación de compra.</p>

                <h2>Compré con mi cuenta de Mercado Libre…</h2>
                <p>Si ya no querés un producto que compraste, sea cual sea el motivo, podés arrepentirte y obtener el reembolso total de tu dinero desde Mis compras.</p>
                <p>Según el estado del envío, tenés que seguir alguno de estos pasos.</p>

                <h2>Si la compra todavía no se despachó, buscá el botón "Cancelar compra"</h2>
                <p>Vas a encontrar el botón en el estado de la compra que ya no querés recibir.</p>
                <p>Si no tenés disponible "Cancelar compra", elegí Necesito ayuda &gt; Tengo un problema con el producto &gt; Quiero cancelar la compra. En ese caso, te pediremos que escribas un mensaje para abrir un reclamo. Si el paquete no se despachó, cancelaremos tu compra.</p>

                <h2>Si la compra ya se despachó, podés rechazarla cuando te llegue o no retirarla del correo</h2>
                <p>Cuando el paquete llegue a tu domicilio, pedile a la persona del reparto que se lo lleve de vuelta. Si el envío es a una sucursal de correo, no vayas a buscar el paquete.</p>

                <h2>Si ya recibiste la compra, devolvela</h2>
                <p>En el estado de la compra, buscá el botón "Devolver o cambiar gratis". Si no lo tenés disponible, elegí la opción "Quiero devolver o cambiar el producto" en la Ayuda. Podés consultar las políticas de devolución para conocer los plazos de cobertura o el paso a paso sobre cómo devolver un producto.</p>

                <p>Para saber cuándo vas a recibir un reembolso después de cancelar una compra, consultá los tiempos de acreditación de cada medio de pago.</p>
            </div>
        </div>
    )
};