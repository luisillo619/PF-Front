import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";


function useLogin(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setForm({
      ...form,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
     setErrors(validateForm(form));
     console.log(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      dispatch(login(form, setLoading,setResponse))
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };


  return {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    loading,
    response,
    errors,
  };
}


export default useLogin;