/**
 * OfertaTrabajoController
 *
 * @description :: Server-side logic for managing ofertatrabajoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    registrarNuevaOfertaBE: function (req, res) {

        for (var i = 0; i < $scope.ofertaTrabajo.length; i++) {

            if ($scope.empleador.idEmpleador == $scope.ofertaTrabajo[i].id) {

                respuesta.data.idEmpleador = $scope.ofertaTrabajo[i];
            }

        }
        $scope.ofertaTrabajo.push(respuesta.data);

        $scope.ofertaTrabajo = {
            areaTrabajo: ""
            , tipoDePuestoTrabajo: ""
            , facultadTrabajo: ""
            , remuneracion: ""
            , direccionTrabajo: ""
            , descripcionTrabajo: ""
            , fechaInicioPublicacionTrabajo: ""
            , fechaFinPublicacionTrabajo: ""
            , idEmpleador: $stateParams.idEmpleador            
        }
    
        , function (error) {
            console.log(error);
        }
    }

};