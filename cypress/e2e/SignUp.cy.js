
import SignupPage from '../Pages/SignupPage';

describe('Demoblaze - Signup with Date.now() username and 200 status validation', () => {
  it('Uses timestamp in username, triggers API, and validates status 200', () => {

    const signupPage = new SignupPage();

    const timestamp = Date.now();
    const username = 'user_' + timestamp;   // unique username
    const password = 'Hammad';             // plain password
    const encodedPassword = btoa(password); // base64

    cy.visit('https://www.demoblaze.com');

    // Intercept API request
    cy.intercept('POST', 'https://api.demoblaze.com/signup').as('signupAPI');

    // Open signup modal
    signupPage.openSignupModal();

    // Type username/password
    cy.wait(500); // slight wait for modal animation
    signupPage.enterUsername(username);
    signupPage.enterPassword(password);

    // Click Sign up → triggers API call
    signupPage.clickSignup();

    // Wait for API call and validate status 200
    cy.wait('@signupAPI').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.request.body).to.deep.equal({
        username: username,
        password: encodedPassword
      });
    });

  });
});





