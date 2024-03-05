import { db } from '../../../../api/db';

class TiempoService {

    async agregarTiempo(nuevoTiempo: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            

            db.query('INSERT INTO tiempo ( DESCRIPCION, CODIGO, HORAS) VALUES (?,?,?)', [nuevoTiempo.DESCRIPCION, nuevoTiempo.CODIGO, nuevoTiempo.HORAS], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }



    async obtenerTiempoPorID(idTiempo: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            db.query('SELECT * FROM tiempo WHERE IDTIEMPO = ?', [idTiempo], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length === 0) {
                        reject(new Error('Tiempo no encontrado'));
                    } else {
                        resolve(result[0]);
                    }
                }
            });
        });
    }

}

export default TiempoService;
