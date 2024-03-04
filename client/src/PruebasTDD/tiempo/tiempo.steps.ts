
import { jest } from '@jest/globals';

import tiempo from './tiempo';

const tiempoService = new tiempo();

Given('existe un tiempo con ID {int} en la base de datos', async (idTiempo: number) => {
    const nuevoTiempo = {
        IDTIEMPO: idTiempo,
        HORAS: 5,
        CODIGO: 'CD',
        DESCRIPCION: 'Descripción de ejemplo'
      };
      await tiempoService.agregarTiempo(nuevoTiempo);});

Given('no existe un tiempo con ID {int} en la base de datos', async (idTiempo: number) => {
    try {
        await tiempoService.obtenerTiempoPorID(idTiempo);
      } catch (error) {
        // Si el tiempo no se encuentra, está bien
        return;
      }
      throw new Error(`El tiempo con ID ${idTiempo} ya existe en la base de datos`);
    });

When('se actualiza el tiempo con ID {int} con datos actualizados', async (idTiempo: number) => {
    const datosActualizados = {
        HORAS: 10,
        CODIGO: 'ND',
        DESCRIPCION: 'Nueva descripción'
      };
      await tiempoService.actualizarTiempo(idTiempo, datosActualizados);
    });

When('se intenta actualizar el tiempo con ID {int}', async (idTiempo: number) => {
    const datosActualizados = {
        HORAS: 10,
        CODIGO: 'ND',
        DESCRIPCION: 'Nueva descripción'
      };
      try {
        await tiempoService.actualizarTiempo(idTiempo, datosActualizados);
      } catch (error) {
        // Si se produce un error, está bien
        return;
      }
      throw new Error(`Se esperaba un error al intentar actualizar el tiempo con ID ${idTiempo}`);
    });

Then('se debería recibir un mensaje de éxito', async () => {
  // Aquí podrías verificar que se reciba un mensaje de éxito después de la actualización exitosa
});

Then('se debería recibir un mensaje de error', async () => {
  // Aquí podrías verificar que se reciba un mensaje de error después de la actualización fallida
});
function Given(arg0: string, arg1: (idTiempo: number) => Promise<void>) {
    throw new Error('Function not implemented.');
}

function When(arg0: string, arg1: (idTiempo: number) => Promise<void>) {
    throw new Error('Function not implemented.');
}

function Then(arg0: string, arg1: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

