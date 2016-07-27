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
    emailEmpleador:{
      type:'string'
    },
    nombreEmpresaEmpleador:{
      type:'string'
    },
    contraseniaEmpleador:{
      type:'string'
    },
    idUsuario:{
      type:'integer'
    },
    // Add a reference to OfertaTrabajo
   OfertaTrabajos: {
     collection: 'OfertaTrabajo',
     via: 'idEmpleador'
   }


  }
};
