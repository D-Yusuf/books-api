const {model, Schema} = require("mongoose")

const bookShema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    price: {type: Number, default: 5, set: v=> v + "KD"},
    image: {type: String, default: "https://cdn.vectorstock.com/i/500p/64/63/magical-open-book-engraving-vector-52016463.jpg"}
})

const Books = model("book", bookShema)
module.exports = Books