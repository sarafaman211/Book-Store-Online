import React, { useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import User from '../Accounts/User';

const Navbar = ({ heading }) => {

    let location = useLocation();
    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }

    const ref = useRef(null)

    const updateModal = () => {
        ref.current.click()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ fontSize: "2.8rem" }} to="/"><i className="fas fa-book-open text-primary"></i> {heading}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} style={{ fontSize: "1.5rem" }} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/collection" ? "active" : ""}`} style={{ fontSize: "1.5rem" }} to="/Collection">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} style={{ fontSize: "1.5rem" }} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} style={{ fontSize: "1.5rem" }} to="/contact">Contact Us</Link>
                            </li>
                        </ul>

                        {localStorage.getItem('token') ?
                            <div className="d-flex align-items-center justify-content-center">
                                <Link to="/search"><i className="fas fa-search mx-2" style={{ fontSize: "3rem", color: "#fff", cursor: "pointer" }}></i></Link>
                                <div onClick={ updateModal } style={{ fontSize: "3rem", color: "#fff", cursor: "pointer" }}><i className="fas fa-user mx-4"></i></div>
                                <button onClick={logout} type='button' className="btn">LogOut</button>
                            </div> : <div className="d-flex align-items-center justify-content-center">
                                <Link to="/search"><i className="fas fa-search mx-2" style={{ fontSize: "3rem", color: "#fff", cursor: "pointer" }}></i></Link>
                                <div onClick={ updateModal } style={{ fontSize: "3rem", color: "#fff", cursor: "pointer" }}><i className="fas fa-user mx-4"></i></div>
                                <Link to="/login" type='button' className="btn">LogIn</Link>
                            </div>}
                    </div>
                </div>
            </nav>

            <User open={ ref }/>
        </div>
    )
}

export default Navbar