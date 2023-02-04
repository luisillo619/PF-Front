import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./ButtonUser.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../redux/actions/index";


const ButtonUser = ({ userOrderCookies, userLoginCookies }) => {
  // const baseURL = "https://pf-back-production-f70b.up.railway.app"
  const userInfo = useSelector((state)=> state.getOneUser)
  const idUser = userLoginCookies && JSON.parse(userLoginCookies).id;
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("order");
    window.open(`http://localhost:3001/auth/logout`, "_self");
  };

  useEffect(() => {
    dispatch(getOneUser(idUser,setLoading));
  }, [dispatch, userLoginCookies, idUser]);
  
  
  return (
    <div className="navbar">
      {userLoginCookies ? (
        
        <ul className="list">
          {!loading && userInfo.admin ?   
            <span className="logo">
                <Link className="link" to="/panelAdmin">
                  Panel Admin
                </Link> 
            </span>: 
            <span className="logo">
              <Link className="link" to="/panelUser">
                Panel User
              </Link> 
            </span>
          }

          <li className="listItem"></li>

          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          <FaUser />
        </Link>
      )}
    </div>
  );
};

export default ButtonUser;
