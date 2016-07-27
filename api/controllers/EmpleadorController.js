/**
 * EmpleadorController
 *
 * @description :: Server-side logic for managing empleadors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Empleador.findOne({
      correoEmpleador: parametros.correo
    }).exec(function(err, empleador) {

      if (err) console.log(err);

      if (parametros.contrasenia != empleador.contraseniaEmpleador) {
        return res.badRequest({
          error: 'Contraseña Incorrecto'
        });
      } else {
        delete empleador.contraseniaEmpleador;
        return res.ok(empleador);
      }
    });
  }
};
