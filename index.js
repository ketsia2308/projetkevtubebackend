const { json } = require("express");
const express = require("express");
const mongoose =require("mongoose");
const userRoutes = require("./Routes/user");
const env = require('dotenv').config();
const app =express();
const cors = require('cors')
const port = process.env.PORT;

(async()=>{
    try{
        mongoose.connect(process.env.DATABASE_CONNEXION);
        console.log('connexion reussie avec la base de donnée');
    } catch (error) {
        console.log(error.message);
    }
})();

app.use(express.json());
app.use(cors());

app.get('', ( req, res) => {
    res.send('Hello Cendrillon')
})
app.use('/users', userRoutes)

app.listen(port,() => {
    console.log('le serveur marche')
})