const express = require("express");
const mongoose =require("mongoose");
const useRoutes = require("./Routes/user");
const env = require('dotenv').config();
const app =express();
const port = process.env.PORT;

(async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_CONNEXION);
        console.log('connexion reussie avec la base de donnée');
    } catch (error) {
        console.log(error.message);
    }
})();

app.get('', ( req, res) => {
    res.send('Hello Cendrillon')
})
// app.use('/user', useRoutes())
app.listen(port,() => {
    console.log('le serveur marche')
})