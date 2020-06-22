import { imageA } from '../../css_selectors.js'

describe('Validação de imagens', () => {
  it('Acessa página de Admissões', () => {
    cy.visit('https://www.ut.edu/admissions');
  });
  
  it('Seleciona uma imagem', () => {
    cy.get(imageA)
    .click();
  });
  
  // Componente de imagem  
  it('Verifica carregamento da imagem', () => {
    cy.wait(2000)
      .get('img[src="/uploadedImages/_Site_Root/_Banner_Galleries/Campus_Gallery/gallery3_20130423_JCG_0805.jpg"]')
      .should('be.visible');
  });

  // Componente de slides
  it('Verifica texto no slide da imagem', () => {
    cy.get('span[class="child"]')
      .contains('UT is nestled on a picturesque');
  });

  it('Verifica passar o slide', () => {
    cy.get('a[title="Next"]')
      .click();
    
    cy.get('a[title="Previous"]')
      .wait(1000)
      .click();
  });
});
