describe('Validação de campos', () => {
  it('Acessa página de registro', () => {
    cy.visit('https://graduate.ut.edu/account/register');
  });

  // Componente de título de página
  it('Verifica o nome da pagina', () => {
    cy.title().should('eq', 'Register Account');
  });
  
  // Componente de texto
  it('Insere email, nome e sobrenome', () => {
    let email = 'fulano@inf.ufsm.br';
    let firstName = 'Fulano';
    let lastName = 'de Ciclano';
    
    cy.get('input[id="email"]')
      .type(email, { delay: 100 });

    cy.get('input[id="first"]')
      .type(firstName, { delay: 100 });

    cy.get('input[id="last"]')
      .type(lastName, { delay: 100 });
  });
  
  // Componente de seleção
  it('Insere data de nascimento', () => {
    cy.get('select[id="birthdate_m"]')
      .select('April')
      .should('have.value', '04');
    
    cy.get('select[id="birthdate_d"]')
      .select('8')
      .should('have.value', '08');

    cy.get('select[id="birthdate_y"]')
      .select('1996')
      .should('have.value', '1996');
  });
});
