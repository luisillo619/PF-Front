import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';


function validate (input) {
    let errors = {};
    if(!input.name){
        errors.name = "El nombre de la receta es requerido.";
    } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
        errors.name = "El nombre no puede tener números o caracteres especiales.";
    }
    if(!input.email) {
        errors.email = "El nombre de la receta es requerido.";
    } else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
        errors.name = "El email es requerido.";
    }
    if(!input.phone) {
        errors.phone = "El nombre de la receta es requerido.";
    } else if (!/^\d{10,15}$/.test(input.phone)) {
        errors.phone = "El número telefónico no es válido.";
    }
    if(!input.message){
        errors.message = "El Mensaje es requerido.";
    }
    return errors;
};


export default function ContactUs () {
    // const formRef = useRef(null);
    const [ errors, setErrors ] = useState({});

    const [ input, setInput ] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });


    function handleChange(e) {
        // console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
    };


    function handleSubmit(e) {  
        console.log(input);
        e.preventDefault();
        emailjs.sendForm('service_758mkoq','template_8jsk038', e.target,'H-NdfI9m9xujZpebv')
        setInput({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };


    return (
        <div>
            <section>
                <div className='container-ContactUs'>
                    <h1>Contact Us</h1>
                    <div className='row-ContactUs'>
                        <div className='address-ContactUs'>
                            <div className='contact-widget'>
                                <div className='contact-widget-item'>
                                    <div className="icon-ContactUs">
                                        {/* <i class='fa-solid fa-location-dot'></i> */}
                                    </div>
                                    <div className="text-ContactUs">
                                        <h2>Address</h2>
                                        <p>Coahuila 59, Roma Nte., Cuauhtémoc, 06700 Ciudad de México.</p>
                                    </div>
                                </div>

                                <div className='contact-widget-item'>
                                    <div className="icon-ContactUs">
                                        {/* <i class='fa-solid fa-phone'></i> */}
                                    </div>
                                    <div className="text">
                                        <h2>Contact Us</h2>
                                        <p>+52 155 8248 2375 || +52 (055) 1234 5678 Ext. 123</p>
                                    </div>
                                </div>

                                <div className='contact-widget-item'>
                                    <div className="icon-ContactUs">
                                        {/* <i class='fa-regular fa-envelope'></i> */}
                                    </div>
                                    <div className="text">
                                        <h2>Mail</h2>
                                        <p>elmateexpress@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-ContactUs">
                            <div className="contact-form-ContactUs">
                                <form className='form-mail' onSubmit={(e) => handleSubmit(e)}>
                                    <input type="text"  name='name' value={ input.name } placeholder='Name' onChange={(e) => handleChange(e)} />
                                    {errors.name && <p className="danger">{ errors.name }</p>}

                                    <input type="email" name='email' value={ input.email } placeholder='Email' onChange={(e) => handleChange(e)} />
                                    {errors.email && <p className="danger">{ errors.email }</p>}

                                    <input type="text" name='phone' value={ input.phone } placeholder='Phone' onChange={(e) => handleChange(e)} />
                                    {errors.phone && <p className="danger">{ errors.phone }</p>}

                                    <textarea name="message" value={ input.message } placeholder='Comment' onChange={(e) => handleChange(e)} ></textarea>
                                    {errors.message && <p className="danger">{ errors.message }</p>}
                                    {/* <button type='submit' className='site-btn'>SEND MESSAGE</button> */}
                                    {
                                        !errors.name && input.name.length > 0 &&
                                        !errors.email && input.email.length > 0 &&
                                        !errors.phone && input.phone.length > 0 &&
                                        !errors.message && input.message.length > 0 ?
                                        <button className="site-btn" type="submit">SEND MESSAGE</button> : <button className="site-btnDesaprobated" type="submit" disabled>SEND MESSAGE</button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="map-ContactUs">
                        <div className="map-column-ContactUs">
                            <div className="contactUs-map">
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120392.68756597559!2d-99.19326626484833!3d19.443858339565598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6bccdc6b8d%3A0x3fedc6910f11554a!2sCoffee%20Mate%20Experience!5e0!3m2!1ses!2sco!4v1674973089760!5m2!1ses!2sco`}
                                    width="600"
                                    height="450"
                                    frameBorder="0"
                                    style={{border:0}}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};







// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// // import './ContactUs.css';

// export default function ContactUs () {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validateForm();
//     emailjs.sendForm('service_758mkoq','template_8jsk038', e.target,'H-NdfI9m9xujZpebv')
//     setInput({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//   };

//   const validateForm = () => {
//     let nameError = '';
//     let emailError = '';
//     let phoneError = '';
//     let messageError = '';

//     if(!input.name){
//         errors.name = "El nombre de la receta es requerido.";
//     } else if(/[.!@#$%^&*()_+-=]/.test(input.name)){
//         errors.name = "El nombre no puede tener números o caracteres especiales.";
//     }

//     if(!input.email) {
//         errors.email = "El nombre de la receta es requerido.";
//     } else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
//         errors.name = "El email es requerido.";
//     }

//     if(!input.phone) {
//         errors.phone = "El nombre de la receta es requerido.";
//     } else if (!/^\d{10,15}$/.test(input.phone)) {
//         errors.phone = "El número telefónico no es válido.";
//     }

//     if(!input.message){
//         errors.message = "El Mensaje es requerido.";
//     }

//     if (nameError || emailError || phoneError || messageError) {
//       setErrors({ name: nameError, email: emailError, phone: phoneError, message: messageError });
//       return false;
//     }

//     // Send data to the server, etc.
//     // ...
//   };


//   return (
//     <form className='form-mail' onSubmit={(e) => handleSubmit(e)}>
//       <input type="text"  name='name' value={ input.name } placeholder='Name' onChange={(e) => handleChange(e)} />
//       {errors.name && <p className="danger">{ errors.name }</p>}
  
//       <input type="email" name='email' value={ input.email } placeholder='Email' onChange={(e) => handleChange(e)} />
//       {errors.email && <p className="danger">{ errors.email }</p>}
  
//       <input type="text" name='phone' value={ input.phone } placeholder='Phone' onChange={(e) => handleChange(e)} />
//       {errors.phone && <p className="danger">{ errors.phone }</p>}
  
//       <textarea name="message" value={ input.message } placeholder='Comment' onChange={(e) => handleChange(e)} ></textarea>
//       {errors.message && <p className="danger">{ errors.message }</p>}
//       {/* <button type='submit' className='site-btn'>SEND MESSAGE</button> */}
//       {
//         !errors.name && input.name.length > 0 &&
//         !errors.email && input.email.length > 0 &&
//         !errors.phone && input.phone.length > 0 &&
//         !errors.message && input.message.length > 0 ?
//         <button className="site-btn" type="submit">SEND MESSAGE</button> : <button className="site-btn" type="submit" disabled>SEND MESSAGE</button>
//       }
//     </form>
//   )


// }
