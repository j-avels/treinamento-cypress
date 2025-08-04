const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@bahmutov/cypress-esbuild-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920, //define largura do largura
    viewportHeight: 1080, //define altura da tela
    watchForFileChanges: false, //desabilita recarregamento automático do cypress
    specPattern: "**/*.feature", //define o padrão de arquivos de teste a serem executados
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/e2e/step_definitions", // define o caminho para os step definitions
        nonGlobalStepDefinitions: false // define se or arq. de stepDefinitions deverão estar no mesmo diretório de features (true==local) ou nao (false==global)
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      return config;
    },
    baseUrl: 'https://www.saucedemo.com/', //define URL base do aplicativo a ser testado
  },
});
