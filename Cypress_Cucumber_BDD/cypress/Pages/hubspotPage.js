class  hubspotPage{

    launchApplication () {
        cy.visit('https://www.hubspot.com');
    }

    acceptCookies () {
        cy.get('#hs-eu-confirmation-button').click();
    }

    softwareLinkClick (Software) {
        cy.get('.hsg-nav__link').eq(3).should('have.contain.text', Software).click();
    }
}
module.exports = new hubspotPage();