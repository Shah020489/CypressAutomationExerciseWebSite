describe('Check elemet get concept',()=>{
    it('elemet With in testing',()=>{
         cy.visit('https://www.amazon.in/')
        //  cy.contains('Platform').click();
        //  cy.url().should('include','/platform')
        //  cy.get('div.align-center.mb-lg h1:nth-of-type(2)')
        //  .should('be.visible')
        //  .and('contain','Our platform')
        //  .and('have.length',1)

        //cy.get('ul.footer-nav li').should('have.length',35)
        cy.get('').within(()=>{
            cy.get('').type('Apple Mac Book laptop')
        })

    })
})