/**
 * Empleador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    cedulaEmpleador:{
      type:'string'
    },
    nombreEmpleador:{
      type:'string'
    },
    apellidoEmpleador:{
      type:'string'
    },
    telefonoEmpleador:{
      type:'string'
    },
    correoEmpleador:{
      type:'string'
    },
    nombreEmpresaEmpleador:{
      type:'string'
    },
    contraseniaEmpleador:{
      type:'string'
    },
    // Add a reference to OfertaTrabajo
   ofertaTrabajos: {
     collection: 'OfertaTrabajo',
     via: 'idEmpleador'
   }
  }
};
