

//funcion pra validar la contraseña
//requisito 1: la contraseña debe tener al menos 8 caracteres
//requisito 2: la contraseña debe tener al menos un letra mayuscula
//requisito 3: la contraseña debe tener al menos un letra minuscula
//requisito 4: la contraseña debe tener al menos un numero

export class ContraseñaValidator {
    static validarContraseña(contraseña: string): boolean {
        // Requisito 1: La contraseña debe tener al menos 8 caracteres
        if (contraseña.length < 8) return false;

        // Requisito 2: La contraseña debe tener al menos una letra mayúscula
        if (!/[A-Z]/.test(contraseña)) return false;

        // Requisito 3: La contraseña debe tener al menos una letra minúscula
        if (!/[a-z]/.test(contraseña)) return false;

        // Requisito 4: La contraseña debe tener al menos un número
        if (!/\d/.test(contraseña)) return false;

        // La contraseña cumple con todos los requisitos
        return true;
    }
}







