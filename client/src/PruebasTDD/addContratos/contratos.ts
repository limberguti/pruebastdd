import { db } from '../../../../api/db';

class ContratoService {

    async agregarContrato(nuevoContrato: any): Promise<void> {
        return new Promise<void>((resolve, reject) => {
          

            db.query('INSERT INTO contrato (IDCONTRATO, IDDOCENTE, IDREQUERIMIENTO, FECHAINICIO, FECHAFIN, FUENTE, FECHA, CERTIFICACION_PRESUPUESTARIA, IDMEMO, ANALISTADELPROCESO, ARCHIVOMEMO) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [nuevoContrato.IDCONTRATO, nuevoContrato.IDDOCENTE, nuevoContrato.IDREQUERIMIENTO, nuevoContrato.FECHAINICIO, nuevoContrato.FECHAFIN, nuevoContrato.FUENTE, nuevoContrato.FECHA, nuevoContrato.CERTIFICACION_PRESUPUESTARIA, nuevoContrato.IDMEMO, nuevoContrato.ANALISTADELPROCESO, nuevoContrato.ARCHIVOMEMO], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }





    async actualizarContrato(idContrato: number, datosActualizados: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            db.query('UPDATE contrato SET ? WHERE IDCONTRATO = ?', [datosActualizados, idContrato, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.affectedRows === 0) {
                        resolve('Contrato no encontrado');
                    } else {
                        resolve('Contrato actualizado correctamente');
                    }
                }

            }]);
        });
    }

    async obtenerContratoPorID(idContrato: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            db.query('SELECT * FROM contrato WHERE IDCONTRATO = ?', [idContrato], (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length === 0) {
                        reject(new Error('Contrato no encontrado'));
                    } else {
                        resolve(result[0]);
                    }
                }
            });
        });
    }

}

export default ContratoService;
