describe("AtlasBanner", () => {
    beforeEach(() => {
        cy.visit("/components/AtlasBanner")
    })
    it("shows banner types", () => {
        cy.contains("div", "This is an information banner.")
        cy.contains("div", "This is a warning banner.")
        cy.contains("div", "This is a destructive banner.")
        cy.contains("div", "This is a success banner.")
    })
    it("shows banner with button", () => {
        cy.contains("div", "This banner has a button.")
        cy.contains("button", "Label").click()
    })
    it("shows a dismissable banner", () => {
        cy.contains("div", "This banner can be dismissed.")
        cy.get('[aria-label="close"]').click()
        cy.contains("This banner can be dismissed.").should('not.exist')
    })
    it("shows dismissable banner with button", () => {
        cy.contains("button", "Show Banner").click()
        cy.contains("div", "This is a title.")
    })
})