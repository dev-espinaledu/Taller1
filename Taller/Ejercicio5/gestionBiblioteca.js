class Libro {
    #disponible;
    constructor(titulo, autor, disponible) {
        this.titulo = titulo;
        this.autor = autor;
        this.#disponible = disponible ? 1 : 0; // En MDN busqué cómo sustituir True y False
    }
    prestarLibro() {
        if (this.#disponible === 1) {
            this.#disponible = 0;
            console.log(`El libro ${this.titulo} ha sido prestado.`);
        } else {
            console.log(`El libro ${this.titulo} no está disponible para préstamo.`);
        }
    }
    devolverLibro() {
        if (this.#disponible === 0) {
            this.#disponible = 1;
            console.log(`El libro ${this.titulo} ha sido devuelto y está disponible.`);
        } else {
            console.log(`El libro ${this.titulo} ya está disponible.`);
        }
    }
    mostrarEstado() {
        const estado = this.#disponible === 1 ? "disponible" : "no disponible";
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Estado: ${estado}`);
    }
}
class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
        super(titulo, autor, 1); // Un libro digital siempre estará disponible, a diferencia de un libreo físico, aunque también depende de la cantidad de libros que haya
        this.formato = formato;
    }
    mostrarEstado() {
        super.mostrarEstado();
        console.log(`Formato: ${this.formato}`);
    }
}
let libro1 = new Libro("Lógica de Programación", "Johan Muñoz", 1);
let libroDigital = new LibroDigital("Deutschland", "Till Lindemann", "Doc");

libro1.mostrarEstado();
libro1.prestarLibro();
libro1.mostrarEstado();

libro1.devolverLibro();
libro1.mostrarEstado();

libroDigital.mostrarEstado();
libroDigital.prestarLibro();
libroDigital.mostrarEstado();