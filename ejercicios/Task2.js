
// 1. Constructor de ListaCompras
function ListaCompras() {
    this.productos = []; // Lista vacía de productos

    // 2. Método agregar
    this.agregar = function (producto) {
        this.productos.push(producto); // Añade un producto al array
    };

    // 3. Método mostrar
    this.mostrar = function () {
        for (i = 0; i < this.productos.length; i++) {
            console.log((i+1)+". "+this.productos[i])
        }
    };
}

// 4. Crear una instancia de ListaCompras
let lista = new ListaCompras();

lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");

lista.mostrar();