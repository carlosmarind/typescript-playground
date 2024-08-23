import { Empleado, Persona, RequestLibros, ResponseLibros } from "./definiciones.js";
import { LoginRequestDTO } from "./servicios/login/types.js";
import { login } from "./servicios/login/loginSvc.js";

let numeros: string[] = ["1", "1", "2", "3", "4"];

let persona: Empleado = {
    nombre: "Macarena",
    edad: 15,
    nacionalidad: "desconocida",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    },
    sueldo: 1000000,
    telefono: 123456789
};

persona.nombre = "Josefa";
persona.edad = 30;
persona.nacionalidad = "chilena";

let otraPersona: Persona = {
    nombre: "Jose",
    edad: 20,
    nacionalidad: "chilena"
};

//console.log(`el nombre de la persona es: ${persona.nombre}`);
//console.log(otraPersona);

function crearPersona(nombre: string, edad: number, nacionalidad: string): Persona {

    //console.log(`nombre: ${nombre}, edad: ${edad}, nacionalidad: ${nacionalidad}`);
    return {
        nombre,
        edad,
        nacionalidad
    };
}

let resultado = crearPersona("Juan", -1, "chilena");
//console.log("el resutado es " + JSON.stringify(resultado));

const crearPeople = (nombre: string, edad: number, nacionalidad: string): Persona => {
    return {
        nombre: "Juan",
        edad: 25,
        nacionalidad: "chilena"
    }
}
type FuncionSaludo = (nombre: string, edad: number, nacionalidad: string) => Persona;
function saludar(miVariable: FuncionSaludo) {
    let persona = miVariable("Juan", 25, "chilena");
    console.log(`Hola ${persona.nombre}`);
}

//saludar(crearPeople);
//saludar(crearPersona);

let loginDTO: LoginRequestDTO = {
    username: "admin",
    password: "aadmin"
}


let loginResult = login(loginDTO);

console.log(`el resultado del login fue: ${JSON.stringify(loginResult)}`);






