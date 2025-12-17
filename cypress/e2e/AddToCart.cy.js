
import CartPage from '../Pages/CartPage';

describe('Demoblaze - Add Three Products and Remove One (UI + API) POM', () => {

  it('Logs in, adds three products, removes one, validates UI and API', () => {

    const username = 'Hammad341';
    const password = 'Hammad@341';

    const cartPage = new CartPage();

    // ---- API INTERCEPTS ----
    cy.intercept('POST', '**/login').as('loginAPI');
    cy.intercept('POST', '**/addtocart').as('addToCartAPI');
    cy.intercept('POST', '**/viewcart').as('viewCartAPI');
    cy.intercept('POST', '**/deleteitem').as('deleteItemAPI');

    cy.visit('https://www.demoblaze.com');

    // ---- LOGIN ----
    cartPage.login(username, password);
    cy.wait('@loginAPI').its('response.statusCode').should('eq', 200);

    // ---- ADD PRODUCTS ----
    const products = ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6'];
    products.forEach(product => {
      cartPage.addProduct(product);
      cy.wait('@addToCartAPI').its('response.statusCode').should('eq', 200);
    });

    // ---- GO TO CART ----
    cartPage.goToCart();
    cy.wait('@viewCartAPI').its('response.statusCode').should('eq', 200);

    // ---- REMOVE ONE PRODUCT ----
    cartPage.removeProduct('Samsung galaxy s6');
    cy.wait('@deleteItemAPI').its('response.statusCode').should('eq', 200);

    // ---- ASSERT REMAINING PRODUCTS ----
    cartPage.assertProductExists('Nokia lumia 1520');
    cartPage.assertProductExists('Nexus 6');

  });

});




