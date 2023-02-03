import { Link } from "react-router-dom";
import Google from '../../assets/Google.webp';
import Facebook from '../../assets/Facebook.png';
import GitHub from '../../assets/GitHub.png';
import './Login.css';


const Login = () => {

  const google = () => {
    window.open(`http://pf-back-production-f70b.up.railway.app/auth/google`, "_self");
  };

  const github = () => {
    window.open(`https://pf-back-production-f70b.up.railway.app/auth/github`, "_self");
  };

  const facebook = () => {
    window.open(`https://pf-back-production-f70b.up.railway.app/auth/facebook`, "_self");
  };

  
  return (
    <div className="container-General__Login">
    <div className="login">
        <h1 className="loginTitle">Sign In</h1>
        <div className="wrapper">
            <div className="loginButtonsNetworks">
                <div className="loginButton-Google" onClick={google}>
                    <img src={Google} alt="Google" className="icon" />
                </div>
                <div className="loginButton-Facebook" onClick={facebook}>
                    <img src={Facebook} alt="Facebook" className="icon" />
                </div>
                <div className="loginButton-Github" onClick={github}>
                    <img src={GitHub} alt="Github" className="icon" />
                </div>
            </div>
            <div className="loginButtons-Email">
                <div className="container-Username-Login">
                    <p>Username</p>
                    <input className="login-Username" type="text" placeholder="Username" />
                </div>

                <div className="container-Password-Login">
                    <p>Password</p>
                    <input className="login-Password" type="text" placeholder="Password" />
                </div>
                <button className="login-Submit">Iniciar sesión</button>
                <p>Eres nuevo? <Link style={{textDecoration: 'none'}} to="/signup">Registrate</Link></p>
            </div>
        </div>
    </div>
</div>
  );
};


export default Login;