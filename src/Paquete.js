const Producto = require('./Producto.js');

function Paquete(){
    this.productos = new Array();
    
    this.productos.push(new Producto(Tijera,5));
}

module.exports = Paquete;