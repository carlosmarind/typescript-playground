# servicios:

## login

__path__: src/servicios/login/loginSvc.ts

__definicion__: src/servicios/login/types.ts

__interfaz de consulta__:

    interface LoginRequestDTO {
        username: string,
        password: string
    }
    
__interfaz de respuesta__:

    interface LoginResponseDTO {
        username: string,
        email: string,
        direccion: Direccion,
        rol: string[]
        edad: number
    }
    