const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = (completado) => {
    cargarDB();
    if (completado.toString()) {
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado.toString() === completado.toString());
        listadoPorHacer = nuevoListado;
        return listadoPorHacer;
    } else {
        return listadoPorHacer;
    }

}



const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index > 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

const listarTareasPorCompletado = (completado) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado.toString() === completado.toString());
    listadoPorHacer = nuevoListado;
    return listadoPorHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    listarTareasPorCompletado
}