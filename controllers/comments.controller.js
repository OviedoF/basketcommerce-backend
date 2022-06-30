const Comments = require('../models/comments.model');
const commentsController = {};

commentsController.getAllComments = async (req, res) => {
    try{
        const comments = await Comments.find();

        res.status(200).send(comments);
    } catch (e){
        res.status(500).send(e);
    }
}

commentsController.postComment = async (req, res) => {
    try {
        const body = req.body;

        const newComment = new Comments(body);
        await newComment.save();

        console.log(newComment);
        res.status(201).send(newComment);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = commentsController;