class ReservaHotel {
    #habitacionAsignada;
    constructor(nombreCliente, fechaReserva) {
        this.nombreCliente = nombreCliente;
        this.fechaReserva = fechaReserva;
        this.#habitacionAsignada = null;
    }
    reservarHabitacion(habitacionesDisponibles) {
        if (habitacionesDisponibles.length === 0) {
            console.log('No hay habitaciones disponibles.');
            return;
        }
        this.#habitacionAsignada = habitacionesDisponibles.pop();
        console.log(`Habitación ${this.#habitacionAsignada} asignada a ${this.nombreCliente} en la fecha ${this.fechaReserva}.`);
    }
    cancelarReserva() {
        if (this.#habitacionAsignada) {
            console.log(`Reserva cancelada para ${this.nombreCliente}. Habitación ${this.#habitacionAsignada} está ahora disponible.`);
            this.#habitacionAsignada = null;
            return;
        }
        console.log('No hay ninguna reserva activa para cancelar.');
    }
    mostrarReserva() {
        if (this.#habitacionAsignada) {
            console.log(`Reserva de ${this.nombreCliente} para la fecha ${this.fechaReserva}. Habitación asignada: ${this.#habitacionAsignada}.`);
            return;
        }
        console.log(`No hay ninguna habitación asignada para ${this.nombreCliente} en la fecha ${this.fechaReserva}.`);
    }
}
let habitacionesDisponibles = [102, 108, 204, 205, 209, 303, 305];

let reserva1 = new ReservaHotel("Oliver González", "01-08-2024");
reserva1.reservarHabitacion(habitacionesDisponibles);
reserva1.mostrarReserva();

let reserva2 = new ReservaHotel("Ana Velasco", "02-08-2024");
reserva2.reservarHabitacion(habitacionesDisponibles);
reserva2.mostrarReserva();

let reserva3 = new ReservaHotel("Kevin Estupiñán", "05-08-2024");
reserva3.reservarHabitacion(habitacionesDisponibles);
reserva3.mostrarReserva();

let reserva4 = new ReservaHotel("Valeria López", "14-08-2024");
reserva4.reservarHabitacion(habitacionesDisponibles);
reserva4.mostrarReserva();

let reserva5 = new ReservaHotel("Camila Sonne", "02-09 -2024");
reserva5.reservarHabitacion(habitacionesDisponibles);
reserva5.mostrarReserva();

reserva1.cancelarReserva();
reserva1.mostrarReserva();

reserva5.cancelarReserva();
reserva5.mostrarReserva();