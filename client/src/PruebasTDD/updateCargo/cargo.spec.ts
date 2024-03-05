import { defineFeature, loadFeature } from 'jest-cucumber';

import cargo from './cargo';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/updateCargo/cargo.feature');

const cargoService = new cargo();

defineFeature(feature, (test) => {
    test('Actualizar cargo existente correctamente', ({ given, when, then }) => {
        let idCargo: number;

        given(/^existe un cargo con ID (\d+) en la base de datos$/, async (id: string) => {
            idCargo = parseInt(id);
        });

        when(/^se actualiza el cargo con ID (\d+) con datos actualizados$/, async (id) => {
            const datosActualizados = {
                NIVEL: 5,
                GRADO: 7,
                REMUNERACION: 3999.99
            };
            const mensaje = await cargoService.actualizarCargo(idCargo, datosActualizados);
            expect(mensaje).toEqual('Cargo actualizado correctamente');
        });


        then('se debería recibir un mensaje de éxito', async () => {
            const datosActualizado = await cargoService.obtenerCargoPorID(idCargo);
            expect(datosActualizado.NIVEL).toEqual(5);
            expect(datosActualizado.GRADO).toEqual(7);
            expect(datosActualizado.DESCRIPCION).toEqual(3999.99);
        });
    });


});
