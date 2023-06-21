import React, { useState } from 'react';
import "../Assests/Css/contact.css"

const Contact = () => {

    const [credentials, setCredentials] = useState({ name: "", company: "", email: "", phone: "", message: "" })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = await fetch("http://localhost:5000/api/contact/addContact", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, phone: credentials.phone, message: credentials.message, email: credentials.email, company: credentials.company })
        })

        const json = await data.json()
        // console.log(json)
        alert("Detials send successfully")
        setCredentials({  name: "", company: "", email: "", phone: "", message: ""  })
    }

    return (
        <div style={{ backgroundColor: "#c9e6ff" }}>
            <div className="containers" style={{ padding: 100 }}>
                <h1 className="brand" style={{ fontSize: "3rem", paddingBottom: 10 }}><span className='text-primary'>Book</span> Store-Online</h1>
                <div className="wrapper animated bounceInLeft">
                    <div className="company-info" style={{ fontSize: "1.8rem" }}>
                        <h3>Bookly</h3>
                        <ul>
                            <li><i className="fa fa-road"></i> 44 Something st</li>
                            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                            <li><i className="fa fa-envelope"></i> bookly@company.com</li>
                        </ul>
                    </div>
                    <div className="contact" style={{ fontSize: "1.5rem" }}>
                        <h3>Email Us</h3>
                        <form onSubmit={ handleSubmit }>
                            <p>
                                <label>Name</label>
                                <input type="text" name="name" onChange={handleChange} value={credentials.name} id="name" />
                            </p>
                            <p>
                                <label>Company</label>
                                <input type="text" name="company" onChange={handleChange} value={credentials.company} id="company" />
                            </p>
                            <p>
                                <label>Email Address</label>
                                <input type="email" name="email" onChange={handleChange} value={credentials.email} id="email" />
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" onChange={handleChange} value={credentials.phone} id="phone" />
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" onChange={handleChange} value={credentials.message} id="message" rows="5"></textarea>
                            </p>
                            <p className="full">
                                <button type="submit">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact