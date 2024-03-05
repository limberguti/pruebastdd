import { db } from '../../../../api/db';

class ReqService {

  async actualizarRequerimiento(idrequerimiento: number, datosActualizados: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      db.query('UPDATE requerimiento SET ? WHERE IDREQUERIMIENTO = ?', [datosActualizados, idrequerimiento], (err: any, result: any) => {
        if (err) {
          return reject(err); 
        } else {
          if (result.affectedRows === 0) {
            resolve('Requerimiento no encontrado');
          } else {
            resolve('Requerimiento actualizado correctamente');
          }
        }
      });
    });
  }

  async obtenerRequerimientoPorID(idrequerimiento: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      db.query('SELECT * FROM requerimiento WHERE IDREQUERIMIENTO = ?', [idrequerimiento], (err: any, result: any) => {
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

export default ReqService;
