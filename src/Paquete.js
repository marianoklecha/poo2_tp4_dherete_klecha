const Producto = require('./Producto.js');

function Paquete(largoLineaDeProduccion){
    this.productos = new Array(new Producto("Tijera",5));

    var randomUrgencia = Math.floor(Math.random() * (3 - 0) + 0);
    var tiposDeUrgencia = [1,1.5,2];

    this.urgencia = Math.floor((tiposDeUrgencia[randomUrgencia])*largoLineaDeProduccion);

}

module.exports = Paquete;