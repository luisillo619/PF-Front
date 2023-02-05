import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';

const SeeAllUsers = () => {

    const allUsers = useSelector( state => state.users ) // Se deberia mapear
    const onlyUsers = allUsers.filter( us => !us.admin ) // provisorio

    // no todos los users tienen las mismas propiedades, sin el filtro no anda.
    // nota: todos los users en db tener la misma estructura incluido el admin

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllUsers())
    },[dispatch])

    // console.log(onlyUsers)
    
    return (
        <div>
            {onlyUsers?.map( user => {
                return (
                    <div className='flex m-5'>
                        <div>
                            <p className="mx-4"> Name : {user.name} </p>
                        </div>
                        <div>
                            <p className="mx-4"> Email: {user.email} </p>
                        </div>
                        <div>
                            <p className="mx-4"> Admin: {user.admin ? "True" : "False"} </p>
                        </div> 
                        <div>
                            <p className="mx-4"> Bloqued: {user.isBlocked ? "True" : "False"} </p>
                        </div>
                        <div>
                            <p className="mx-4"> Login: {user.loginBy} </p>
                        </div>
                    </div>)
                    })}
        </div>)
}


export default SeeAllUsers