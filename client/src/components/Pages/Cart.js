import React, { useContext, useEffect } from 'react'
import bookContext from '../../Context/BookContext'
import CartCards from '../Cards/CartCards'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Cart = () => {
  const history = useHistory()

    const { items, getItems } = useContext(bookContext)

    const totalAmount = items.map(trans => trans.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);


    useEffect(() => {
        if(localStorage.getItem('token')){
            getItems()
        }
    }, [])

  return (
    <div style={ {background: "linear-gradient(#e66465, #9198e5)", paddingTop: 100}}>
        <h1 className="heading text-center">Cart List</h1>
        <div className='row container' >
          { localStorage.getItem('token') ? items && items.map( ( value, index )  => {
            // console.log(value)
              return ( <CartCards key={ index } item={ value } /> )
          }) : <h2 className='heading text-center text-danger my-4' > You must login first to add some items in your cart </h2> }
        </div>

        <div style={{ padding: "2rem", textAlign: "center" }}>
        {localStorage.getItem("token") ? <div className='d-flex justify-content-center align-items-center flex-column text-center pt-5'>
        <h3 className='heading mx-3'> Your Balance </h3>
        <h1>&#x20B9; <span className="text-primary">{totalAmount}</span></h1>
        <Link to="/thankYou"><button className='btn btn-primary mt-3' style={{ fontSize: 25 }}>Buy</button></Link>
      </div> : <div className='d-flex justify-content-center align-items-center text-center pt-5'>
        <h3 className='heading mx-3'> Your Balance </h3>
        <h1>&#x20B9; <span className="text-primary">0.00</span></h1>
      </div> }
        </div>
    </div>
  )
}

export default Cart