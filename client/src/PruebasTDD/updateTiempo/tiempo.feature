Feature: Actualización de tiempo

  Scenario: Actualizar tiempo existente correctamente
    Given existe un tiempo con ID 1 en la base de datos
    When se actualiza el tiempo con ID 1 con datos actualizados
    Then se debería recibir un mensaje de éxito

  Scenario: Intentar actualizar tiempo inexistente
    Given no existe un tiempo con ID 999 en la base de datos
    When se intenta actualizar el tiempo con ID 999
    Then se debería recibir un mensaje de error

