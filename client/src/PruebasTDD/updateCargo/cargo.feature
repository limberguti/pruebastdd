Feature: Actualización de cargo

  Scenario: Actualizar cargo existente correctamente
    Given existe un cargo con ID 2 en la base de datos
    When se actualiza el cargo con ID 2 con datos actualizados
    Then se debería recibir un mensaje de éxito