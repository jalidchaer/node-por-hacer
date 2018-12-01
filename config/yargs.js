const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs').command('crear', 'crear un elemento por hacer', {
    descripcion
}).command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
}).command('borrar', 'borrar un elemento', {
    descripcion
}).command('listar', 'listar las tareas por completado', {
    completado
}).help().argv;


module.exports = {
    argv
}