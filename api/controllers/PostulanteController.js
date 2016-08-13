/**
 * EmpleadorController
 *
 * @description :: Server-side logic for managing Postulantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  loginPostulante: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Postulante.findOne({
      emailPostulante: parametros.correo
    }).exec(function(err, postulante) {
      console.log('entro a controller Login BACKEND');
      if (err) console.log(err);
      if (postulante) {
        if (parametros.contrasenia != postulante.contraseniaPostulante) {
          return res.badRequest({
            error: 'Contraseña Incorrecta'
          });
        } else {
          delete postulante.contraseniaPostulante;
          return res.ok(postulante);
        }
      }

    });
  },
  getPostulante: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Postulante.findOne({
      id: parametros.idPostulante
    }).exec(function(err, postulante) {
      if (err) console.log(err);
      return res.ok(postulante);
    });
  },
  updatePostulante: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Postulante.update({
      id: parametros.idPostulante
    }, {
      cedulaPostulante: parametros.cedulaPostulante,
      nombrePostulante: parametros.nombrePostulante,
      apellidoPostulante: parametros.apellidoPostulante,
      telefonoPostulante: parametros.telefonoPostulante,
      celularPostulante: parametros.celularPostulante,
      emailPostulante: parametros.emailPostulante,
      nacionalidadPostulante: parametros.nacionalidadPostulante,
      estadoCivilPostulante: parametros.estadoCivilPostulante,
      generoPostulante: parametros.generoPostulante,
      fechaNacimientoPostulante: parametros.fechaNacimientoPostulante,
      descripcionPerfilPostulante: parametros.descripcionPerfilPostulante,
      cvPostulante: parametros.cvPostulante,
      contraseniaPostulante: parametros.contraseniaPostulante,


    }).exec(function(err, postulante) {
      if (err) console.log(err);
      console.log('postulante updated', postulante);
      return res.ok(postulante[0]);
    });
  }
};
