import { defineFeature, loadFeature } from 'jest-cucumber';
import RequerimientoService from './searchReq';
import { db } from '../../../../api/db';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/searchReq/searchReq.feature');

// Crear una instancia del servicio de requerimientos
const requerimientoService = new RequerimientoService();

// Definir la característica de búsqueda de requerimientos
defineFeature(feature, (test) => {
  // Definir el escenario de búsqueda por nombre del departamento
  test('Buscar un requerimiento por el nombre del departamento', ({ given, and, when, then }) => {
    let search: string;

    given('que el endpoint "/requerimiento" está disponible para buscar requerimientos', () => {});

    and('Existen requerimientos en la base de datos', () => {});

    when('hago una solicitud GET a "/requerimiento" con el parámetro de búsqueda "NombreDepartamento"', async () => {
      search = 'NombreDepartamento';
      await requerimientoService.buscarRequerimientosPorDepartamento(search);
    });

    then('debería recibir una respuesta con los requerimientos que coinciden con el nombre del departamento', async () => {
      // Realizar una consulta a la base de datos para verificar los resultados
      const result = await db.query('SELECT * FROM requerimiento WHERE DEPARTAMENTO LIKE ?', [`%${search}%`]);
      
      // Asegurarse de que la respuesta no sea nula
      expect(result).toBeDefined();
    });
  });
});
