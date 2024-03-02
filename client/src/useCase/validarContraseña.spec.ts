import { defineFeature, loadFeature } from 'jest-cucumber';
import { ContraseñaValidator } from './validarContraseña';

const feature = loadFeature('src/useCase/validarContraseña.feature');

defineFeature(feature, (test) => {
  test('Contraseña válida', ({ given, when, then }) => {
    let isValid: boolean;

    given('Tengo una contraseña "Abcdefg1"', () => { });

    when('Valido la contraseña', () => {
      isValid = ContraseñaValidator.validarContraseña("Abcdefg1");
    });

    then('La validación es exitosa', () => {
      expect(isValid).toBe(true);
    });
  });

  test('Contraseña sin letra mayúscula', ({ given, when, then }) => {
    let isValid: boolean;

    given('Tengo una contraseña "abcdefg1"', () => { });

    when('Valido la contraseña', () => {
      isValid = ContraseñaValidator.validarContraseña("abcdefg1");
    });

    then('La validación falla', () => {
      expect(isValid).toBe(false);
    });
  });

  test('Contraseña sin letra minúscula', ({ given, when, then }) => {
    let isValid: boolean;

    given('Tengo una contraseña "ABCDEFG1"', () => { });

    when('Valido la contraseña', () => {
      isValid = ContraseñaValidator.validarContraseña("ABCDEFG1");
    });

    then('La validación falla', () => {
      expect(isValid).toBe(false);
    });
  });

  test('Contraseña sin número', ({ given, when, then }) => {
    let isValid: boolean;

    given('Tengo una contraseña "Abcdefgh"', () => { });

    when('Valido la contraseña', () => {
      isValid = ContraseñaValidator.validarContraseña("Abcdefgh");
    });

    then('La validación falla', () => {
      expect(isValid).toBe(false);
    });
  });

  test('Contraseña con longitud insuficiente', ({ given, when, then }) => {
    let isValid: boolean;

    given('Tengo una contraseña "Abc1"', () => { });

    when('Valido la contraseña', () => {
      isValid = ContraseñaValidator.validarContraseña("Abc1");
    });

    then('La validación falla', () => {
      expect(isValid).toBe(false);
    });
  });
});
