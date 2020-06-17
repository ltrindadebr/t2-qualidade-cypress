describe('Validação de campos para registro', () => {
  it('Acessa página de registro', () => {
    cy.visit('https://graduate.ut.edu/account/register');
  });
  
  it('Insere email', () => {
    let email = 'fulano@inf.ufsm.br';
    cy.get('input[id="email"]')
      .type(email, { delay: 100 });
  });
  
  it('Insere nome', () => {
    let firstName = 'Fulano';
    cy.get('input[id="first"]')
      .type(firstName, { delay: 100 });
  });

  it('Insere sobrenome', () => {
    let lastName = 'de Ciclano';
    cy.get('input[id="last"]')
      .type(lastName, { delay: 100 });
  });

  it('Insere data de nascimento', () => {
    cy.get('select[id="birthdate_m"]')
      .select('April').should('have.value', '04');
    
    cy.get('select[id="birthdate_d"]')
      .select('8').should('have.value', '08');

    cy.get('select[id="birthdate_y"]')
      .select('1996').should('have.value', '1996');
  });
});
