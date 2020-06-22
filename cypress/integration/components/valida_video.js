describe('Validação de vídeo', () => {
  it('Acessa página de Tour virtual', () => {
    cy.visit('https://www.ut.edu/admissions/visit-ut/virtual-tour');
  });
  
  // it('Dá play no vídeo', () => {
  //   cy.get('div[id="player_uid_557241172_1"]')
  //   // cy.get('html body.date-20200619.pt_BR.ltr.exp-invert-logo.exp-kevlar-settings.exp-responsive.exp-search-big-thumbs.site-center-aligned.site-as-giant-card.gecko.gecko-77 div#player div#player_uid_313269651_1.html5-video-player.ytp-exp-marker-tooltip.ytp-embed.ytp-embed-playlist.ytp-title-enable-channel-logo.unstarted-mode.ytp-hide-controls.ytp-large-width-mode div.ytp-cued-thumbnail-overlay div.ytp-cued-thumbnail-overlay-image')
  //     .click();
  // });
  
  // // Componente de imagem  
  // it('Verifica carregamento da imagem', () => {
  //   cy.wait(2000)
  //     .get('img[src="/uploadedImages/_Site_Root/_Banner_Galleries/Campus_Gallery/gallery3_20130423_JCG_0805.jpg"]')
  //     .should('be.visible');
  // });

  // // Componente de slides
  // it('Verifica texto no slide da imagem', () => {
  //   cy.get('span[class="child"]')
  //     .contains('UT is nestled on a picturesque');
  // });

  // it('Verifica passar o slide', () => {
  //   cy.get('a[title="Next"]')
  //     .click();
    
  //   cy.get('a[title="Previous"]')
  //     .wait(1000)
  //     .click();
  // });
});
