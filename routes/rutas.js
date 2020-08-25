module.exports = app=>{
    const infraestructura = require("../controllers/infraestructura_controlador.js");
    app.get("/sedes",infraestructura.encontrarSedes);
    app.get("/sedes/:cod_sede",infraestructura.encontrarSedeId);
    app.post("/sedes/",infraestructura.nuevaSede);
    app.put("/sedes/:cod_sede",infraestructura.modificarSede);
    app.delete("/sedes/:cod_sede",infraestructura.eliminarSede);

    app.get("/edificios",infraestructura.encontrarEdificios);
    app.get("/edificios/:cod_edificio",infraestructura.encontrarEdificioId);
    app.post("/edificios/",infraestructura.nuevoEdificio);
    app.put("/edificios/:cod_edificio",infraestructura.modificarEdificio);
    app.delete("/edificios/:cod_edificio",infraestructura.eliminarEdificio);
    
    app.get("/aulas",infraestructura.encontrarAulas);
    app.get("/aulas/:cod_aula",infraestructura.encontrarAulaId);
    app.post("/aulas/",infraestructura.nuevaAula);
    app.put("/aulas/:cod_aula",infraestructura.modificarAula);
    app.delete("/aulas/:cod_aula",infraestructura.eliminarAula);
}