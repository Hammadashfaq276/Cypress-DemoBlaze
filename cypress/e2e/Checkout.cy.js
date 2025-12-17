 /// <reference types="cypress" />
import CheckoutPage from '../Pages/CheckoutPage';

describe('Demoblaze - Checkout Flow (UI + API) POM', () => {

  it('Places an order successfully and validates cart via UI + API', () => {

    const username = 'Hammad341';
    const password = 'Hammad@341';

    const checkout = new CheckoutPage();

    cy.visit('https://www.demoblaze.com');

    // ---- LOGIN ----
    checkout.login(username, password);

    // ---- GO TO CART ----
    checkout.goToCart();

    // ---- PLACE ORDER ----
    checkout.placeOrder(
      'Hammad',
      'Pakistan',
      'Lahore',
      '4111111111111111',
      '12',
      '2026'
    );

    // ---- UI VALIDATION: CART EMPTY ----
    checkout.validateCartEmpty();

    // ---- OPTIONAL API VALIDATION ----
    checkout.validateEntriesAPI();

  });

});

