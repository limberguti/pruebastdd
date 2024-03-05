Feature: Contrato

    Scenario: Crear un nuevo contrato
        Given que tenga datos el contrato
        When creo un nuevo contrato
        Then el contrato se crea correctamente