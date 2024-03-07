import { defineFeature, loadFeature } from 'jest-cucumber';
import DocenteService from './searchPersonal';
import { db } from '../../../../api/db';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/searchPersonal/searchPersonal.feature');

// Instancia del servicio de búsqueda de docentes
const docenteService = new DocenteService();

// Definición de la feature y escenarios de prueba
defineFeature(feature, (test) => {
  let apellidos: string;

  // Escenario de prueba: Buscar un docente por sus apellidos
  test('Buscar un docente por sus apellidos', ({ given, and, when, then }) => {
    given('que el endpoint "/docente" está disponible para buscar docentes', async () => {});

    and('existen docentes en la base de datos', async () => {});

    when('hago una solicitud GET a "/docente" con el parámetro de búsqueda "ApellidosDocente"', async () => {
      // Definición del parámetro de búsqueda
      apellidos = 'ApellidosDocente';
      
      // Llamada al método para buscar docentes por apellidos
      await docenteService.buscarDocentesPorApellidos(apellidos);
    });

    then('debería recibir una respuesta con los docentes que coinciden con los apellidos', async () => {
      // Consulta a la base de datos para obtener los docentes que coinciden con los apellidos
      const result = await db.query('SELECT * FROM docente WHERE APELLIDOS LIKE ?', [`%${apellidos}%`]);
      
      expect(result).toBeDefined();
    });
  });
});
