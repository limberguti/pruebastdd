import { db } from '../../../../api/db';

class CargoService {

  async actualizarCargo(idCargo: number, datosActualizados: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      db.query('UPDATE cargo SET ? WHERE IDCARGO = ?', [datosActualizados, idCargo], (err: any, result: any) => {
        if (err) {
          reject(err); 
        } else {
          if (result.affectedRows === 0) {
            resolve('Cargo no encontrado');
          } else {
            resolve('Cargo actualizado correctamente');
          }
        }
      });
    });
  }
  async obtenerCargoPorID(idCargo: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      db.query('SELECT * FROM tiempo WHERE IDTIEMPO = ?', [idCargo], (err: any, result: any) => {
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
