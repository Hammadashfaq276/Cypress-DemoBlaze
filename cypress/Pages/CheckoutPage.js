 // cypress/pages/CheckoutPage.js
class CheckoutPage {

  login(username, password) {
    cy.get('#login2').click();
    cy.get('#logInModal').should('be.visible');

    cy.get('#loginusername').clear().type(username);
    cy.get('#loginpassword').clear().type(password);

    cy.contains('#logInModal button', 'Log in').click();

    cy.get('#nameofuser')
      .should('contain.text', `Welcome ${username}`);
  }

  goToCart() {
    cy.get('#cartur').click();
    cy.get('#tbodyid').should('exist');
  }

  placeOrder(name, country, city, card, month, year) {
    cy.contains('button', 'Place Order').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').clear().type(name);
    cy.get('#country').clear().type(country);
    cy.get('#city').clear().type(city);
    cy.get('#card').clear().type(card);
    cy.get('#month').clear().type(month);
    cy.get('#year').clear().type(year);

    cy.contains('#orderModal button', 'Purchase').click({ force: true });

    cy.contains('h2', 'Thank you for your purchase!')
      .should('be.visible');

    cy.contains('button', 'OK').click();

    // Click on cross icon
  cy.get("div[id='orderModal'] span[aria-hidden='true']")
    .click({ force: true });

  // Ensure modal is invisible (correct behaviour)
  cy.get('#orderModal')
    .should('not.be.visible');
  }

validateCartEmpty() {
  cy.reload(); // force UI refresh for demoblaze
  cy.get('#tbodyid tr').should('have.length', 0);
}

  validateEntriesAPI() {
    cy.request('GET', 'https://api.demoblaze.com/entries').then((res) => {
      expect(res.status).to.eq(200);
      // further API validations if needed
    });
  }

}

export default CheckoutPage;
