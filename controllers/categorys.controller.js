const Category = require('../models/category.model');
const categorysController = {};
const cloudinary = require('../config/cloudinary.config');
const fs = require('fs-extra');

categorysController.getCategorys = async (req, res) => {
    try {
        const finded = await Category.find();

        res.status(200).send(finded);
    } catch (error) {
        console.log(error);
    }
}

categorysController.postCategory = async (req, res) => {
    try {
        const uploadToCloud = await cloudinary.v2.uploader.upload(req.files[0].path);
        await fs.unlink(req.files[0].path);

        const body = {
            name: req.body.name,
            imageUrl: uploadToCloud.url
        }

        const newCategory = new Category(body);
        await newCategory.save();

        res.status(200).send(newCategory);
    } catch (error) {
        res.status(500).send(error);
    }
}

categorysController.deleteCategory = async (req, res) => {
    try {
        const deleted = await Category.findByIdAndDelete(req.params.id);
        res.status(200).send(deleted);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports= categorysController;