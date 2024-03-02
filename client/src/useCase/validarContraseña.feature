Feature: Validación de contraseña

  Scenario: Contraseña válida
    Given Tengo una contraseña "Abcdefg1"
    When Valido la contraseña
    Then La validación es exitosa

  Scenario: Contraseña sin letra mayúscula
    Given Tengo una contraseña "abcdefg1"
    When Valido la contraseña
    Then La validación falla

  Scenario: Contraseña sin letra minúscula
    Given Tengo una contraseña "ABCDEFG1"
    When Valido la contraseña
    Then La validación falla

  Scenario: Contraseña sin número
    Given Tengo una contraseña "Abcdefgh"
    When Valido la contraseña
    Then La validación falla

  Scenario: Contraseña con longitud insuficiente
    Given Tengo una contraseña "Abc1"
    When Valido la contraseña
    Then La validación falla
