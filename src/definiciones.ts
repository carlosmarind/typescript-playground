interface Persona {
    nombre: string,
    edad: number,
    nacionalidad: string
    direccion?: Direccion
}

interface Empleado extends Persona, Recepcionista {
    sueldo: number
}

interface Recepcionista {
    telefono: number
}

interface Direccion {
    calle: string,
    numero: number
}

interface Usuario {
    username: string,
    email: string,
    direccion: Direccion,
    url_avatar: string,
    rol?: string
    isLogged: boolean
}

interface RequestLibros {
    id?: number,
    titulo?: string,
    autor?: string,
    editorial?: string,
}

interface ResponseLibros {
    id: number,
    titulo: string,
    autor: string,
    editorial: string,
    estante: number
    categoria: string
    cantidad: number
}

export { Persona, Empleado, RequestLibros, ResponseLibros, Direccion };