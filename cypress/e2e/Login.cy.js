
import LoginPage from '../Pages/LoginPage';

describe('Demoblaze Login & Logout - UI + API (POM)', () => {

  it('Logs in, validates via API, validates UI, then logs out', () => {

    const loginPage = new LoginPage();
    const username = 'Hammad341';
    const password = 'Hammad@341';

    // ---- INTERCEPT APIs ----
    cy.intercept('POST', '**/login').as('loginAPI');
    cy.intercept('POST', '**/check').as('checkAPI');
    cy.intercept('GET', '**/entries').as('entriesAPI');

    cy.visit('https://www.demoblaze.com');

    // ---- LOGIN UI ----
    loginPage.openLoginModal();
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);

    // Fail fast if wrong password
    cy.on('window:alert', (text) => {
      expect(text).not.to.include('Wrong password');
    });

    loginPage.clickLogin();

    // ---- LOGIN API VALIDATION ----
    cy.wait('@loginAPI').its('response.statusCode').should('eq', 200);

    // ---- CHECK API (Important fix) ----
    cy.wait('@checkAPI').then((res) => {
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.Item.username).to.eq(username);
      expect(res.response.body.Item.token).to.exist;
    });

    // ---- UI VALIDATION (AFTER API CONFIRMATION) ----
    loginPage.validateWelcome(username);

    // ---- LOGOUT ----
    loginPage.logout();

    // ---- LOGOUT UI VALIDATION ----
    loginPage.validateLogoutUI();

    // ---- ENTRIES API AFTER LOGOUT ----
    cy.wait('@entriesAPI').then((res) => {
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.Items.length).to.be.greaterThan(0);
    });

  });

});


