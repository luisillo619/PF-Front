import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Error () {
  const navigate = useNavigate();

  useEffect(() => {
    showError();
  }, []);

  const showError = () => {
    Swal.fire({
      title: "ERROR 404. NOT FOUND",
      text: "La página a la que está intentando acceder no existe. Por favor, verifique la direccion a la que esta intentando acceder.",
      icon: "warning",
      confirmButtonText: "Back to Home",
    }).then((response) => {
      navigate("/");
    });
  };

  return <div></div>;
};
