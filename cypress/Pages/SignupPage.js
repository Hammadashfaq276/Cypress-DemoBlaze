 // cypress/pages/SignupPage.js
class SignupPage {

  openSignupModal() {
    cy.get('#signin2').click();
    cy.get('#signInModal').should('be.visible');
  }

  enterUsername(username) {
    cy.get('#sign-username').clear().type(username);
  }

  enterPassword(password) {
    cy.get('#sign-password').clear().type(password);
  }

  clickSignup() {
    cy.contains('button', 'Sign up').click();
  }

}

export default SignupPage;
