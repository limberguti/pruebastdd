describe('Prueba de Integración', () => {
  it('inicia sesión correctamente con credenciales de administrador', () => {
    cy.visit('http://localhost:3000/LoginMysql');

    cy.get('input[placeholder="Nombre de usuario"]').type('admin');
    cy.get('input[placeholder="Contraseña"]').type('admin');

    cy.contains('Iniciar Sesión').click();

    cy.url().should('eq', 'http://localhost:3000/HomeC');

    cy.window().its('localStorage').invoke('getItem', 'nombreUsuario').should('eq', 'admin');
  });

  it('muestra mensaje de bienvenida con nombre de usuario', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains(`Bienvenido ${username}`).should('be.visible');
  });

  it('navega a la página "Docente" al hacer clic en el enlace', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Docente').click();

    cy.url().should('include', '/GestionPersonal');
  });

  it('hace clic en el botón "Agregar" en la página "GestionPersonal"', () => {
    cy.visit('http://localhost:3000/GestionPersonal');

    cy.contains('Agregar').click();

    cy.url().should('include', '/AddPersonal');
  });

  it('agrega exitosamente un nuevo docente', () => {
    cy.visit('http://localhost:3000/AddPersonal');

    cy.get('input[name="APELLIDOS"]').type('Apellido');
    cy.get('input[name="NOMBRES"]').type('Nombre');
    cy.get('input[name="CEDULA"]').type('1234567890');
    cy.get('input[name="NACIONALIDAD"]').type('Nacionalidad');
    cy.get('select[name="GENERO"]').select('MASCULINO');
    cy.get('input[name="CORREO_PERSONAL"]').type('correo_personal@example.com');
    cy.get('input[name="CORREO_INSTITUCIONAL"]').type('correo_institucional@example.com');
    cy.get('select[name="CIUDAD"]').select('Quito');
    cy.get('select[name="PROVINCIA"]').select('Pichincha');
    cy.get('input[name="NROPERSONAL"]').type('1234567890');
    cy.get('select[name="CAMPUSSEDEPERSONAL"]').select('MATRIZ');
    cy.get('textarea[name="OBSERVACIONESPERSONAL"]').type('Observaciones del docente');

    cy.contains('Agregar Docente').click();

    cy.contains('Docente agregado correctamente').should('be.visible');
  });

  it('redirige a la página GestionPersonal al hacer clic en el botón "Regresar"', () => {
    cy.visit('http://localhost:3000/AddPersonal');

    cy.contains('Regresar').click();

    cy.url().should('eq', 'http://localhost:3000/GestionPersonal');
  });


  beforeEach(() => {
    cy.visit('http://localhost:3000/UpdatePersonal');
  });

  it('actualiza datos personales y muestra mensaje de éxito', () => {
    cy.get('img[alt="Actualizar"]').first().click();

    cy.get('input[name="cedula"]').type('nuevaCedula');
    cy.get('input[name="apellidos"]').type('nuevosApellidos');
    cy.get('input[name="nombres"]').type('nuevosNombres');
    cy.get('select[name="genero"]').select('MASCULINO');
    // ... completa con otros campos si es necesario

    cy.contains('button', 'Actualizar').should('be.visible').click();

    cy.contains('Personal actualizado correctamente').should('exist');
    cy.contains('Regresar').click({ force: true });
    cy.contains('Regresar').click({ force: true });
  });
  it('navega a la página "Requerimiento" al hacer clic en el enlace', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Requerimiento').click();

    cy.url().should('include', '/GestionReq');
  });


  it('hace clic en el botón "Agregar" en la página "Gestion Requerimiento"', () => {
    cy.visit('http://localhost:3000/GestionReq');

    cy.contains('Agregar').click();

    cy.url().should('include', '/AddReq');
  });

  it('agrega exitosamente un nuevo requerimiento', () => {
    // Visita la página para agregar un nuevo requerimiento
    cy.visit('http://localhost:3000/AddReq');

    // Simula la selección de un cargo
    cy.get('select[name="IDCARGO"]').select('1'); // Selecciona el primer cargo de la lista

    // Llena los campos del formulario
    cy.get('select[name="SEDE"]').select('Matriz');
    cy.get('select[name="DEPARTAMENTO"]').select('IDIOMAS');
    cy.get('select[name="DENOMINACION"]').select('PROFESOR NO TITULAR OCASIONAL');
    cy.get('select[name="DEDICACION"]').select('TIEMPO COMPLETO');

    // Haz clic en el botón "Agregar Requerimiento"
    cy.contains('Agregar Requerimiento').click();

    // Verifica que el mensaje de éxito aparezca
    cy.contains('Requerimiento agregado correctamente').should('be.visible');
  });
  it('redirige a la página GestionRequerimientos al hacer clic en el botón "Regresar"', () => {
    cy.visit('http://localhost:3000/AddReq');

    cy.contains('Regresar').click();

    cy.url().should('eq', 'http://localhost:3000/GestionReq');
  });




  it('actualiza datos personales y muestra mensaje de éxito', () => {
    cy.visit('http://localhost:3000/UpdateReq');

    cy.get('img[alt="Actualizar"]').first().click();

    cy.get('select[name="sede"]').should('exist').select('MATRIZ');
    cy.get('select[name="departamento"]').select('IDIOMAS');
    cy.get('select[name="denominacion"]').select('PROFESOR NO TITULAR OCASIONAL');
    cy.get('select[name="dedicacion"]').select('TIEMPO COMPLETO');
    cy.contains('button', 'Actualizar').should('be.visible').click();

    cy.contains('Regresar').click({ force: true });
    cy.contains('Regresar').click({ force: true });
  });

  //----------------------------------------------------------
  it('navega a la página "Contratos" al hacer clic en el enlace', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Contratos').click();

    cy.url().should('include', '/GestionContratos');
  });


  it('hace clic en el botón "Agregar" en la página "Gestion Contratos"', () => {
    cy.visit('http://localhost:3000/GestionContratos');

    cy.contains('Agregar').click();

    cy.url().should('include', '/AddContratos');
  });

  it('agrega exitosamente un nuevo contrat0', () => {
    // Visita la página para agregar un nuevo requerimiento
    cy.visit('http://localhost:3000/AddContratos');


    // Llena los campos del formulario
    cy.get('select[name="IDDOCENTE"]').select('1'); // Reemplaza con el valor correcto según tus datos de prueba
    cy.get('select[name="IDREQUERIMIENTO"]').select('1'); // Reemplaza con el valor correcto según tus datos de prueba
    cy.get('input[name="FECHAINICIO"]').type('2024-03-05');
    cy.get('input[name="FECHAFIN"]').type('2024-03-10');
    cy.get('input[name="FUENTE"]').type('Fuente de Contrato');
    cy.get('input[name="FECHA"]').type('2024-03-05');
    cy.get('input[name="CERTIFICACION_PRESUPUESTARIA"]').type('Certificación123');
    cy.get('input[name="IDMEMO"]').type('Memo123');
    cy.get('input[name="ANALISTADELPROCESO"]').type('Analista123');
    cy.get('input[name="ARCHIVOMEMO"]').type('Archivo123');
    cy.contains('Agregar Contrato').click();
    cy.contains('Contrato agregado correctamente').should('be.visible')
  });
  it('redirige a la página GestionContratos al hacer clic en el botón "Regresar"', () => {
    cy.visit('http://localhost:3000/AddContratos');

    cy.contains('Regresar').click();

    cy.url().should('eq', 'http://localhost:3000/GestionContratos');
  });




  it('actualiza datos del contrato y muestra mensaje de éxito', () => {
    cy.visit('http://localhost:3000/UpdateContrato');

    cy.get('img[alt="Actualizar"]').first().click();

    cy.get('input[name="fechainicio"]').type('2024-03-05');
    cy.get('input[name="fechaFin"]').type('2024-03-10');
    cy.get('input[name="fuente"]').type('Fuente de Contrato');
    cy.get('input[name="fecha"]').type('2024-03-05');
    cy.get('input[name="certificacion_presupuestaria"]').type('Certificación123');
    cy.contains('button', 'Actualizar').should('be.visible').click();

    cy.contains('Regresar').click({ force: true });
    cy.contains('Regresar').click({ force: true });
  });
  //_------------------------------------------------
  
  
  it('navega a la página "Tiempos" al hacer clic en el enlace', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Tiempos').click();

    cy.url().should('include', '/GestionTiempo');
  });


  it('hace clic en el botón "Agregar" en la página "Gestion Tiempo"', () => {
    cy.visit('http://localhost:3000/GestionTiempo');

    cy.contains('Agregar').click();

    cy.url().should('include', '/AddTiempo');
  });


    it('debería agregar un nuevo tiempo con éxito', () => {
      cy.visit('http://localhost:3000/AddTiempo');
      
      cy.get('input[name="CODIGO"]').type('123'); 
      cy.get('input[name="HORAS"]').type('40'); 
      cy.get('select[name="DESCRIPCION"]').select('Tiempo completo'); 
      
      cy.contains('Agregar Tiempo').click(); 
  
      cy.contains('Tiempo agregado correctamente').should('be.visible'); 
    });
  it('redirige a la página GestionTiempo al hacer clic en el botón "Regresar"', () => {
    cy.visit('http://localhost:3000/AddTiempo');

    cy.contains('Regresar').click();

    cy.url().should('eq', 'http://localhost:3000/GestionTiempo');
  });


  it('actualiza datos del tiempo y muestra mensaje de éxito', () => {
    cy.visit('http://localhost:3000/UpdateTiempo');

    cy.get('img[alt="Actualizar"]').first().click();

     
    cy.get('input[name="codigo"]').type('123'); 
    cy.get('input[name="horas"]').type('40'); 
    
    cy.contains('button', 'Actualizar').should('be.visible').click();

    cy.contains('Regresar').click({ force: true });
    cy.contains('Regresar').click({ force: true });
  });

  //-_______________________________________________________
  
  
  it('navega a la página "Cargos" al hacer clic en el enlace', () => {
    const username = 'admin';
    cy.window().its('localStorage').invoke('setItem', 'nombreUsuario', username);

    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Cargos').click();

    cy.url().should('include', '/GestionCargo');
  });


  it('hace clic en el botón "Agregar" en la página "Gestion Tiempo"', () => {
    cy.visit('http://localhost:3000/GestionCargo');

    cy.contains('Agregar').click();

    cy.url().should('include', '/AddCargo');
  });


    it('debería agregar un nuevo cargo con éxito', () => {
      cy.visit('http://localhost:3000/AddCargo');
      cy.get('select[name="IDTIEMPO"]').select('1');
      cy.get('select[name="TIPOPERSONAL"]').select('PERSONAL DE APOYO ACADEMICO');
      cy.get('select[name="CATEGORIA"]').select('PRINCIPAL');
      cy.get('select[name="NIVEL"]').select('1');
      cy.get('select[name="GRADO"]').select('0');
      cy.get('input[name="REMUNERACION"]').type('1000');
        cy.contains('Agregar Cargo').click();
        cy.contains('Cargo agregado correctamente').should('be.visible');
    });
  it('redirige a la página GestionCargo al hacer clic en el botón "Regresar"', () => {
    cy.visit('http://localhost:3000/AddCargo');

    cy.contains('Regresar').click();

    cy.url().should('eq', 'http://localhost:3000/GestionCargo');
  });


  it('actualiza datos del cargo y muestra mensaje de éxito', () => {
    
    cy.visit('http://localhost:3000/UpdateCargo');
    cy.get('img[alt="Actualizar"]').first().click();

    cy.get('select[name="nivel"]').select('1');
    cy.get('select[name="grado"]').select('0');
    cy.get('input[name="remuneracion"]').type('3000');
    cy.contains('button', 'Actualizar').should('be.visible').click();

    cy.contains('Regresar').click({ force: true });
    cy.contains('Regresar').click({ force: true });
  });
  it('debería cerrar sesión correctamente', () => {
    cy.visit('http://localhost:3000/HomeC');

    cy.contains('Cerrar Sesión').click();
    cy.url().should('include', '/LoginMysql');
  });
});
