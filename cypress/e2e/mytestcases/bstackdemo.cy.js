/// <reference types="cypress" />

describe("CSS selectors in Cypress Tutorial", () => {
    it("Login with Demo User", () => {
    cy.visit("https://bstackdemo.com/signin");
    
    cy.get("#react-select-2-input")
    .type("demouser", { force: true })
    .type("{enter}");
    
    cy.get("#react-select-3-input")
    .type("testingisfun99", { force: true })
    .type("{enter}");
    
    cy.get('#login-btn').click();
    });
    });