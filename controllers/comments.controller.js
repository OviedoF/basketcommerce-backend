const Comments = require('../models/comments.model');
const commentsController = {};

commentsController.getAllComments = async (req, res) => {
    try{
        const comments = Comments.find();

        res.status(200).send(comments);
    } catch (e){
        res.status(500).send(e);
    }
}

commentsController.postComment = async (req, res) => {
    try {
        const body = req.body;
        console.log(body);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = commentsController;