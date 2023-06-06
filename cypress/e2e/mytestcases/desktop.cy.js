const { Context } = require("mocha")

describe("Nav menu",()=>{
    Context('720 resolution',()=>{
        beforeEach(()=>{
            cy.viewport(1280,720)
        })
        it('display full header',()=>{
            cy.get('nav .desktop-menu').should('be.visibble');
            cy.get('nav .mobile-menu').should('be.visibble');
        })
    })
    context('iphone-5 resolution', () => {
        beforeEach(() => {
          // run these tests as if in a mobile browser
          // and ensure our responsive UI is correct
          cy.viewport('iphone-5')
        })
    
        it('displays mobile menu on click', () => {
          cy.get('nav .desktop-menu').should('not.be.visible')
          cy.get('nav .mobile-menu')
            .should('be.visible')
            .find('i.hamburger')
            .click()
    
          cy.get('ul.slideout-menu').should('be.visible')
        })
      })

})