 // cypress/pages/LoginPage.js
class LoginPage {

  openLoginModal() {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');
  }

  enterUsername(username) {
    cy.get('#loginusername').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#loginpassword').clear().type(password);
  }

  clickLogin() {
    cy.contains('#logInModal button', 'Log in').click();
  }

  logout() {
    cy.get('#logout2').click();
  }

  validateWelcome(username) {
    cy.get('#nameofuser')
      .should('be.visible')
      .and('contain.text', `Welcome ${username}`);
  }

  validateLogoutUI() {
    cy.get('#login2').should('be.visible');
    cy.get('#nameofuser').should('not.be.visible');
  }

}

export default LoginPage;
