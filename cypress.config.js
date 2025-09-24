const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);// Adiciona suporte ao Cucumber e geração de relatórios JSON
  on(
    "file:preprocessor", createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  return config;
}

module.exports = defineConfig({ //exporta a configuração do cypress
  e2e: {
    specPattern: [
      "cypress/e2e/features/**/*.feature",
      "cypress/e2e/zLabs/**/*.cy.js"
    ], //define onde ficam os arquivos de teste .feature
    supportFile: "cypress/support/e2e.js",//define o arquivo de suporte do Cypress
    watchForFileChanges: false, //desabilita recarregamento automático do cypress
    viewportWidth: 1920, //define largura da tela na execução dos testes
    viewportHeight: 1080, //define altura da tela na execução dos testes
    setupNodeEvents, //configura eventos do Node.js
    baseUrl: "https://www.saucedemo.com/",//http://www.automationpractice.pl/index.php "https://www.saucedemo.com/", //define URL base do aplicativo a ser testado
    paths:{
      "@fixtures/*":["fixtures/*"], //O '/*' significa que tudo dentro da pasta fixtures pode ser acessado pelo alias.
      "@pages/*":["e2e/pages/*"],
      "@elements/*":["e2e/pages/elements/*"],
    }
  }
});


