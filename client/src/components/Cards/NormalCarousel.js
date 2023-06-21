import React, { useContext } from 'react';
import bookContext from "../../Context/BookContext";
import { Link, useHistory } from "react-router-dom";

//  <Link to={`${_id} `} onClick={ (_id) => { return (ProductDetials(books._id), history.push(`/productView/${ books._id }`)) } }>

const NormalCarousel = ({ books }) => {

    let history = useHistory()

    const { imageLink, title, _id } = books;
    // const { ProductDetials } = useContext(bookContext)

    return (
        <div>
            <Link to={`/collection `}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageLink} className="card-img-top" alt={title} />
                </div>
            </Link>
        </div>
    )
}

export default NormalCarousel