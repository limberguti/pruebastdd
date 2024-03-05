import { defineFeature, loadFeature } from 'jest-cucumber';

import Tiempo from './addTiempo';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/addTiempo/addTiempo.feature');

const TiempoService = new Tiempo();

defineFeature(feature, (test) => {

    test('Crear un nuevo tiempo', ({ given, when, then }) => {
        let nuevoTiempo: any;
        given('que tenga datos el tiempo', () => {
            nuevoTiempo = {
                IDTIEMPO: 9,
                DESCRIPCION: 'Tiempo completo',
                CODIGO: 'TC',
                HORAS: 40,
            };
        }
        );

        when('creo un nuevo tiempo', async () => {
            await TiempoService.agregarTiempo(nuevoTiempo);
        });

        then('el tiempo se crea correctamente', async () => {
            const tiempoAgregado = await TiempoService.obtenerTiempoPorID(9);
            expect(tiempoAgregado.DESCRIPCION).toEqual('Tiempo completo');
            expect(tiempoAgregado.CODIGO).toEqual('TC');
            expect(tiempoAgregado.HORAS).toEqual(40);


        });
    });

});
