import { iconSearch, inputSearch, buttonSearch } from '../../css_selectors.js'

// Componente de busca
describe('Realizar busca', () => {
  it('Acessa o site da University of Tampa', () => {
      cy.visit('https://www.ut.edu');
  });

  it('Seleciona ícone de busca', () => {
    cy.get(iconSearch)
      .click();
  });

  it('Insere texto na caixa de busca', () => {
    let searchText = 'Family Involvement';
    cy.get(inputSearch)
      .type(searchText, { delay: 100 });
  });

  it('Seleciona botão para buscar', () => {
    cy.get(buttonSearch)
      .click();
  });

  // Componente de redirecionamento
  it('Valida o redirecionamento', () => {
    cy.location('pathname')
      .should('eq', '/search-results');
  });
});