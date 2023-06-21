const express = require("express");
const router = express.Router();
const Products = require('../models/Product');
const fetchuser = require("../middleware/fetchuser")


// Router 1 get all the data from the data base
router.get('/products', async (req, res) => {
    
    try {

        const products = await Products.find()

        res.json({ products })
        
    } catch (err) {
        console.error({ error: err.message })
        return res.status(500).json({ error: "Internal Error" })
    }

})

// Router 2 get a particular data from data base
router.get("/getProduct/:id",  async ( req, res ) => {
    
    try {

        const products = await Products.findById( req.params.id )

        res.json({ products })
        
    } catch (err) {
        console.error({ error: err.message })
        return res.status(500).json({ error: "Internal Error" })
    }
})
module.exports = router;