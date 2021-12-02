const express= require("express");
const app= express();
const path = require("path");
const info = require("../profesionalesJSON.json");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
console.log(info);

app.use(express.json());

app.get("/",(req,res)=>{
    
    res.render("pages/index.ejs");

})

app.get("/dondeestamos",(req,res)=>{
    
    res.render("pages/dondeestamos.ejs");

})

app.get("/laboratorio",(req,res)=>{
    
    res.render("pages/laboratorio.ejs");

})

app.get("/turnos",(req,res)=>{
    
    res.render("pages/turnos.ejs");


})



app.post("/especialistasJSON.json",(req,res)=>{
    let dato = req.body

    res.send("Recibido");
})









app.listen(4000,()=>{
    console.log("Corriendo en el puerto 4000")
});