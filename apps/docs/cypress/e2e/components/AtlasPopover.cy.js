describe("AtlasPopover", () => {
  it("shows a popover above", () => {
    cy.visit("/components/AtlasPopover");
    cy.contains("button", "Show Popover Above").click();
    cy.contains("header", "Popover Above Title");
  });
});
