const info= require("../../profesionalesJSON.json")




const renderHome=(req,res)=>{
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

    console.log(profesionales);


    res.render("pages/index.ejs",{especialidades,profesionales})

}

const direccion=(req,res)=>{

}
module.exports={
    renderHome,
    direccion
}

