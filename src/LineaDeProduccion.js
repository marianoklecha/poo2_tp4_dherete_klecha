function LineaDeProduccion(...estaciones){
    this.circuito= estaciones;
    this.recorrerCircuito=function(movedor){
        for(var i = this.circuito.length-1;i>0;i--){ 

            movedor.moverPaquetes(this.circuito[i-1],this.circuito[i]); 

       }
   }
    

}
module.exports=LineaDeProduccion;