import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';
import { SideBarAdmin } from '../SideBar/SidebarAdmin';


const SeeAllUsers = () => {

    const allUsers = useSelector( state => state.users ) 
    
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllUsers())
    },[dispatch])

    const admimUser = async (id) => {
        await putAdminUser(id)
        dispatch(getAllUsers())
    }
    
    return (
             <div className="flex flex-row w-6/6 h-screen "> 
          <div className="w-screen">
    
         <div className=" flex flex-row h-screen  bg-blue-400 bg-opacity-25">
            
          <div className="flex flex-row w-1/6  justify-center  bg-white border-gray-500 ">
    
         <SideBarAdmin/> 
          </div>
          <div className="flex flex-col w-5/6  content-center items-center justify-start  ">
           <div className="flex flex-col w-5/6 h-5/6 content-start  items-start  border-solid border-gray-500 border mt-4  bg-white"   >
          
          <div className='flex flex-row w-full border-solid border-gray-500 border'>
          <div className="flex flex-row w-3/12 ">
           <p className="mx-4">Name</p>
           </div>
           <div className="flex flex-row w-6/12 justify-center mr-8">
           <p className="mx-4">Email</p>
           </div>
           <div className="flex flex-row w-2/12 ">
           <p className="">Type</p>
           </div>
           <div className="flex flex-row w-2/12 -ml-4">
           <p className="mx-4">Bloqued</p>
           </div>
           <div className="flex flex-row ml-4 ">
           <p className="mx-4">Login</p>
           </div>
           </div> 
        
              
            {allUsers?.map( user => {
                return (
                    <div className="flex flex-row w-full justify-start bg-white border-solid border-gray-500 border">
                        
                             
                        <div className="flex flex-row w-3/12  h-10 overflow-hidden">
                            <p className=" mx-4">  {user.name ? user.name : "Not have Username"} </p>
                        </div>
                        <div className="flex flex-row w-6/12  overflow-hidden">
                            <p className="mx-4">  {user.email ? user.email : "Not have email"} </p>
                        </div>
                        <div className="flex flex-row w-2/12 ml-4 ">
                            <p className="mx-4">  {user.admin ? "Admin" : "User"} </p>
                            <button onClick={() => admimUser(user._id)} >Admin/User</button> {/* aqui el boton */}
                        </div> 
                        <div className="flex flex-row w-2/12">
                            <p className="mx-4">  {user.isBlocked ? "True" : "False"} </p>
                        </div>
                        <div className="flex flex-row  w-2/12">
                            <p className="ml-8 text-center">  {user.loginBy ? user.loginBy : "Email"} </p>
                        </div>
                        
                        
                    </div>
                    )
                    })}
        </div>
        </div>
        </div>
        </div>
        </div>
        )
}


export default SeeAllUsers