import { db } from '../../../../api/db';

class LoginService {
    async IngresarCredenciales(nuevoLogin: { nombreus: string; contraseniaus: string }): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            // Asegúrate de que el query es correcto y corresponde con tu estructura de la base de datos
            db.query('SELECT * FROM usuario WHERE nombreus = ?', [nuevoLogin.nombreus], (err: any, result: any) => {
                if (err) {
                    // Manejo de errores de la base de datos
                    reject(new Error('Error al consultar la base de datos'));
                } else if (result.length === 0) {
                    // Ningún usuario encontrado con ese nombre
                    reject(new Error('Usuario no encontrado'));
                } else {
                    const usuario = result[0];
                    if (usuario.contraseniaus === nuevoLogin.contraseniaus) {
                        // Las credenciales son correctas
                        resolve('Bienvenido');
                    } else {
                        // Contraseña incorrecta
                        reject(new Error('Contraseña incorrecta'));
                    }
                }
            });
        });
    }
}

export default LoginService;
