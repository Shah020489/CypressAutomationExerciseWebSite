describe('Writting test cases',()=>{
    it('Verify page title',()=>{
        cy.visit('https://ultimateqa.com');
        cy.url().should('include','qa');
        cy.title().should('eq','Homepage - Ultimate QA')
cy.wait(5000)
        //cy.get("div[class='et_pb_text_inner'] h1 span").should('be.visible')

        //Verify links are working
        // cy.get('a').each(($link) => {
        //     const href = $link.prop('href');
          
        //     cy.request(href).then((response) => {
        //       expect(response.status).to.equal(200);
        //     });
        // });




    })
})