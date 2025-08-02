import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given('the user is on the login page', () => {
    cy.visit('/login');
});

When('the user enters a valid username and password', () => {
    cy.get('input[name="username"]').type('usuario_teste');
    cy.get('input[name="password"]').type('senha_teste');
    cy.get('button[type="submit"]').click();
});

Then('the user should be redirected to the homepage', () => {
    cy.url().should('include', '/home');
});