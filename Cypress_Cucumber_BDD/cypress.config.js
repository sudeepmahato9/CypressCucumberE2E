const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    stepDefinitions: [
      "cypress/e2e/hubspost/**/*.{js,ts}",
      "cypress/e2e/hubspot.{js,ts}",
      "cypress/support/step_definitions/**/*.{js,ts}",
    ]
  },
});
