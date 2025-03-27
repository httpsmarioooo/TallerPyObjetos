
function libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado) {
            console.log("El libro ya está prestado");
        } else {
            this.prestado = true;
            console.log("El libro ha sido prestado");
        }
    };
}

let libro1 = new libro("Hola", "De Carlos");
libro1.prestar(); // Intento 1
libro1.prestar(); // Intento 2
