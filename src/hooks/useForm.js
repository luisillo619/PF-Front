import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendProductsForm,
  putProductsForm,
  getOneProduct,
  reseteOneProduct,
} from "../redux/actions";
import { useParams } from "react-router";

function useMailer(initialForm, validateForm) {
  const oneProductId = useSelector((state) => state.oneProductId);
  initialForm.name =oneProductId && oneProductId.name
  initialForm.price = oneProductId && oneProductId.price
  initialForm.description = oneProductId && oneProductId.description
  initialForm.stock = oneProductId&& oneProductId.stock
  initialForm.category = oneProductId && oneProductId.category
 if (oneProductId.promotion && oneProductId.promotion.salesOff !== null && oneProductId.category.category) {
    initialForm.category = oneProductId.category.category
    initialForm.salesOff =  oneProductId.promotion.salesOff ? "True": "False"
  initialForm.isDeleted = oneProductId.isDeleted? "True": "False"
  }
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const cat = useSelector((state) => state.categories);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const idProduct = useParams().id;
  

  
  useEffect(() => {
    if (idProduct) {
      dispatch(getOneProduct(idProduct));
      return () => {
        dispatch(reseteOneProduct());
      };
    }
    
   
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    e.preventDefault();
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      let copyForm = { ...form };
      delete form.stock;
      delete form.salesOff;
      form.promotion = {
        stock: copyForm.stock,
        salesOff: copyForm.salesOff === "True" ? true : false,
      };

      if (idProduct) {
        form.isDeleted = form.isDeleted === "True" ? true : false;
        dispatch(putProductsForm(form, setResponse, setLoading, idProduct));
      } else dispatch(sendProductsForm(form, setResponse, setLoading));
    } else return;
  };

  return {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    cat,
    loading,
    response,
    setForm,
    errors,
  };
}

export default useMailer;
