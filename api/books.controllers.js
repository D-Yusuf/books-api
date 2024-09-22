const Books = require("../models/bookSchema");

// Get all books
const getBooks = async (req, res, next) => {
    try {
        const books = await Books.find();
        return res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

// Get a single book by ID
const getBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// Add a new book
const addBooks = async (req, res, next) => {
    try {
        if (req.file) {   
            req.body.image = req.file.path; // Store the file path of the uploaded image
        }
        const newBook = await Books.create(req.body);
        return res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
};

// Edit a book by ID
const editBook = async (req, res, next) => {
    try {
        console.log(req.body)
        const { id } = req.params;
        const book = await Books.findById(id); // Return the updated document
        console.log("book", book)
        if(book){
            await book.updateOne(req.body)
            return res.status(200).json(book);
        }
        return res.status(404).json({ message: "Book not found" });
        // return res.status(200).json(book);
    } catch (error) {
        next(error);
    }
};

// Delete a book by ID
const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await Books.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getBooks, getBook, addBooks, editBook, deleteBook };
