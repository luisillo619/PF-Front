import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getOneProduct } from "../../redux/actions";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import FedEx from "../../assets/FedEx.png";
import Visa from "../../assets/Visa.png";
import MasterCard from "../../assets/MasterCard.png";
import American_Express from "../../assets/American_Express.png";
import DinersClub from "../../assets/Diners-Club.png";
import BBVABancomer from "../../assets/BBVA_Bancomer.png";
import BancoNacion from "../../assets/Banco Nacion.png";
import GrupoAval from "../../assets/Grupo Aval.png";
import "./ProductDetail.css";
import { Reviews } from "./Reviews";

function ProductDetail() {
  const navigate = useNavigate();
  const idProduct = useParams().id;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.oneProductId);
  const priceProduct = productDetail.price;
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(true);
  const [count, setCount] = useState(1);
  const userLogin = Cookies.get("user");
  const userId = userLogin && JSON.parse(userLogin).id;
  const [mensaje, setMensaje] = useState(null);
  useEffect(() => {
    dispatch(getOneProduct(idProduct, setLoading));
    return () => {
      dispatch(getOneProduct(idProduct, setLoading));
    };
  }, [dispatch, idProduct]);

  const handleClick = () => {
    if (userLogin) {
      if (productDetail.stock) {
        // setCount(1);
        setLoadingButton(false);
        const total = priceProduct * count;

        dispatch(
          addToCart(
            idProduct,
            userId,
            total,
            count,

            priceProduct,
            productDetail.image,
            setLoadingButton,
            setMensaje
          )
        );
      } else alert("no hay che");
    } else navigate("/login");
  };

  const subtractionHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlerSums = () => {
    if (count < 10) setCount(count + 1);
  };
  console.log(loadingButton);
  //Función para reducir la cantidad de decimales a 3 del resultado de dividir el price por el número de cuotas
  function trunc(x, posiciones = 0) {
    var s = x.toString();
    var decimalLength = s.indexOf(".") + 1;
    var numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  }

  return (
    <div className="container-ProductDetail">
      {!loading && (
        <div>
          <div className="container-ProductDetails">
            <img src={productDetail.image} alt={productDetail.name} />
            <div className="container-Details">
              <div className="specification-Details">
                <h1>{productDetail.name}</h1>
                <p>{productDetail.description}</p>
                <div className="price-Paragraph__Details">
                  <h1>{productDetail.price} USD</h1>
                  <div className="paragraph-Details">
                    <p>
                      12 cuotas de USD {trunc(productDetail.price / 12, 3)}{" "}
                    </p>
                    <p>
                      36 cuotas de USD {trunc(productDetail.price / 36, 3)}{" "}
                    </p>
                  </div>
                </div>
                <h2>Stock disponible</h2>
                <div>
                  <div className="freeShipping-Details">
                    <BsTruck className="BsTruck-Details" />
                    <span>Envío gratis a nivel nacional por medio de</span>
                  </div>
                  <div className="container-FedEx">
                    <img className="FedEx" src={FedEx} alt="FedEx" />
                    <p>
                      Consulta los tiempos de entrega{" "}
                      <a
                        href="https://www.fedex.com/es-co/home.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        aquí.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {loading}{" "}
            <div className="container-CartButton">
              {count}
              <br />
              {count < 10 && (
                <button className="button-MdAdd" onClick={handlerSums}>
                  <MdAdd />
                </button>
              )}
              <button
                disabled={loadingButton === false ? true : false}
                onClick={handleClick}
              >
                AÑADIR AL CARRITO
              </button>
              {count > 1 && (
                <button
                  className="button-AiOutlineMinus"
                  onClick={subtractionHandler}
                >
                  <AiOutlineMinus />
                </button>
              )}

              {count > 1 && (
                <button onClick={subtractionHandler} value="-"></button>
              )}
            </div>
            {mensaje}
          </div>

          <div className="protectedPurchase">
            <span className="span-ProtectedPurchase">
              <Link
                to="/protectedPurchase"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer noopener"
              >
                Compra Protegida
              </Link>
            </span>
            <span>
              , recibe el producto que esperabas o te devolvemos tu dinero.
            </span>
          </div>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <button className="button-ProductDetails">VOLVER</button>
          </Link>

          <div className="mt-10 flex flex-col justify-center items-center">
            <Reviews />
          </div>

          <div className="meansOfPayment">
            <div className="meansOfPaymentUno">
              <p>Medios de Pago</p>
              <Link
                to="/meansOfPayment"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="buttonMeansOfPaymentUno">
                  Consulta los medio de pago aquí
                </button>
              </Link>
            </div>

            <div className="cardPayment">
              <div className="cardPaymentdAll">
                <p>Tarjeta de crédito</p>
                <div className="images-MeansOfPayment">
                  <img src={Visa} alt="Visa" />
                  <img src={MasterCard} alt="MasterCard" />
                  <img src={American_Express} alt="American_Express" />
                  <img src={DinersClub} alt="DinersClub" />
                </div>
              </div>
            </div>
            <div className="cashPayment">
              <p>Efectivo</p>
              <div className="images-MeansOfPayment">
                <img src={BBVABancomer} alt="BBVABancomer" />
                <img src={BancoNacion} alt="BancoNacion" />
                <img src={GrupoAval} alt="GrupoAval" />
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default ProductDetail;
