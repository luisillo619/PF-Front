import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import {CreateProducts} from './CreateProducts/CreateProducts';
import GoHome from './GoHome/GoHome';
import SeeAllOrders from './SeeAllOrders/SeeAllOrders';
import {SeeAllProducts} from './SeeAllProducts/SeeAllProducts';
import './PanelAdmin.css';
import { getAllUsers } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';




export default function PanelAdmin () {
    const userInfo = useSelector((state)=> state.getOneUser);
 console.log("panelA");

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllUsers())
    },[dispatch])

    const allUsers = useSelector( state => state.users ) 
    const adminUser = allUsers.find( us => us.admin )
    console.log(adminUser);

    return (
        <div className='container-panelAdmin'>
            <div>
                <div className='panelAdmin-Bienbenido'>
                    <h1>Bienvenido</h1>
                    <p>{adminUser?.userName}</p> {/* aqui nombre del Admin */}
                    <p>{userInfo.admin}</p>
                </div>
                <div >
                    <h1>Panel del Administrador</h1>
                </div>
            </div>
            <div>
                <CreateProducts />
                <GoHome />
                <SeeAllOrders />
                <SeeAllProducts />
            </div>
            <div>
                <h1>Panel del Admin</h1>
            </div>
        </div>
    )
};