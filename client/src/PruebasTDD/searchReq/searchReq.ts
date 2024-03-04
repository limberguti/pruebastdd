import { db } from '../../../../api/db';

class RequerimientoService {
  async buscarRequerimientosPorDepartamento(search: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      db.query('SELECT * FROM requerimiento WHERE DEPARTAMENTO LIKE ?', [`%${search}%`], (err: any, result: any) => {
        if (err) {
          reject(new Error('Error al buscar requerimientos'));
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default RequerimientoService;
