Feature: Gestión de Contratos

  Scenario: Carga inicial de docentes y requerimientos
    Given la aplicación se ha cargado
    When la página AddCargo se monta
    Then los datos de docentes y requerimientos se deben cargar y mostrar

  Scenario: Seleccionar un docente y un requerimiento
    Given los datos de docentes y requerimientos están cargados
    When el usuario selecciona un docente y un requerimiento de las listas desplegables
    Then el estado seleccionado del docente y requerimiento se actualiza correctamente

  Scenario: Agregar un nuevo contrato
    Given el usuario ha llenado todos los campos obligatorios del formulario
    When el usuario hace clic en el botón para agregar un contrato
    Then un nuevo contrato se envía al servidor
    And se muestra un mensaje de confirmación al usuario
    And el formulario se limpia

  Scenario: Intento de agregar un contrato con campos obligatorios vacíos
    Given el usuario no ha llenado todos los campos obligatorios del formulario
    When el usuario hace clic en el botón para agregar un contrato
    Then se muestra un mensaje de error indicando los campos obligatorios

  Scenario: Limpieza de formulario
    Given el usuario está en el formulario de agregar contrato
    When el usuario hace clic en el botón de limpiar formulario
    Then todos los campos del formulario se restablecen a sus valores por defecto
