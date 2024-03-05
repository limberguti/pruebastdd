import { defineFeature, loadFeature } from 'jest-cucumber';

import Personal from './Personal';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/addPersonal/Personal.feature');

const PersonalService = new Personal();

defineFeature(feature, (test) => {
    //prueba agregar personal
    test('Crear un nuevo empleado', ({ given, when, then }) => {
        let nuevoPersonal: any;
        given('que tenga datos el empleado', () => {
            nuevoPersonal = {
               
                APELLIDOS: 'Perez',
                NOMBRES: 'Juan',
                CEDULA: '1234567890',
                NACIONALIDAD: 'Ecuatoriana',
                GENERO: 'Masculino',
                CORREO_PERSONAL: '',
                CORREO_INSTITUCIONAL: '',
                CIUDAD: 'Quito',
                PROVINCIA: 'Pichincha',
                NROPERSONAL: '1234567890',
                CAMPUSSEDEPERSONAL: 'Sede Quito',
                OBSERVACIONESPERSONAL: 'Sin observaciones'
            };
        }
        );

        when('creo un nuevo empleado', async () => {
            await PersonalService.agregarPersonal(nuevoPersonal);
        });

        then('el empleado se crea correctamente', async () => {
            const personalAgregado = await PersonalService.obtenerPersonalPorID(393);
            expect(personalAgregado.APELLIDOS).toEqual('Perez');
            expect(personalAgregado.NOMBRES).toEqual('Juan');
            expect(personalAgregado.CEDULA).toEqual('1234567890');
            expect(personalAgregado.NACIONALIDAD).toEqual('Ecuatoriana');
            expect(personalAgregado.GENERO).toEqual('Masculino');
            expect(personalAgregado.CIUDAD).toEqual('Quito');
            expect(personalAgregado.PROVINCIA).toEqual('Pichincha');
            expect(personalAgregado.NROPERSONAL).toEqual('1234567890');
            expect(personalAgregado.CAMPUSSEDEPERSONAL).toEqual('Sede Quito');
            expect(personalAgregado.OBSERVACIONESPERSONAL).toEqual('Sin observaciones');
        });
    });

});
