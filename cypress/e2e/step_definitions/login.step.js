import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const testData = require('../../fixtures/testData.json');
import LoginPage from '../pages/login.page.js'; // diferente de 'import {LoginPage} from' pois ele é exportado como default

Given('user are in login page', () => {
    cy.visit('/'); // Ensure the user is on the login page
});

When('user input valid credenciais', () => {
    LoginPage.fillUsername(testData.validUser.username);
    cy.log("ℹ️ Username used: " + testData.validUser.username);
    LoginPage.fillPassword(testData.validUser.password);
    cy.log("ℹ️ Password used: " + testData.validUser.password);
    LoginPage.submit();
});

Then('the user should be redirected to the homepage', () => {
    cy.url().should('include', 'inventory.html').then(() => {
        cy.log("✅ Successfully logged in and redirected to the homepage.");
    })
});