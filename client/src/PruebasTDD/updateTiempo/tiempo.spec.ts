import { defineFeature, loadFeature } from 'jest-cucumber';

import tiempo from './tiempo';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/updateTiempo/tiempo.feature');

const tiempoService = new tiempo();


defineFeature(feature, (test) => {
  test("Actualizar tiempo existente correctamente", ({ given, when, then }) => {
    let idTiempo: number;

    given(
      /^existe un tiempo con ID (\d+) en la base de datos$/,
      async (id: string) => {
        idTiempo = parseInt(id);
      }
    );

    when(
      /^se actualiza el tiempo con ID (\d+) con datos actualizados$/,
      async (id) => {
        const datosActualizados = {
          HORAS: 100,
          CODIGO: "DT",
          DESCRIPCION: "Nueva descripción 2",
        };
        const mensaje = await tiempoService.actualizarTiempo(
          idTiempo,
          datosActualizados);
          expect(mensaje).toEqual("Tiempo actualizado correctamente");

        }
    );

    then("se debería recibir un mensaje de éxito", async () => {
      const tiempoActualizado = await tiempoService.obtenerTiempoPorID(
        idTiempo
      );
      expect(tiempoActualizado.HORAS).toEqual(100);
      expect(tiempoActualizado.CODIGO).toEqual("DT");
      expect(tiempoActualizado.DESCRIPCION).toEqual("Nueva descripción 2");
    });
  });

  test("Intentar actualizar tiempo inexistente", ({ given, when, then }) => {
    let idTiempo: number;
    given(
      /^no existe un tiempo con ID (\d+) en la base de datos$/,
      async (id: string) => {
        idTiempo = parseInt(id);
        try {
          await tiempoService.obtenerTiempoPorID(parseInt(id));
        } catch (error) {
          return;
        }
        throw new Error(`El tiempo con ID ${id} ya existe en la base de datos`);
      }
    );

    when(
      /^se intenta actualizar el tiempo con ID (\d+)$/,
      async (id: string) => {
        const datosActualizados = {
          HORAS: 10,
          CODIGO: "ND",
          DESCRIPCION: "Nueva descripción",
        };
        await tiempoService.actualizarTiempo(idTiempo, datosActualizados);

      }
    );

    then("se debería recibir un mensaje de error", async () => {
    });
  });
});
