import React from 'react';
import loader from "../../Config/loader-img.gif";

const Spinner = () => {
  return (
    <div className='loader-container'>
        <img src={ loader } alt="spinner" />
    </div>
  )
}

export default Spinner