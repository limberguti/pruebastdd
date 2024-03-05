import { defineFeature, loadFeature } from 'jest-cucumber';

import Contrato from './contratos';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/addContratos/contratos.feature');

const ContratoService = new Contrato();

defineFeature(feature, (test) => {
    //prueba agregar personal
    test('Crear un nuevo contrato', ({ given, when, then }) => {
        let nuevoContrato: any;
        given('que tenga datos el contrato', () => {
            nuevoContrato = {
                IDCONTRATO: 392,
                IDDOCENTE: 392,
                IDREQUERIMIENTO: 35,
                FECHAINICIO: '2021-07-01',
                FECHAFIN: '2021-07-31',
                FUENTE: 'Contrato',
                FECHA: '2021-07-01',
                CERTIFICACION_PRESUPUESTARIA: '1234567890',
                IDMEMO: '',
                ANALISTADELPROCESO: 'Juan Perez',
                ARCHIVOMEMO: 'Memo.pdf',

            };
        }
        );

        when('creo un nuevo contrato', async () => {
            await ContratoService.agregarContrato(nuevoContrato);
        });

        then('el contrato se crea correctamente', async () => {
            const contratoAgregado = await ContratoService.obtenerContratoPorID(392);
            expect(contratoAgregado.IDDOCENTE).toEqual(392);
            expect(contratoAgregado.IDREQUERIMIENTO).toEqual(35);
            expect(contratoAgregado.FECHAINICIO).toEqual('2021-07-01');
            expect(contratoAgregado.FECHAFIN).toEqual('2021-07-31');
            expect(contratoAgregado.FUENTE).toEqual('Contrato');
            expect(contratoAgregado.FECHA).toEqual('2021-07-01');
            expect(contratoAgregado.CERTIFICACION_PRESUPUESTARIA).toEqual('1234567890');
            expect(contratoAgregado.IDMEMO).toEqual('');
            expect(contratoAgregado.ANALISTADELPROCESO).toEqual('Juan Perez');
            expect(contratoAgregado.ARCHIVOMEMO).toEqual('Memo.pdf');
        });
    });

});
