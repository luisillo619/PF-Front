import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./ButtonUser.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../redux/actions/index";
// import { FaHouseUser } from 'react-icons/fa';
const { REACT_APP_API_URL } = process.env;

const ButtonUser = ({ userOrderCookies, userLoginCookies }) => {
 
  const userInfo = useSelector((state)=> state.getOneUser);
  const idUser = userLoginCookies && JSON.parse(userLoginCookies).id;
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("order");
    window.open(`${REACT_APP_API_URL}/auth/logout`, "_self");
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
                  {/* <FaHouseUser className="panelAdminFaHouseUser" /> */}
                  PANEL
                </Link> 
            </span>: 
            <span className="logo">
              <Link className="link" to="/panelUser">
                {/* <FaHouseUser className="panelAdminFaHouseUser" /> */}
                TU CUENTA
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
