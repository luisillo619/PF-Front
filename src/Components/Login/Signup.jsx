import { Link } from "react-router-dom";
import Google from '../../assets/Google.webp';
import Facebook from '../../assets/Facebook.png';
import GitHub from '../../assets/GitHub.png';
import './Signup.css'
//AGREGAR PROCESS.ENV


// es como para registrarse por primera vez
function Signup() {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
  };


  return (
        <div className="container-General__Login">
            <div className="register">
                <h1 className="loginTitle">Sign Up</h1>
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
                        <div className="container-Username-Login">
                            <p>Email</p>
                            <input className="login-Username" type="text" placeholder="Email" />
                        </div>
                        <div className="container-Password-Login">
                            <p>Password</p>
                            <input className="login-Password" type="text" placeholder="Password" />
                        </div>                
                        <button className="login-Submit">Registrate</button>
                    </div>
                </div>
            </div>
        </div>
  );
}


export default Signup;