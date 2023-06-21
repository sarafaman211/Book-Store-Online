import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const User = ({ open }) => {

    const [ credentials, setCredentials ] = useState({ id: "", name: "", email: "" })

    const handleChange = (e) =>{
        setCredentials({ ...credentials, [ e.target.name ] : e.target.value })
    }

    const fetchUser = async () =>{
        
        const data = await fetch("http://localhost:5000/api/user/login", {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })

        const { user } = await data.json();
        // console.log(user)
        setCredentials({ id: user._id, name: user.name, email: user.email })
    }

    useEffect(() =>{
        fetchUser()
    }, [])

    return (
        <div>

            <button type="button" ref={open} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#modal">
                Launch demo modal
            </button>


            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label style={{ fontSize: "2.5rem", fontWeight: 500 }} htmlFor='id'>User Id</label>
                                    <input style={{ padding: 15, borderBottom: "2px solid black" , borderRight: "transparent", borderLeft: "transparent", borderTop: "transparent", fontSize: "2rem"  }} type="text" className="form-control" id="id" aria-describedby="emailHelp" onChange={ handleChange } value={ credentials.id } />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: "2.5rem", fontWeight: 500 }} htmlFor='name'>User Name</label>
                                    <input  style={{ padding: 15, borderBottom: "2px solid black" , borderRight: "transparent", borderLeft: "transparent", borderTop: "transparent", fontSize: "2rem"  }} type="text" className="form-control box" id="name"onChange={ handleChange }  value={ credentials.name } />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: "2.5rem", fontWeight: 500 }} htmlFor='email'>User Email</label>
                                    <input  style={{ padding: 15, borderBottom: "2px solid black" , borderRight: "transparent", borderLeft: "transparent", borderTop: "transparent", fontSize: "2rem"  }} type="text" className="form-control box" id="email"onChange={ handleChange }  value={ credentials.email } />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Link to="/cart" type="button" className="btn btn-primary">Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User