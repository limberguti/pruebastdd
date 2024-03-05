Feature: Actualización de requerimientos

  Scenario: Actualizar requerimiento existente correctamente
    Given existe un requerimiento con ID 1 en la base de datos
    When se actualiza el requerimiento con ID 1 con datos actualizados
    Then se debería recibir un mensaje de éxito

  Scenario: Intentar actualizar requerimiento inexistente
    Given no existe un requerimiento con ID 999 en la base de datos
    When se intenta actualizar el requerimiento con ID 999
    Then se debería recibir un mensaje de error
