/**
 * Postulante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cedulaPostulante: {
      type:'string'
    },
    nombrePostulante: {
      type:'string'
    },
    apellidoPostulante: {
      type:'string'
    },
    telefonoPostulante: {
      type:'string'
    },
    celularPostulante: {
      type:'string'
    },
    emailPostulante: {
      type:'string'
    },
    nacionalidadPostulante: {
      type:'string'
    },
    estadoCivilPostulante: {
      type:'string'
    },
    generoPostulante: {
      type:'string'
    },
    fechaNacimientoPostulante: {
      type:'string'
    },
    descripcionPerfilPostulante: {
      type:'string'
    },
    cvPostulante: {
      type:'string'
    },
    contraseniaPostulante: {
      type:'string'
    },
    // Add a reference to Postulacion
    postulaciones: {
      collection: 'postulacion',
      via: 'idPostulante'
    }
  }
};
