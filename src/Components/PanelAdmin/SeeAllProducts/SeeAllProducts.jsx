import {  useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { disableEnableProds, getProducts } from "../../../redux/actions";
import { SideBarAdmin } from "../SideBar/SidebarAdmin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const SeeAllProducts = ()=>{
    
    const products = useSelector((state)=> state.products)
    const dispatch = useDispatch()

    const [ allProds, setAllProds ] = useState([])

    useEffect(() => {
        setAllProds([...products])
    },[products])

    
    const diable_Enable = async id => {
        await disableEnableProds(id)
        dispatch(getProducts())
    }



    return (

        <div className="flex flex-row w-6/6 h-screen overflow-scroll"> 
          <div className="w-screen">
            <div className="w-6/6 flex-col h-16 bg-[#2C3E50] ">
                </div> 
    
         <div className=" flex flex-row  bg-amber-200 bg-opacity-40">
            
          <div className="flex flex-row w-1/6 border-r justify-center h-screen bg-white border-gray-500 ">
    
         <SideBarAdmin/> 
          </div>
         
         <div className="flex flex-col w-5/6 content-center items-center justify-start mt-4  ">
          <div className="flex flex-row w-5/6 h-5/6 justify-start bg-white border-solid border-gray-500 border ">
          <div className="flex flex-row  w-2/6 justify-center">
           <p className="mx-4">Edit</p>
           </div>
           <div className="flex flex-row ml-2 w-1/5">
           <p className="mx-4">Name</p>
           </div>
           <div className="flex flex-row  w-1/4   ">
           <p className="mx-4 ">Price</p>
           </div>
           <div className="flex flex-row   ">
           <p className="mx-4">Id</p>
           </div>

          </div>
        {

        allProds.map(p => {
    return ( 
      
      <div className="flex flex-row w-5/6 h-5/6 justify-around bg-white border-solid border-gray-500 border"  key={p._id}>
 <div className="flex flex-row h-10 w-2/6 items-center justify-center">
           <Link to={`/panelAdmin/adminPutProducts/${p._id}`}>

           <button className="mx-4 flex flex-row "><FontAwesomeIcon icon={faEdit} /></button>
           </Link> 
           <button className=" bg-gray-200  border border-gray-500  w-fit rounded-md  p-1 active:bg-sky-700" onClick={() => diable_Enable(p._id)} >Disable/Enable</button>
           </div>
        <div className="flex flex-row w-2/6"><p className="mx-4"> {p.name}</p></div>
        <div className="flex flex-row "><p className="mx-4"> {p.price}</p></div>
        <div className="flex flex-row "> <p className="mx-4"> {p._id}</p></div>
        {
        p.isDeleted
        ? <div className="flex flex-row "> <p className="mx-4">Disable</p></div>
        : <div className="flex flex-row "> <p className="mx-4">Active</p></div>
        }
        
    </div>)})

        } 
    
        </div>
        </div>
        </div> 
        </div>
    )
}