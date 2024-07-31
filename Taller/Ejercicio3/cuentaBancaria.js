class CuentaBancaria {
    #tipoCuenta;
    constructor(nombreTitular, saldo, tipoCuenta) {
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
        this.#tipoCuenta = tipoCuenta;
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log('El monto del depósito debe ser positivo.');
        }
    }
    retirar(monto) {
        if (monto > 0) {
            if (this.saldo >= monto) {
                if (this.#tipoCuenta === 'ahorro' || this.#tipoCuenta === 'corriente') {
                    this.saldo -= monto;
                    console.log(`Retiro exitoso. Nuevo saldo: ${this.saldo}`);
                } else {
                    console.log('Tipo de cuenta no permitido para retiros.');
                }
            } else {
                console.log('Saldo insuficiente.');
            }
        } else {
            console.log('El monto del retiro debe ser positivo.');
        }
    }
    consultarSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }
    mostrarInformación() {
        console.log(`Nombre del titular: ${this.nombreTitular}`);
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Tipo de cuenta: ${this.#tipoCuenta}`);
    }
}
let cuenta = new CuentaBancaria("Andrés Rivera", 1000000, "ahorro");

cuenta.consultarSaldo();
cuenta.depositar(500000);
cuenta.retirar(200000);

cuenta.mostrarInformación();