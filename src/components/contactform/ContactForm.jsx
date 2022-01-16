import React, { useState, useRef } from "react";
import { db } from "../../firebase";
import emailjs from "@emailjs/browser";
import { collection, query, onSnapshot } from "firebase/firestore";

import "./contactForm.scss";

const formInitialState = {
  from_name: "",
  from_lastname: "",
  company: "",
  email: "",
  phone: "",
  msg: "",
};

export const ContactForm = () => {
  const [mailCredentials, setMailCredentials] = useState({});
  const [contactInfo, setContactInfo] = useState(formInitialState);
  const form = useRef();

  const handleInfoChange = ({ target }) => {
    const { name, value } = target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const resetForm = () => {
    setContactInfo(formInitialState);
  };

  const getCredentials = () => {
    const credentials = query(collection(db, "tokens"));
    onSnapshot(credentials, (querySnapshot) => {
      const credentials = [];
      querySnapshot.docs.map((item) => credentials.push(item.data()));
      setMailCredentials(credentials);
    });
  };

  React.useEffect(async () => {
    console.log("fetching redentials");
    getCredentials();
  }, []);

  const handleSendContactForm = () => {
    if (validateForm()) {
      emailjs
        .sendForm(
          "contactForm-RegulSA",
          "template_7pr6h4t",
          form.current,
          mailCredentials[0].userID
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === "OK") {
              alert(`${from_name}, tu mail ha sido enviado con exito`);
              resetForm();
            } else {
              alert(
                `${from_name}, ha ocurrido un problema, no se pudo enviar el mail`
              );
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Asegurate de llenar todos los campos obligatorios para enviar");
    }
  };

  const validateForm = () => {
    const { from_name, from_lastname, email, phone, company, msg } =
      contactInfo;
    return (
      from_name !== "" &&
      from_lastname !== "" &&
      email !== "" &&
      msg !== "" &&
      phone !== ""
    );
  };

  const { from_name, from_lastname, email, phone, company, msg } = contactInfo;
  return (
    <div className="contactFormWrapper">
      <form ref={form} onSubmit={() => false}>
        <label htmlFor="nameInput">
          Nombre*:
          <br />
          <input
            type="text"
            id="nameInput"
            value={from_name}
            name="from_name"
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="lastNameInput">
          Apellido*:
          <br />
          <input
            type="text"
            id="lastNameInput"
            value={from_lastname}
            name="from_lastname"
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="mailInput">
          Empresa:
          <br />
          <input
            type="text"
            id="mailInput"
            value={company}
            name="company"
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="companyInput">
          Correo*:
          <br />
          <input
            type="email"
            id="companyInput"
            value={email}
            name="email"
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="phoneInput">
          Teléfono*:
          <br />
          <input
            type="text"
            id="phoneInput"
            value={phone}
            name="phone"
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="messageInput">
          Consulta*:
          <br />
          <textarea
            id="messageInput"
            rows={6}
            value={msg}
            name="msg"
            onChange={handleInfoChange}
          />
        </label>
        <div className="buttons">
          <div className="submitButton" onClick={handleSendContactForm}>
            Enviar
          </div>
          <div className="resetFormButton" onClick={resetForm}>
            Borrar
          </div>
        </div>
      </form>
    </div>
  );
};
