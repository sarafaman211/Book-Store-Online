import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import bookContext from '../../Context/BookContext';

const ItemsCard = ({ books }) => {

    let history = useHistory()

    const { title, author, imageLink, link, amount , year } = books

    const { addProducts } = useContext(bookContext)

    const openLink = () => window.open(link, '_blank')

    const handleClick = () =>{
        addProducts({ title: title, author: author, amount: amount, year: year })
        history.push('/cart')
    }

    return (
        <div className='col-md-3 g-4'>
            <div className="card">
                <img src={ imageLink } className="card-img-top" alt="books" />
                    <div className="card-body my-3">
                        <h3 className="card-title" style={{ fontSize: 20 }}>TITLE: <span className="text-primary">{ title }</span></h3><br />
                        <h4 className="card-title"  style={{ fontSize: 15 }}>AUTHOR: <span className="text-danger">{ author }</span></h4><br />
                        <div className='d-flex justify-content-between aling-items-center' style={{ fontSize: 15, paddingBottom: 5 }}>
                            <strong className='text-primary year'> { Math.abs(year) } </strong>
                            <strong className='text-danger amount'>&#8377; { amount } </strong>
                        </div>
                        <button onClick={ openLink } className='btn' ><i className="fab fa-readme"></i></button>
                        <button type='submit' onClick={ handleClick } className='btn'>Add to Cart</button>
                    </div>
            </div>
        </div>
    )
}

export default ItemsCard;