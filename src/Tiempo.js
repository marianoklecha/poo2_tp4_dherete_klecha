var tiempoActual = (function(){
    var tiempo = 0;
    function sumarTiempo(){
        tiempo++;
    }
    return {
        sumarTiempo:sumarTiempo
    }
})();

module.exports = tiempoActual;
