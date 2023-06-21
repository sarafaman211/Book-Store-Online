import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>quick links</h3>
                        <Link to="/home">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/collection">collection</Link>
                        <Link to="/contact">contact</Link>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <Link to="/login">login</Link>
                        <Link to="/signup">register</Link>
                        <Link to="/">cart</Link>
                        <Link to="/">orders</Link>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                        <p> <i className="fas fa-phone"></i> +111-222-3333 </p>
                        <p> <i className="fas fa-envelope"></i> shaikhanas@gmail.com </p>
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104 </p>
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Footer