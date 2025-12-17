/// <reference types="cypress" />
import ContactPage from '../Pages/ContactPage';

describe('Demoblaze Contact Us - UI + API (POM)', () => {

  it('Submits Contact form successfully', () => {

    const contactPage = new ContactPage();

    const email = `test${Date.now()}@gmail.com`;
    const name = 'Hammad';
    const message = 'This is a UI & API contact test';

    // ---- INTERCEPT ENTRIES API ----
    cy.intercept('GET', 'https://api.demoblaze.com/entries').as('entriesAPI');

    cy.visit('https://www.demoblaze.com');

    // ---- OPEN CONTACT MODAL ----
    contactPage.openContactModal();

    // ---- FILL FORM ----
    contactPage.enterEmail(email);
    contactPage.enterName(name);
    contactPage.enterMessage(message);

    // ---- ALERT VALIDATION ----
    contactPage.validateAlert();

    // ---- SUBMIT FORM ----
    contactPage.submitForm();

    // ---- ENTRIES API VALIDATION ----
    cy.wait('@entriesAPI').then((res) => {
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.Items.length).to.be.greaterThan(0);
    });

  });

});



