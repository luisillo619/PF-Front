import Google from "../../assets/Google.webp";
import Facebook from "../../assets/Facebook.png";
import GitHub from "../../assets/GitHub.png";
import "./Signup.css";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Message from "../Loader/Message";

const { REACT_APP_API_URL } = process.env;
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
  const regexUserName = /^[a-zA-Z0-9]{4,20}([._]?[a-zA-Z0-9]+)*$/;

  if (!input.email || !input.password || !input.userName) {
    errors.all = "Todos los campos son requeridos";
  } else {
    if (!input.email.trim()) {
      errors.email = "El Email es requerido.";
    } else if (!regexEmail.test(input.email)) {
      errors.email = "Ingresa un email valido.";
    }
    if (!input.password.trim()) {
      errors.password = "La contraseña es requerida.";
    } else if (!regexPassword.test(input.password)) {
      errors.password = "Tu contraseña debe de tener entre 8 y 20 caracteres.";
    }
    if (!input.userName.trim()) {
      errors.userName = "El User Name es requerido";
    } else if (!regexUserName.test(input.userName)) {
      errors.userName =
        "Debe comenzar con una secuencia de entre 4 y 20 caracteres alfanuméricos";
    }
  }

  return errors;
}

function Signup() {
  const register = "register";

  const {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
    errors,
    handleSubmitRegister,
    errorRegister,
  } = useLogin(initialForm, validate, register);

  // const baseURL = "https://pf-back-production-f70b.up.railway.app";
  const google = () => {
    window.open(`${REACT_APP_API_URL}/auth/google`, "_self");
  };

  const github = () => {
    window.open(`${REACT_APP_API_URL}/auth/github`, "_self");
  };

  const facebook = () => {
    window.open(`${REACT_APP_API_URL}/auth/facebook`, "_self");
  };

  return (
    <>
      <form onSubmit={handleSubmitRegister}>
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
                <div className="container-Username-Login">
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
                  {errors.userName && <p>{errors.userName}</p>}
                </div>

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
                  {errors.email && <p>{errors.email}</p>}
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
                  {errors.password && <p>{errors.password}</p>}
                </div>
                {errorRegister && <p>{errorRegister}</p>}
                {errors.all && <p>{errors.all}</p>}
                <button
                  className="login-Submit"
                  disabled={loading === true ? true : false}
                >
                  Registrate
                </button>

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

      {loading && <Loader />}
      {response && <Message msg="REGISTRO EXITOSO" bgColor="#198754" />}
    </>
  );
}

export default Signup;
