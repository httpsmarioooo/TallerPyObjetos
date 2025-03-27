function semaforo(){
    this.estado = "rojo";
    this.cambiar = function(){
        if(this.estado == "rojo"){
            this.estado = "verde"
        }else if(this.estado == "verde") {
             this.estado = "amarillo"
        }else{
            this.estado = "rojo"
        }
        return this.estado
    }
}
semaforo1 = new semaforo();
console.log("Estado inicial: "+semaforo1.estado);
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());
console.log("Cambia: "+semaforo1.cambiar());

