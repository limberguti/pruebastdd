import { defineFeature, loadFeature } from 'jest-cucumber';

import Login from './Login';
import { expect } from '@jest/globals';

const feature = loadFeature('src/PruebasTDD/Login/Login.feature');

const LoginService = new Login();

defineFeature(feature, (test) => {

    test('Iniciar sesión con credenciales válidas', ({ given, when, then }) => {
        let nuevoLogin: any;
        given('que soy un usuario registrado', () => {
            nuevoLogin = {
                nombreus: 'admin',
                contraseniaus: 'admin',
            };
        }
        );

        when('intento iniciar sesión con un nombre de usuario y contraseña válidos', async () => {
            await LoginService.IngresarCredenciales(nuevoLogin);
        });

        then('debo recibir un mensaje de bienvenida', async () => {
            const mensaje = await LoginService.IngresarCredenciales(nuevoLogin);
            expect(mensaje).toEqual('Bienvenido');

        });
    });

});
