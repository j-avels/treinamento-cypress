const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1920,
    viewportHeight:1080,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://www.automationpractice.pl/',
    
    
    
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-prepocessor').default;
      on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
  },
});
