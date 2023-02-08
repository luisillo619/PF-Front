import { Link } from "react-router-dom";
import Google from "../../assets/Google.webp";
import Facebook from "../../assets/Facebook.png";
import GitHub from "../../assets/GitHub.png";
import Loader from "../Loader/Loader";
import Message from "../Loader/Message";
import useLogin from "../../hooks/useLogin";
import "./Login.css";
const { REACT_APP_API_URL } = process.env;
const initialForm = {
  email: "",
  password: "",
};

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

const Login = () => {
  const {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
    errors,
  } = useLogin(initialForm, validate);

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
      <form onSubmit={handleSubmit}>
        <div className="container-General__Login">
          <div className="login">
            <h1 className="loginTitle">Ingresa</h1>

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
                <div className="container-Email-Login">
                  <p>Correo</p>
                  <input
                    className="login-Email"
                    type="text"
                    placeholder="Email"
                    value={form.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="danger">{errors.email}</p>}
                </div>

                <div className="container-Password-Login">
                  <p>Contraseña</p>
                  <input
                    className="login-Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <p className="danger">{errors.password}</p>
                  )}
                </div>
                <input
                  className="login-Submit"
                  type="submit"
                  value="Iniciar sesión"
                />

                <p>
                  Eres nuevo?{" "}
                  <Link style={{ textDecoration: "none" }} to="/signup">
                    Registrate
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="" bgColor="#198754" />
      )}
    </>
  );
};

export default Login;
