Feature: Búsqueda de Requerimientos por Departamento

  Scenario: Buscar un requerimiento por el nombre del departamento
    Given que el endpoint "/requerimiento" está disponible para buscar requerimientos
    And existen requerimientos en la base de datos
    When hago una solicitud GET a "/requerimiento" con el parámetro de búsqueda "NombreDepartamento"
    Then debería recibir una respuesta con los requerimientos que coinciden con el nombre del departamento
