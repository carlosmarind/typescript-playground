import { Direccion } from "../../definiciones.js";

interface LoginRequestDTO {
    username: string,
    password: string
}

interface LoginResponseDTO {
    username: string,
    email: string,
    direccion: Direccion,
    rol: string[]
    edad: number
}

export { LoginRequestDTO, LoginResponseDTO }