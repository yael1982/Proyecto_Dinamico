const info= require("../../profesionalesJSON.json")

const dataMutual=require("../../mutuales.json");


    
 


const especialidades=[]
const profesionales=[]
   
    info.forEach(data => {
        if(!(especialidades.find(el=> el === data.especialidad))){
            especialidades.push(data.especialidad)
        }
        if(!(profesionales.find(el=> el === data.nombre))){
            profesionales.push(data.nombre)
        }
        
    });

const renderHome=(req,res)=>{
    
    console.log(profesionales);

    res.render("pages/index.ejs",{especialidades,profesionales});

}

const addTurnos=(req,res)=>{
    
    res.render("pages/turnos.ejs",{profesionales,dataMutual});

}


const direccion=(req,res)=>{
    res.render("pages/dondeestamos");

}

const getForm= (req,res)=>{
    res.render("pages/laboratorio")
}



module.exports={
    renderHome,
    direccion,
    addTurnos,
    getForm

};

