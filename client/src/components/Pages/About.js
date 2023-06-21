import React from 'react';
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import clients from "../../Config/Clients"
import ClientCarousel from '../Cards/ClientCarousel';

const About = () => {

    const responsive = {
        0:{
            items: 1
        },
        524:{
            items: 3
        }
    }

    const Items = clients.map( value =>{
        return(
            <ClientCarousel clients = { value }/>
        )
    } )

    return (

        <>

        <div >
            <div className="heading">
                <h3>about us</h3>
                <p> <Link to="/home">home</Link> / about </p>
            </div>

            <section className="about">

                <div className="flex">

                    <div className="image">
                        <img src="images/about-img.jpg" alt="" />
                    </div>

                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet voluptatibus aut hic molestias, reiciendis natus fuga, cumque excepturi veniam ratione iure. Excepturi fugiat placeat iusto facere id officia assumenda temporibus?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quos enim minima ipsa dicta officia corporis ratione saepe sed adipisci?</p>
                        <Link to="/contact" className="btn">contact us</Link>
                    </div>

                </div>

            </section>

            <section className="reviews">

                <h1 className="title text-center">CLIENT'S REVIEWS</h1>

                <div className="box-container">

                    <AliceCarousel items={ Items } infinite autoPlay responsive={responsive} animationDuration={ 2000 } disableButtonsControls disableDotsControls />

                </div>

            </section>

        </div>
        </>

    )
}

export default About