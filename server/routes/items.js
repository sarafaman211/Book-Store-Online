const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Items = require("../models/Items");
const { body, validationResult } = require("express-validator");
// const Contact = require('../models/Contact');

// Router 1 get all the data from data base
router.get("/getItems", fetchuser, async (req, res) => {


    try {
        let items = await Items.find({ user: req.user.id })

        res.json({ items })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 2 add data in our data base
router.post('/addItems', fetchuser, [
    body('title', "Fill the title").isLength({ min: 3 }),
    body('author').isLength({ min: 3 }),
    body('amount').isNumeric()
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }

    try {

        const { title, author, amount, year } = req.body

        let success = false

        const items = new Items({
            title, author, amount, year, user: req.user.id
        })

        const savedItems = await items.save()

        success = true

        res.json({ success, savedItems })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 3 update all data in our data base
router.put('/updateItems/:id', fetchuser, async (req, res) => {

    try {

        const { title, author, amount, year } = req.body

        let success = false

        const newItems = {}
        if (title) { newItems.title = title }
        if (author) { newItems.author = author }
        if (amount) { newItems.amount = amount }
        if (year) { newItems.year = year }

        let items = await Items.findById(req.params.id)
        if (!items) {
            return res.status(400).json({ error: "not allowed" })
        }

        if (items.user.toString() !== req.user.id) {
            return res.status(404).json({ error: "Not found" })
        }

        items = await Items.findByIdAndUpdate(req.params.id, { $set: newItems }, { new: true })

        success = true

        res.json({ success, items })


    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 4 delete data from our data base
router.delete('/deleteItems/:id', fetchuser, async (req, res) => {

    try {

        let success = false

        let items = await Items.findById(req.params.id)
        if (!items) {
            return res.status(400).json({ error: "Item deleted" })
        }

        items = await Items.findByIdAndDelete(req.params.id)

        success = true

        res.json({ success, items })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

module.exports = router;