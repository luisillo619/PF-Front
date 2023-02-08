import {  useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { disableEnableProds, getProducts } from "../../../redux/actions";
import { SideBarAdmin } from "../SideBar/SidebarAdmin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const SeeAllProducts = ()=>{
   // asdasdadsasd 
    const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()

    const [ allProds, setAllProds ] = useState([])

    useEffect(() => {
      setAllProds([...products])
    },[products])

    
    
    const diable_Enable = id => {
      dispatch(disableEnableProds(id))
 
    }



    return (

        <div className="flex flex-row overflow-scroll justify-center "> 
          <div className="w-screen">
    
         <div className=" flex flex-row  bg-blue-400 bg-opacity-25">
            
          <div className="flex flex-row w-1/6 border-r justify-center  bg-white border-gray-500 ">
    
         <SideBarAdmin/> 
          </div>
         
         <div className="flex flex-col w-5/6 content-center items-center justify-start mt-4  ">
          <div className="flex flex-row w-5/6 h-5/6 justify-start bg-white border-solid border-gray-500 border ">
          <div className="flex flex-row  w-1/5 justify-center mr-4">
           <p className="mx-4">Edit</p>
           </div>
           <div className="flex flex-row  w-1/5 ml-4 -mr-2">
           <p className="mx-4">Name</p>
           </div>
           <div className="flex flex-row  w-1/4   ">
           <p className="">Price</p>
           </div>
           <div className="flex flex-row   ">
           <p className="mx-4">Id</p>
           </div>

          </div>
        {

        allProds.map(p => {

    
    return ( 
      
      <div className="flex flex-row w-5/6 h-5/6 justify-around bg-white border-solid border-gray-500 border"  key={p._id}>
 <div className="flex flex-row h-10 items-center justify-center ">
           <Link to={`/panelAdmin/adminPutProducts/${p._id}`}>

           <button className="mx-4 flex flex-row"><FontAwesomeIcon icon={faEdit} /></button>
           </Link> 
           <button className=" bg-gray-200  border border-gray-500  w-fit rounded-md  p-1 active:bg-slate-600" onClick={() => diable_Enable(p._id)} >Disable/Enable</button>
           </div>
        <div className="flex flex-row w-80"><p className="mx-4 "> {p.name}</p></div>
        <div className="flex flex-row "><p className="mx-4"> {p.price}</p></div>
        <div className="flex flex-row "> <p className="mx-4"> {p._id}</p></div>
        {
      p.isDeleted
        ? <div className="flex flex-row "> <button className="mx-4 bg-red-700 rounded-md h-8 p-1 self-center w-16">Disable</button></div>
        : <div className="flex flex-row "> <button className="self-center mx-4 bg-green-700 w-16  rounded-md h-8 p-1
        ">Active</button></div>
        }
   
      </div>
        
                    )})


        } 
    
         </div>
         </div>
          </div> 
          </div>
          
    )
    

       
}