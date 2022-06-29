/*-------CONEXIÓN--------*/
const mongoose = require('mongoose');
require('dotenv').config();
 
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.irt59.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
//protocolo://host:puerto/nombreBBDD
 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then (e => console.log('base de datos conectada :D'))
    .catch(e => console.log(e));
//el connect nos devuelve una promesa.

module.exports = mongoose;
