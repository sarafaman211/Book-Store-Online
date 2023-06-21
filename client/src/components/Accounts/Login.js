import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";


const Login = () => {

    let history = useHistory()

    const [ credentials, setCredentials ] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [ e.target.name ] : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await fetch("http://localhost:5000/api/user/auth", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })

        const json = await data.json()
        // console.log(json)
        if(json.success){
            localStorage.setItem('token', json.authToken)
            history.push('/home')
        }

        setCredentials({ email: "", password: "" })
    }
   
    return (
        <>
            <div className="form-container">

            <form onSubmit={ handleSubmit }>
                <h3 className="heading">Welcome to <span className="text-primary">LogIn</span></h3>
                    <div className="mb-3">
                        <input type="email" className="form-control box" id="email" aria-describedby="emailHelp" onChange={ handleChange } value={ credentials.email } name="email" placeholder='Enter your email'/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control box" id="password" onChange={ handleChange } value={ credentials.password } name="password" placeholder='Enter your password'/>
                    </div>
                            <div style={{ fontSize: "1.5rem", color: "#333" }} id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    <button style={{ width: "100%" }} type="submit" className="btn">Submit</button>
                    <p>Don't have an account? <Link to="/signup" style={{ textDecoration: "none", color: "#093145" }}>SignUp now</Link></p>
                </form>

            </div>
        </>
    )
}

export default Login