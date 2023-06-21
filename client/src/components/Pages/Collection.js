import React, { useContext, useEffect, useState } from 'react';
// import Books from "../../Config/data";
import AliceCarousel from 'react-alice-carousel';
import FeatureCarousel from '../Cards/FeatureCarousel';
import ItemsCard from "../Cards/ItemsCard";
import bookContext from '../../Context/BookContext';


const Collection = () => {

  const { product } = useContext(bookContext);
  const [ data , setData ] = useState([]);
  
  const responsive = {
    0: {

      items: 1

    },
    1024: {

      items: 4

    }
  }

  const items = product && product.map((value, index) => {
    return (<FeatureCarousel books={value} key={index} />)
  })

  const filterItems = ( lang ) => {
    const updateItems = product.filter( books => {
      return books.language === lang
    } )

    // console.log(updateItems)
    setData(updateItems)
  } 

  const getAll = () => {
    const getItems = product&&product.map( value => {
      return value
    } )

    // console.log(getItems)
    setData(getItems)
  }

  return (
    <div style={{ paddingTop: 100, backgroundColor: "#29539b" }} >

        <div className='collection'>
          <h1 className='heading text-center text-danger'>Collections</h1>
          <AliceCarousel autoPlay disableButtonsControls disableDotsControls infinite animationDuration={2000} responsive={responsive} items={items} />

        <div className="container">
          <h2 className="heding text-secondary text-center">Feature Books</h2>
          <div className="d-flex justify-content-around align-items-center">
            <button type='button' onClick={ () => getAll() } className='btn' style={{ backgroundColor: "transparent", border: "none" }}>ALL BOOKS</button>
            <button type='button' onClick={ () => filterItems("Sanskrit") } className='btn' style={{ backgroundColor: "transparent", border: "none" }}>SANSKRIT</button>
            <button type='button' onClick={ () => filterItems( "English" ) } className='btn' style={{ backgroundColor: "transparent", border: "none" }}>ENGLISH</button>
            <button type='button' onClick={ () => filterItems( "German" ) } className='btn' style={{ backgroundColor: "transparent", border: "none" }}>GERMAN</button>
            <button type='button' onClick={ () => filterItems( "Italian" ) } className='btn' style={{ backgroundColor: "transparent", border: "none" }}>ITALIAN</button>
          </div>

          <div className='row' >
            { data && data.map( (value, index) => {
              return (
                <ItemsCard books={value} key={ index } /> 
              )
            } ) }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Collection;