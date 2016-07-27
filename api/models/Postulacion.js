/**
 * Postulacion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fechaPostulacion: {
      type: 'date'
    },

    // Add a reference to postulante
    idPostulante: {
      model: 'Postulante'
    },
    // Add a reference to OfertaTrabajo
    idOfertaTrabajo: {
      model: 'OfertaTrabajo'
    }
  }
};
