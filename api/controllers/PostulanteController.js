/**
 * EmpleadorController
 *
 * @description :: Server-side logic for managing Postulantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Postulante.findOne({
      correoPostulante: parametros.correo
    }).exec(function(err, postulante) {

      if (err) console.log(err);

      if (parametros.contrasenia != postulante.contraseniaPostulante) {
        return res.badRequest({
          error: 'Contraseña Incorrecto'
        });
      } else {
        delete postulante.contraseniaPostulante;
        return res.ok(postulante);
      }
    });
  }
};
