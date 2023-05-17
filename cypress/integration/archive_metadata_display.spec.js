describe('archive_metadata_display: A single Archive Show page metadata section', () => {
  beforeEach(() => {
    cy.visit('/archive/cv65x38f').wait(1000);
    cy.get('#content-wrapper > div.item-page-wrapper > div.item-details-section > div.details-section-metadata > table', { timeout: 5000 })
      .as('metadataSection');
  })

  it('displays the identifier field and its corresponding value', () => {
    cy.get('@metadataSection')
      .find('tr.identifier > th.collection-detail-key')
      .invoke('text')
      .should('equal', 'Identifier');
    cy.get('@metadataSection')
      .find(':nth-child(1) > td.collection-detail-value').click();
    cy.url({ timeout: 2000 }).should('include', '/archive/cv65x38f');
  })

  it('displays the custom key field and its corresponding value', () => {
    cy.get('@metadataSection')
      .find('tr.custom_key > th.collection-detail-key')
      .invoke('text')
      .should('equal', 'Permanent Link');
    cy.get('@metadataSection')
      .find('tr.custom_key > td.collection-detail-value')
      .contains('idn.lib.vt.edu/ark:/53696/cv65x38f');
  })

  it('displays the is_part_of field and its corresponding value', () => {
    cy.get('@metadataSection')
      .find('tr.is_part_of > th.collection-detail-key')
      .invoke('text')
      .should('equal', 'Belongs to');
    cy.get('@metadataSection')
      .find('tr.is_part_of > td > div > span:nth-child(1) > a').click();
    cy.url({ timeout: 3000 }).should('include', '/collection/4g825g7ddemo');
  })
})