import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import bookContext from "../../Context/BookContext";

const FeatureCarousel = ({ books }) => {

    let history = useHistory()

    const { imageLink, title, author, link, amount, year } = books;

    const { addProducts } = useContext( bookContext )

    const openLink = () => window.open(link, '_blank')

    const handleClick = () =>{
        addProducts({ title, author, amount, year })
        history.push("/cart");
    }

    return (
        <div>
            <div className="card align-items-center mx-2" style={{ backgroundColor: "transparent", border: "none" }} >
                <img src={imageLink} className="card-img-top" alt="books" style={{ width: "15rem", paddingTop: 10}} />
                <div className="card-body my-3">
                    <h3 className="card-title" style={{ fontSize: 20 }}>TITLE: <span className="text-primary">{title}</span></h3><br />
                    <h4 className="card-title" style={{ fontSize: 15 }}>AUTHOR: <span className="text-danger">{author}</span></h4><br />
                    <div className='d-flex justify-content-between align-items-center'>
                    <button onClick={ openLink } className='btn' ><i className="fab fa-readme"></i></button>
                    <button onClick={ handleClick } type="button" className='btn'>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeatureCarousel