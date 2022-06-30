const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const route = express.Router();

/* initialize */
require('dotenv').config();
require('./mongoDB');
const port = process.env.PORT || 4000;
const app = express();
/* */

/* setting */
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: '*'
}));
/*  */

/* middlewares */
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(require(path.join(__dirname, './config/multer.config')));
/*------------*/

/* route */

route.get('/', (res, req) => {
    res.render(path.join(__dirname, 'public/index.html'))
})

app.use('/api/products', require(path.join(__dirname, 'routes/products.routes')));
app.use('/api/comments', require(path.join(__dirname, 'routes/comments.routes')));
/* ------ */

app.listen(port, (req, res) => {
    console.log('server on port', port)
})