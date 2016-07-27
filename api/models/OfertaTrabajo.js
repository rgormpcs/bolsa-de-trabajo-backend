/**
 * OfertaTrabajo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    areaTrabajo: {
      type: 'string'
    },
    tipoDePuestoTrabajo: {
      type: 'string'
    },
    facultadTrabajo: {
      type: 'string'
    },
    remuneración: {
      type: 'float'
    },
    direcciónTrabajo: {
      type: 'string'
    },
    descripciónTrabajo: {
      type: 'string'
    },
    fechaInicioPublicaciónTrabajo: {
      type: 'date'
    },
    fechaFinPublicacionTrabajo: {
      type: 'date'
    },
    // Add a reference to postulacion
    postulaciones: {
      collection: 'Postulacion',
      via: 'idOfertaTrabajo'
    },
    // Add a reference to User
    idEmpleador: {
      model: 'Empleador'
    }

  }
};
