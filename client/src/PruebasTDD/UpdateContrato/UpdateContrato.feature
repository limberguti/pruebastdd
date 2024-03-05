Feature: Actualización de Contrato

  Scenario: Actualizar contrato existente correctamente
    Given existe un contrato con ID 4 en la base de datos
    When se actualiza el contrato con ID 4 con datos actualizados
    Then se debería recibir un mensaje de éxito