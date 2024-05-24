const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config) {
  on('file:preprocessor', cucumber())
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/BDD/*.feature"
  },
});
