
function Termometro() {
    this.actualizar = function (grados) {
        if (grados > 30) {
            console.log("¡Hace calor!");
        } else if (grados < 10) {
            console.log("¡Hace frío!");
        } else {
            console.log("Temperatura agradable");
        }
    };
}

// 3. Crear una instancia de Termómetro
let termometro = new Termometro();
termometro.actualizar(5);   // ¡Hace frío!
termometro.actualizar(20);  // Temperatura agradable
termometro.actualizar(35);  // ¡Hace calor!
