import componentData from "../../data/componentData";

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders", () => {
    cy.contains("h1", "Welcome to 🌐 Atlas");
  });

  componentData.forEach(({ name }) => {
    it(`navigate and renders ${name}`, () => {
      cy.contains("a", name).click();
      cy.url().should("include", name);
      cy.contains("h1", name);
    });
  });
});
