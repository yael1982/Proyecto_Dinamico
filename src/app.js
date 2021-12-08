const express= require("express");
const app= express();
const path = require("path");
const info = require("../profesionalesJSON.json");
const router=require("./routes/centroRoutes")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
console.log(info);

app.use(express.json());
app.use("",router);








app.listen(4000,()=>{
    console.log("Corriendo en el puerto 3200")
});