import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';


const SeeAllOrders = () => {

    const users = useSelector( state => state.users )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])

    return (
        <div>
                {users?.map( usr => {
                    return (
                        <div>
                            <div>
                                {usr.name}
                            </div>
                            <div>
                                {usr.email}
                            </div>
                            <div>
                                {usr.orders} {/* aqui se mapean y muestra los id de las ordenes, donde podemos darle a la ruta q muestre el estado de la orde por id */}
                            </div>
                        </div>
                
                    )
                })}
        </div>
    )
}

export default SeeAllOrders