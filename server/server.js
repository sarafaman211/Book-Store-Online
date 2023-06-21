const express =  require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connectDB = require('./db');

// config dotenv
dotenv.config({ path: "./.env" })

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

//  Setup all routers
app.use('/api/user', require('./routes/user'));
app.use('/api/products', require('./routes/products'));
app.use('/api/items', require('./routes/items'));
app.use('/api/contact', require('./routes/contact'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
    console.log(`Express connection established in port ${ PORT } and it is on ${ process.env.NODE_ENV } mode`.yellow.underline)
})