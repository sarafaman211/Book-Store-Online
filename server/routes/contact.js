const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { body, validationResult } = require("express-validator"); 

// Router 1 get all the contact details
router.get('/getContact',
 async ( req, res ) => {

    try {

        let contact = await Contact.find()

        res.json({ contact })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error Occured" })
    }

})

// Router 2 add contact details in data base
router.post("/addContact", [
    body('name').isLength({ min: 3 }),
    body('company').isLength({ min: 3 }),
    body('email').isEmail(),
    body('phone').isNumeric(),
    body('messgae').isLength({ min: 5 }),
], async ( req, res ) => {
    
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return res.status(400).json({ error: "FIll the following info" })
    }

    try {

       const{ name, email, company, phone, message } = req.body;

       const contact = await Contact.create({
           name, email, message, phone, company
       })

       const savedContact = await contact.save()

       res.json({ savedContact })
         
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error Occured" })
    }
})

// Router 3 delete the contact details by admin
router.delete('/deleteContact/:id', async( req, res ) => {

    try {

        let success = false

        let contact = await Contact.findById( req.params.id )
        if(!contact){
            return res.status(400).json({ error: "Item deleted" })
        }

        contact = await Contact.findByIdAndDelete( req.params.id ) 

        success = true

        res.json({ success, contact })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error Occured" })
    }
})

module.exports = router;