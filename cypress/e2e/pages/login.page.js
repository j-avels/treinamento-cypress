import { loginElements } from './elements/login.element';

class LoginPage {

    fillUsername(username) {
        cy.get(loginElements.text_userName).type(username);
    }

    fillPassword(password) {
        cy.get(loginElements.text_password).type(password);
    }

    submit() {
        cy.get(loginElements.button_submit).click();
    }

    verifyRedirectionToHomePage() {
        cy.url().should('include', '/home');
    }
}

export default new LoginPage();