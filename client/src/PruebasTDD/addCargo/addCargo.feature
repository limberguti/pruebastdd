Feature: Cargo

    Scenario: Crear un nuevo cargo
        Given que tenga datos el cargo
        When creo un nuevo cargo
        Then el cargo se crea correctamente