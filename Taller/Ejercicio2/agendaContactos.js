class AgendarContacto {
    constructor(nombre, apellido, telefono, correoElectronico) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
    }
}
class Contacto {
    constructor() {
        this.contactos = [];
    }
    agregarContacto(contacto) {
        this.contactos.push(contacto); 
    }
    editarContacto(nombre, nuevoNombre, nuevoApellido, nuevoTelefono, nuevoCorreoElectronico) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                this.contactos[i].nombre = nuevoNombre;
                this.contactos[i].apellido = nuevoApellido;
                this.contactos[i].telefono = nuevoTelefono;
                this.contactos[i].correoElectronico = nuevoCorreoElectronico;  
                break;
            }
        }
    }
    eliminarContacto(nombre) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                this.contactos.splice(i, 1);
                break;
            }
        }
    }
    mostrarContacto() {
        for (let i = 0; i < this.contactos.length; i++) {
            console.log(`Nombre: ${this.contactos[i].nombre},
                Apellido: ${this.contactos[i].apellido},
                Teléfono: ${this.contactos[i].telefono},
                Correo: ${this.contactos[i].correoElectronico}`);
        }
    }
}
let misContactos = new Contacto();

let contacto1 = new AgendarContacto("Johan", "Muñoz", 3015454774, "johanmunoz@gmail.com");
let contacto2 = new AgendarContacto("Danllely", "Castro", 3215423654, "dannycastro@gmail.com");
let contacto3 = new AgendarContacto("María", "Rincón", 3116549833, "mariadelmar@gmail.com");
let contacto4 = new AgendarContacto("Estiven", "Dorado", 3234552120, "estivengold@gmail.com");
let contacto5 = new AgendarContacto("Jhojan", "Muriel", 3154521285, "muriel@gmail.com");

misContactos.agregarContacto(contacto1);
misContactos.agregarContacto(contacto2);
misContactos.agregarContacto(contacto3);
misContactos.agregarContacto(contacto4);
misContactos.agregarContacto(contacto5);

misContactos.mostrarContacto();

misContactos.eliminarContacto("Estiven");

misContactos.mostrarContacto();

misContactos.editarContacto("María", "María del Mar", "Rincón", 3124523689, "mariarincon@gmail.com");

misContactos.mostrarContacto();