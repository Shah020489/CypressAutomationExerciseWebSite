describe("Launch my app",()=>{
    it('app testing',()=>{
        cy.visit('www.freshworks.com')
        cy.contains('Platform')
        cy.contains('Platform').click();
        cy.url().should('include','/platform');
    })
})