describe('Barra de navegacao', () => {
  it('Acessa', () => {
    cy.visit('https://www.ut.edu/');
  });

  it('Verifica menu Tools', () => {
    cy.get('#page > header > div.container > nav > ul > li.tools')
      .contains('Tools')
      .click();
  });
  it('Verifica Icone Livro', () => {
    cy.get('#page > header > div.tools-wrap > div > ul > li:nth-child(4) > a > i')
      .should('have.attr', 'class', 'icon-book');
  });
   it('Seleciona Library', () => {
     cy.get('.tools-wrap').contains('Library')
      .click();
   });
  
});
