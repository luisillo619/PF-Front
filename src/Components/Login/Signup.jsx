import Google from "../../assets/Google.webp";
import Facebook from "../../assets/Facebook.png";
import GitHub from "../../assets/GitHub.png";
import "./Signup.css";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
//AGREGAR PROCESS.ENV


// es como para registrarse por primera vez
const initialForm = {
  email: "",
  password: "",
  userName: "",
};
//Login
function validate(input) {
  let errors = {};
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!input.email || !input.password) {
    errors.all = "Todos los campos son requeridos";
  } else {
    if (!input.email) {
      errors.email = "El Email es requerido.";
    } else if (!regexEmail.test(input.email)) {
      errors.email = "Ingresa un email valido.";
    }
    if (!input.password) {
      errors.password = "La contraseña es requerida.";
    } else if (!regexPassword.test(input.password)) {
      errors.password =
        "Tu contraseña debe de tener entre 8 y 20 caracteres.";
    }
  }

  return errors;
}

function Signup() {


  const {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
    errors,
  } = useLogin(initialForm, validate);

  

  // const baseURL = "https://pf-back-production-f70b.up.railway.app";
  const google = () => {
    window.open(`http://localhost:3001/auth/google`, "_self");
  };

  const github = () => {
    window.open(`http://localhost:3001/auth/github`, "_self");
  };

  const facebook = () => {
    window.open(`http://localhost:3001/auth/facebook`, "_self");
  };

  return (
    <>
      <form>
        <div className="container-General__Login">
          <div className="register">
            <h1 className="loginTitle">Registrate</h1>
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
                {/* <div className="container-Username-Login">
                  <p>Username</p>
                  <input
                    className="login-Username"
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value={form.userName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                  />
                </div> */}
                <div className="container-Username-Login">
                  <p>Correo</p>
                  <input
                    className="login-Username"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                  />
                </div>
                <div className="container-Password-Login">
                  <p>Contraseña</p>
                  <input
                    className="login-Password"
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                  />
                </div>
                <button className="login-Submit">Registrate</button>

                <p>
                  Tienes cuenta?{" "}
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Ingresa
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}


export default Signup;