Feature: Inicio de sesión de usuario

  Scenario: Iniciar sesión con credenciales válidas
    Given que soy un usuario registrado
    When intento iniciar sesión con un nombre de usuario y contraseña válidos
    Then debo recibir un mensaje de bienvenida

 