describe("admin_searchpage_facet_sort_config: Displays and updates search page configurations", () => {
  before(() => {
    cy.signIn();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit("/siteAdmin");

    cy.get("#content-wrapper > div > div > ul")
      .find(":nth-child(5) > a")
      .contains("Search Page Config")
      .click();
    cy.url().should("include", "/siteAdmin");
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  describe("admin_searchpage_facet_sort_config: Displays search facet fields", () => {
    it("Displays search facets fields", () => {
      cy.get("input[value='view']")
        .parent()
        .click();
      cy.contains("Facet Field: category").should("be.visible");
      cy.contains("Label: Category").should("be.visible");
      cy.contains("Values:").should("be.visible");
      cy.contains("collection").should("be.visible");
      cy.contains("archive").should("be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Updates category facet's label and changes it back", () => {
    it("Updates search facet's label", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("input[name='category_label']")
        .first()
        .clear()
        .type("Object Type");
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Label: Object Type").should("be.visible");
    })

    it("Reverses update", () => {
      cy.get("input[value='edit']")
        .parent()
        .click();
      cy.get("input[name='category_label']")
        .first()
        .clear()
        .type("Category");
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Label: Category").should("be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Updates creator facet's value and changes it back", () => {
    it("Updates creator facet's value", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("input[name='creator_value_0']")
        .first()
        .clear()
        .type("Creator Updated");
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Creator Updated").should("be.visible");
    })

    it("Reverses update", () => {
      cy.get("input[value='edit']")
        .parent()
        .click();
      const input = "Pfeiffer, Alberta, 1899-1994";
      cy.get("input[name='creator_value_0']")
        .first()
        .clear()
        .type("Demo");
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Demo").should("be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Adds creator facet's value and removes it", () => {
    it("Adds creator facet's value", () => {
      cy.get("input[value='edit']").parent().click();
      cy.contains("Add Value")
        .first()
        .click();
      cy.get("input[name='creator_value_1']")
        .first()
        .clear()
        .type("Creator 1");
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Creator 1").should("be.visible");
    })

    it("Removes the added creator value", () => {
      cy.get("input[value='edit']")
        .parent()
        .click();
      cy.get("#creator_1_delete")
        .contains("X")
        .click();
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Creator 1").should("not.be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Adds a new facet field and removes it", () => {
    const input = "Alberta Pfeiffer Architectural Collection, 1929-1976 (Ms1988-017)";
    it("Adds a new search facet field", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("select").eq(0).select("collection");
      cy.contains("Add New Search Facet").click();
      cy.get("input[name='collection_label']")
        .first()
        .clear()
        .type("Collection Type");
      cy.get("#collection > fieldset > button")
        .contains("Add Value")
        .click();
      cy.get("input[name='collection_value_0']")
        .first()
        .clear()
        .type(input);
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Facet Field: collection").should("be.visible");
      cy.contains("Label: Collection Type").should("be.visible");
      cy.contains(input).should("be.visible");
    })

    it("Removes the newly added facet field", () => {
      cy.get("input[value='edit']")
        .parent()
        .click();
      cy.get("#content-wrapper > div > div > div > form > section:nth-child(2)")
        .contains("Delete Facet Field")
        .click();
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Facet Field: collection").should("not.be.visible");
      cy.contains("Label: Collection Type").should("not.be.visible");
      cy.contains(input).should("not.be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Adds Subject facet field and removes it", () => {
    it("Adds Subject search facet field", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("select").eq(0).select("subject");
      cy.contains("Add New Search Facet").click();
      cy.get("#subject > fieldset > button", {timeout: 2000})
        .click();
      cy.get("#subject fieldset ul li#subject_li_0 input[name='subject_value_0']", {timeout: 2000})
        .first()
        .clear()
        .type("Art")
      cy.contains("Update Facet and Sort Fields").click();
      cy.wait(2000)
      cy.contains("Facet Field: subject").should("be.visible");
      cy.contains("Art").should("be.visible");
    })

    it("Removes the newly added facet field", () => {
      cy.get("input[value='edit']")
        .parent()
        .click();
      cy.get("#subject > div > a#subject_delete_link")
        .contains("Delete Facet Field")
        .click();
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Facet Field: subject").should("not.be.visible");
      cy.contains("Label: Subject Type").should("not.be.visible");
    });
  });

  describe("admin_searchpage_facet_sort_config: Adds a new sort field and removes it", () => {
    it("Adds a new sort field", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("select").eq(1).select("identifier (asc)");
      cy.contains("Add New Sort Field").click();
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Sort Field: identifier").should("be.visible");
    })

    it("Removes the newly added sort field", () => {
      cy.get("input[value='edit']").parent().click();
      cy.get("#content-wrapper > div > div > div > form > ul > section:nth-child(4)")
        .contains("Delete Sort Field")
        .click();
      cy.contains("Update Facet and Sort Fields").click();
      cy.contains("Sort Field: identifier").should("not.be.visible");
    });
  });
});