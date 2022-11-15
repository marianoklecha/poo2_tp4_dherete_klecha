const Producto = require('./Producto.js');

function Paquete(largoLineaDeProduccion,destino){
    this.productos = new Array(new Producto("Tijera",5),new Producto("Martillo",15));

    var randomUrgencia = Math.floor(Math.random() * (3 - 0) + 0);
    var tiposDeUrgencia = [1,1.5,2];
    this.urgencia = Math.floor((tiposDeUrgencia[randomUrgencia])*largoLineaDeProduccion);

    this.destino=destino;
    this.restarUrgencia=function(){
        this.urgencia-=1;
    }

}

module.exports = Paquete;