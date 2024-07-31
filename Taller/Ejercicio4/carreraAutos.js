// solucionar este punto a partir de lo que hemos visto en anteriores clases

class Auto {
    #velocidadMáxima;
    #combustibleActual;
    constructor(marca, modelo, velocidadMáxima, combustibleActual) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidadMáxima = velocidadMáxima;
        this.#combustibleActual = combustibleActual;
        this.velocidadActual = 0;
    }
    acelerar(incremento) {
        if (this.#combustibleActual > 0) {
            // Aumenta la velocidad hasta la velocidad máxima del auto
            this.velocidadActual += incremento;
            if (this.velocidadActual > this.#velocidadMáxima) {
                this.velocidadActual = this.#velocidadMáxima;
            }
            // Disminuye el combustible al acelerar
            this.#combustibleActual -= incremento * 1;
            if (this.#combustibleActual < 0) {
                this.#combustibleActual = 0;
            }
            console.log(`El auto ha acelerado. La velocidad actual es de: ${this.velocidadActual} km/h, el combustible actual es de: ${this.#combustibleActual} litros.`);
            return;
        }
        console.log("No hay suficiente combustible para acelerar.");
    }
    frenar(decremento) {
        this.velocidadActual -= decremento;
        if (this.velocidadActual < 0) {
            this.velocidadActual = 0;
        }
        console.log(`El auto ha frenado. La velocidad actual es de: ${this.velocidadActual} km/h.`);
    }
    recargarCombustible(cantidad) {
        this.#combustibleActual += cantidad;
        // Aquí se limita el combustible a una cierta cantidad
        if (this.#combustibleActual > 100) {
            this.#combustibleActual = 100;
        }
        console.log(`El combustible se ha recargado. EL combustible actual es de: ${this.#combustibleActual} litros.`);
    }
    mostrarEstado() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Velocidad máxima: ${this.#velocidadMáxima} km/h`);
        console.log(`Velocidad actual: ${this.velocidadActual} km/h`);
        console.log(`Combustible actual: ${this.#combustibleActual} litros`);
    }
}
let auto = new Auto("Audi", "A5", 180, 50);

auto.mostrarEstado();

auto.acelerar(50);
auto.frenar(20);
auto.recargarCombustible(20);

auto.mostrarEstado();