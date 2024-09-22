const express = require('express');
const upload = require('../multer');
const router = express.Router();
const { getBooks, getBook, addBooks, editBook, deleteBook } = require('./books.controllers')

router.route("/")
    .get(getBooks)           // Get all books
    .post(upload.single("image"), addBooks);  // Add a book with an optional image

router.route("/:id")
    .get(getBook)            // Get a single book by ID
    .put(editBook)           // Edit a book by ID
    .delete(deleteBook);     // Delete a book by ID
    
module.exports = router