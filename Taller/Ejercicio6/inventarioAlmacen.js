class Producto {
    #cantidadEnStock;
    constructor(codigoProducto, nombreProducto, cantidadEnStock) {
        this.codigoProducto = codigoProducto;
        this.nombreProducto = nombreProducto;
        this.#cantidadEnStock = cantidadEnStock;
    }
    agregarProducto(cantidad) {
        this.#cantidadEnStock += cantidad;
    }
    retirarProducto(cantidad) {
        if (this.#cantidadEnStock >= cantidad) {
            this.#cantidadEnStock -= cantidad;
        } else {
            console.log(`No hay suficiente stock de ${this.nombreProducto} para retirar ${cantidad}.`);
        }
    }
    mostrarStock() {
        return this.#cantidadEnStock;
    }
}
class Inventario {
    constructor() {
        this.productos = [];
    }
    agregarProducto(codigoProducto, nombreProducto, cantidad) {
        let productoEncontrado = false;
        for (let i = 0; i < this.productos.length; i++) { // Ya cambié el find por el for a petición de la instructora
            if (this.productos[i].codigoProducto === codigoProducto) {
                this.productos[i].agregarProducto(cantidad);
                productoEncontrado = true;
                break;
            }
        }
        if (!productoEncontrado) {
            let nuevoProducto = new Producto(codigoProducto, nombreProducto, cantidad);
            this.productos.push(nuevoProducto);
        }
    }
    retirarProducto(codigoProducto, cantidad) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigoProducto === codigoProducto) {
                this.productos[i].retirarProducto(cantidad);
                return;
            }
        }
        console.log(`Producto con el código ${codigoProducto} no ha sido encontrado en el inventario.`);
    }
    mostrarStock(codigoProducto) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigoProducto === codigoProducto) {
                console.log(`Stock de ${this.productos[i].nombreProducto}: ${this.productos[i].mostrarStock()}`);
                return;
            }
        }
        console.log(`Producto con código ${codigoProducto} no ha sido encontrado en el inventario.`);
    }
}
let miInventario = new Inventario();

miInventario.agregarProducto(1, "Papas Margarita", 20);
miInventario.agregarProducto(2, "Trululú", 30);
miInventario.agregarProducto(3, "Gansito", 20);

miInventario.mostrarStock(1);
miInventario.mostrarStock(2);
miInventario.mostrarStock(3);

miInventario.retirarProducto(1, 7);
miInventario.mostrarStock(1);

miInventario.retirarProducto(2, 19);

miInventario.agregarProducto(1, "Pepsi", 50);
miInventario.mostrarStock(1);