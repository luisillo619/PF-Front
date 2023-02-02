import React from 'react';
import './LegalNotices.css';


export default function LegalNotices () {

    return (
        <div className='container-LegalNotices'>
            <h1>AVISOS LEGALES</h1> 
            <div className='container-LegalNotices__Info'>
                <div>
                    <h2>Resolución 244/2020 de la Secretaría de Comercio Interior del Ministerio de Desarrollo Productivo</h2>
                    <p>Última modificación: 01/10/2020</p>
                    <p>Dispone que los plazos previstos en las garantías contractuales y legales en los términos de la Ley N° 24.240 se tienen por suspendidos por todo el periodo en que los consumidores se hayan visto imposibilitados de ejercer sus derechos en virtud del Aislamiento Social, Preventivo y Obligatorio dictado por el Decreto Nº 297 de fecha 19 de marzo de 2020 y sus modificatorios.</p>
                    <a className='vinculo-LegalNotices__Info' href="https://www.boletinoficial.gob.ar/detalleAviso/primera/234093/20200826" target="_blank" rel="noreferrer noopener">Accedé a la norma completa: Resolución 244/2020</a>
                </div>
            </div>
        </div>
    )
};