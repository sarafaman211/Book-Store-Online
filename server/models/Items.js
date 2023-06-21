const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    year:{
        type: String
    },
    amount:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("items", itemsSchema)