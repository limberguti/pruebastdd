import { db } from '../../../../api/db';

class DocenteService {
  async buscarDocentesPorApellidos(apellidos: string): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      db.query('SELECT * FROM docente WHERE APELLIDOS LIKE ?', [`%${apellidos}%`], (err: any, rows: any[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default DocenteService;
