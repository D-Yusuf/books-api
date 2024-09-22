const express = require('express');
const upload = require('../../multer');
const router = express.Router();
const { getBooks, getBook, addBooks, editBook, deleteBook } = require('./books.controllers')

router.route("/")
    .get(getBooks)
    .post(addBooks)






module.exports = router