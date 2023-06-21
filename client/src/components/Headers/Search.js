import React, { useContext, useState } from 'react';
// import Books from "../../Config/data";
import ItemsCard from '../Cards/ItemsCard';
import bookContext from "../../Context/BookContext";

const Search = () => {

    const { product } = useContext(bookContext);
    const [search, setSearch] = useState("")

    const handleChange = (e) => {

        setSearch(e.target.value)
    }

    const cancel = () => {
        setSearch("")
    }

    return (
        <div style={{ paddingTop: 100, backgroundColor: "#1e3b70", paddingBottom: 10 }}>

            <h1 className='heading text-center text-danger'>Search Here !!!</h1>

            <div className='row container'>
                <div className='d-flex' >
                    <input style={{ width: "100%", padding: 15, color: "#333", fontSize: 15, borderRadius: 10 }} value={ search } type="text" placeholder="seach..." onChange={handleChange} />
                    <button onClick={ cancel } style={{ background: "transparent", fontSize: 20, padding: 15, fontWeight: "bolder" }}>Cancel</button>
                </div>


                { product && product.filter((value) => {
                    if (search == "") {
                        return value
                    }
                    else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                        return value;
                    }
                }).map((value, index) => {
                    return (
                        <ItemsCard books={value} key={index} />
                    )
                })}

            </div>

        </div>
    )
}

export default Search;