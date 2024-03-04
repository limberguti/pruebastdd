import { db } from '../../../../api/db';

class PersonalService {

    async agregarPersonal(nuevoPersonal: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (!nuevoPersonal.IDDOCENTE) {
                reject(new Error('El campo CODIGO es requerido'));
                return;
            }

            db.query('INSERT INTO docente (IDDOCENTE, APELLIDOS, NOMBRES, CEDULA, NACIONALIDAD, GENERO, CORREO_PERSONAL, CORREO_INSTITUCIONAL, CIUDAD, PROVINCIA, NROPERSONAL, CAMPUSSEDEPERSONAL, OBSERVACIONESPERSONAL) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [nuevoPersonal.IDDOCENTE, nuevoPersonal.APELLIDOS, nuevoPersonal.NOMBRES, nuevoPersonal.CEDULA, nuevoPersonal.NACIONALIDAD, nuevoPersonal.GENERO, nuevoPersonal.CORREO_PERSONAL, nuevoPersonal.CORREO_INSTITUCIONAL, nuevoPersonal.CIUDAD, nuevoPersonal.PROVINCIA, nuevoPersonal.NROPERSONAL, nuevoPersonal.CAMPUSSEDEPERSONAL, nuevoPersonal.OBSERVACIONESPERSONAL], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }





    async actualizarPersonal(idPersonal: number, datosActualizados: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            db.query('UPDATE docente SET ? WHERE IDDOCENTE = ?', [datosActualizados, idPersonal], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.affectedRows === 0) {
                        resolve('Personal no encontrado');
                    } else {
                        resolve('Personal actualizado correctamente');
                    }
                }
            });
        });
    }

    async obtenerPersonalPorID(idPersonal: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            db.query('SELECT * FROM docente WHERE IDDOCENTE = ?', [idPersonal], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length === 0) {
                        reject(new Error('Personal no encontrado'));
                    } else {
                        resolve(result[0]);
                    }
                }
            });
        });
    }

}

export default PersonalService;
