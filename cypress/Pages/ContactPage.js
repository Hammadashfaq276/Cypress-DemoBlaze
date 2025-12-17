 // cypress/pages/ContactPage.js
class ContactPage {

  openContactModal() {
    cy.get('a[data-target="#exampleModal"]').click();
    cy.get('#exampleModal').should('be.visible');
  }

  enterEmail(email) {
    cy.get('#recipient-email').should('be.visible').clear().type(email);
  }

  enterName(name) {
    cy.get('#recipient-name').should('be.visible').clear().type(name);
  }

  enterMessage(message) {
    cy.get('#message-text').should('be.visible').clear().type(message);
  }

  submitForm() {
    cy.contains('#exampleModal button', 'Send message').click();
  }

  validateAlert() {
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Thanks for the message!!');
    });
  }

}

module.exports = ContactPage;
