const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controller');

router.get('/', commentsController.getAllComments);
router.post('/', commentsController.postComment);

module.exports = router;