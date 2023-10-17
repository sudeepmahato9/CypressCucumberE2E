import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";
const hubspotPage = require('../../Pages/hubspotPage');

Before(() => {
    cy.reload();
});

After(() => {
    cy.reload();
});

Given("User launches the application", ()=>{
    hubspotPage.launchApplication();
});

When("User accept the cookies", ()=>{
    hubspotPage.acceptCookies();
});

Then("User clicks on {string} link", (Software)=>{
    hubspotPage.softwareLinkClick(Software);
});