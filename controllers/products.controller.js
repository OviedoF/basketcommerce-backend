const Product = require('../models/product.model');
const productController = {};
require('dotenv').config();
const cloudinary = require('../config/cloudinary.config');
const fs = require('fs-extra');

productController.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).send(products);
    } catch (error) {
        res.send(error);
    }
}

productController.getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
}

productController.postProduct = async (req, res) => {
    try {
        const images = []

        for (const el of req.files) {
            const result = await cloudinary.v2.uploader.upload(el.path);
            images.push(result.url);
            await fs.unlink(el.path);
        }

        for (let index = 0; index < 9; index++) {
            console.log('**')
        }

        console.log('---------ARRAY IMAGES------------')
        console.log(images);
        console.log('---------ARRAY IMAGES------------')

        const body = {
            ...req.body,
            imagesUrls: images
        }

        console.log('---------BODY------------')
        console.log(body);
        console.log('---------BODY------------')

        const newProduct = new Product(body);
        await newProduct.save();

        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send('por favor, revise los datos');
    }
}

module.exports = productController;