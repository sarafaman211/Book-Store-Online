import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {

    let history = useHistory()

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })

   const handleChange = (e) =>{
       setCredentials({ ...credentials, [ e.target.name ] : e.target.value })
   }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const data = await fetch("http://localhost:5000/api/user/createUser", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        })

        const json = await data.json()
        if(json.success){
            localStorage.setItem('token', json.authToken)
            history.push('/home')
        }

        setCredentials({ name: "", email: "", password: "" });
    }
    return (
        <>
            <div className="form-container">

                <form onSubmit={ handleSubmit }>
                <h3 className="heading">Welcome to <span className="text-primary">SignUp</span></h3>
                    <div className="mb-3">
                        <input type="text" className="form-control box" id="name" aria-describedby="emailHelp" onChange={ handleChange } value={ credentials.name } name="name" placeholder='Enter your name'/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control box" id="email" aria-describedby="emailHelp" onChange={ handleChange } value={ credentials.email } name="email" placeholder='Enter your email'/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control box" id="password" onChange={ handleChange } value={ credentials.password } name="password" placeholder='Enter your password'/>
                    </div>
                            <div style={{ fontSize: "1.5rem", color: "#333" }} id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <button style={{ width: "100%" }} type="submit" className="btn">Submit</button>
                    <p>You have an account : <Link to="/login" style={{ textDecoration: "none", color: "#093145" }}>Login</Link></p>
                </form>

            </div>
        </>
    )
}

export default SignUp