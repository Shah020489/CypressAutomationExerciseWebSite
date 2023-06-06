
describe('Run Hubsport page',()=>{
    it('login screen',()=>{
        cy.visit('https://app.hubspot.com/login')
        cy.title().should('eq','HubSpot Login')
        cy.get('#username').type('naveen@gmail.com')
        cy.get('#password').type('naveen@g123')
        cy.get('#loginBtn').click()
        //cy.get('.auth-box marketing-box').should('be.visible')
    })
})