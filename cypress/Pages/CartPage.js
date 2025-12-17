 // cypress/pages/CartPage.js
class CartPage {

  login(username, password) {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');

    cy.get('#loginusername').clear().type(username);
    cy.get('#loginpassword').clear().type(password);

    cy.contains('button', 'Log in').click();

    // UI Validation
    cy.get('#nameofuser')
      .should('contain.text', `Welcome ${username}`);
  }

  addProduct(productName) {
    cy.contains('.card-title a', productName).click();

    cy.on('window:alert', (text) => {
      expect(text).to.include('Product added');
    });

    cy.contains('Add to cart').click();

    // Back to home
    cy.get('.navbar-brand').click();
  }

  goToCart() {
    cy.get('#cartur').click();
    cy.get('#tbodyid').should('exist');
  }

  removeProduct(productName) {
    cy.get('#tbodyid')
      .contains('td', productName)
      .parent('tr')
      .contains('Delete')
      .click();

    cy.get('#tbodyid')
      .contains('td', productName)
      .should('not.exist');
  }

  assertProductExists(productName) {
    cy.get('#tbodyid').contains('td', productName).should('exist');
  }

}

export default CartPage;
