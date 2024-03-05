Feature: Tiempo

    Scenario: Crear un nuevo tiempo
        Given que tenga datos el tiempo
        When creo un nuevo tiempo
        Then el tiempo se crea correctamente
