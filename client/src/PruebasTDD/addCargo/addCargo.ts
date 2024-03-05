import { db } from '../../../../api/db';

class CargoService {

    async agregarCargo(nuevoCargo: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (!nuevoCargo.IDCARGO) {
                reject(new Error('El campo CODIGO es requerido'));
                return;
            }

            db.query('INSERT INTO cargo (IDCARGO, IDTIEMPO, TIPOPERSONAL, CATEGORIA, NIVEL, GRADO, REMUNERACION) VALUES (?,?,?,?,?,?,?)', [nuevoCargo.IDCARGO, nuevoCargo.IDTIEMPO, nuevoCargo.TIPOPERSONAL, nuevoCargo.CATEGORIA, nuevoCargo.NIVEL, nuevoCargo.GRADO, nuevoCargo.REMUNERACION], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }



    async obtenerCargoPorID(idCargo: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            db.query('SELECT * FROM cargo WHERE IDCARGO = ?', [idCargo], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length === 0) {
                        reject(new Error('Cargo no encontrado'));
                    } else {
                        resolve(result[0]);
                    }
                }
            });
        });
    }

}

export default CargoService;
