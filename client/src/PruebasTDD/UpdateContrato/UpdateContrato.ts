import { db } from '../../../../api/db';

class UpdateContratoService {

    async actualizarContrato(idContrato: number, datosActualizados: any): Promise<string> {
        return new Promise<string>((resolve, reject) => {
          db.query('UPDATE contrato SET ? WHERE IDCONTRATO = ?', [datosActualizados, idContrato], (err: any, result: any) => {
            if (err) {
              reject(err);
            } else {
              if (result.affectedRows === 0) {
                resolve('Contrato no encontrado');
              } else {
                resolve('Contrato actualizado correctamente');
              }
            }
          });
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

export default UpdateContratoService;
