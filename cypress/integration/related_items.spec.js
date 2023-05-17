describe("related_items: Related items on archives page", () => {

    it("Related items section shows on the page", () => {
        cy.visit("http://localhost:3000/archive/pf59ds4d");
        cy.get(".related-items-wrapper");
    })

    it("Carousel populates when more than ten items in the item's subcollection", () => {
        cy.visit("http://localhost:3000/archive/pf59ds4d");
        cy.get(".slick-slide", { timeout: 5000 }).should("exist");
    })

    it("Carousel populates when less than 10 items in the item's subcollection, and more than 10 items in the parent's subcollections", () => {
        cy.visit("http://localhost:3000/archive/p0636w4x");
        cy.get(".slick-slide", { timeout: 5000 }).should("exist");
    });

    it("Carousel populates when less than 10 items in the item's subcollection, and less than 10 items in the parent's subcollections", () => {
        cy.visit("http://localhost:3000/archive/ft77nv3b");
        cy.get(".slick-slide", { timeout: 10000 }).should("exist");
    })

    it("Carousel populates when less than 10 items in the entire collection", () => {
        cy.visit("http://localhost:3000/archive/m58xyh90");
        cy.get(".slick-slide", { timeout: 10000 }).should("exist");
    });

})