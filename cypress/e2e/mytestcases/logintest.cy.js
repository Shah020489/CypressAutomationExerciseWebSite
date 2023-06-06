describe("Launch my app",()=>{
    it('app testing',()=>{
        cy.visit('https://classic.freecrm.com/')
        cy.title().should('have','Free CRM CRM Software for customer relationship management, sales and support.')
        cy.get('input[name="username"]').type('batchautomation');
        cy.get('input[type="password"]').type('Test@12345');
        cy.get('input[type="submit"]').click();
        cy.title().should('have','CRMPRO')


    })
})