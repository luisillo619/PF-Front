import React from "react";
import useForm from "../../../hooks/useForm";
import { SideBarAdmin } from "../SideBar/SidebarAdmin";
import Message from "../../Loader/Message";
import Loader from "../../Loader/Loader";
import CloudinayImages from "../../Cloudinay/CloudinayImages";

//import ButtonUploadImage from "./ButtonUploadImage";
// Componente que ayuda a rendirizar select-option, en los input de filtrado
function Select({ options, value, onChange, name }) {
  return (
    <select
      className=""
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
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
  // news: "",
  salesOff: false,
  stock: "",
};

const validationsForm = (form) => {
  const regexString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s.,:;"'`´]+$/;
  const regexNumber = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  console.log(form);
  const errors = {};
  if (
    !form.name ||
    !form.price ||
    !form.description ||
    // !form.news ||
    !form.stock ||
    !form.salesOff ||
    !form.image ||
    !form.category
    // !form.user_email ||
    // !form.user_message
  ) {
    errors.all = "Todos los campos son necesarios";
  } else {
    if (!form.name) {
      errors.name = "EL nombre es requerido.";
    } else if (!regexString.test(form.name)) {
      errors.name = "El nombre no puede contener numeros";
    }

    if (!form.price) {
      errors.price = "EL precio es requerido.";
    } else if (!regexNumber.test(form.price)) {
      errors.price = "El precio debe ser en numero";
    }

    if (!form.description) {
      errors.description = "La descripcion es requerida.";
    } else if (!regexString.test(form.description)) {
      errors.description = "La descripcion no puede tener numeros";
    } else if (form.description.length > 200) {
      errors.description =
        "La descripción no puede tener más de 200 caracteres";
    }

    // if (form.news === "Selected Option") {
    //   errors.news = "debes seleccionar una opcion";
    // }
    if (!form.stock) {
      errors.stock = "Debes agregar un stock";
    } else if (!regexNumber.test(form.stock)) {
      errors.stock = "El stock solo puede ser numerico";
    }

    if (!form.category) {
      errors.category = "La categoria es requerida.";
    } else if (form.category === "Selected Option") {
      errors.category = "debes seleccionar una opcion";
    }

    if (!form.salesOff) {
      errors.salesOff = "El salesOff es requerido.";
    } else if (form.salesOff === "Selected Option") {
      errors.salesOff = "debes seleccionar una opcion";
    }

    // if (!form.news) {
    //   errors.news = "Las news son requeridas.";
    // } else if (form.news === "Selected Option") {
    //   errors.news = "debes seleccionar una opcion";
    // }
    if(!form.image){
      errors.image = "La imagen es requerida"
    }
    
  }
  return errors;
};

export const CreateProducts = () => {
  const {
    form,
    handleBlur,
    handleChange,
    handleSubmit,
    cat,
    loading,
    response,
    setForm,
    errors,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="flex flex-row w-6/6 h-screen">
      <div className="w-screen">
        <div className="flex flex-row h-screen bg-blue-400 bg-opacity-25">
          <div className="flex flex-row w-1/6 border-r justify-center  bg-white border-gray-500 ">
            <SideBarAdmin />
          </div>
          <div className="flex flex-col w-5/6 content-center items-center justify-start ">
            <form
              className="flex flex-col w-5/6 h-screen justify-evenly content-start  items-center  border-solid border-gray-500 border mt-4  bg-white"
              onSubmit={handleSubmit}
            >
              <div className="text-black flex flex-row  border-solid border-gray-500 border  w-2/5 rounded-lg ">
                <label htmlFor="name">Name:</label>
                <input
                  className="mx-2"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.name}
                  autoComplete="nope"
                />
                {/* {errors.name && <p>{errors.name}</p>} */}
                {errors.name && <p className="danger">{errors.name}</p>}
              </div>

              <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg ">
                <label htmlFor="price">Price:</label>
                <input
                  className="mx-2"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.price}
                  autoComplete="nope"
                />
                {errors.price && <p className="danger">{errors.price}</p>}
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
                  value={form.description}
                  autoComplete="nope"
                />
                {errors.description && (
                  <p className="danger">{errors.description}</p>
                )}
              </div>

              <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg justify-center items-center self-center">
                {/* Cloudinary */}
                <CloudinayImages setForm={setForm} form={form} />
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
                  value={form.stock}
                  autoComplete="nope"
                />
                {errors.stock && <p className="danger">{errors.stock}</p>}
              </div>

              <div className="text-black flex flex-row">
                <label htmlFor="category">Categories:</label>
                <Select
                  options={cat}
                  value={form.category}
                  onChange={handleChange}
                  name="category"
                />
              </div>
              {errors.category && <p className="danger">{errors.category}</p>}

              {/* <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">
                <label htmlFor="news">News:</label>
                <select
                  className="mx-2"
                  id="news"
                  name="news"
                  value={form.news}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="Selected Option">Selected Option:</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              </div>
              {errors.news && <p className="danger">{errors.news}</p>} */}

              <div className="text-black flex flex-row  border-solid border-gray-500 border w-2/5 rounded-lg">
                <label htmlFor="salesOff">Sales Off:</label>
                <select
                  className="mx-2"
                  id="salesOff"
                  name="salesOff"
                  value={form.salesOff}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="Selected Option">Selected Option:</option>
                  <option value="True">True</option>
                  <option value="False">False</option>
                </select>
              </div>
              {errors.salesOff && <p className="danger">{errors.salesOff}</p>}

              <input
                className="border-solid border-gray-500 border w-1/6 rounded-lg hover:bg-amber-50 cursor-pointer"
                type="submit"
                value="Create Product"
              />

              {errors.all && <p>{errors.all}</p>}
            </form>

            {loading && <Loader />}
            {response && (
              <Message msg="Producto creado correctamente" bgColor="#198754" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
