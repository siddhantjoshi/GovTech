const { defineConfig } = require('cypress');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  createEsbuildPlugin(on, config);
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    report(message) {
      // Implement a custom reporter logic here
      console.log(`Report: ${message}`);
      return null;
    }
  });
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.feature',
    screenshotsFolder: 'cypress/output/screenshots',
    videosFolder: 'cypress/output/videos',
    video: true,
    reporter: 'spec',
    reporterOptions: {
      reportDir: 'cypress/output/reports',
      overwrite: false,
      html: false,
      json: true
    }
  },
});
