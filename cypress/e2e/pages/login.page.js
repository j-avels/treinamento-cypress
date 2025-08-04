const text_userName = 'username';
const text_password = 'password';
const button_submit = 'submit';

class LoginPage {

    fillUsername(username) {
        cy.xpath(`input[name="${text_userName}"]`).type(username);
    }

    fillPassword(password) {
        cy.get(`input[name="${text_password}"]`).type(password);
    }

    submit() {
        cy.get(`button[type="${button_submit}"]`).click();
    }

    verifyRedirectionToHomePage() {
        cy.url().should('include', '/home');
    }
}