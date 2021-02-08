const USERNAME = "devtest";
const PASSWORD = Cypress.env("password");

describe("Update collection highlights fields and revert", function () {
    beforeEach(() => {
        cy.visit("/siteAdmin");
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

        cy.get("#content-wrapper > div > div > ul")
            .find(":nth-child(4) > a")
            .contains("Homepage Config")
            .click();
        cy.url({ timeout: 2000 }).should("include", "/siteAdmin");
    });

    it("Updates first item title", () => {
        cy.get("input[value='edit']")
            .parent()
            .click();
        cy.get("#highlight0_title")
            .clear()
            .type("Sketches");
        cy.contains("Update Config").click();
        cy.contains("Title: Sketches", { timeout: 2000 }).should("be.visible");
    });

    it("Reverses update", () => {
        cy.get("input[value='edit']")
            .parent()
            .click();
        cy.get("#highlight0_title")
          .clear()
          .type("Travel sketches by IAWA architects");
        cy.contains("Update Config").click();
        cy.contains("Title: Travel sketches by IAWA architects", {
          timeout: 2000,
        }).should("be.visible");
    });
   
    it("Adds new item with image", () => {
        cy.get("input[value='edit']")
            .parent()
            .click();
        const imgPath = "sitecontent/highlight4.jpg";
        cy.get("button[aria-label='Add a collection highlight']", { timeout: 2000 }).click();
        cy.get(
            "#collectionHighlight3_form > section > div.fileUploadField > input[type=file]", { timeout: 2000 }
        )
            .eq(0)
            .attachFile(imgPath)
            .trigger("change", { force: true });
        cy.get(
          "#collectionHighlight3_form > section > div.fileUploadField > button.uploadButton"
        ).click({ force: true });
        cy.get("#highlight3_title", { timeout: 2000 }).type("New Highlight");
        cy.get("#highlight3_link", { timeout: 2000 }).type(
          "/search?q=building&view=gallery"
        );
        cy.get("#highlight3_count").type("5");
        cy.contains("Update Config").click();
        cy.contains("Collection Highlight 4", { timeout: 2000 }).should("be.visible");
        cy.contains(
          "Image Source: highlights/highlight4.jpg"
        ).should("be.visible");
        cy.contains("Title: New Highlight").should("be.visible");
        cy.contains("Link: /search?q=building&view=gallery").should(
          "be.visible"
        );
    })

    it("Removes new item", () => {
        cy.get("input[value='edit']")
            .parent()
            .click();
        cy.get("#collectionHighlight3_form")
          .contains("Remove highlight", {
            timeout: 2000,
          })
          .click();
        cy.contains("Update Config").click();
        cy.contains("Collection Highlight 4", { timeout: 2000 }).should("not.exist");
    })

    afterEach("User signout:", () => {
        cy.get("amplify-sign-out")
            .find(selectors.signOutButton, { includeShadowDom: true })
            .contains("Sign Out")
            .click({ force: true });
    })
});    

export const selectors = {
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  signOutButton: '[data-test="sign-out-button"]',
};
