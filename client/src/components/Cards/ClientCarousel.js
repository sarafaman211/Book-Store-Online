import React from 'react'

const ClientCarousel = ({ clients }) => {

    const { name, imageLink, description } = clients

  return (
    <div>
         <div className="box mx-3">
                        <img src={ imageLink } alt="" />
                            <p>{ description }</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <h3>{ name }</h3>
                    </div>
    </div>
  )
}

export default ClientCarousel