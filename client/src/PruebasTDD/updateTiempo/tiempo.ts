import { db } from '../../../../api/db';

class TiempoService {

  async actualizarTiempo(idTiempo: number, datosActualizados: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      db.query('UPDATE tiempo SET ? WHERE IDTIEMPO = ?', [datosActualizados, idTiempo], (err: any, result: any) => {
        if (err) {
          reject(err); 
        } else {
          if (result.affectedRows === 0) {
            resolve('Tiempo no encontrado');
          } else {
            resolve('Tiempo actualizado correctamente');
          }
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
