describe('Barra de navegacao', () => {
  it('Acessa a página inicial', () => {
    cy.visit('https://www.ut.edu/');
  });

  // Componente de menu
  it('Verifica menu Tools', () => {
    cy.get('#page > header > div.container > nav > ul > li.tools')
      .contains('Tools')
      .click();
  });

  // Componente de ícone
  it('Verifica Icone Livro', () => {
    cy.get('#page > header > div.tools-wrap > div > ul > li:nth-child(4) > a > i')
      .should('have.attr', 'class', 'icon-book');
  });

   it('Seleciona a opção Library', () => {
     cy.get('.tools-wrap').contains('Library')
      .click();
   });
});
