import { defineFeature, loadFeature } from 'jest-cucumber';
import UpdateContratoService from './UpdateContrato';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/UpdateContrato/UpdateContrato.feature');

const updateContratoService = new UpdateContratoService();

defineFeature(feature, (test) => {
  test('Actualizar contrato existente correctamente', ({ given, when, then }) => {
    let idContrato: number;

    given(/^existe un contrato con ID (\d+) en la base de datos$/, async (id: string) => {
      idContrato = parseInt(id);
      // Aquí podrías insertar un contrato de prueba en la base de datos para garantizar su existencia
    });

    when(/^se actualiza el contrato con ID (\d+) con datos actualizados$/, async (id: string) => {
        const datosActualizados = {
          FECHAINICIO: '2024-01-01',
          FECHAFIN: '2023-12-31',
          FECHA: '2024-01-01',
        };
        const mensaje = await updateContratoService.actualizarContrato(idContrato, datosActualizados);
        expect(mensaje).toEqual('Contrato actualizado correctamente');
      });

      then('se debería recibir un mensaje de éxito', async () => {
        const contratoActualizado = await updateContratoService.obtenerContratoPorID(idContrato);
        expect(contratoActualizado.FECHAINICIO).toEqual('2023-01-01'); // Verificar que la fecha de inicio se haya actualizado correctamente
        expect(contratoActualizado.FECHAFIN).toEqual('2023-12-31'); // Verificar que la fecha de fin se haya actualizado correctamente
        expect(contratoActualizado.FECHA).toEqual('2023-01-01'); // Verificar que la fecha del contrato se haya actualizado correctamente
        // Agrega más expectativas según tus necesidades
      });
  });

  
});
