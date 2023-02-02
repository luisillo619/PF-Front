import { Link } from "react-router-dom"

export const SideBarAdmin = ()=> {


    return (
        

              
    
        <div>

            <div className=" flex flex-col mt-4 ">
                <Link to="/admin/adminPostProducts">
                <button className=" bg-gray-200  border border-gray-500 mt-4 w-fit rounded-md my-4   p-1">Create Product</button> 
                
                </Link> 
                
                <Link to="/admin/adminGetProducts">
                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md  my-4 p-1">View all products</button>
                
                </Link>


                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md my-4  p-1">View all Users</button> 
                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md  my-4 p-1">View all Orders</button>
                <Link to="/home">
                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md  my-4 p-1">Go Home</button>
                
                </Link>
                     
            </div>
            </div>
           
    )
}