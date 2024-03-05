import { defineFeature, loadFeature } from 'jest-cucumber';

import Cargo from './addCargo';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/addCargo/addCargo.feature');

const CargoService = new Cargo();

defineFeature(feature, (test) => {

    test('Crear un nuevo cargo', ({ given, when, then }) => {
        let nuevoCargo: any;
        given('que tenga datos el cargo', () => {
            nuevoCargo = {
                IDTIEMPO: 2,
                TIPOPERSONAL: 'DOCENTE',
                CATEGORIA: 'PRINCIPAL',
                NIVEL: 1,
                GRADO: 8,
                REMUNERACION: 1000.00,


            };
        }
        );

        when('creo un nuevo cargo', async () => {
            await CargoService.agregarCargo(nuevoCargo);
        });

        then('el cargo se crea correctamente', async () => {
            const cargoAgregado = await CargoService.obtenerCargoPorID(182);
            expect(cargoAgregado.IDTIEMPO).toEqual(2);
            expect(cargoAgregado.TIPOPERSONAL).toEqual('DOCENTE');
            expect(cargoAgregado.CATEGORIA).toEqual('PRINCIPAL');
            expect(cargoAgregado.NIVEL).toEqual(1);
            expect(cargoAgregado.GRADO).toEqual(8);
            expect(cargoAgregado.REMUNERACION).toEqual(1000.00);

        });
    });

});
