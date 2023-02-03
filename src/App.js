import { Route, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import PanelAdmin from "./Components/PanelAdmin/PanelAdmin";
import PanelUser from "./Components/PanelUser/PanelUser";
import LegalNoticies from "./Components/Footer/LegalNotices/LegalNotices";
import PrivacyStatement from "./Components/Footer/PrivacyStatement/PrivacyStatement";
import LandingPage from "./Components/LandingPage/LandingPage";
import ConsumerDefense from "./Components/LandingPage/ConsumerDefense/ConsumerDefense";
import PurchaseCanceled from "./Components/LandingPage/PurchaseCanceled/PurchaseCanceled";
import MeansOfPayment from "./Components/LandingPage/MeansOfPayment/MeansOfPayment";
import ReturnsExchanges from "./Components/LandingPage/ReturnsExchanges/ReturnsExchanges";
import NavBar from "./Components/NavBar/NavBar";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Error/Error";

// import ButtonUser from "./Components/Login/ButtonUser";

import Signup from "./Components/Login/Signup";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCategories,
  getProducts,
  getUser,
} from "./redux/actions";
import { Navigate } from "react-router-dom";
// filtrar por promociones(ofertas), agregan un boton en el navBar para mostrar las promociones

function App() {
  const dispatch = useDispatch();
  const userLoginCookies = Cookies.get("user");
  const userOrderCookies = Cookies.get("order");
  const [user, setUser] = useState(null);
  const [order, setOrder] = useState(null);
  
  // PASO 5, UNA VEZ QUE LA AUTH DE GOOGLE SEA EXITOSA, ME TRAE LOS DATOS DEL USUSARIO
  useEffect( () => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getUser(setUser,setOrder));
  }, [dispatch]);

  console.log(userOrderCookies)

  return (
    <div className="App">
      <NavBar userOrderCookies={userOrderCookies} />
      {/* <ButtonUser userLoginCookies={userLoginCookies}  /> */}
      <Routes>
        {/* <Route
          path="/login"
          element={userLoginCookies  ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={userLoginCookies  ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/panelAdmin" element={<PanelAdmin />} />
        <Route path="/panelUser" element={<PanelUser />} />
        <Route path="/legalNoticies" element={<LegalNoticies />} />
        <Route path="/privacyStatement" element={<PrivacyStatement />} />
        <Route path="/consumerDefense" element={<ConsumerDefense />} />
        <Route path="/purchaseCanceled" element={<PurchaseCanceled />} />
        <Route path="/meansOfPayment" element={<MeansOfPayment />} />
        <Route path="/returnsExchanges" element={<ReturnsExchanges />} />
        <Route
          path="/cart"
          element={
            userLoginCookies ? <Cart /> : <Navigate to={`/login`} replace />
          }
        />
        <Route
          path="/product/:name/:description/:id"
          element={<ProductDetail />}
        />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
