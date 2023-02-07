// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getOrders } from "../../../redux/actions/index";
// import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
// import './Orders.css'


// export default function Orders () {
//     const dispatch = useDispatch();
//     const getOrders = useSelector((state) => state.getOrders);
//     console.log(getOrders)

//     const userLoginCookies = (Cookies.get("user"));
//     const userId = userLoginCookies && JSON.parse(userLoginCookies).id;
//     // const userToken = userLoginCookies && JSON.parse(userLoginCookies).token;

//     useEffect(()=>{
//         dispatch(getOrders(userId));
//     }, [dispatch]);


//     return (
//         <div className='container-AddressUser'>
//             <h1>Historial de ordenes</h1>
//             {getOrders &&
//                 getOrders ?.map((e) => {
//                     return (
//                         <div className='mapAddressUser' key={e._id}>
//                             <div className='🤓'>
//                                 <span className='mapAddressUserH1'>Country: </span> <span>{ e.country }</span><br></br>
//                                 <span className='mapAddressUserH1'>City: </span> <span>{ e.city }</span><br></br>
//                                 <span className='mapAddressUserH1'>State: </span> <span>{ e.state }</span><br></br>
//                                 <span className='mapAddressUserH1'>Street: </span> <span>{ e.street }</span><br></br>
//                                 <span className='mapAddressUserH1'>ZipCode: </span> <span>{ e.zipCode }</span><br></br>
//                             </div>
//                             <div className='🤣'>
//                                 <Link to={`/panelUser/putAddress/${userId}/${e._id}`}>
//                                     <button className='button-PutAddress'>Editar</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//             <div className='container-button-PutAddress'>
//                 <Link to={`/panelUser/postAddress/${userId}`}>
//                     <button className='buttonPutAddressPerfil'>Agrega una dirección</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }