import React, { useState } from "react";
import "./App.css";
import Component from "./ejemplo";

export default function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rol, setRol] = useState("DEFAULT");

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
      rol: "usuarioVentas"
    },
    {
      username: "user2",
      password: "pass2",
      rol: "usuarioMarketing"
    },
    {
      username: "user3",
      password: "pass3",
      rol: "usuarioAdministracion"
    },
    {
      username: "user4",
      password: "pass4",
      rol: "usuarioX"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        //Cuando el usuario y contraseña sean correctos, se guarda el rol del usuario
        setRol(userData.rol);
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (

    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
          {isSubmitted ? 
            <div>
              {
                //En este caso, se envía el rol al componente para que muestre los valores según el rol de la persona que ingreso al sistema.
              }
              User is successfully logged in
              <Component obj={rol}/>
            </div> 
            :
            renderForm
          }
      </div>
    </div>

  );
}
