import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
// import Books from "../../Config/data";
import AliceCarousel from 'react-alice-carousel';
import NormalCarousel from '../Cards/NormalCarousel';
import logo from "../../Config/deal-img.jpg";
import clients from "../../Config/Clients";
import ClientCarousel from '../Cards/ClientCarousel';
import bookContext from '../../Context/BookContext';

const Home = () => {

  let history = useHistory()

  const { product , ProductDetials } = useContext(bookContext);


  const responsive = {
    0: {

      items: 1

    },
    1024: {

      items: 4

    }
  }

  const items = product && product.map((value, index) => {
    // console.log(value)
    return ( 
       <NormalCarousel books={value} key={index} />
       )
  })

  const responsives = {
    0: {
      items: 1
    },
    524: {
      items: 3
    }
  }

  const Item = clients.map(value => {
    return (
      <ClientCarousel clients={value} />
    )
  })


  return (
    <div style={{ paddingTop: 80 }}>

      {/* home */}
      <section className="home ">

        <div className="row">

          <div className="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <Link to="/collection" className="btn">shop now</Link>
          </div>

          <div className='books-slider'>
            <img src="images/book-banner.jpg" className='w-50' alt="book image" />
          </div>

        </div>

      </section>

      {/* icons */}
      <section className="icons-container d-flex justify-content-around align-items-center">

        <div className="icons">
          <i className="fas fa-shipping-fast"></i>
          <div className="content">
            <h3>free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-lock"></i>
          <div className="content">
            <h3>secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-redo-alt"></i>
          <div className="content">
            <h3>easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div className="icons">
          <i className="fas fa-headset"></i>
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>

      </section>

      {/* carousel */}
      <div style={{ background: "linear-gradient(#bdc3c7, #2c3e50)" }}>
        <h2 className="heading text-center pt-3">New Arrival</h2>
        <AliceCarousel autoPlay disableButtonsControls disableDotsControls infinite animationDuration={2000} responsive={responsive} items={items} />
      </div>


      {/* subscriber */}
      <section className="newsletter">

        <form>
          <h3>subscribe for latest updates</h3>
          <input type="email" name="" placeholder="enter your email" className="box" />
          <input type="submit" value="subscribe" className="btn" />
        </form>

      </section>

      {/* deal */}
      <div className="deal d-flex justify-content-around align-items-center pt-4 m-3">

        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.</p>
          <Link to="/newArrival" className="btn btn-secondary">shop now</Link>
        </div>

        <div className="image">
          <img src={logo} alt="" />
        </div>

      </div>

      {/* clients */}
      <section className="reviews">

        <h1 className="title text-center">CLIENT'S REVIEWS</h1>

        <div className="box-container">

          <AliceCarousel items={Item} infinite autoPlay responsive={responsives} animationDuration={2000} disableButtonsControls disableDotsControls />

        </div>

      </section>
    </div>
  )
}

export default Home