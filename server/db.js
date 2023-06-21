const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, () => {
        console.log('Mongo connection successfully'.blue.underline)
    })
}

module.exports = connectDB