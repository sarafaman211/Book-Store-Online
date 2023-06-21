import React, { useContext } from 'react'
import bookContext from '../../Context/BookContext'
import { Link } from 'react-router-dom'

const CartCards = ({ item }) => {

    const { title, author, amount, _id, year } = item
    
    const { deleteItems } = useContext(bookContext)
    
    const handleDelete = () =>{
        deleteItems(_id)
        alert(" product deleted ")
    }



    return (
        <div className='col-md-3 g-4'>
            <div className="card">
                <div className="card-body" style={{ fontSize: "1.3rem" }}>
                    <h5 className="card-title" style={{ fontSize: "1.5rem" }}>PRODUCT NAME: <span className="text-primary">{title}</span> </h5>
                    <p className="card-text">AUTHOR: <span className="text-secondary">{author}</span></p>
                    <strong >PRICE: <span className="text-danger">&#8377; {amount}</span> </strong>
                    <div className='d-flex justify-content-between align-items-center'>
                        <strong >PUBLISH: <span className="text-danger">{Math.abs(year)}</span> </strong>
                        <button onClick={ handleDelete } type='button'><i className="fas fa-trash-alt text-danger"></i></button>
                        <button type='button'><Link to="/thankYou"><i style={{ textDecoration: "none" }} className="fas fa-solid fa-money-bill"></i></Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCards