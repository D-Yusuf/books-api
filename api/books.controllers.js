const Books = require("../models/bookSchema")

const getBooks = async (req, res) => {
    try {
        const books = await Books.find()
        return res.status(200).json(books)
    } catch (error) {
        res.status(500).json("Server Error")
    }
};
const getBook = async (req, res) => {

};
const addBooks = async (req, res) => {

};
const editBook = async (req, res) => {

};
const deleteBook = async (req, res) => {

};

module.exports = { getBooks, getBook, addBooks, editBook, deleteBook };
