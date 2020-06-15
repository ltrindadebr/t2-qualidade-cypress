describe('Qualidade de Software - T2:Cypress', () => {
  it('Acessa o site da University of Tampa', () => {
    cy.visit('https://www.ut.edu');
  });
  it('Verifica o nome da página', () => {
    cy.title().should('eq', 'Home | University of Tampa');
  });
});

describe('Testa o componente de busca', () => {
  it('Seleciona botão de busca', () => {
    cy.get('li.search > a:nth-child(1) > i:nth-child(1)').click();
  });
  it('Insere texto na caixa de busca', () => {
    let searchText = 'Family Involvement';
    cy.get('.search-wrap > div:nth-child(1) > form:nth-child(1) > input:nth-child(1)').type(searchText, { delay: 50 });
  });
  it('Seleciona botão para buscar', () => {
    cy.get('.search-wrap > div:nth-child(1) > form:nth-child(1) > button:nth-child(2)').click();
  });
});

// describe('Search Results', () => {
//   it('Verifica a quantidade de resultados encontrados', () => {
//     cy.get('.gsc-result-info').should('include', 'About 86 results')
//   });
// });