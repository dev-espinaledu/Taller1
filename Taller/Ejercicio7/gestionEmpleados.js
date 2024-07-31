class Empleado {
    #salario;
    constructor(nombre, apellido, cargo, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.#salario = salario;
    }
    calcularSueldoNeto() {
        let deducciones = this.#calcularDeducciones();
        return this.#salario - deducciones;
    }
    #calcularDeducciones() {
        let porcentajeDeduccion = 1; // no sé cómo calcular el porcentaje de deducción, estuve investigando pero no encuentro una respuesta adecuada
        return this.#salario * porcentajeDeduccion;
    }
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario: ${this.#salario}`);
    }
}
let empleado1 = new Empleado("Johan", "Muñoz", "Desarrollador", 5000000);
let empleado2 = new Empleado("María", "Rincón", "Desarrolladora", 2800000);
let empleado3 = new Empleado("Danllely", "Castro", "Diseñadora", 3200000);

empleado1.mostrarDatos();
console.log(`Sueldo Neto: ${empleado1.calcularSueldoNeto()}`);

empleado2.mostrarDatos();
console.log(`Sueldo Neto: ${empleado2.calcularSueldoNeto()}`);

empleado3.mostrarDatos();
console.log(`Sueldo Neto: ${empleado3.calcularSueldoNeto()}`);