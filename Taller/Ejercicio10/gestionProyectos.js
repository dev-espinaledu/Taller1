class Proyecto {
    #estado;
    constructor(nombreProyecto, fechaInicio, fechaFin) {
        this.nombreProyecto = nombreProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.#estado = "pendiente";
    }
    iniciarProyecto() {
        if (this.#estado === "pendiente") {
            this.#estado = "en progreso";
            console.log(`El proyecto ${this.nombreProyecto} ha iniciado.`);
        } else {
            console.log(`El proyecto ${this.nombreProyecto} no puede iniciarse: ${this.#estado}.`);
        }
    }
    finalizarProyecto() {
        if (this.#estado === "en progreso") {
            this.#estado = "completado";
            console.log(`El proyecto ${this.nombreProyecto} ha sido completado.`);
        } else {
            console.log(`El proyecto ${this.nombreProyecto} no puede completarse: ${this.#estado}.`);
        }
    }
    mostrarEstado() {
        console.log(`Estado del proyecto ${this.nombreProyecto}: ${this.#estado}.`);
    }
}
let proyecto1 = new Proyecto("Fast Training", "07-08-2023", "02-04-2025");
let proyecto2 = new Proyecto("Cova", "15-03-2024", "07-01-2026");

proyecto1.mostrarEstado();
proyecto1.iniciarProyecto();
proyecto1.mostrarEstado();
proyecto1.finalizarProyecto();
proyecto1.mostrarEstado();

proyecto2.mostrarEstado();
proyecto2.iniciarProyecto();
proyecto2.mostrarEstado();

