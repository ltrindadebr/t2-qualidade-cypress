import { btnMoveInMaps } from '../../css_selectors.js'

// Componente de botão
describe('Validação de botões', () => {
  it('Acessa página Mapa do Campus', () => {
    cy.visit('https://www.ut.edu/about-ut/campus-map');
  });

  // Comportamento: nova guia
  it('Verifica botão Plant Hall Map (Nova Guia)', () => {
    cy.get('a[href="/planthallmap"]')
      .should('have.attr', 'target', '_blank')
      .and('contain', 'Plant Hall Map');
  });

  // Comportamento: redirecionar
  it('Verifica botão Move-in Maps (Redireciona)', () => {
    cy.get(btnMoveInMaps)
      .should('have.attr', 'href', '/moveinmaps/')
      .and('contain', 'Move-in Maps')
  });
});
