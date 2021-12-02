
const express= require("express");
const routes=express.Router();

const {
    renderHome,
  /*  direccion,
    getForm,
    addTurnos*/

}=require("../controllers/centroControllers");

routes.get("/",renderHome);

/*routes.get("/dondeestamos");

routes.get("/laboratorio",getForm);

routes.get("/turnos", addTurnos);*/

module.exports=routes;
