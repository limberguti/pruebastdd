import { defineFeature, loadFeature } from 'jest-cucumber';
import DocenteService from './searchPersonal';
import { db } from '../../../../api/db';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/searchPersonal/searchPersonal.feature');

const docenteService = new DocenteService();

defineFeature(feature, (test) => {
  let apellidos: string;
  let originalData: any[];


  test('Buscar un docente por sus apellidos', ({ given, and, when, then }) => {
    given('que el endpoint "/docente" está disponible para buscar docentes', async () => {
      // Puedes hacer algunas inicializaciones aquí si es necesario
    });

    and('existen docentes en la base de datos', async () => {
      
    });

    when('hago una solicitud GET a "/docente" con el parámetro de búsqueda "ApellidosDocente"', async () => {
      apellidos = 'ApellidosDocente';
      await docenteService.buscarDocentesPorApellidos(apellidos);
    });

    then('debería recibir una respuesta con los docentes que coinciden con los apellidos', async () => {
      const result = await db.query('SELECT * FROM docente WHERE APELLIDOS LIKE ?', [`%${apellidos}%`]);
      // Verifica que el resultado coincida con tus expectativas
      expect(result).toBeDefined();
    });
  });
});
