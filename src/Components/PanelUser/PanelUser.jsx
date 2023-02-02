import React from 'react';
import Address from './Address/Address'
import Orders from './Orders/Orders'
import Perfil from './Perfil/Perfil'


export default function PanelUser () {
    return (
        <div>
            <div>
                <Address />
                <Orders />
                <Perfil />
            </div>
            <div>
                <h1>Panel del User</h1>
            </div>
        </div>
    )
}