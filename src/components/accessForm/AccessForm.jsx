import React, { useState } from "react";
import { useDataStore } from "../context/context";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./accessForm.scss";

export const AccessForm = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errormsg, setErrormsg] = React.useState(false);

  const handleMailInput = (event) => {
    setMail(event.target.value);
  };

  const handlePassInput = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async () => {
    if (mail && pass) {
      try {
        const user = await signInWithEmailAndPassword(auth, mail, pass);
        if (user) {
          adminAccess();
          setMail("");
          setPass("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") handleSubmit();
  };

  const handleLogout = () => {
    adminLogout();
  };

  const { adminMode, adminAccess, adminLogout } = useDataStore();
  return (
    <div className={`accessInputs ${!adminMode ? "darkInputs" : ""}`}>
      {!adminMode ? (
        <>
          <input
            type="text"
            placeholder="email"
            value={mail}
            onChange={handleMailInput}
            onKeyPress={handleEnter}
          />
          <input
            type="text"
            placeholder="password"
            value={pass}
            onChange={handlePassInput}
            onKeyPress={handleEnter}
          />
          {errormsg && <p className="errormsg">Incorrect mail or password</p>}
          <div className="loginBtn" onClick={handleSubmit}>
            Access
          </div>
        </>
      ) : (
        <div className="logoutBtn" onClick={handleLogout}>
          Logout
        </div>
      )}
    </div>
  );
};
