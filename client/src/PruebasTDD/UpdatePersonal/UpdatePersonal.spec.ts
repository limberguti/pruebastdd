import { defineFeature, loadFeature } from 'jest-cucumber';
import UpdatePersonalService from './UpdatePersonal';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/UpdatePersonal/UpdatePersonal.feature');

const updatePersonalService = new UpdatePersonalService();

defineFeature(feature, (test) => {
    test('Actualizar personal existente correctamente', ({ given, when, then }) => {
        let idPersonal: number;

        given(/^existe un empleado con ID (\d+) en la base de datos$/, async (id: string) => {
            idPersonal = parseInt(id);
            // Aquí podrías insertar un empleado de prueba en la base de datos para garantizar su existencia
        });

        when(/^se actualiza el empleado con ID (\d+) con datos actualizados$/, async (id: string) => {
            const datosActualizados = {
                APELLIDOS: 'Gonzalez', // Por ejemplo, apellidos actualizados
                NOMBRES: 'Pedro', // Por ejemplo, nombres actualizados
                // Define aquí los demás campos actualizados según tus necesidades
            };
            const mensaje = await updatePersonalService.actualizarPersonal(idPersonal, datosActualizados);
            expect(mensaje).toEqual('Personal actualizado correctamente');
        });

        then('se debería recibir un mensaje de éxito', async () => {
            const personalActualizado = await updatePersonalService.obtenerPersonalPorID(idPersonal);
            expect(personalActualizado.APELLIDOS).toEqual('Gonzalez'); // Verificar que los apellidos se hayan actualizado correctamente
            expect(personalActualizado.NOMBRES).toEqual('Pedro'); // Verificar que los nombres se hayan actualizado correctamente
            // Agrega más expectativas según tus necesidades
        });
    });

    
});
