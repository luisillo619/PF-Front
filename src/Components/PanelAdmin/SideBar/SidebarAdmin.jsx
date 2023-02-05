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

                <Link to="/panelAdmin/getAllUsers">
                    <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md my-4  p-1">View all Users</button> 
                </Link>
                <Link to="/panelAdmin/getOrderDetails">
                
                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md  my-4 p-1">View all Orders</button>
                </Link>
                <Link to="/category">
                <button className=" bg-gray-200 border border-gray-500 mt-4 w-fit rounded-md  my-4 p-1">Go Home</button>
                
                </Link>
                     
            </div>
            </div>
           
    )
}