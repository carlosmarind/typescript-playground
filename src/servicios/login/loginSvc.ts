import { LoginRequestDTO, LoginResponseDTO } from "./types.js";

function login(request: LoginRequestDTO): LoginResponseDTO | void {

    if (request.username === 'admin' && request.password === 'admin') {
        return {
            username: "admin",
            email: "admin@gmail.com",
            direccion: {
                calle: "avenida siempre viva",
                numero: 33
            },
            rol: ["admin"],
            edad: 33
        };
    }
    return;
}

export { login };