export class Mesero {
    _id?: string = '';
    nombre: string;
    email: string;
    password: string;
    telefono: number;
    estado: boolean;

    constructor(nombre: string, email: string, telefono: number, password: string, estado: boolean) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.estado = estado;
    }
}