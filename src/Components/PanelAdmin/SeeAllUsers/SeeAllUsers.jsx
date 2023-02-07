import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';
import { SideBarAdmin } from '../SideBar/SidebarAdmin';
import { putAdminUser } from '../../../redux/actions';
// seee alll
const SeeAllUsers = () => {

    const allUsers = useSelector( state => state.users ) 
    
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllUsers())
    },[dispatch])

    const admimUser = async (id) => {
        await (putAdminUser(id))
        dispatch(getAllUsers())
    }
    
    return (
             <div className="flex flex-row w-6/6 h-screen "> 
          <div className="w-screen">
    
         <div className=" flex flex-row h-screen  bg-blue-400 bg-opacity-25">
            
          <div className="flex flex-row w-1/6  justify-center border-r bg-white border-gray-500 ">
    
         <SideBarAdmin/> 
          </div>
          <div className="flex flex-col w-5/6  content-center items-center justify-start  ">
           <div className="flex flex-col w-5/6 h-5/6 content-start  items-start  border-solid border-gray-500 border mt-4  bg-white"   >
          
          <div className='flex flex-row w-full self-center border-solid border-gray-500 border'>
          <div className="flex flex-row w-2/12 items-center self-center">
           <p className="mx-4">Name</p>
           </div>
           <div className="flex flex-row w-4/12 self-center justify-center mr-8">
           <p className="mx-4">Email</p>
           </div>
           <div className="flex flex-row w-4/12 self-center -mr-12">
           <p className="">Type</p>
           </div>
           <div className="flex flex-row w-2/12 self-center -mr-6">
           <p className="mx-4">Bloqued</p>
           </div>
           <div className="flex flex-row ml-4 self-center">
           <p className="mx-4">Login</p>
           </div>
           </div> 
        
              
            {allUsers?.map( user => {
                return (
                    <div className="flex flex-row w-full justify-start bg-white border-solid border-gray-500 border self-center">
                        
                             
                        <div className="flex flex-row w-2/12  h-10 overflow-hidden self-center">
                            <p className=" self-center mx-4">  {user.name ? user.name : "Not have Username"} </p>
                        </div>
                        <div className="flex flex-row w-4/12  overflow-hidden self-center">
                            <p className="mx-4">  {user.email ? user.email : "Not have email"} </p>
                        </div>
                        <div className="flex flex-row w-4/12 ml-4 justify-around self-center">
                            <p  className="flex mx-4 justify-around">  {user.admin ? <p className='bg-black h-fit flex w-fit justify-center items-center text-yellow-400 p-1 rounded'>Admin</p> : <p className='bg-[#022957] h-fit flex w-fit justify-center items-center text-white p-1 rounded'>User</p>} </p>
                            <button className="flex bg-gray-200  border border-gray-500  w-fit h-fit rounded-md justify-around   p-1 active:bg-slate-600" onClick={() => admimUser(user._id)} >Admin/User</button> {/* aqui el boton */}
                        </div> 
                        <div className="flex flex-row w-1/12 self-center">
                            <p className="mx-4">  {user.isBlocked ? "True" : "False"} </p>
                        </div>
                        <div className="flex flex-row  w-2/12 self-center">
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