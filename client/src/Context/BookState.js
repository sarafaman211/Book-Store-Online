import React, { useEffect, useState } from "react";
import bookContext from '../Context/BookContext'

const bookState = (props) => {

    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    const [productDetials, setProductDetials] = useState([])

    //  get all the products by api
    const getProducts = async () => {

        const fetchProducts = await fetch("http://localhost:5000/api/products/products", {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })

        const { products } = await fetchProducts.json()
        // console.log(products)
        setProduct(products)
    }

    // getPRoduct details

    const ProductDetials = async ( _id ) =>{
        
        const productDetials = await fetch(`http://localhost:5000/api/products/getProduct/${ _id }`, {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })

        const { products } = await productDetials.json()
        // console.log(products) 
        setProductDetials(products)
    }

    // CRUD OPERATIONS

    // 1 get all the items present in the particular user
    const getItems = async () => {

        const data = await fetch("http://localhost:5000/api/items/getItems", {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })

        const { items } = await data.json();
        setItems(items)
    }
    // 2 Add product in our database
    const deleteItems = async (id) => {

       const data = await fetch(`http://localhost:5000/api/items/deleteItems/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })

        const deleteData = items.filter(data => { return data._id !== id })
        setItems(deleteData)
    }

    // 3 add items to our data base for a particular user
    const addProducts = async ( author, title, amount, year ) => {
        const response = await fetch(`http://localhost:5000/api/items/addItems`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify( author, title, amount, year )
        })

        const json = await response.json();
        setProduct(json)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <bookContext.Provider value={{ product, getItems, items, deleteItems, addProducts, ProductDetials, productDetials }} >
            {props.children}
        </bookContext.Provider>
    )
}

export default bookState;
