import { db } from '../../../../api/db';

class RequerimientoService {

    async agregarRequerimiento(nuevoRequerimiento: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            

            db.query('INSERT INTO requerimiento ( IDCARGO, SEDE, DEPARTAMENTO, DENOMINACION, DEDICACION) VALUES (?,?,?,?,?)', [ nuevoRequerimiento.IDCARGO, nuevoRequerimiento.SEDE, nuevoRequerimiento.DEPARTAMENTO, nuevoRequerimiento.DENOMINACION, nuevoRequerimiento.DEDICACION], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }



    async obtenerRequerimientoPorID(idRequerimiento: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            db.query('SELECT * FROM requerimiento WHERE IDREQUERIMIENTO = ?', [idRequerimiento], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length === 0) {
                        reject(new Error('Requerimiento no encontrado'));
                    } else {
                        resolve(result[0]);
                    }
                }
            });
        });
    }

}

export default RequerimientoService;
