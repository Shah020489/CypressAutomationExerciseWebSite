/// <reference types="cypress" />

describe('Testing diff view port',()=>{
    before(()=>{
        console.log("Running my tests")
    })

    beforeEach(()=>{
        cy.visit('https://www.google.com')
    })

    it('Open in macbook -13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('Open in macbook -15',()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('Open in iphon-x',()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })

})