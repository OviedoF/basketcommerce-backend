const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getOneProduct);

router.post('/', productController.postProduct);

module.exports = router;