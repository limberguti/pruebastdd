import { defineFeature, loadFeature } from 'jest-cucumber';

import Requerimiento from './addRequerimiento';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/addReq/addRequerimiento.feature');

const RequerimientoService = new Requerimiento();

defineFeature(feature, (test) => {

    test('Crear un nuevo requerimiento', ({ given, when, then }) => {
        let nuevoRequerimiento: any;
        given('que tenga datos el requerimiento', () => {
            nuevoRequerimiento = {
                IDREQUERIMIENTO: 38,
                IDCARGO: 50,
                SEDE: 'matriz',
                DEPARTAMENTO: 'Ciencias',
                DENOMINACION: 'Docente',
                DEDICACION: 'Tiempo completo',
            };
        }
        );

        when('creo un nuevo requerimiento', async () => {
            await RequerimientoService.agregarRequerimiento(nuevoRequerimiento);
        });

        then('el requerimiento se crea correctamente', async () => {
            const requerimientoAgregado = await RequerimientoService.obtenerRequerimientoPorID(38);
            expect(requerimientoAgregado.IDCARGO).toEqual(50);
            expect(requerimientoAgregado.SEDE).toEqual('matriz');
            expect(requerimientoAgregado.DEPARTAMENTO).toEqual('Ciencias');
            expect(requerimientoAgregado.DENOMINACION).toEqual('Docente');
            expect(requerimientoAgregado.DEDICACION).toEqual('Tiempo completo');

        });
    });

});
