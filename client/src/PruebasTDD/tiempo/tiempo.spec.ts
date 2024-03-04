import { defineFeature, loadFeature } from 'jest-cucumber';

import tiempo from './tiempo';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/tiempo/tiempo.feature');

const tiempoService = new tiempo();

defineFeature(feature, (test) => {
  test('Actualizar tiempo existente correctamente', ({ given, when, then }) => {
    let idTiempo: number;

    given(/^existe un tiempo con ID (\d+) en la base de datos$/, async (id: string) => {
      idTiempo = parseInt(id);


/*
      const nuevoTiempo = {
        IDTIEMPO: 9,
        HORAS: 5,
        CODIGO: 'CD',
        DESCRIPCION: 'Descripción de ejemplo'
      };
    await tiempoService.agregarTiempo(nuevoTiempo);*/    });

    when(/^se actualiza el tiempo con ID (\d+) con datos actualizados$/, async (id) => {
      const datosActualizados = {
        HORAS: 100,
        CODIGO: 'DT',
        DESCRIPCION: 'Nueva descripción '
      };
      const mensaje = await tiempoService.actualizarTiempo(idTiempo, datosActualizados);
      expect(mensaje).toEqual('Tiempo actualizado correctamente');
    });


    then('se debería recibir un mensaje de éxito', async () => {
      const tiempoActualizado = await tiempoService.obtenerTiempoPorID(idTiempo);
      expect(tiempoActualizado.HORAS).toEqual(100);
      expect(tiempoActualizado.CODIGO).toEqual('DT');
      expect(tiempoActualizado.DESCRIPCION).toEqual('Nueva descripción ');
    });
  });

  test('Intentar actualizar tiempo inexistente', ({ given, when, then }) => {
    given(/^no existe un tiempo con ID (\d+) en la base de datos$/, async (id: string) => {
      // Implementación para asegurarse de que no haya un tiempo con ese ID en la base de datos
    });

    when(/^se intenta actualizar el tiempo con ID (\d+)$/, async (id: string) => {
      // Implementación para intentar actualizar un tiempo con un ID inexistente
    });

    then('se debería recibir un mensaje de error', async () => {
      // Implementación para verificar que se reciba un mensaje de error
    });
  });
});
