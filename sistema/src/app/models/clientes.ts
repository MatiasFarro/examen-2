export class Clientes {
    _id?: string = '';
    nombre: String;
    email: String;
    telefono: Number;
    dni: Number;


    constructor(nombre: string, email: string, telefono: number, dni: number) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.dni = dni;
    }
}