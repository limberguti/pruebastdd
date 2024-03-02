import { defineFeature, loadFeature } from 'jest-cucumber';

import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import { useAddCargo } from './Contrato';
import { beforeEach } from 'node:test';
import { jest } from '@jest/globals';

// Mock axios globally
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Cargar el archivo feature
const feature = loadFeature('src/PruebasTDD/Contrato.feature');

defineFeature(feature, (test) => {
    beforeEach(() => {
        mockedAxios.get.mockReset();
        mockedAxios.post.mockReset();
    });

    test('Carga inicial de docentes y requerimientos', ({ given, when, then }) => {
        given('la aplicación se ha cargado', () => { });

        when('la página AddCargo se monta', () => {
            mockedAxios.get.mockResolvedValueOnce({ data: [{ id: 1, nombre: 'Docente 1' }] })
                .mockResolvedValueOnce({ data: [{ id: 1, descripcion: 'Requerimiento 1' }] });
            render(<useAddCargo />);
            
    });

        then('los datos de docentes y requerimientos se deben cargar y mostrar', async () => {
            await waitFor(() => {
                expect(screen.getByText('Docente 1')).toBeInTheDocument();
                expect(screen.getByText('Requerimiento 1')).toBeInTheDocument();
            });
        });
    });

    // Repite la estructura anterior para los otros escenarios
    // Por ejemplo:
    test('Seleccionar un docente y un requerimiento', ({ given, when, then }) => {
        given('los datos de docentes y requerimientos están cargados', () => {
            // Aquí configurarías el estado inicial necesario para el test, si es necesario
        });

        when('el usuario selecciona un docente y un requerimiento de las listas desplegables', () => {
            // Aquí simularías la selección de los elementos del formulario
        });

        then('el estado seleccionado del docente y requerimiento se actualiza correctamente', () => {
            // Aquí verificarías que el estado del componente se actualizó correctamente
        });
    });

    // Continuar con el resto de los escenarios...
});
