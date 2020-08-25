const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message:"EDUTIC"});
});

require("../proyecto/routes/rutas.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("SERVIDOR INICIADO");
});