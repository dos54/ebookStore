const router = require('express').Router()
const booksController = require('../controllers/booksController')

router.post('/bulk', booksController.insertMultipleBooks)

module.exports = router