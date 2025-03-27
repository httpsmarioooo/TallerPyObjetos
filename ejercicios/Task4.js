
function Termometro() {
    this.actualizar = function (grados) {
        if (grados > 30) {
            console.log("¡Hace calor ahhhhhh!");
        } else if (grados < 10) {
            console.log("¡Hace fi fi fi fri frío!");
        } else {
            console.log("Temperatura agradable");
        }
    };
}
// 3. Crear una instancia de Termómetro
let termometro = new Termometro();
termometro.actualizar(5);   
termometro.actualizar(20);  
termometro.actualizar(35);  
