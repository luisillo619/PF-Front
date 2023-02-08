import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import SliderCategories from "../SliderCategories/SliderCategories";
import ContactUs from "../LandingPage/ContactUs/ContactUs";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineCodeSandbox, AiFillYoutube } from "react-icons/ai";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import BackTotopButton from "../scroll/BackTotopButton";
import WhatsApp from "./WhatsApp/WhatsApp";
import OurTeam from "./OurTeam/OurTeam";
import ReactPlayer from "react-player";
import "./LandingPage.css";
import { useSelector } from "react-redux";

export default function LandingPage() {
  const products = useSelector((state) => state.products);
  // posible math.random para que los productos populares se vayan rotando
  const popularProducts = products
    .filter((e) => e.promotion.salesOff === true && e.isDeleted === false)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  return (
    <div className="container-Home">
      <Slider />
      <SliderCategories />
      <WhatsApp />

      <Link
        className="container-ButtonAllProducts__Landing"
        to="/category"
        style={{ textDecoration: "none" }}
      >
        ALL PRODUCTS
      </Link>

      <div className="container-PopularProducts__Landing">
        <h1>POPULAR PRODUCTS</h1>
        <div className="popular-Products">
          {popularProducts.length !== 0 &&
            popularProducts.map((e) => {
              return (
                <div className="see-PopularProducts__Landing">
                  {<img key={e.name} src={e.image} alt="" />}
                </div>
              );
            })}
          {/* <div className='see-PopularProducts__Landing'></div>
                    <div className='see-PopularProducts__Landing'></div>
                    <div className='see-PopularProducts__Landing'></div>
                    <div className='see-PopularProducts__Landing'></div>
                    <div className='see-PopularProducts__Landing'></div>
                    <div className='see-PopularProducts__Landing'></div> */}
        </div>
      </div>

      <div className="container-AboutUs__Landing">
        <h1>ABOUT US</h1>
        <div className="paragraph-AboutUs">
          <h2>¿Quieres beber Mate como los dioses?.</h2>
          <p>
            En el TeroExpress distribuimos una amplia gama de artículos de lujo
            para beber Mate, nuestros productos son hechos artesanalmente por
            manos laboriosas generadoras de emociones únicas como tu. Contamos
            con 10 tiendas en América Latina y nuestra proyección es llegar a
            toda Latam. Danos el placer de atenderte.
          </p>
        </div>
      </div>

      {/* <div className='container-Video__Landing' style={{width: '73%', height: '100%', position: 'absolute'  }}> */}
      <div className="container-Video__Landing">
        <ReactPlayer
          // url={ require('../videos/video.mp4')}                />
          url="https://www.youtube.com/watch?v=1IF684VDTDM"
          width="90%"
          height="100%"
          controls={true}
          // volume= '0.3'
          // playing
          // loop
          // playbackRate={1.75}
          // muted
          // onPlay={() => alert('Se precionó el botón play')}
          // onPause={() => alert('Se precionó el botón play')}
          // onEnded={() => alert('Terminó el video')} --> funciona sin el loop
        />
      </div>

      <div className="container-SocialNetwork__Landing">
        <a
          href="https://www.instagram.com/eltero.ar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram className="socialNetworkLandgin" />
          <h2>@eltero_int</h2>
        </a>
        <a
          href="https://www.youtube.com/@eltero309/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillYoutube className="socialNetworkLandgin" />
          <h2>@eltero309</h2>
        </a>
        <a
          href="https://www.facebook.com/ElTero.ar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebookF className="socialNetworkLandgin" />
          <h2>El Tero</h2>
        </a>
      </div>

      <div className="image-Costumbres">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_764029-MLA50247059281_062022-OO.webp"
          alt="Imagen"
        />
      </div>

      <div className="container-Info__Landing">
        <div className="info__Landing">
          <p>¿Te arrepentiste de comprar?</p>
          <Link
            to="/purchaseCanceled"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>¿Cómo cancelar una compra?</span>
          </Link>
        </div>
        <div className="info__Landing">
          <p>¿Conocés las normas que protegen tus compras?</p>
          <Link
            to="/consumerDefense"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              Contratos de adhesión - Ley Nº 24.240 de Defensa del Consumidor
            </span>
          </Link>
        </div>
      </div>

      <div className="container-Additional__InfoLanding">
        <div className="box-Additional__InfoLanding">
          <Link
            className="additional-Info__Landing"
            to="/meansOfPayment"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsCreditCard className="icon-Additional" />
            <p>MÚLTIPLES</p>
            <span>MEDIOS DE PAGOS</span>
          </Link>
        </div>
        <div className="box-Additional__InfoLanding">
          <a
            className="additional-Info__Landing"
            href="https://www.fedex.com/es-co/tracking.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineCodeSandbox className="icon-Additional" />
            <p>SEGUIMIENTO</p>
            <span>DE MIS PEDIDOS</span>
          </a>
        </div>
        <div className="box-Additional__InfoLanding">
          <Link
            className="additional-Info__Landing"
            to="/returnsExchanges"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <MdOutlinePublishedWithChanges className="icon-Additional" />
            <p>CAMBIOS Y</p>
            <span>DEVOLUCIONES</span>
          </Link>
        </div>
      </div>

      <ContactUs />
      <BackTotopButton />
      <div className="container-Ourteam">
        <h1>Nuestro equipo de programadores</h1>
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
}
