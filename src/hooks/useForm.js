import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendProductsForm, putProductsForm } from "../redux/actions";
import { useParams } from "react-router";

function useMailer(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const cat = useSelector((state) => state.categories);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const idProduct = useParams().id;
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
    console.log(form)
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      let copyForm = { ...form };
      delete form.stock;
      delete form.salesOff;
      form.promotion = {
        stock: parseInt(copyForm.stock),
        salesOff: copyForm.salesOff === "True" ? true : false,
      };
  
      if (idProduct) {
        form.isDeleted = form.isDeleted === "True"? true : false
        dispatch(putProductsForm(form,setResponse,setLoading,idProduct))
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
    errors
  };
}

export default useMailer;
