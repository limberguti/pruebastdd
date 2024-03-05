Feature: UpdatePersonal

    Scenario: Actualizar personal existente correctamente
        Given existe un empleado con ID 1 en la base de datos
        When se actualiza el empleado con ID 1 con datos actualizados
        Then se debería recibir un mensaje de éxito
