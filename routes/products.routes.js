const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getOneProduct);

router.get('/category/:category', productController.getOneCategory);

router.post('/', productController.postProduct);

router.delete('/:id', productController.deleteProduct);

router.put('/:id', productController.actualizeProduct);

module.exports = router;