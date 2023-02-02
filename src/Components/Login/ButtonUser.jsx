import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import './ButtonUser.css';
import { FaUser } from 'react-icons/fa';


const ButtonUser = ({ userOrderCookies }) => {
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("order");
    window.open("http://localhost:3001/auth/logout", "_self");
  };
//pepee
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {userOrderCookies ? (
        <ul className="list">
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
