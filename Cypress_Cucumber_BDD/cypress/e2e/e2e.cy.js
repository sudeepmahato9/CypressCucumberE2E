describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.hubspot.com');
    cy.get('#hs-eu-confirmation-button').click();
    cy.get('.hsg-nav__link').eq(3).click();
    cy.wait(3000);
    cy.get('.nav-software-marketing > .hsg-nav__header-container > .hsg-nav__subheader').click();
    cy.get('.product-core-header__text-title').should('have.text', 'Marketing Software');
  })
})














//https://kailash-pathak.medium.com/lets-do-api-testing-with-cypress-2d77d2290d48