module.exports = app=>{
    /**SUPER USUARIO**/
    //Personal
    const persona = require("../controllers/persona_controlador.js");
    app.post("/personal",persona.nuevoPersonal);
    //Estudiantes - Representantes
    app.post("/estudiante",persona.nuevoEstudiante);
    /**ADMINISTRATIVO**/
    //INFRAESTRUCTURA
    //Sede
    const infraestructura = require("../controllers/infraestructura_controlador.js");
    app.get("/sedes",infraestructura.encontrarSedes);
    app.get("/sedes/:cod_sede",infraestructura.encontrarSedeId);
    app.post("/sedes/",infraestructura.nuevaSede);
    app.put("/sedes/:cod_sede",infraestructura.modificarSede);
    app.delete("/sedes/:cod_sede",infraestructura.eliminarSede);
    //Edificios
    app.get("/edificios",infraestructura.encontrarEdificios);
    app.get("/edificios/:cod_edificio",infraestructura.encontrarEdificioId);
    app.post("/edificios/",infraestructura.nuevoEdificio);
    app.put("/edificios/:cod_edificio",infraestructura.modificarEdificio);
    app.delete("/edificios/:cod_edificio",infraestructura.eliminarEdificio);
    //Aulas
    app.get("/aulas",infraestructura.encontrarAulas);
    app.get("/aulas/:cod_aula",infraestructura.encontrarAulaId);
    app.post("/aulas/",infraestructura.nuevaAula);
    app.put("/aulas/:cod_aula",infraestructura.modificarAula);
    app.delete("/aulas/:cod_aula",infraestructura.eliminarAula);

    //ASIGNATURAS
    const asignatura = require("../controllers/asignatura_controlador.js");
    app.get("/asignaturas",asignatura.encontrarAsignatura);
    app.get("/asignaturas/:cod_nivel_educativo",asignatura.encontrarAsignaturaPorNivel);
    app.post("/asignaturas",asignatura.nuevaAsignatura);
    app.put("/asignaturas/:cod_asignatura",asignatura.modificarAsignatura);
    app.delete("/asignaturas/:cod_asignatura",asignatura.eliminarAsignatura);

    //PLANIFICACIÓN ACADÉMICA
    const planificacion = require ("../controllers/planificacion_controlador.js");
    //Periodo
    app.get("/planificacion/periodos",planificacion.encontrarPeriodos);
    app.post("/planificacion/periodos",planificacion.nuevoPeriodo);
    app.put("/planificacion/periodos/:cod_periodo_lectivo",planificacion.modificarPeriodo);
    app.delete("/planificacion/periodos/:cod_periodo_lectivo",planificacion.eliminarPeriodo);
    //Asignaturas y aulas
    
    //Paralelos (Modificar - Eliminar)
    app.get("/planificacion/paralelos",planificacion.encontrarParalelos);
    app.post("/planificacion/paralelos",planificacion.nuevoParalelo);


}