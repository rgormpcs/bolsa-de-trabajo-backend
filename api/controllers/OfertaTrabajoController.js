/**
 * OfertaTrabajoController
 *
 * @description :: Server-side logic for managing ofertatrabajoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  updateOferta: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    OfertaTrabajo.update({
      id: parametros.idOfertaTrabajo
    }, {
      areaTrabajo: parametros.areaTrabajo,
      tipoDePuestoTrabajo: parametros.tipoDePuestoTrabajo,
      facultadTrabajo: parametros.facultadTrabajo,
      remuneracion: parametros.remuneracion,
      direccionTrabajo: parametros.direccionTrabajo,
      descripcionTrabajo: parametros.descripcionTrabajo,
      fechaInicioPublicacionTrabajo: parametros.fechaInicioPublicacionTrabajo,
      fechaFinPublicacionTrabajo: parametros.fechaFinPublicacionTrabajo,
    }).exec(function(err, ofertaTrabajo) {
      if (err) console.log(err);
      console.log('OfertaTrabajo updated', ofertaTrabajo);
      return res.ok(ofertaTrabajo[0]);
    });
  },
  getOfertaTrabajoPorEmpleador: function(req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    Empleador.findOne({
      id: parametros.idEmpleador
    }).exec(function(err, empleador) {
      if (err) console.log(err);
      return res.ok(empleador);
    });
  }

};
