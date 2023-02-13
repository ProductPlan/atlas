describe("AtlasPopover", () => {
  beforeEach(() => {
    cy.visit("/components/AtlasPopover");
  });
  it("shows a popover above", () => {
    cy.contains("button", "Show Popover Above").click();
    cy.contains("header", "Popover Above Title");
  });
  it("shows a popover below", () => {
    cy.contains("button", "Show Popover Below").click();
    cy.contains("header", "Popover Below Title");
  });
  it("shows a popover left", () => {
    cy.contains("button", "Show Popover Left").click();
    cy.contains("header", "Popover Left Title");
  });
  it("shows a popover right", () => {
    cy.contains("button", "Show Popover Right").click();
    cy.contains("header", "Popover Right Title");
  });
  it("shows a popover simple", () => {
    cy.contains("button", "Show Popover Simple").click();
    cy.contains("div", "I am a simple popover.");
  });
});
