import React from "react";
import useForm from "../../../hooks/useForm"
import { SideBarAdmin } from "../SideBar/SidebarAdmin";
import Message from "../../Loader/Message";
import Loader from "../../Loader/Loader"
import CloudinayImages from "../../Cloudinay/CloudinayImages";


//import ButtonUploadImage from "./ButtonUploadImage";
// Componente que ayuda a rendirizar select-option, en los input de filtrado
function Select({ options, value, onChange, name }) {
   
    return (
        <select  className="" id={name} name={name} value={value} onChange={onChange}>
          <option value="Selected Option">Selected Option</option>
          {options.map((option) => (
        <option key={option._id} value={option.category}>
          {option.category}
        </option>
          ))}
        </select>
    );
}

// ESTOS DOS VAN EN EL PUT
// isDeleted: { type: Boolean, default: false },
// comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
// newPrice


  const initialForm = {
    name: "",
    price: "",
    description: "",
    image: "",
   category: "",
    news: "",
    salesOff: false,
    stock: "",
  };



const validationsForm = (form) => {
  const regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexNumber = /^(\d{1,3}(?:[.]\d{3})*(?:[,]\d+)?)/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const errors = {};
//   if (
//     !form.user_name 
//     !form.user_telephone 
//     !form.user_email ||
//     !form.user_message
//   ) {
//     errors.all = "Todos los campos son necesarios";
//   } else {
//     if (!regexString.test(form.user_name)) {
//       errors.user_name = "El nombre no puede contener numeros";
//     } else if (!regexNumber.test(form.user_telephone)) {
//       errors.user_telephone = "El telefono debe ser un numero";
//     } else if (!regexEmail.test(form.user_email)) {
//       errors.user_email = "Deber ser un email valido";
//     } else if (!regexString.test(form.user_message)) {
//       errors.user_message = "El mensaje no puede contener numeros";
//     }
//   }
  return errors;
};


export const CreateProducts = () => {
  const { form, handleBlur, handleChange, handleSubmit, cat, loading,
    response, setForm} = useForm(
    initialForm,
    validationsForm
  );
 
  return (
   <div className="flex flex-row w-6/6 h-screen">
     
     <div className="w-screen" >
      
    <div className="flex flex-row h-screen bg-blue-400 bg-opacity-25">

       <div className="flex flex-row w-1/6 border-r justify-center  bg-white border-gray-500 ">

     <SideBarAdmin/>
       </div>
    <div className="flex flex-col w-5/6 content-center items-center justify-start " >
    <form 
     className="flex flex-col w-5/6 h-screen justify-evenly content-start  items-center  border-solid border-gray-500 border mt-4  bg-white"  
     onSubmit={ handleSubmit }> 

      <div className="text-black flex flex-row  border-solid border-gray-500 border  w-2/5 rounded-lg " >

    <label htmlFor="name">Name:</label>
    <input 
       className="mx-2"
      name="name"
      id="name"
      placeholder="Name"
        onBlur={handleBlur}
        onChange={handleChange}
      value={ form.name }
      autoComplete="nope"
    />
      </div>

      <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg ">

       <label  htmlFor="price">Price:</label>
      <input
      className="mx-2"
        name="price"
        id="price"
        placeholder="Price"
        onBlur={handleBlur}
        onChange={handleChange}
        value={ form.price }
        autoComplete="nope"
        />
        </div>

        <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">

      <label htmlFor="description">Description:</label>
      <input
      className="mx-2"
        name="description"
        id="description"
        placeholder="Description"
        onBlur={handleBlur}
        onChange={handleChange}
        value={ form.description }
        autoComplete="nope"
        />
        </div>

        <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg justify-center items-center self-center">
        {/* Cloudinary */}
        <CloudinayImages  setForm={setForm} form={form}/>
        
       
      
        
        </div>
        <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">

<label htmlFor="stock">Stock:</label>
      <input
      className="mx-2"
        name="stock"
        id="stock"
        placeholder="Stock"
        onBlur={handleBlur}
        onChange={handleChange}
        value={ form.stock }
        autoComplete="nope"
        />
        </div>

        <div className="text-black flex flex-row">

      <label htmlFor="category">Categories:</label>
       <Select
        options={cat} Agregar los tipos de la DB
        value={ form.category }
        onChange={handleChange}
        name="category"
        /> 
        </div>

        <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">

      <label  htmlFor="news">News:</label>
      <select  className="mx-2" id="news" name="news" value={form.news} 
        onChange={handleChange}
        onBlur={handleBlur}
        >
        <option value="Selected Option">Selected Option:</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </select>
        </div>
 
        <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">


      <label htmlFor="salesOff">Sales Off:</label>
      <select  className="mx-2" id="salesOff" name="salesOff" value={form.salesOff}
        onChange={handleChange}
        onBlur={handleBlur}
        >
        <option value="Selected Option">Selected Option:</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </select>

        </div>
        

        <input className="border-solid border-gray-500 border w-1/6 rounded-lg hover:bg-amber-50 cursor-pointer"  type="submit" value="Create Product" />
       
    </form>
    {loading && <Loader/>} 
   {response && <Message msg="Producto creado correctamente" bgColor="#198754"/>} 
    </div>
    </div>
    </div>
    </div>
    
  );
};