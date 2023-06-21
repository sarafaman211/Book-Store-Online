const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser");


//Router 1 create user
router.post('/createUser',[
    body('name', "fill your name first").isLength({ min: 3 }),
    body('email').isEmail(),
    body('password', "fill your credentials").isLength({ min: 3 })
], async (req, res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ error: "fill your details" })
    }

    try {
        
        let success = false
        let user = await User.findOne({ email: req.body.email })
        if(user){
            return res.status(400).json({ success, error: "This email is already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, process.env.TOKEN_KEY) 

        success = true

        res.json({ success, user, authToken })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }

}) 

// Router 2 authenticate the user 
router.post('/auth', [
    body("email").isEmail(),
    body("password").exists()
], async (req, res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ error: "Fill your credentials first" })
    }

    try {

        let success = false

        const { email, password } = req.body

        let user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ success, error: 'No user found' })
        }

        const comparePW = await bcrypt.compare(password, user.password)
        if(!comparePW){
            return res.status(400).json({ success, error: "password dosen't match" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, process.env.TOKEN_KEY)

        success = true

        res.json({ success, authToken })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 3 login the user
router.get('/login', fetchuser, async (req, res) => {
    try {

        let success = false;
        
        const userId = req.user.id
        const user = await User.findById( userId ).select("-password")

        success = true

        res.json({ user, success })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

module.exports = router