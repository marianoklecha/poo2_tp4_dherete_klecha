function LineaDeProduccion(...estaciones){
    var circuito= new Array();
    for(estacion in estaciones){
        circuito.push(estacion);
    }

}
module.exports=LineaDeProduccion;