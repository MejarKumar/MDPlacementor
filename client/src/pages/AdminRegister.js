// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Form() {
//   const navigate = useNavigate();
//   // States for registration

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = async function (e) {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       const item = { email, password };
//       let result = await fetch("http://localhost:3000/register", {
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       result = await result.json();
//       localStorage.setItem("token", result.token);
//       // result =await result.json();
//       // console.log(result);
//       // console.log(item);
//       navigate("/admin_dashboard");
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {email} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}

//         <label>Email</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//         />

//         <label>Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//         />

//         <button onClick={handleSubmit} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Form() {
//   const navigate = useNavigate();
//   // States for registration

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = async function (e) {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       const item = { email, password };
//       let result = await fetch("http://localhost:3000/admin_login", {
//         method: "POST",
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });
//       result = await result.json();
//       localStorage.setItem("token", result.token);
//       // result =await result.json();
//       // console.log(result);
//       // console.log(item);
//       navigate("/admin_dashboard");
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {email} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}

//         <label>Email</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//         />

//         <label>Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//         />

//         <button onClick={handleSubmit} type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };



  //  Handling the form submission
  const handleSubmit = async function (e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      const item = { email, password };
      let result = await axios.post("/api/register", item);
      result = await result.json();
     
      localStorage.setItem("token", result.token);
      navigate("/admin");
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {email} successfully registered!!</h1>
      </div>
    );
  };


  //   // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };




  return (
    <>
    <div style={{"display":"flex","justifyContent":"center","alignItems":"center","margin":"2rem"}}>
    <h2>Register for Admin</h2>
    </div>
      <div className="admin-container " style={{ border: "black solid 2px", "borderRadius": "20px", "textAlign": "center", "margin": "100px", "padding": "10px" }}>
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          <div className="inputs">
            <label style={{ padding: "10px" }}>EMAIL</label>
            <input
              type="email"
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div className="inputs">
            <label style={{ padding: "10px" }}>PASSWORD</label>
            <input
              onChange={handlePassword}
              value={password}
              type="password" />

          </div>
          <button style={{

            color: "white",
            backgroundColor: '#f1356d',
            borderRadius: '8px',
            padding: '10px',
            border: '0px',
            margin: '4px'

          }} onClick={handleSubmit} type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Form;
