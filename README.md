# treinamento-cypress

## CONFIGURAÇÕES
--Instale Node.js
1. Abra o PowerShell e instale pela linha de comando: winget install OpenJS.NodeJS --accept-source-agreements --accept-package-agreements --force
3. Abra o cmd e consulte a versao instalada com a linha de comando: node -v
4. Instale Cucumber for Visual Studio Code


## ESTRUTURA
project-root/
│
├── cypress/
│   ├── e2e/                       # Testes de ponta a ponta
│   │   ├── features/              # Cenários em Gherkin
│   │   │   ├── login.feature
│   │   │   ├── cadastro.feature
│   │   │   └── ...
│   │   ├── step_definitions/      # Implementação dos steps
│   │   │   ├── login.steps.js
│   │   │   ├── cadastro.steps.js
│   │   │   └── hooks.js           # Hooks before/after dos testes
│   │   └── pages/                 # Page Objects
│   │       ├── LoginPage.js
│   │       ├── CadastroPage.js
│   │       └── ...
│   ├── support/                   # Suporte do Cypress
│   │   ├── commands.js            # Comandos customizados
│   │   ├── e2e.js                 # Configurações globais
│   │   └── utils/                 # Funções auxiliares
│   │       ├── api.js
│   │       └── fakerData.js
│   ├── fixtures/                  # Dados estáticos / massa de dados (JSON, CSV, etc.)
│   │   ├── users.json
│   │   └── products.json
│   │
│   └── reports/                   # Relatórios de execução
│       ├── cucumber-html-report/
│       └── screenshots/
│
├── .env                           # Variáveis de ambiente
├── cypress.config.js              # Configuração Cypress
├── package.json
└── README.md