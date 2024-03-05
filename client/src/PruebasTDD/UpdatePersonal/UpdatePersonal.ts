import { db } from '../../../../api/db';

class UpdatePersonalService {
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

export default UpdatePersonalService;
