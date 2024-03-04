Feature: Búsqueda de Docentes por Apellidos

  Scenario: Buscar un docente por sus apellidos
    Given que el endpoint "/docente" está disponible para buscar docentes
    And existen docentes en la base de datos
    When hago una solicitud GET a "/docente" con el parámetro de búsqueda "ApellidosDocente"
    Then debería recibir una respuesta con los docentes que coinciden con los apellidos
