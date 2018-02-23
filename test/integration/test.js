describe("Testing functionality of site", () => {
  it("Testing functionality of site", () => {
    cy.visit("top");
    cy.title().should("include", "React Hacker News");
    cy.get("nav").should("have.text", "React Hacker NewsTop StoriesNew StoriesBest Stories");
    cy.get("nav").should('be.visible').and('have.css', 'background-color');
    cy.get("h1").should("include.text", "Top Stories");
    cy.get("footer").should("have.text", "© 2018 iNerdGirl");
  });
});