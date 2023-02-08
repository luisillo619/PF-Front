import React, { useEffect } from 'react';
import './PanelAdmin.css';
import { getAllUsers } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {SideBarAdmin} from "../PanelAdmin/SideBar/SidebarAdmin"



export default function PanelAdmin () {
    const userInfo = useSelector((state)=> state.getOneUser);
 console.log("panelA");

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllUsers())
    },[dispatch])

    const allUsers = useSelector( state => state.users ) 
    const adminUser = allUsers.find( us => us.admin )
    

    return (
        <div className='flex flex-col h-screen bg-white mt-4 rounded-lg justify-items-center shadow-xl'>
           
                <div className='flex flex-col h-screen mt-4 rounded-lg justify-start items-center '>
                    <h1>Bienvenido</h1>
                     <p>{adminUser?.userName}</p> 
                     {/* <p>{userInfo.admin}</p>  */}
                    <h1>Panel del Administrador</h1>
                    
               <div className='flex flex-col item-center'>
               <SideBarAdmin/>
                </div>
                </div>
    
        </div>
    )
};