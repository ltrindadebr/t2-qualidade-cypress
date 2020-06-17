describe('Validação de imagens', () => {
  it('Acessa página de Admissões', () => {
    cy.visit('https://www.ut.edu/admissions');
  });
  
  // cy.get('div[class="image"]').find("img").should('be.visible');
  it('Seleciona uma imagem', () => {
    cy.get('article.fit-grid-item:nth-child(1) > a:nth-child(1)')
      .click();
  });

  it('Verifica informações da imagem', () => {
    cy.get('body > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > div.fancybox-title.fancybox-title-float-wrap > span')
      // .contains('UT is nestled on a picturesque<br>downtown riverfront campus.<br>');
  });

});
