const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1920,
    viewportHeight:1080,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature', //isso é o caminho para os arquivos de features
    baseUrl: 'https://www.saucedemo.com/',
    
    
    
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-prepocessor').default;
      on('file:preprocessor',cucumber())
      // implement node event listeners here
    },
  },
});
