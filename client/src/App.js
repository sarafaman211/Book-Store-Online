import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Accounts/Login";
import SignUp from "./components/Accounts/SignUp";
import ScrollToTop from "./components/Assests/ScrollToTop";
import Footer from "./components/Headers/Footer";
import Navbar from "./components/Headers/Navbar";
import Spinner from "./components/Assests/Spinner";
import Contact from "./components/Pages/Contact";
import Search from "./components/Headers/Search";
import Home from "./components/Pages/Home"
import Collection from "./components/Pages/Collection";
import About from "./components/Pages/About";
import BookState from "./Context/BookState";
import Cart from "./components/Pages/Cart";
import ProductView from "./components/Pages/ProductView";
import ThankYou from "./components/Pages/ThankYou"

function App() {

  const [ loading , setLoading ] = useState( false )

  useEffect(() => {

    setLoading( true )

    setTimeout(() => {
      
      setLoading( false )

    }, 3000);
  }, [])

  return (
    <Router>
      <BookState>
      <ScrollToTop />
      { loading && <Spinner /> }
      <Navbar heading = "Bookly" />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/collection">
          <Collection />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/productview/:id">
          <ProductView />
        </Route>
        <Route exact path="/thankYou">
          <ThankYou />
        </Route>
      </Switch>
      <Footer />
      </BookState>
    </Router>
  )
}

export default App;