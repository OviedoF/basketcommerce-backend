const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    imagesUrls: {
        type: Array
    },
    description: {
        type: Object
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceWithOffer: Number,
    color: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;