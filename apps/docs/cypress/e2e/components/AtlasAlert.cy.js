describe("AtlasAlert", () => {
    beforeEach(() => {
    cy.visit("/components/AtlasAlert");
    });
    it("shows alert types", () => {
    cy.contains("div", "This is a default alert.")
    cy.contains("div", "This is an information alert.")
    cy.contains("div", "This is a success alert.")
    cy.contains("div", "This is a warning alert.")
    cy.contains("div", "This is a danger alert.")
    });
    it("shows a default alert with a button", () => {
        cy.contains("div", "This is the content of a default alert.")
        cy.contains("button", "Default")
    });
    it("shows an information alert with a title", () => {
    cy.contains("div", "This information alert has a title!")
    });
    it("shows a success alert with a title and button", () => {
        cy.contains("div", "This success alert has a title!")
        cy.contains("button", "Success")
        });
});