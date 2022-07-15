const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorys.controller');

router.get('/', controller.getCategorys);

router.post('/', controller.postCategory);

router.delete('/:id', controller.deleteCategory);

module.exports = router;