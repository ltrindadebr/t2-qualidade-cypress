describe('Validação de campos para registro', () => {
  it('Acessa página Mapa do Campus', () => {
    cy.visit('https://www.ut.edu/about-ut/campus-map');
  });

  it('Verifica botão Plant Hall Map (Nova Guia)', () => {
    cy.get('a[href="/planthallmap"]')
      .should('have.attr', 'target', '_blank');
  });

  it('Verifica botão Move-in Maps (Redireciona)', () => {
    cy.get('div.body-copy:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > p:nth-child(3) > a:nth-child(1)')
      .should('have.attr', 'href', '/moveinmaps/')
      .click();
  });
});
