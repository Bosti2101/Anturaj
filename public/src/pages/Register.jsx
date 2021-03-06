import React , { useState }from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    const handleSubmit = (event)=>{     
        event.preventDefault();
        if(handleValidation()){
            const { password, confirmPassword, username, email } = values;
             
        }
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password must be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

    
    
    const handleChange = (event) =>{
    setValues({ ...values, [event.target.name]: event.target.value });
    } 
    
    return (  
    <div>
        <FormContainer>

            <form onSubmit={(event)=>handleSubmit(event)}>

                <div className="brand">
                    <img src={Logo} alt='Logo' />
                    <h1>Anturaj</h1>
                </div>

                <input
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={(e)=> handleChange(e)} 
                />
                <input
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={(e)=> handleChange(e)} 
                />
                <input
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={(e)=> handleChange(e)} 
                />
                <input
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword" 
                    onChange={(e)=> handleChange(e)} 
                />
                <button type="submit">Create User</button>
                <span>
                    Already have an account ? <Link to="/login">Login</Link>
                </span>
            </form>
        </FormContainer> 
        <ToastContainer />
    </div>
    )
}


const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #f0f0f0;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #dc233c;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #ffffff;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #dc233c;
    border-radius: 0.4rem;
    color: #181818;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #dc233c;
      outline: none;
    }
  }
  button {
    background-color: #dc233c;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #dc233c;
    }
  }
  span {
    color: #dc233c;
    text-transform: uppercase;
    a {
      color: #dc233c;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register