const USERNAME = "devtest";
const PASSWORD = "access2020";

describe("Authenticator:", function() {
    beforeEach(function() {
      cy.visit("/siteAdmin");
    });
 
    describe("Sign In:", () => {
      it("allows a user to signin", () => {
        cy.get("amplify-authenticator")
          .find(selectors.usernameInput, {
            includeShadowDom: true,
          })
          .type(USERNAME);

        cy.get("amplify-authenticator")
          .find(selectors.signInPasswordInput, {
            includeShadowDom: true,
          })
          .type(PASSWORD, { force: true });

        cy.get("amplify-authenticator")
          .find(selectors.signInSignInButton, {
            includeShadowDom: true,
          })
          .first()
          .find("button[type='submit']", { includeShadowDom: true })
          .click({ force: true });
        
        cy.wait(5000);
        cy.get("amplify-sign-out")
          .find(selectors.signOutButton, { includeShadowDom: true })
          .contains("Sign Out").click({ force: true });
      });
    });
});

export const selectors = {
  // Auth component classes
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]'
}