const Centro = require('./Centro.js');

function CentroDistribucion(){
    Centro.call();
    if(!(this instanceof CentroDistribucion)){
        return new CentroDistribucion();
    }
}


CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;